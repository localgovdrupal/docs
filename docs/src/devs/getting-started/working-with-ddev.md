---
tags:
  - local development
  - ddev
  - docker
  - composer
---

## Installing LocalGov Drupal locally with Composer and DDEV.

First of all, you will need to install DDEV on your local machine – please check the requirements (most importantly Docker) for doing so, depending on your OS, and then install by following the appropriate instructions here:

[DDEV installation - short version](https://ddev.com/get-started/)

[DDEV installation - long version](https://ddev.readthedocs.io/en/latest/)

Next, the assumption is that if you have been working with Drupal already, then you will already have Composer installed, but just in case:

[Get Composer](https://getcomposer.org/)

To install LocalGov Drupal locally for testing or development, use the
[Composer-based project template](https://github.com/localgovdrupal/localgov_project) by running the following command (and changing `PROJECT_NAME` to whatever you’d like your project directory to be called):

```bash
composer create-project localgovdrupal/localgov-project PROJECT_NAME --no-install 
```

Now move into the project directory just created and initialize DDEV for the project:

```bash
cd PROJECT_NAME
ddev config
```

Running `ddev config` will prompt you for answers to three questions:

 - **What’s the site name?**
 -- *Hit enter to accept default*
 - **What’s the location of the docroot?**
 -- *Hit enter to accept default*
 - **What type of project is it? Such as Drupal, PHP, WordPress, etc.**
 -- *Hit enter to accept default*

*&nbsp;&nbsp;&nbsp; NB// Normally, DDEV should be able to figure out the answers to all three of these and input them by default, meaning you can just hit ‘enter, enter, enter’ to speed up the initialization, though if really necessary you can overwrite any as you wish.* \
*&nbsp;&nbsp;&nbsp; However, as installing LocalGovDrupal itself is done in two parts (the `composer` command above and the `ddev composer/drush` commands below), the eventual docroot and type of the project will not be known to DDEV at this stage as they don’t actually exist yet, so `ddev config` will need to be run again later, as can be seen further down in these instructions.* \
*&nbsp;&nbsp;&nbsp; While just hitting ‘enter, enter, enter’ is fine both times, you may notice this first time through that the defaults DDEV sets seem wrong, as it will choose the current directory for the docroot and a standard PHP project for the type. This is perfectly fine (and in fact is best left alone), so long as the second time through running `ddev config` below you ensure that docroot is entered as ‘web’ and that the project type corresponds to the latest major version of Drupal (at the time of writing, Drupal 9, so in this case, ‘drupal9’ would be entered) – by the point of that second running of `ddev config`, DDEV should automatically recognize these as new defaults, meaning hitting ‘enter, enter, enter’ is fine again then.*

Once DDEV has initialized, it may be that you want to run `ddev auth ssh` in order to configure SSH access inside the DDEV container (for example, to connect the project to online repositories that require such access).

At this stage you’re ready to finish installing LocalGov Drupal:

```bash
ddev composer install
ddev config
```
Don't forget to hit ‘enter, enter, enter’ here again to accept the defaults suggested by `ddev config`, as mentioned in the *NB* above. Then: 
```bash
ddev drush si localgov -y
```

Note: As you might be running a different version of PHP on your host machine from the version that DDEV runs, it is advisable to run `composer install` and `drush` commands from within DDEV. This ensures dependencies reflect the PHP version that the webserver is actually running.

Once the LocalGov Drupal installer has finished running, it will give you a username and password. Make a note of these and then start the containers for the project by running `ddev start` (you can later stop them again, unsurprisingly, by running `ddev stop`).

Then use the credentials noted above to sign in to your now up-and-running new DDEV/LGD project by navigating to the following address:

***https://PROJECT_NAME.ddev.site/user***

*Optional: you can also delete the `.lando.dist.yml` file in the project’s root, as it is redundant when using DDEV instead of Lando.*
