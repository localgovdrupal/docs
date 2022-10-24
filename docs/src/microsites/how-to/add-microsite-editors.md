# Manage microsite editors and admins

Terms:
- Drupal user: an account associated with a single person on the control site. 
- Drupal roles: universal set of permissions to be assigned to a user. (Microsite controller, Trusted editor)
- Microsite roles: microsite specific set of permisions that are assigned to a microsite member. (Microsite admin, Microsite editor)
- Microsite members: people with a microsite role - given on a microsite by microsite basis. 


## Inviting people to administrate and edit a microsite.

See [Roles](/microsites/roles.md)

Requirements
 - *You'll need to be a Microsite admin or Microsite controller*.
 - Log in to the microsite on its unique domain. 

1. Visit Invitations
1. Click "Invite member"
1. Enter the email address, if you want them to be a Microsite admin, check the box. 
1. Save

![Add microsite invitation, showing the invitee email field, plus the checkbox to make them an admin and a Save button](https://user-images.githubusercontent.com/3852805/197545672-15b3bb43-f0c0-48c3-928f-9128de68488d.png)


### Invitation workflow (new user)

1. [Microsite admin] Send an invite
1. [New user] Receive an email to set up an account
1. [New user] Set up new account on the website via email link
1. [New user] Receive an email to accept invitation
1. [New user] Accept invitation on the website via email link

Note: Microsite members are assigned/unassigned the "Trusted editor" Drupal role automatically.

### Invitation workflow (exisiting user)

If someone already exists on the control site (they may be a member of another microsite already), they will skip steps 2 & 3 above. 
