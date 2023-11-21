---
tags:
  - local development
  - ddev
  - docker
  - composer
---

# Working with DDEV

# DDEV Installation

First of all, you will need to install DDEV locally by following the 
[official DDEV documentation steps](https://ddev.com/get-started/).

## Installing LocalGov Drupal locally with Composer and DDEV.

Now that we have all the required dependencies in place (Composer, Docker Desktop and DDEV), we can create our first
LocalGov Drupal project locally.

To install LocalGov Drupal locally for testing or development, use the
[Composer-based project template](https://github.com/localgovdrupal/localgov_project) by running the following command 
(and changing ‘PROJECT-NAME‘ to whatever you’d like your project directory to be called):

```bash
composer create-project localgovdrupal/localgov-project PROJECT-NAME --no-install 
```

Now move into the project directory just created and initialize DDEV for the project:

```bash
cd PROJECT-NAME
ddev config
```

Running `ddev config` will prompt you for answers to three questions:

 - **What’s the site name?**
 -- *Hit enter to accept default*
 - **What’s the location of the docroot?**
 -- *Hit enter to accept default*
 - **What type of project is it? Such as Drupal, PHP, WordPress, etc.**
 -- *Hit enter to accept default*

Normally, DDEV should be able to figure out the answers to all three of these and input them by default, meaning you 
can just hit ‘enter, enter, enter’ to speed up the initialization, though if really necessary you can overwrite any as 
you wish.

Once DDEV has initialized, it may be that you want to run `ddev auth ssh` in order to configure SSH access inside the 
DDEV container (for example, to connect the project to online repositories that require such access).

At this stage you’re ready to finish installing LocalGov Drupal:

```bash
ddev composer install
ddev config
```

Don't forget to hit ‘enter, enter, enter’ here again to accept the defaults suggested by `ddev config`, as mentioned in the *NB* above. Then: 
```bash
ddev drush si localgov -y
```

Note: As you might be running a different version of PHP on your host machine from the version that DDEV runs, it is 
advisable to run any Composer and Drush commands from within DDEV i.e. `ddev composer` and `ddev drush`. This ensures 
dependencies reflect the PHP version that the webserver is actually running.

Once the LocalGov Drupal installer has finished running, it will give you a username and password. Make a note of these and then start the containers for the project by running `ddev start` (you can later stop them again, unsurprisingly, by running `ddev stop`).

Then use the credentials noted above to sign in to your now up-and-running new DDEV/LGD project by navigating to the following address:

***https://PROJECT-NAME.ddev.site/user***

*Optional: you can also delete the `.lando.dist.yml` file in the project’s root, as it is redundant when using DDEV instead of Lando.*
