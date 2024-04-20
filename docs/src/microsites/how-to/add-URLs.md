![image](https://github.com/localgovdrupal/docs/assets/326588/da902cfb-54b5-42fb-8c4f-6a88ed9edcfb)# Domain aliases

Often we will need multiple different domains to resolve ti a single microsite group.

For example, in our demo microsite https://site3.demo.microsites.localgovdrupal.org/ the primary domain for the microsite is set to site3.demo.microsites.localgovdrupal.org.

However, if I am setting up the sames colleciton of microsites locally for development and testin purposes, I will need a different domain name to resolve to the same microsite.

To do this we need Domain Aliases, which is a sub-module of the [Domain module](http://www.drupal.org/project/domain) 

At the time of writing, this needs to be enabled manually by a developer.

## How to enable and configure domain aliases for microsites

You will need to be logged in as user 1, or another role with sufficient permissions.

### 1. Enable the Domain Aliases module.

This could be through the admin UI at http://www.drupal.org/project/domain

Or we could use drush on the command line: 

```
drush en domain_alias
```

### 2. Set the permissions for the 'Controller' role to be able to manage domain aliases.

Go to: /admin/people/permissions/module/domain_alias

Enable all the Domain Alias permissions for the 'Microsites controller' role.

![image](https://github.com/localgovdrupal/docs/assets/326588/0a0fc241-7372-4ac8-aa12-aac02fb5863b)

### 3. Add domain aliases to each microsite domain.

Log into the control site as the 'Controller' user.

Visit the domains configuration at Configuration > Domains (/admin/config/domain)

On each domain in the list, we should now be able to drop down the menu icon next to the edit button and select 'Aliases'

![image](https://github.com/localgovdrupal/docs/assets/326588/4b57f5c5-62e6-4184-a436-558885b35f42)

CLicking on 'Aiases' should take us to the list of domain aliases for this domain.

CLick on 'Add domain alias'

Enter the domain alias desired and set the option.s

In my case, I wanted to add a domain alias for my local development setup, using ddev.

So I 

 - put 'localgov-micro-1.ddev.site' in the pattern field, 
 - Left it as 'Do not redirect'
 - Set the environment to 'local'

![image](https://github.com/localgovdrupal/docs/assets/326588/c174ac08-19dc-421b-bacb-7fae3bef6654)

Save this and add more aliases to each domain as needed.

Once I'd added all four that I needed, if I edit the 'Aliases' on any domain, I can drop down the 'Environment list' fieldset to review the domains and aliases. This is super useful to give an overview. 

![image](https://github.com/localgovdrupal/docs/assets/326588/628675cc-8844-45de-9542-29cfc4b54c8b)

### 4. Confirm you can access your sites.

Now that I have the domain aliases for each of the 4 demo microsites defined locally, I can access each site at: 

- http://localgov-micro-1.ddev.site/
- http://localgov-micro-2.ddev.site/
- http://localgov-micro-3.ddev.site/
- http://localgov-micro-4.ddev.site/

### 5. Consider adding these in config overrides in settings.local.php. 

You might want to override these domain aliases in settings.local.php for different environments. See here for discussion on that https://www.drupal.org/project/domain/issues/3213596#comment-14144714






