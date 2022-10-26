---
title: Roles and permissions
---

<div class="alpha"><span>Alpha</span> This documentation is a work in progress</div>

# Roles and permissions

LocalGov Drupal Microsites comes with 3 roles.

1. Microsite controller 
2. Microsite admin 
3. Microsite editor (or technically member)

Microsite controller: can create and destroy microsites.
Microsite admin: on an individual microsite can manage microsite members, manage the site settings and design.
Microsite editor: on an individual microsite can create, edit and delete content.

A person may be a Microsite admin or Microsite editor on one or more microsites. They will not have access to manage any microsite they are not a member of. 

## Recommended workflow

**[Microsite controller]** Create the microsite, set the domian.
Log in to the microsite on the microsite domain. 
Send invitations to microsite members (editor and admin) from within the microsite. This will ensure that the links they receive in their email will have the correct URLs. 

Note: it is possible to send invitations from the control site, but the emails sent will have the control site URL in it. 

**[Microsite admin]** Once you've received an invitation to join a microsite, you'll need to set up your account if you don't yet have one. You will see a message informing you of where to go to accept the microsite invitation. Once you've accepted this invitation you'll be able to see the Microsite administration items.


## Technical 

The Drupal roles are as follows:

1. Microsite controller
2. Trusted editor

The Microsite admin, and Microsite member are roles that come with Group module. A person who is added to a microsite without explicit "Admin" permissions is a Microsite member - or as we are referring to them here: Microsite editor.

These are not universal roles. A person can be a Microsite Admin on one site, and not on another, on the same Drupal installation.

When a person becomes a microsite members (editor or admin) the Trusted editor Drupal role is automatically assigned to them. 
