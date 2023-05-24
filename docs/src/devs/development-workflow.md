# Installing and deploying a LocalGov Drupal site

If you are new to Drupal it is worth thinking about how best to build, develop and deploy your website. 

## 1. Initial installation

The LocalGov Drupal distribution comes with a localgov_project repository and composer package that helps to scaffold the Drupal core files. 
It also comes with configuration for local development (Lando and DDEV), PHPunit testing and coding standards review.

The default documentation assumes we have the following prerequisites installed:
 - PHP
 - Composer
 - Docker 
 - Lando (or DDEV)

We use composer to install the project.
Note, if you are using lando, replace the `ddev` command with `lando`. 

```
composer create-project localgovdrupal/localgov-project MY_PROJECT --no-install 
cd MY_PROJECT
ddev start
ddev composer install
ddev drush si localgov -y
```

At this stage we should have a local site up and running. 

This has run the installation profile which enables some default modules and themes for the LocalGov Drupal distribution. 

## 2. Committing our project code to a git repository

We now have a local codebase that will run Drupal. Most of the code we have locally was pulled in by composer on the composer install step. There are at least two approaches to adding this to a git repository.

1. Slimline git repository: 
Exclude files that are pulled in with composer, such as Drupal core and the vendor directory, just committing the composer.lock files, custom code and Drupal configuration files. In this case we need to run composer install on the server environment (dev/test/prod) when deploying updates to build the codebase to our defined specification.  

2. Monolithic git repository. 
Include all vendor, Drupal core, vendor dependenies and contributed code. In this case the git repository has all the code files needed to run the website. (Note: this still does not include content files that live in sites/default/files or environment specific files like settings.local.php)

For now, let’s work with 1) - we’ll commit just the files we need to define the website application. This is widely regarded as best practice and the default .gitignore is set up with this in mind.

Let's take a look at the files: 

![image](https://user-images.githubusercontent.com/326588/232770330-0e0bca0c-634f-41d8-9e8b-4b2a86b72fcf.png)

```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ du -h --max-depth=1
8.0K    ./.vscode
12K     ./config
106M    ./vendor
360M    ./web
80K     ./bin
52K     ./assets
16K     ./.github
356K    ./.ddev
8.0K    ./.lando
467M    .
```
If we have a look at the .gitignore that comes with the localgov_project package, we will see that it ignores directories like:

/vendor (106M), 
/web/core/ (145M)
/web/modules/contrib/ (157M)
/web/themes/contrib/ (11M)

One tangible benefit of not committing these to the git repository is that it keeps the size of the git repository down and simplifies git’s job of keeping track of changes to files.

One file is excluded that we actually want to commit: `composer.lock`.
Once we've run comoser install or composer update, the composer.lock file defines the version of each package so that composer install will always fetch known versions of all softtware packages we need to run our site. 

For this example, I will remove composer.lock from the .gitignore file.

Adding files to git.

```
git init
git status
```
![image](https://user-images.githubusercontent.com/326588/232771252-39007178-1303-46aa-a3b8-99c6db0e6d49.png)

```
git add .
git status
```

![image](https://user-images.githubusercontent.com/326588/232771452-68a8530e-4e48-45dc-a312-6ae536b79f66.png)
```
git commit -m 'Initial commit of my council LocalGov Drupal website project.'
```

## 3. Pushing to our git repository.

I've created an example git repository at https://github.com/finnlewis/lgd-example.
So let's add the remote and push to the main branch.

```
git remote add origin git@github.com:finnlewis/lgd-example.git
git push origin main
```

## 4. Exporting the initial Drupal database

We've run the initial Drupal site-install on our local machine, which creates the Drupal database. We need to ensure a copy of this database is available to be imported to other versions of the drupal site such as the dev site, or other developer's local sites. For Drupal's configuration management to work, the same installation database needs to be used. Importing site configuration on different installations can be difficult.

So for this example, we will export our database and import it to the remote dev site. 

```
ddev drush sql-dump > lgd-example-dev-site.sql
```

## 5. Gitpod for a dev site

For this example, I'm using Gitpod to act as a development site.

To spin up Gitpod, you shoul be able to click on the following link and authorise with your Gitlab account. 

https://gitpod.io/#https://gitlab.com/opencode/lgd-example

Note: I amended the gitpod.yml file included with LocalGov Drupal's localgov_project to prevent a site-install every time and instead import a database dump as a shared starting point. 

https://gitlab.com/opencode/lgd-example/-/blob/main/.gitpod.yml#L9-10

In a real world situation, the dev site would probably import a recent database backup from the production site on request from a developer.

Once you have started a Gitpod isntance, you can allow other people to access the site by selecting 'Share' on the menu for the workspace. 

![image](https://github.com/localgovdrupal/docs/assets/326588/49827ffc-ed67-41a0-996f-1fca6e833562)

I now have my default installation of LocalGov Drupal as a starting point. 
The url will be different for your Gitpod workspace, but in my case, I can access this at https://8080-opencode-lgdexample-sxl0flqjfmu.ws-eu97.gitpod.io/ 

![image](https://github.com/localgovdrupal/docs/assets/326588/510c4b7f-e74a-461a-baa4-c33d250cc9eb)

## 6. Adding settings.php to the repository.

It is useful to have some settings consistent across environments, such as the config sync folder. 
To this end I will commit the settings.php file to the repository. 
I need to use the -f flag to force git to add settings.php, as we have a line in .gitingore that ignores /web/sites/*/settings*.php

```
git add web/sites/default/settings.php -f
git status
git commit -m 'Add settings.php with defined config_sync_directory.'
```
For example: 
```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git add web/sites/default/settings.php -f
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   web/sites/default/settings.php

finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git commit -m 'Add settings.php with defined config_sync_directory.'
[main ccc1207] Add settings.php with defined config_sync_directory.
 1 file changed, 795 insertions(+)
 create mode 100755 web/sites/default/settings.php
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ 
```

Note that in this case, setttings.php does not include database credentials or other sensitive information.

In a real world situation we would probably include database credentials in setting.local.php or as environment variables on each server environment. 

## 7. Initial exporting of configuration from local.

To export the site configuration we run `drush cex` or `drush config:export`:

```
ddev drush cex
```

For example: 

```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ ddev drush cex
 [success] Configuration successfully exported to ../config/sync.
../config/sync
```

And check with git to see what we have.

```
git status
```
For example: 
```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        config/sync/admin_toolbar.settings.yml
        config/sync/admin_toolbar_tools.settings.yml
        config/sync/automated_cron.settings.yml
        config/sync/block.block.claro_breadcrumbs.yml
        config/sync/block.block.claro_content.yml
        config/sync/block.block.claro_help.yml
  ... etc.       
```

Add, commit and push the config files.
```
git add config/sync
git commit -m 'Initial commit of configuration files.'
git push origin main
```

We have now set the configuration in the config/sync directory to match that of our database.

## 8. Export updated configuration from local.

Let's enable localgov_subsites and deploy the changes to configuration.

```
ddev drush en localgov_subsites -y
ddev drush cex 
git add config/sync
git commit -m 'Enable localgov_subsites and dependencies.'
git push origin main
```

## 9. Deploying configuration changes to dev.

To deploy the changes we just made to the dev site, we need to pull the git branch and import the config.

Over on our Gitpod dev site. 

```
git pull origin main 
ddev composer install
ddev drush cr
ddev drush updb -y
ddev drush cim -y
ddev drush cr 
```

Let's just mention each of these commands. 

`git pull origin main` pulls the code updates down from the git repository.
`ddev composer install` tells composer to look at the composer.lock file and install any changes to php packages.
`ddev drush cr` rebuils Drupal's cache.
`ddev drush updb -y` runs and database updates that new Drupal code might have introduced.
`ddev drush cim -y` imports the configuration from the config/sync folder.
`ddev drush cr` rebuils Drupal's cache (if in doubt, clear the cache again!)

If we now got to our dev site, log in and navigate to /node/add we can see that we have the subsite content types available for use. 

![image](https://github.com/localgovdrupal/docs/assets/326588/75f3cb9a-47a6-4edb-95c3-f45750b18aaf)


## 10. Installing and deploying a new Drupal module 

I would now like to add the content_lock and autosave_form modules. 

To do so, I will: 
1. use composer to install the code locally
2. enable and configure the modules in my local Drupal site
3. export the configuration 
4. commit changes to composer.json, composer.local and config/sync
5. deploy these changes to the dev site

On the module pages we get a handy composer install snippet we can copy and paste. 

See: 
 - https://www.drupal.org/project/content_lock
 - https://www.drupal.org/project/autosave_form

```
ddev composer require 'drupal/content_lock:^2.3'
ddev composer require 'drupal/autosave_form:^1.4'
ddev drush en content_lock
ddev drush en autosave_form
```
I notice that content_lock comes with a sub-module content_lock_timeout which I would also like to enable and configure.

```
ddev drush en content_lock_timeout
```

I've made some changes to the configuration of autosave form to set the interval to 120000 miliseconds (2 minutes).

Now I export the configuration.

```
ddev drush cex -y 
```

And I can see that just a few settings have been exported: 

```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ ddev drush cex -y
 [notice] Differences of the active config to the export directory:
+------------+-------------------------------+-----------+
| Collection | Config                        | Operation |
+------------+-------------------------------+-----------+
|            | content_lock.settings         | Create    |
|            | views.view.locked_content     | Create    |
|            | autosave_form.messages        | Create    |
|            | autosave_form.settings        | Create    |
|            | content_lock_timeout.settings | Create    |
|            | core.extension                | Update    |
+------------+-------------------------------+-----------+


 // The .yml files in your export directory (../config/sync) will be deleted and replaced with the active config.: yes. 

 [success] Configuration successfully exported to ../config/sync.
../config/sync
```

Let's add and commit these to git and push them to our remote repository.

```
git status
git add .
git commit -m 'Add, enable and configure autosave_form and contact_lock modules.'
git push origin main
```

For example: 

```
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ ddev drush cex -y
 [notice] Differences of the active config to the export directory:
+------------+-------------------------------+-----------+
| Collection | Config                        | Operation |
+------------+-------------------------------+-----------+
|            | content_lock.settings         | Create    |
|            | views.view.locked_content     | Create    |
|            | autosave_form.messages        | Create    |
|            | autosave_form.settings        | Create    |
|            | content_lock_timeout.settings | Create    |
|            | core.extension                | Update    |
+------------+-------------------------------+-----------+


 // The .yml files in your export directory (../config/sync) will be deleted and replaced with the active config.: yes. 

 [success] Configuration successfully exported to ../config/sync.
../config/sync
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   composer.json
        modified:   composer.lock
        modified:   config/sync/core.extension.yml

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        config/sync/autosave_form.messages.yml
        config/sync/autosave_form.settings.yml
        config/sync/content_lock.settings.yml
        config/sync/content_lock_timeout.settings.yml
        config/sync/views.view.locked_content.yml

no changes added to commit (use "git add" and/or "git commit -a")
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git add .
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git commit -m 'Add, enable and configure autosave_form and contact_lock modules.'
[main 87b308e] Add, enable and configure autosave_form and contact_lock modules.
 8 files changed, 885 insertions(+), 1 deletion(-)
 create mode 100644 config/sync/autosave_form.messages.yml
 create mode 100644 config/sync/autosave_form.settings.yml
 create mode 100644 config/sync/content_lock.settings.yml
 create mode 100644 config/sync/content_lock_timeout.settings.yml
 create mode 100644 config/sync/views.view.locked_content.yml
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ git push origin main 
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 16 threads
Compressing objects: 100% (11/11), done.
Writing objects: 100% (12/12), 4.84 KiB | 4.84 MiB/s, done.
Total 12 (delta 5), reused 0 (delta 0), pack-reused 0
To gitlab.com:opencode/lgd-example.git
   833ae14..87b308e  main -> main
finn@Oobuntoo:~/sites/l.localgov/MY_PROJECT$ 
```

And finally back on our dev site in Gitpod we run the same trusted commands to deploy our updates. 

```
git pull origin main 
ddev composer install
ddev drush cr
ddev drush updb -y
ddev drush cim -y
ddev drush cr 
```

And we should see confirmation messages like: 

```
[success] The configuration was imported successfully.
[success] Cache rebuild complete.
 ```

## Summary

This is not the only way to do things, but in my experience it is a relatively common appraoch to building, configuring and deploying changes to Drupal sites. I have not discussed git branching methodologies and have just used the single `main` branch here. I hope this helps some folk and am always keen to answer questions and help where I can. Hit me up on Slack (finn in LocalGov Drupal Slack and Drupal Slack).
