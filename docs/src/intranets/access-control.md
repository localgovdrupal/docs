---
title: Access control
---

# Access control

LocalGov Drupal gives you several options for controlling who can access content on your intranet. These can be used independently or in combination depending on the needs of your organisation.

The main approaches are:

1. **Single sign-on (SSO)**: require all users to authenticate before accessing any part of the intranet, using the same credentials they use for other council systems.
2. **Passwordless login**: staff authenticate by entering their email address and receiving a single-use login link, with no password required.
3. **Selective content restriction**: keep most of the site publicly accessible but restrict specific content to logged-in users only.
4. **Role-based paragraph visibility**: restrict specific sections of a page to users with particular roles, even once they are logged in.

---

## Single sign-on

For a fully private intranet, the most common approach is to require authentication for the entire site using single sign-on (SSO). Staff log in with the same credentials they use for email, Microsoft 365, or other council systems, without needing a separate Drupal username and password.

LocalGov Drupal supports SSO via OpenID Connect (OIDC), with specific support for Microsoft Azure Active Directory (the most common provider in UK councils) and Azure B2C. Configuration details, settings recommendations, and guidance on mapping identity provider groups to Drupal roles are covered in the developer documentation:

[Single Sign-On — Developer docs](/devs/security/sso)

---

## Passwordless login

Passwordless login is an alternative to SSO for councils without a central identity provider, or where a simpler setup is preferred. Staff enter their email address and receive a single-use login link by email, valid for 24 hours. No password is required.

Access is controlled via an email domain whitelist: only addresses from approved domains (such as `@yourcouncil.gov.uk`) can register. User accounts are created automatically on first login if the email domain is whitelisted.

This is implemented using three Drupal modules: `passwordless`, `domain_registration`, and `email_registration`, along with a small custom integration module. Full setup instructions are in the developer documentation:

[Passwordless login — Developer docs](/devs/security/passwordless)

---

## Selective content restriction

Not every intranet needs to be entirely private. You may want a site that is mostly public where only certain pages or content types require a login, for example a staff-facing section of your main council website.

The [`localgov_restricted_content`](https://www.drupal.org/project/localgov_restricted_content) module provides this capability. Editors can mark individual pieces of content as restricted, so that anonymous visitors see a login prompt or are redirected, while authenticated users can access the content normally.

This suits situations where:

- Your intranet content lives alongside public council content on the same site.
- You want staff-only pages discoverable in navigation but protected behind login.
- You need a lightweight solution without requiring full site authentication.

---

## Role-based paragraph visibility

For more granular control, you may want to restrict specific sections within a page to certain groups of staff, even once they are logged in. A page might have general content visible to all staff, but a section containing sensitive HR information visible only to managers.

The [`paragraphs_role_visibility`](https://www.drupal.org/project/paragraphs_role_visibility) contrib module allows editors to set role-based visibility on individual paragraphs within layout builder. Each paragraph component can be configured to show only to users with one or more specified Drupal roles.

Useful when:

- You have mixed-sensitivity content that would otherwise need to live on separate pages.
- You want to reduce the number of pages to maintain by combining content for different audiences.
- Role-based access is already being managed in Drupal, whether manually or via SSO group mapping.

---

## Combining approaches

These approaches can be used in combination. A typical setup for a fully private intranet might use:

- SSO to authenticate all users and map them to Drupal roles based on Active Directory group membership.
- `localgov_restricted_content` to keep a small number of pages public, such as a pre-login landing page.
- `paragraphs_role_visibility` to restrict sensitive content within pages to specific staff roles.
