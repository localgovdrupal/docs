# Best Practice guidance when installing and configuring LocalGov Drupal

## Introduction

Following a recent pen testing workstream on the LocalGov Drupal (LGD)
distribution, this document provides detailed guidance on security best
practices to be considered during the installation and configuration of
LocalGov Drupal. It aims to provide comprehensive and practical advice
to ensure that the LocalGov Drupal installation is secure and adequately
protected against potential threats.

The security of a LocalGov Drupal installation is paramount, and it is
essential to follow the best practices outlined in this document to
ensure that the installation is adequately secured. Failure to implement
these best practices could expose the installation to security risks and
potential data breaches.

It is important to note that security threats are continually evolving,
and as such, it is critical to keep abreast of the latest security
trends and update the security practices accordingly. This document will
provide a starting point for securing the LocalGov Drupal installation,
but it should not be considered a complete solution.

By following the security best practices outlined in this document,
LocalGov Drupal users can significantly reduce the risk of security
incidents and ensure that their installation is adequately protected
against potential threats. It is essential to review and implement these
security practices regularly to ensure that the installation remains
secure and up-to-date.

## Findings and Guidance

This document is structured as a list of the findings from the pen test,
with an explanation of each finding and a best practice recommendation to
mitigate the associated threat.

### 1. Issue reported to Drupal security team

#### Explanation

This issue was reported privately to the Drupal security team and is
being handled by them.

#### Best practice recommendation

Apply security updates in a timely manner as they become available.

### 2. Malicious File Upload

#### Explanation

Malicious file upload can allow attackers to upload executable or
malicious code. If a malicious actor can upload malware, the malicious
actor could run that malicious code on the server itself or use it to
perform client-side attacks against other web application users or
Administrators that might access the file.

#### Best practice recommendation

LocalGov Drupal, like Drupal core, restricts file uploads to a defined
set of file types, which does not include executable files. This makes
it difficult in practice for malware to spread via the file upload
functionality, as the user would have to take an additional step to make
the malicious file executable, and would have to bypass warnings from
the operating system in order to do so.

However, this is a possibility, and there is also the possibility of a
vulnerability existing in some software that processes a normally
non-executable file that would allow code execution. If these risks
require treatment in your threat model, it is possible to add antivirus
scanning using the [*ClamAV* module](https://www.drupal.org/project/clamav).
Note that the module won't do anything by itself - you also need to install
the ClamAV antivirus software on your server. The module can then be
configured to use that installed antivirus software to scan files that are
uploaded by your users.

### 3. Missing Anti-Scripting Controls

#### Explanation

Web applications process numerous calls from multiple clients, but there
is a limit to the number that they can handle within a certain time. As
the number of concurrent calls increases, the web application may reach
that limit, which could impact an organisation's service uptime.

#### Best practice recommendation

Drupal core has some basic rate limiting functionality in the form of
the *flood* service. However, this is only used in a small set of
special cases by default.

The [*Rate Limits* module](https://www.drupal.org/project/rate_limits)
builds on top of this core functionality by allowing you to limit the
rate at which a user or an IP address can access the site.

Another approach to anti-scripting is to use a CAPTCHA (a test that
attempts to distinguish between human visitors and automated processes).
The [*CAPTCHA* module](https://www.drupal.org/project/captcha) allows
you to apply a variety of CAPTCHA technologies (provided by additional
add-on modules) to the forms on your site. However, encountering a
CAPTCHA can be an unpleasant experience for users, so this solution
should be used only as necessary.

### 4. Weak Password Policy

#### Explanation

A simple password is also simple to guess. A malicious actor can perform
password guessing and access any user account if a strong password
policy is not set.

The accepted best practices for password policies have evolved over the
years. In 2017, NIST (the National Institute of Standards and Technology
in the US) published updated guidance covering, among other things, new
recommendations on enforcing password complexity and password rotation.
Shortly after, the UK's National Cyber Security Centre (NCSC) published
their own updated guidance along the same lines. Both sets of guidance
reflect modern best practices accepted by security professionals. These
include:

-   Don't enforce a minimum number of characters per character class
    (e.g. uppercase / lowercase letters, numbers and symbols). Instead,
    enforce a minimum password length, and reject passwords from
    explicit lists of passwords known or expected to be weak or
    compromised - for example, dictionary words, previously breached
    passwords, and context-specific terms such as the username or
    website name.
-   Don't force users to change their passwords on a regular schedule.
    Rather, monitor for indications that a password may have been
    breached, and enforce password changes only when an indication of a
    possible breach is discovered.

#### <a name="password-policy"></a>Best practice recommendation

The [*Password Policy* module](https://www.drupal.org/project/password_policy)
provides a flexible set of constraints that Drupal and LocalGov Drupal
administrators can apply to build their own custom password policies.

In the latest version, different policy requirements are provided by
different submodules, many of which are included with the Password
Policy module. We recommend enabling at least the following modules:

-   *Password Policy* (the module that provides the core password policy
    functionality)
-   *Password Username Policy*
-   *Password Blacklist Policy*
-   *Password Character Length Policy*

Also enable any others that you want. However, we suggest *not* using
the *Password Character Types Policy* or *Password Characters of Type
Policy* modules, as these would conflict with the NCSC and NIST
recommendations.

With the modules enabled, go to the configuration page and create a new
policy. We suggest setting the *Password Reset Days* to zero, again in
line with the NCSC and NIST recommendations. After saving the policy you
will be able to select the roles to which the policy applies, and to
configure *constraints*. We suggest the following:

-   Use the *Password Blacklist* constraint to disallow a list of words
    related to your site - such as the site name and variations thereof.
-   Use the *Password character length* constraint to disallow passwords
    that are too short. Drupal core's password strength meter suggests
    a minimum length of 12 characters, so this may be a good choice for
    consistency. Do not set a maximum length!
-   Also enable the *Password username* constraint to disallow passwords
    containing the user's username (it has no additional configuration
    options).

If you want to enforce the additional constraint of blocking passwords
that are known to have been exposed in data breaches, one way to do this
is to install the [*Password Policy Pwned*
module](https://www.drupal.org/project/password_policy_pwned).
This adds a new constraint, *Pwned Passwords*, which you can configure
to block passwords which have appeared at least once (or, if you prefer,
a minimum number of times) in known data breaches.

### 5. Username Enumeration

#### Explanation

Username Enumeration occurs when a malicious actor can determine the
valid users of an application/system. This vulnerability usually exists
on the login or forgot password page of an application, where an error
message reveals that a username is present or absent on the system when
valid or invalid credentials are entered. After enumerating valid users,
a malicious actor can gain access to the system using password guessing
or automated brute-force attacks. Username enumeration essentially
occurs when an application gives different responses when valid and
invalid data in various fields are entered.

#### Best practice recommendation

The [*Username Enumeration Prevention*
module](https://www.drupal.org/project/username_enumeration_prevention)
can be installed to make it more difficult to discover usernames and
verify the existence of particular accounts. However, as noted on that
module's project page, Drupal does not make any particular effort to
hide usernames, and it is difficult for a contributed module to fully
counteract this.

<a name="tfa"></a>Those requiring a more comprehensive defence might consider enabling
two-factor authentication, which can be added by installing the
[*Two-Factor Authentication (TFA)*
module](https://www.drupal.org/project/tfa).

### 6. Missing Security Related Headers

#### Explanation

The application did not implement certain HTTP security headers, which
help in protecting the application against attacks including Cross-site
Scripting (XSS) and Clickjacking.

#### Best practice recommendation

While it's possible to configure some HTTP headers using Drupal
contributed modules, it's generally better to set them in the web
server configuration instead. That way, they can protect your static
files as well as pages served by the Drupal application.

##### Content-Security-Policy

The content-security-policy (CSP) header is a complex and powerful tool.
Crafting and maintaining a good CSP can take considerable effort, but
the reward is robust protection against XSS and other attacks.

A simple starting point may look something like this:

```
content-security-policy: frame-ancestors 'none'; upgrade-insecure-requests
```

This instructs the browser to prevent the site from being displayed
inside a frame (which is important for preventing clickjacking attacks),
and to upgrade insecure (HTTP) subrequests to HTTPS rather than simply
blocking them.

To get the full benefit of CSP, you would want to add some of the
directives that are available for restricting the possible sources of
various types of resources that your site can reference. For example, to
prevent loading scripts from external sources, you can add the
`script-src 'self'` directive. This is a delicate balancing act,
however. An overly restrictive CSP can break some of your site's
functionality. Mozilla's [*Laboratory* extension for
Firefox](https://addons.mozilla.org/en-US/firefox/addon/laboratory-by-mozilla/)
is a handy way to experiment with different CSP directives and the
effects they may have.

MDN has a more complete [list of the available CSP
directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

##### Permissions-Policy

The permissions-policy header allows you to selectively disable or
restrict certain browser features on your site. This can be a security
improvement as some features may occasionally have exploitable bugs or
unexpected behaviours that can impact your site's security.

Unfortunately there is no way to globally disable all optional features and
enable only the ones you want - you must instead explicitly disable
every feature that you *don't* use. [MDN has a partial list of
directives](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy#directives).
You can disable a set of features with a header like the following:

```
permissions-policy: encrypted-media=(),interest-cohort=()
```

The above example disables the `encrypted-media` and `interest-cohort`
features. You can add additional directives to the header to disable
other unnecessary or unwanted browser features.

##### Referrer-Policy

The `referrer-policy` header allows you to restrict what information the
browser shares with other domains that you link to.

In modern browsers this defaults to `strict-origin-when-cross-origin`,
which is generally a pretty safe default: it shares the full referring
URL when you link to your own site, but only the *origin* (i.e.
excluding the path and query string, which may contain sensitive
information) when linking externally, and nothing at all when linking to
a less secure URL (i.e. to a http:// link from your https:// site).

For additional protection in some older browser versions, you can
specify this default explicitly:

```
referrer-policy: strict-origin-when-cross-origin
```

Alternatively, if you prefer to share as little information as possible
with third parties, you can specify `same-origin` instead.

Note that unlike the older `Referer` header, the word 'referrer' in the
`Referrer-Policy` header should be spelled correctly.

### 7. Verbose Error Messages

#### Explanation

Verbose error message is when the application throws sensitive error
messages such as stack traces, database queries or dumps and error
codes. These error messages can be the first line of attack where an
attacker is able to get the information about the application's
underlying technology like the software or framework name and versions.
An attacker can accordingly search for vulnerabilities and exploits to
harm the application or system, users, and technology.

#### Best practice recommendation

LGD, like Drupal core, enables the display of verbose error messages by
default, to assist in debugging during initial development.

The configuration page at /admin/config/development/logging can (and
should) be used to disable the display of error messages before
promoting a site to production.

### 8. Insufficient Session Timeout

#### Explanation

Session timeout occurs when a user does not perform any action on the
website in the given time frame or logs out of the application. This
time is set at the web server. Application not having a timeout or
having an insufficient session timeout can lead to the misuse of the
session ID where a malicious actor can steal or reuse any user's session
identifiers. A session must be invalidated on the server side once a
user logs out or leaves the session idle.

#### Best practice recommendation

There are several contrib modules that can be used to enforce a shorter
session timeout than the default. One such module is the [*Automated
Logout* module](https://www.drupal.org/project/autologout), which allows
you to set different timeouts per role. This is useful because it allows
you to set a shorter timeout for highly-privileged roles to protect your
site's security, while setting a longer timeout for less-privileged
roles to avoid unnecessarily inconveniencing your users.

### 9. Weak Account Lockout Mechanism

#### Explanation

With an insufficient account lockout policy, malicious actors could
perform automated dictionary or brute-force attacks against the user and
administrative accounts. In a brute-force attack, a malicious actor will
guess many passwords rapidly, looking for one password that matches the
account password. These attacks often use dictionaries of the most
commonly-used passwords, such as "password", "12345", or the season and
the year, as well as passwords obtained from previously leaked data
breaches.

#### Best practice recommendation

While a stronger account lockout may indeed provide better defence
against brute-force and credential stuffing attacks, it would also open
an easy vector for denial-of-service attacks against individual
accounts.

Our recommendation is to rely on other approaches to preventing brute
force and credential stuffing attacks, such as [enabling two-factor
authentication](#tfa) and [preventing the use of known-compromised
passwords](#password-policy).

### 10. Verbose HTTP Response Headers

#### Explanation

In its default configuration, the application occasionally displays the
server technology or CMS that it utilises. This provides the actual
version data in some cases and merely the technology name in others. In
any situation, it is critical to carefully regulate the data provided in
both the HTTP response header and the HTTP response body to ensure that
no technical or server details are present.

#### Best practice recommendation

It is generally possible for a determined attacker to identify the
server technology and CMS by other means than HTTP response headers.
Obscuring this information may deter some low-effort opportunistic
attackers. However, there are some headers that are unique to Drupal
(e.g. `X-Drupal-Dynamic-Cache`) that cannot be disabled without
sacrificing some functionality. Accordingly, we do not recommend
obscuring HTTP response headers as a standard practice. However, if you
can live without the dynamic page cache, you can obscure the other
identifying headers (`Server` and `X-Generator`) by setting fixed values for
them in your web server configuration.
