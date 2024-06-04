# How to use Gitpod to test modules in the browser

Gitpod is super useful to spin up a test development environment in the browser.

This should make it possible for anyone to start a fresh install of LocalGov
Drupal and install new modules to test the functionality, without needing a
local development environemtn.

It can also be used to test branches and pull reuqests from Github.

This how-to should guide you through starting Gitpod, installing modules and
testing pull requests.

## 1. Sign into Gitpod with your Github account

Go to https://gitpod.io/.

Click "Continue with Github" to log in with your Github account.

## 2. Start LocalGov Drupal in Gitpod

Go to https://github.com/localgovdrupal/localgov_project?tab=readme-ov-file#spin-up-localgov-drupal-with

Click the "Open in Gitpod" link to go to https://gitpod.io/#https://github.com/localgovdrupal/localgov_project

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
drush en lcoalgov_demo
```

## 4. Install a new module

We use the command line and composer to install modules.

For example, to install the Google Tag module, we can visit the project page at
https://www.drupal.org/project/google_tag

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

## 5. Testing branches from Github.

Coming soon...
