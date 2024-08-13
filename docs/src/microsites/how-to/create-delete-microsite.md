# Create and delete a microsite


## Definitions:

1. **Control Site**: The control site is effectively the user interface for creating, administering and controlling the microsite platform as a whole. It is a  Drupal administrative interface.
1. **Controller**: The controller is a user who has the Microsites Controller role. This role has sufficient permissions to create a microsite, set it up, and add members (e.g. editors).
1. **Editor**: The editor has fewer permissions than the Controller. They can create and edit content within any microsite of which they are a member.
1. **Admin**: An administrator has permissions to make structural configuration changes to a platform. Typically an administrator may not be a member of a given microsite.
1. **Platform**: The microsite platform is the Drupal installation which supports and powers the microsites. It is a single codebase and a single database which orchestrates all microsites on the platform. The platform is a Drupal website, and is used solely to house microsites. It has no end user function outside of microsites. It is often called “the control site”.
1. **Microsite**: A microsite is a single small website. Technically it is a group entity, with its own content and user members. It is associated with a domain name, by which it is accessed.


## Scenario:

You have a microsite platform and you need to spin up a new microsite. You have a controller user, and a trusted editor user.

1. Log into the control site as a controller user.
2. Go to Microsites > add microsite, at `/admin/microsites/add/microsite`
3. Follow the very short wizard to name your microsite and set the domain name by which it shall be known and accessed. E.g. microsite.com
4. NB You may need to make sure the DNS for your chosen name points to your server, and that the server has a route set up which can respond to requests for that domain name.

You now have an empty microsite.

5. Log out of the platform/control site).
6. Log into your new microsite on its own domain, using your controller user, at e.g. `microsite.com/user/login`
7. Go to 'Microsites'.
8. See your microsite listed. Choose ‘edit’.
9. You will see options for content, settings, members, etc. Go to ‘members’. Add your editor user as a member.

Now for the fun part.

10. Allow your editor to log in at e.g. microsite.com/user/login. They can now create and edit content for this microsite.
11. The controller user can now begin to customise the microsite’s look and feel via microsite settings. Choosing “Site settings” one can choose an alternative theme, if available, set the front page, etc.
12. Choosing “Site design” will allow the controller to affect the look and feel of the microsite, specifying colours and font sizes, logos, and header and footer elements.

The controller can modify the look and feel (within the bounds of the chosen theme), even whilst the editors create and modify content for the microsite.

This process can be performed many times per microsite platform, allowing a platform owner to spin up small websites extremely quickly.



