# Domain aliases

Often we will need multiple different domains to resolve ti a single microsite group.

For example, in our demo microsite https://site3.demo.microsites.localgovdrupal.org/ the primary domain for the microsite is set to site3.demo.microsites.localgovdrupal.org.

However, if I am setting up the sames colleciton of microsites locally for development and testin purposes, I will need a different domain name to resolve to the same microsite.

To do this we need Domain Aliases, which is a sub-module of the [Domain module](http://www.drupal.org/project/domain) 

At the time of writing, this needs to be enabled manually by a developer.

## How to enable and configure domain aliases for microsites

### 1. Enable the Domain Aliases module.

This could be through the admin UI at http://www.drupal.org/project/domain

Or we could use drush: 

```
drush en domain_alias
```

### 2. Set the permissions for the 'Controller' role to be able to manage domain aliases.

Go to: /admin/people/permissions/module/domain_alias

Enable all the permissions for the 'Controller' user.

### Add domain aliases to each microsite domain.

Log into the control site as the 'Controller' user.
Visit the domains configuration at Configuration > Domains (/admin/config/domain)
On each domain in the list, we should now be able to drop down the menu icon next to the edit button and selec 'Aliases'
CLicking on that should take us to the list of domain aliases for this domain.
CLick on 'Add domain alias'




