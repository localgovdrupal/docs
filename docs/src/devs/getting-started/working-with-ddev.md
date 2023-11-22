---
tags:
  - local development
  - DDEV
  - docker
  - composer
---

# Working with DDEV

## DDEV Installation

DDEV is an open-source tool for launching local web development environments in minutes. These environments can be 
extended, version controlled, and shared, so you can take advantage of a Docker workflow without Docker experience or 
bespoke configuration. Projects can be changed, powered down, or removed as easily as they’re started.

The [official DDEV requirements page](https://ddev.readthedocs.io/en/latest/) offers detailed information on the 
prerequisites that should be in place but, generally speaking, here's a list of minimum requirements for DDEV:
- Recent OS version
- RAM: 8GB
- Storage: 256GB

There are multiple ways of installing DDEV locally, mainly depending on your Operating System. Make sure you go through 
the [official DDEV installation page](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/) if your 
OS is not covered below.

### Installing DDEV on Mac OS
#### DDEV on Mac OS using Homebrew

Homebrew is a popular package manager for Mac OS and Linux - it basically brings packages into your machine in an 
organised manner. It controls and manages their dependencies and versions (similar to Composer). 
To install Homebrew locally:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

With Homebrew in place, run the following to install DDEV:

```bash
brew install ddev/ddev/ddev
```

You can confirm that DDEV is in place by checking its installed version:

```bash
ddev -v
```

#### DDEV on Mac OS using Curl

To download and run the install script, run the following in your Terminal:

```bash
curl -fsSL https://ddev.com/install.sh | bash
```

### Installing DDEV on Windows
You can install DDEV on Windows in three ways:
- Using WSL2 with Docker inside
- Using WSL2 with Docker Desktop
- Installing directly on traditional Windows with an installer

DDEV strongly recommends using WSL2. While its Linux experience may be new for some Windows users, it’s worth the 
performance benefit and common experience of working with Ubuntu and Bash. You can follow the 
[official DDEV Windows installation steps](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#wsl2-docker-desktop-install-script) 
to install DDEV using WSL2 with Docker Desktop.

### Installing DDEV on Linux

You can use Homebrew or the curl install script in most instances, as described in the Mac OS installation instructions 
above. On the [official DDEV Linux installation page](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#linux, 
there are more installation ways listed for some Linux and Ubuntu distributions.

## Installing LocalGov Drupal locally with Composer and DDEV.

If you haven't yet installed Composer and Docker Desktop, see [Getting Started](/devs/getting-started/) for instructions
on how to install these requirements.

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
