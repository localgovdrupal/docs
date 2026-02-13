# Passwordless Login

This guide provides step-by-step instructions for implementing passwordless login with domain-restricted auto-user-creation in a Drupal site.

## Overview

This implementation creates a secure, password-free login system where:
- Users enter their email address to receive a single-use login link (24-hour expiration)
- Only users with whitelisted email domains can register
- User accounts are created automatically on first login attempt
- No password is ever required

### Architecture Components

1. **Passwordless Module (contrib)** - Handles email-based login with single-use links
2. **Domain Registration Module (contrib)** - Restricts registration to whitelisted email domains
3. **Custom Integration Module** - Ties everything together with auto-user-creation logic

## Prerequisites

- Composer access to install modules
- Drush CLI tool installed
- Admin access to Drupal site
- Working email configuration (required for sending login links)

## Step 1: Install Required Contrib Modules

Use Composer to install the required modules:

```bash
composer require drupal/passwordless
composer require drupal/domain_registration
composer require drupal/email_registration
```

**What these modules provide:**
- `passwordless`: Core passwordless authentication functionality
- `domain_registration`: Email domain whitelist/blacklist validation
- `email_registration`: Allows email addresses as usernames

## Step 2: Enable Modules via Drush

Enable the modules in the correct order:

```bash
drush en email_registration -y
drush en domain_registration -y
drush en passwordless -y
```

**Why this order matters:**
- `email_registration` must be enabled first to configure username handling
- `domain_registration` depends on user registration forms
- `passwordless` needs the user system fully configured

## Step 3: Create Custom Integration Module

Create the custom module directory structure:

```bash
mkdir -p web/modules/custom/mycouncil_passwordless
```

### 3.1: Create Module Info File

Create `web/modules/custom/mycouncil_passwordless/mycouncil_passwordless.info.yml`:

```yaml
name: 'MyCouncil Passwordless'
description: 'Supporting module for passwordless user flow with auto-user-creation.'
type: module
core_version_requirement: ^9 || ^10
dependencies:
  - drupal:user
  - passwordless:passwordless
  - domain_registration:domain_registration
```

### 3.2: Create Module Code File

Create `web/modules/custom/mycouncil_passwordless/mycouncil_passwordless.module`:

```php
<?php

use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * Implements hook_mail_alter().
 */
function mycouncil_passwordless_mail_alter(&$message) {
  // Disable welcome email for new users (no approval required)
  if ($message['id'] == 'user_register_no_approval_required') {
    $message['send'] = FALSE;
  }

  // Remove destination parameter from passwordless login links
  if (strpos($message['id'], 'user_password_reset') === 0) {
    // Process tokens with custom callback to remove destination
    $variables = ['user' => $message['params']['account']];
    $token_options = [
      'langcode' => $message['langcode'],
      'callback' => 'mycouncil_passwordless_tokens_no_destination',
      'clear' => TRUE,
    ];

    $mail_config = \Drupal::config('user.mail');
    $message['body'] = [];
    $message['body'][] = \Drupal::token()->replace(
      $mail_config->get('password_reset.body'),
      $variables,
      $token_options
    );
  }
}

/**
 * Custom token callback to generate login URLs without destination parameter.
 */
function mycouncil_passwordless_tokens_no_destination(array &$replacements, array $data, array $options) {
  user_mail_tokens($replacements, $data, $options);
  if (isset($data['user'])) {
    // Generate URL without destination parameter
    $url = user_pass_reset_url($data['user'], $options);
    $replacements['[user:one-time-login-url]'] = $url;
  }
}

/**
 * Implements hook_form_alter().
 */
function mycouncil_passwordless_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {
  if ($form_id == 'user_pass_reset') {
    $form['#submit'][] = 'mycouncil_passwordless_user_password_reset_form_submit';
  }

  // Add custom validation for passwordless login
  if ($form_id == 'passwordless_login') {
    array_unshift($form['#validate'], 'mycouncil_passwordless_auto_create_user');

    // Remove "Create new account" link if it exists
    if (isset($form['more-links']['register_button'])) {
      unset($form['more-links']['register_button']);
    }
    // Store destination URL if it's set
    if ($destination = \Drupal::request()->query->get('destination')) {
      \Drupal::request()->getSession()->set('passwordless_destination', $destination);
    }
  }
}

/**
 * Custom submit handler for password reset form.
 */
function mycouncil_passwordless_user_password_reset_form_submit(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  // Redirect to homepage after successful password reset
  $form_state->setRedirect('<front>');
}

/**
 * Custom validation handler to auto-create users.
 */
function mycouncil_passwordless_auto_create_user(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  $email = $form_state->getValue('name');

  if (!$email) {
    return;
  }

  // Validate email format
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $form_state->setErrorByName('name', 'Please enter a valid email address.');
    return;
  }

  // Additional security: check for potential injection attempts
  if (preg_match('/[<>"\'\\\\\x00-\x1f\x7f]/', $email)) {
    $form_state->setErrorByName('name', 'Invalid characters in email address.');
    return;
  }

  // Ignore validation if mail already has an error.
  $errors = $form_state->getErrors();
  if (!empty($errors['name'])) {
    return;
  }

  $mail = explode('@', $email);

  $domains = \Drupal::service('domain_registration.pattern')->getPatterns();

  // Only attempt to validate if we have a list of domains.
  if ($domains) {
    // Determine if we have matches.
    $match = count(array_filter($domains,
      function ($domain) use (&$mail) {
        return domain_registration_wildcard_match($domain, $mail[1]);
      }
    ));

    switch (\Drupal::config('domain_registration.settings')->get('method')) {
      // Allow only domains listed to register.
      case DOMAIN_REGISTRATION_ALLOW:
        if (!$match) {
          $form_state->setErrorByName('name', \Drupal::config('domain_registration.settings')->get('message'));
          return;
        }
        break;

      // Prevent domains listed from registering.
      case DOMAIN_REGISTRATION_DENY:
        if ($match) {
          $form_state->setErrorByName('name', \Drupal::config('domain_registration.settings')->get('message'));
          return;
        }
        break;
    }
  }

  // Check if user already exists
  $existing_users = \Drupal::entityTypeManager()
    ->getStorage('user')
    ->loadByProperties(['mail' => $email]);

  if (!empty($existing_users)) {
    return; // User exists, let normal validation proceed
  }

  // Create user account
  try {
    // Sanitize email for safe storage
    $sanitized_email = trim(strtolower($email));

    $user = \Drupal\user\Entity\User::create([
      'name' => $sanitized_email,
      'mail' => $sanitized_email,
      'status' => 1,
      'access' => \Drupal::time()->getRequestTime(),
    ]);
    $user->save();

    // Set the created user in form state so passwordless can proceed
    $form_state->setValueForElement(['#parents' => ['account']], $user);

  } catch (\Exception $e) {
    $form_state->setErrorByName('name', 'Unable to create account. Please try again.');
  }
}

/**
 * Implements hook_user_login().
 */
function mycouncil_passwordless_user_login($account) {
  // Store user info in session for redirect check
  $roles = $account->getRoles();

  // If user only has the 'authenticated' role (no additional roles)
  if (count($roles) == 1 && in_array('authenticated', $roles)) {

    // If there's a destination URL in the session, use that and redirect early
    $session = \Drupal::request()->getSession();
    if ($session->has('passwordless_destination')) {
      $destination = $session->get('passwordless_destination');
      $session->remove('passwordless_destination');
      $response = new RedirectResponse($destination);
      $response->send();
      exit;
    }

    $_SESSION['mycouncil_redirect_to_front'] = TRUE;
  }
}
```

### 3.3: Enable Custom Module

```bash
drush en mycouncil_passwordless -y
```

**Critical:** The module must be enabled with a specific weight to ensure its hooks run in the correct order. This is handled in Step 5.

## Step 4: Configure Domain Registration

Navigate to: **Configuration → People → Domain registration**

Configure the following settings:

- **Registration restriction method:** Select "Only allow domains listed below"
- **Domains:** Enter allowed domains (one per line):
  ```
  yourdomain.gov.uk
  anotherallowed.org.uk
  company.com
  ```
- **Error message:** Enter custom message for rejected domains (e.g., "You are not allowed to register for this site.")

Click **Save configuration**

**Important notes:**
- Enter each domain on a separate line in the Domains field
- The module supports wildcards (e.g., `*.company.com` matches all subdomains)
- Configuring via UI ensures correct formatting of the domain pattern

## Step 5: Set Module Weight

The custom module must load after core modules but early enough to intercept forms. Set weight to 100:

```bash
drush php:eval "\$config = \Drupal::configFactory()->getEditable('core.extension'); \$modules = \$config->get('module'); \$modules['mycouncil_passwordless'] = 100; ksort(\$modules); \$config->set('module', \$modules)->save();"
drush cr
```

**Why weight 100?** This ensures the module's hooks run after core user module (0) and passwordless module (0) but before other high-weight modules.

**Verify the weight:**

```bash
drush config:get core.extension module.mycouncil_passwordless
```

Expected output: `100`

## Step 6: Configure Passwordless Module

Navigate to: **Configuration → People → Passwordless**

- **Include stylesheet on login page:** Checked
- **Show Passwordless help:** Checked
- **Help link text:** `What? No password?`
- **Help text:** Enter explanatory text about passwordless login (see example below)
- **Enable confirmation page:** Unchecked

**Example help text:**
```
This website provides passwordless login, an advanced login system that allows
people to register and sign on securely with no need to remember a new password—
or, worse, to use an insecure one.

Your account is kept safe by Drupal's security mechanisms, and the only password
you need to remember is the one to your e-mail account. Every time you need to
log in, just enter your e-mail address in the form, then click "Log in." Within
seconds, you'll receive a link that will allow you to log in directly. This link
is single-use (meaning that no one else can use it after you), and expires in
twenty-four hours.

If you use this website from your own computer, chances are you won't need to
receive this link more than once, unless you log out manually or clear your
browser's cookies. If you log in through a shared computer, always remember to
log out when you're finished. The next time you need to log in, just request
a new link.
```

Click **Save configuration**

## Step 7: Customize Email Templates

Navigate to: **Configuration → People → Account settings → Emails tab**

Find the **"Password recovery"** section (used by passwordless module):

- **Subject:** `Your login link for [site:name]`
- **Body:**
  ```
  [user:display-name],

  You requested a secure login link for your [site:name] account.

  Click the link below to sign in:
  [user:one-time-login-url]

  This secure link will log you in automatically and expires after 24 hours
  for your security.
  ```

Click **Save configuration**

## Step 8: Configure User Registration Settings

Navigate to: **Configuration → People → Account settings → Registration and cancellation tab**

- **Who can register accounts?** Select "Visitors"
- **Require email verification when a visitor creates an account:** Unchecked (passwordless handles this)

Click **Save configuration**

## Step 9: Clear All Caches

```bash
drush cr
```

## Step 10: Testing the Implementation

### 10.1: Test Auto-User-Creation

1. Log out of the Drupal site
2. Navigate to `/user/login`
3. Enter an email address from an **allowed domain** (e.g., `test@yourdomain.gov.uk`)
4. Click **Log in**
5. Check the email inbox for the login link
6. Click the login link
7. Verify you're logged in and redirected to the homepage

**Expected behavior:**
- User account created automatically on first login attempt
- No welcome email sent
- Login link received within seconds
- Link expires in 24 hours
- Single-use link (can't be reused)

### 10.2: Test Domain Restriction

1. Log out
2. Try to log in with email from **disallowed domain** (e.g., `test@gmail.com`)
3. Verify error message: "You are not allowed to register for this site."

**Expected behavior:**
- Domain validation prevents account creation
- Custom error message displayed
- No email sent

### 10.3: Test Existing User Login

1. Log out
2. Try to log in with email of **existing user**
3. Verify login link is sent
4. Click link and verify login works

**Expected behavior:**
- No duplicate user created
- Normal passwordless flow for existing users
- Existing user permissions preserved

### 10.4: Test Login Link Behavior

**Link expiration test:**
1. Request a login link
2. Wait 24+ hours
3. Try to use the link
4. Verify it's expired

**Single-use test:**
1. Request a login link
2. Use it to log in
3. Log out
4. Try to use the same link again
5. Verify it no longer works

### 10.5: Test User Role Detection

**New auto-created users:**
1. Create new user via passwordless login
2. Verify redirect to homepage (only 'authenticated' role)

**Users with additional roles:**
1. Assign additional role to user (via admin UI)
2. Log in as that user
3. Verify normal login behavior (no forced homepage redirect)

## Security Considerations

1. **Email validation:** Format validation + injection prevention
2. **Domain restriction:** Whitelist-based access control
3. **Single-use links:** Links invalidated after use
4. **Time-limited links:** 24-hour expiration
5. **Sanitized input:** Email addresses trimmed and lowercased
6. **No welcome emails:** Prevents information disclosure

## Architecture Notes

### Why Three Layers?

1. **Passwordless module** provides core functionality but doesn't support domain restriction or auto-creation
2. **Domain registration module** validates domains but doesn't integrate with passwordless
3. **Custom module** bridges the gap, implementing auto-creation with domain validation

### Auto-Creation in Validation Phase

User creation happens in `hook_form_alter()` validation callback (not submit) because:
- Passwordless module expects user to exist during submit phase
- Domain validation must complete before user creation
- Form errors must prevent submission (validation phase handles this)

### Redirect Logic

Users with only 'authenticated' role are redirected to homepage because:
- Newly auto-created users have no assigned roles except 'authenticated'
- This is the signal that it's a first login
- Users granted additional roles bypass this redirect

## Maintenance

### Adding Domains to Whitelist

Navigate to: **Configuration → People → Domain registration**

Add new domains to the **Domains** field (one per line), then click **Save configuration**.

After saving, clear the cache:

```bash
drush cr
```

### Changing Email Templates

Navigate to: **Configuration → People → Account settings → Emails tab**

Edit the **Password recovery** email template as needed, then click **Save configuration**.

After saving, clear the cache:

```bash
drush cr
```

## FAQ

**Q: What if I want to require approval for new users?**
A: Modify the custom module's `mycouncil_passwordless_auto_create_user()` function in `mycouncil_passwordless.module` to set `'status' => 0` (blocked). This requires admin approval before login.

**Q: How do I remove passwordless and restore password login?**
A: Uninstall modules in reverse order:
```bash
drush pm:uninstall mycouncil_passwordless passwordless domain_registration email_registration -y
drush config:set user.settings register admin_only -y
```

## References

- [Passwordless Module](https://www.drupal.org/project/passwordless)
- [Domain Registration Module](https://www.drupal.org/project/domain_registration)
- [Email Registration Module](https://www.drupal.org/project/email_registration)
- [Drupal Form API](https://www.drupal.org/docs/drupal-apis/form-api)
- [Drupal Hook System](https://www.drupal.org/docs/drupal-apis/hook-system)