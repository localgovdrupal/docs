# How to use Gitpod to test modules in the browser

Gitpod is super useful to spin up a test development environment in the browser.

This should make it possible for anyone to start a fresh install of LocalGov
Drupal and install new modules to test the functionality, without needing a
local development environemtn.

It can also be used to test branches and pull reuqests from Github.

This how-to should guide you through starting Gitpod, installing modules and
testing pull requests.

## 1. Sign into Gitpod with your Github account

Go to [https://gitpod.io/](https://gitpod.io/).

Click "Continue with Github" to log in with your Github account.

## 2. Start LocalGov Drupal in Gitpod

Go to [https://github.com/localgovdrupal/localgov_project?tab=readme-ov-file#spin-up-localgov-drupal-with](https://github.com/localgovdrupal/localgov_project?tab=readme-ov-file#spin-up-localgov-drupal-with)

Click the "Open in Gitpod" link to go to [https://gitpod.io/#https://github.com/localgovdrupal/localgov_project](https://gitpod.io/#https://github.com/localgovdrupal/localgov_project)

Accept the defaults and click "Continue".

Gitpod will now take a few minutes to create the development environment.

The terminal window at the bottom of the screen will display updates as the
docker containers are created, composer installs the code and drush runs a site
install.

Once complete, it should say something like:

```
Successfully started localgov
Project can be reached at https://8080-localgovdru-localgovpro-phiinqm8221.ws-eu114.gitpod.io
Awaiting port 8080... ok
gitpod /workspace/localgov_project (3.x) $
```

## 3. Enable the localgov_demo module (optional)

The localgov_demo module enables many of the default content types and features
of LocalGov Drupal and populates the site with ageing demo content. This can
be useful to test out new modules or updates to existing modules.

The best way to enable the module is in the terminal with drush.

```
drush en localgov_demo -y
```

## 4. Install a new module

We use the command line and composer to install modules.

For example, to install the Google Tag module, we can visit the project page at
[https://www.drupal.org/project/google_tag](https://www.drupal.org/project/google_tag)

Copy the command to install with composer for the release we want to install.

```
composer require 'drupal/google_tag:^2.0'
```
Then we can use drush to install the module with:

```
drush en google_tag -y
```

Alternatively, we log in to the site and browse to the 'Extend' page at:
/admin/modules

This can be useful as it is common for a Drupal project to have a number of
optional sub-modules in a single project.

## 5. Testing branches from Github

It is very useful to be able to test a branch from Github.

We often have a pull request, asking to merge a feature branch into the main
working branch. For example let's look at this one:

[https://github.com/localgovdrupal/localgov_core/pull/226](https://github.com/localgovdrupal/localgov_core/pull/226)

This is (was) requesting to merge this branch:

[https://github.com/localgovdrupal/localgov_core/tree/feature/718-content-tabs-weights-core-module](https://github.com/localgovdrupal/localgov_core/tree/feature/718-content-tabs-weights-core-module)

So to test this, we need to install localgov_core as this branch.

To do so, we can use composer to require the feature branch of the localgov_core
package.

First we need to ssh into ddev container.

```
ddev ssh
```

This connects the terminal into the DDEV web container. Here we can run composer
commands with more flexibility.

Now we run the following composer command.


```
composer require "localgovdrupal/localgov_core:dev-feature/718-content-tabs-weights-core-module as 2.13.1" -W
```

Let's break this down a little.

The first part is the standard composer require command for the localgov_core
\package.

```
composer require localgovdrupal/localgov_core
```
Here's a few other examples:

```
composer require localgovdrupal/localgov_elections
```

```
composer require localgovdrupal/localgov_elections:1.0.0-beta2
```

```
composer require localgovdrupal/localgov_publications
```

```
composer require localgovdrupal/localgov_subsites_extras
```
Back to our localgov_core example.

```
composer require localgovdrupal/localgov_core
```
Next we may want to specify the branch.

The branch is named `feature/718-content-tabs-weights-core-module`

As this is not a tagged release, we prepend it with `dev-` to tell composer it
is a dev branch.

So now we would have:

```
composer require localgovdrupal/localgov_core:dev-feature/718-content-tabs-weights-core-module
```

This might work, but often other modules will define dependencies on specific
veresions of the project we are trying to test.

To get around this, we can use composer aliases to pretent we are installing the
latest version.

Looking at https://github.com/localgovdrupal/localgov_core we can find the
latest release. Currenlty 2.13.1


We also need to wrap the entire package definition and alias in quotes.

So we can update our command as follows:

```
composer require "localgovdrupal/localgov_core:dev-feature/718-content-tabs-weights-core-module as 2.13.1"
```

The final addition is to add a `-W` to the end, which is the same as
`--update-with-all-dependencies`. This will ensure any new dependencies are
also updatedd.

So this brings us to the full command which is:

```
composer require "localgovdrupal/localgov_core:dev-feature/718-content-tabs-weights-core-module as 2.13.1" -W
```

We should see something like the following output:

```
gitpod@localgov-web:/var/www/html$ composer require "localgovdrupal/localgov_core:dev-feature/718-content-tabs-weights-core-module as 2.13.1" -W
./composer.json has been updated
Running composer update localgovdrupal/localgov_core --with-all-dependencies
Loading composer repositories with package information
Updating dependencies
Lock file operations: 0 installs, 1 update, 0 removals
  - Upgrading localgovdrupal/localgov_core (2.13.1 => dev-feature/718-content-tabs-weights-core-module c913ecc)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 0 installs, 1 update, 0 removals
No patches supplied.
Gathering patches for dependencies. This might take a minute.
  - Upgrading localgovdrupal/localgov_core (2.13.1 => dev-feature/718-content-tabs-weights-core-module c913ecc): Extracting archive
Generating autoload files
104 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
phpstan/extension-installer: Extensions installed
Scaffolding files for localgovdrupal/localgov-project:
  - Skip [web-root]/sites/default/settings.php because it already exists and overwrite is false.
No security vulnerability advisories found.
```

We can now run a fresh install of the localgov profile to test the changes
brought in by the branch we are testing.

```
drush si localgov -y
```

And enable the localgov_demo module again.

```
drush en localgov_demo -y
```

### Other useful commands

If you're not seeing what you expect, try the following commands:

This forces an update to the latest version of the code.

```
composer update
```

Clear the cache

```
drush cr
```

Uninstall a module

```
drush pm:uninstall localgov_elections
```

```
composer remove localgovdrupal/localgov_elections
```

