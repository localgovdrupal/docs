# Single Sign-On

## Introduction

While Drupal's user management system is extensive, most councils have existing ways of authenticating their staff. Integrating this to your website makes it much easier to manage access to your site. It ensures that users can log in with the same username and password that they use for all other tasks, but also ensures that your IT department's best practices are being followed, especially around multi-factor authentication.

There are two key concepts to be aware of when integrating with external user databases, authentication and authorisation. Authentication is the process by which the site determines if somebody is a user, and who they are. Authorisation is the process of determining what access level a particular user has, once you've authenticated them.

## Authentication

Most single sign-on providers support an industry standard protocol called OpenID Connect, or OIDC. There is a Drupal module to integrate OIDC which can be installed using `composer require 'drupal/openid_connect:^2.0@beta'`. This also installs the `drupal/externalauth` module, which provides general functionality for allowing external sources of user information.

These modules add support for Facebook, Github, Google, LinkedIn and Okta sign-on, as well as a generic provider that works with many sources.

### Configuration

The openid_connect module adds a new OpenID connect option to the administrator toolbar, under Configuration > People > OpenID Connect. This panel has two sections.

The first is the currently active clients, to begin with there will be none present, however options to add new clients are shown above. The second pane is called settings, and controls general configuration across all identity providers.

| Setting | Purpose | Recommendation |
|--|--|--|
| Save user claims on every login | If enabled, each time a user logs in their name, email address and any other metadata is updated in Drupal. Otherwise, this only happens the first time they log in. | Enable |
| Override registration settings | If enabled, users logging in for the first time will be created an account. If disabled, then the settings in Account Settings apply | Enable |
| Logout from identity provider | If this is enabled, then the log-out button in Drupal also logs the user out of the identity provider. Leaving this disabled allows log-out of Drupal without affecting other systems. | Disable |
| Buttons display in user login form | Determines how SSO interacts with the normal login form. Choosing replace means only SSO options are displayed by default. | Replace | 
| Redirects | Chooses the default page to redirect users to on login or logout | `/` |
| User claims mapping | Determines how information from the identity provider is stored in Drupal | Leave defaults |
| User role mapping | Links groups in Drupal with the identity provider | See [Authorisation](#authorisation) |
| Advanced > Automatically connect | If enabled, users can be created by administrators and linked by email address | Enabled, if using a trusted identity provider |


### Microsoft Azure Active Directory

The most likely provider you'll want to integrate is Microsoft Azure Active Directory. This allows sign-on through Microsoft accounts, which are widely used in councils.

An external module is required, install it using `composer require 'drupal/openid_connect_windows_aad:^2.0@beta'` and enable as usual. This adds a new client type as well as the `key` module for secure secret management.

Before we can add a client we need to store its key securely, under *Configuration > System > Keys* choose to add a key. Give that key a name and description, and confirm that it's an Authentication key. The provider must be set according to where the key is stored, 'configuration' allows a key to be entered directly whereas file and environment allow for more secure management but require customisation of the hosting environment. You won't have this key available yet, so enter `tbc` as a placeholder.

Once you've added a key, return to *Configuration > People > OpenID Connect* and add a *Windows Azure AD* client. The name that you enter will be shown to users in the login form and will form part of the URL that needs to be set up in Azure AD, so pick a relevant name. The name of your council is a good example.

The only other field required is Client ID, however this won't be available yet, so enter `tbc`. Also select the key you created. There are three endpoint URLs needed, these can be found by visiting https://login.microsoftonline.com/yourcouncil.gov.uk/.well-known/openid-configuration (make sure to change the domain to match your organisation). Once you've entered these, you can press save.

Now that is created, you can click edit again and copy the Front-channel logout URL and Redirect URL from the page. You will then need to contact the administrators of your AD and provide them with the [setup documentation](https://www.drupal.org/docs/contributed-modules/openid-connect-microsoft-azure-ad/settings-in-azure-portal). The URLs you copied are needed in those instructions. They will also need to pick a validity for a client secret, you should agree this with them, as when it expires you'll need to generate and enter a replacement.

When they're finished, they'll have created a client secret to give to you. You'll also need to ask for the [https://learn.microsoft.com/en-us/azure/healthcare-apis/register-application#application-id-client-id](client ID). The system also creates a secret id, but you don't need this, so you can ignore if it's provided to you.

Once you have these values you can enter them in the key and openid connect settings. Before you test logging in, rebuild the cache using `drush cr`.

### Azure B2C

Azure B2C works similarly to Azure AD, but it is designed for facilitating wider user management (such as citizen login). Configuration of B2C is too large a topic for this guide, however if you are using B2C you can use the B2C login module to connect more easily.

This can be installed using `composer require 'drupal/openid_connect_azure_b2c:^1.0'` and enabled as usual. This adds an *Azure B2C* connection type. A client id and client secret are required, with the same details as Azure AD, however rather than providing endpoint URLs you instead provide the name of the B2C tenant and the flow that the login button will invoke.

When setting up the application in B2C, you should enable the email claim and the upsteam IdP token claims, to ensure that a user email address can be determined.

## Authorisation

We recommend using the default user management process to manage authorisation, as it allows for more flexibility than integrating groups through the identity provider. However, it's useful to have the ability to create new administrative users if required.

### Active Directory

To allow setting up new administrative users in Active Directory, the application created for SSO needs a groups claim adding. In the Application Registration, go to Tokens and add a groups claim. The exact configuration of this will be organisation-specific, depending on how the groups have been configured. You will also need the Object ID of the group being used to control administrative access.

Once you have this id and the claim is in place, return to edit the connect client and enable mapping groups to roles. Choose a manual mapping and enter the details, such as `User manager|7470b278-9c61-4d97-9254-17654c77474b`. This will now ensure anyone who is a member of that group in Active Directory has user management rights, and can therefore assign roles in an emergency. Similarly, you may wish to consider creating a group for the *Emergency publisher* role.