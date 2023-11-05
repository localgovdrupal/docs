# Getting started

## Requirements for installing LocalGov Drupal locally for testing and development

### Drupal Requirements

LocalGov Drupal is built on Drupal and, naturally, the same requirements apply. To install LocalGov Drupal locally you will need the appropriate versions of:
- PHP
- Database server
- Web server

Many of us use the Lando file included to run a local docker environment for testing and development, but some people 
prefer [working with DDEV](https://docs.localgovdrupal.org/devs/getting-started/working-with-ddev.html) or running the 
web servers natively on their host machine.

#### PHP

We follow [Drupal's PHP requirements](https://www.drupal.org/docs/system-requirements/php-requirements).

Drupal 10 uses Symfony 6, which requires PHP 8.1. Requiring PHP 8.1 helps Drupal provide a longer support lifetime
for Drupal 10, as well as more stability and predictability in its dependency requirements.

![Compatible PHP versions for various Drupal versions](~@images/drupal-php-versions.png)

You will also need to have certain PHP extensions enabled ([Drupal PHP extension requirements](https://www.drupal.org/docs/system-requirements/php-requirements#extensions)) including:

- PHP mbstring
- PHP cURL
- GD library
- XML

If you see errors when running `composer require`, double-check your PHP extensions.

#### A database server like MySQL
You can find detailed information about Drupal's database server requirements on the 
[corresponding documentation page](https://www.drupal.org/docs/system-requirements/database-server-requirements))

#### A web server like Apache2
You can find more information about Drupal's web server requirements on the
[corresponding documentation page](https://www.drupal.org/docs/system-requirements/web-server-requirements)

### Additional Requirements
#### Composer

![Composer Dependency Manager](~@images/composer-logo.png)

Quick Installation: Follow the detailed instructions on the [official Composer documentation page](https://getcomposer.org/doc/00-intro.md#globally).
(Read on for more information on Composer, otherwise go straight to the next step, Docker Desktop.)

To install an LGD distribution locally, you'll need to have Composer installed on your local machine. 
Drupal's Core, its modules and themes as well as contributed modules and themes, are all "packaged" and Composer 
manages these dependencies in a very structured and organised manner. To put a Drupal website together, all assets 
have to be sourced from a dedicated URL and compiled to create a fully functional build. Composer, Drupal's dependency 
manager of choice, does exactly that but it has to be present on your laptop.

There are two ways to install Composer, locally and globally. The latter is usually preferred as, with a single 
executable installed once, it allows Composer to manage the dependencies of multiple projects present on your machine.

#### Docker Desktop

![Docker Desktop](~@images/docker-logo.png)

Quick Installation: To simply install Docker Desktop, follow the steps outlined on the official documentation page: 
https://docs.docker.com/desktop/install/mac-install/#system-requirements.
(Read on for more information on Docker Desktop, otherwise go straight to the next step, Lando.)

Docker Desktop is a one-click-install application for your Mac, Linux, or Windows environment that lets you build, 
share, and run containerized applications and microservices.
It provides a straightforward GUI (Graphical User Interface) that lets you manage your containers, applications, and 
images directly from your machine. You can use Docker Desktop either on its own or as a complementary tool to the CLI.

Docker Desktop reduces the time spent on complex setups so you can focus on writing code.
It takes care of port mappings, file system concerns, and other default settings, and is regularly updated with 
bug fixes and security updates.

#### Lando

![Lando](~@images/lando-logo.png)

Quick Installation: To simply install Lando, follow the steps outlined on the official page here:
https://docs.lando.dev/getting-started/installation.html.
Please also see the Lando requirements section for details of Docker requirements for different operating systems.
[https://docs.lando.dev/basics/installation.html#system-requirements](https://docs.lando.dev/basics/installation.html#system-requirements)
(Read on for more information on Lando, otherwise, go straight to the next step.)

Lando is a free, Open Source, cross-platform, local development environment and DevOps tool built on Docker container 
technology. Designed to work with most major languages, frameworks and services, Lando provides an easy way for 
developers of all skill levels to specify simple or complex requirements for their projects, and then quickly 
get to work on them.
Lando basically allows you to mimic a Cloud-hosting environment locally - it's like having a server on your laptop. 
On a high level, your lando configuration should contain ALL the things you need to run, develop and test your project.

## Installing LocalGov Drupal locally with Composer and Lando

Now that we have all the required dependencies in place, we can create our first LocalGov Drupal project locally.
Open your Terminal / Command Prompt and switch to an appropriate directory (for example, on Mac OS X, the ~/Sites 
folder is commonly preferred):

```bash
cd ~/Sites 
```

We are going to use the LGD project template publically available on GitHub, 
https://github.com/localgovdrupal/localgov_project:

![ LGD project template on GitHub ](~@images/localgov-drupal-github.png)

To build the LGD project locally, we need to run the following Composer command and bring all the required packages 
together in a new LGD_DEMO directory (feel free to change the project name to anything else you might prefer):

```bash
composer create-project localgovdrupal/localgov-project LGD_DEMO --no-install 
```

The Terminal output of this command will look something like the following:

![ LocalGov Drupal: Composer command output ](~@images/LGD-Composer-project-build-terminal-output.png)

Switch to the LGD_DEMO directory by running:

```bash
cd MY_PROJECT
```

Then, fire up Lando:

```bash
lando start
```

The Terminal output of this command will look something like the following:

![ LocalGov Drupal: Lando start command output ](~@images/LGD-lando-start-1.png)

When the process of building Lando is complete, a list of useful details is presented, including the services installed
in the corresponding Docker containers as well as their corresponding URLs:

![ LocalGov Drupal: Lando start command output end ](~@images/LGD-lando-start-2.png)

The Docker dashboard, with all our LGD demo project's containers up and running, should look something like the 
following - keep in mind that some variations are possible due to Operating System differences or even Mac chip 
variants (Intel / Silicon):

![ Lando start: LocalGov Drupal containers ](~@images/LGD-lando-start-complete-docker-containers.png)

Now it's time to bring in all the Composer packages for this project 
(this can take a while as the command downloads all the necessary packages from their corresponding repositories).
As you might be running a different version of PHP on your host machine from the version that Lando runs, 
it is advisable to run composer install from within Lando. This ensures dependencies reflect the PHP version that 
the webserver is actually running:

```bash
lando composer install
```

Below, we are presenting the main phases of the composer install process (we're only showing part of the output). 
You can read more about how Composer actually manages and installs dependencies on the Composer documentation page: 
https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies.

1. Locking dependencies to their defined versions:
![ LocalGov Drupal: Composer install output - 1 ](~@images/LGD-lando-composer-install-1.png)

2. Downloading the locked dependencies:
![ LocalGov Drupal: Composer install output - 2 ](~@images/LGD-lando-composer-install-2.png)

3. Installing the downloaded dependencies:
![ LocalGov Drupal: Composer install output - 3 ](~@images/LGD-lando-composer-install-3.png)

4. Applying patches (these have also been pre-defined in the LGD Composer template):
![ LocalGov Drupal: Composer install output - 4 ](~@images/LGD-lando-composer-install-4.png)

5. Scafoolding files (which is a fancy name for putting certain key Drupal files and their contents in place):
![ LocalGov Drupal: Composer install output - 5 ](~@images/LGD-lando-composer-install-5.png)

After the composer install process has been completed, we can finally install our LGD site locally using the 
site install drush command (for more on drush, Drupal's magic scripting tool, see https://www.drush.org):

```bash
lando drush si localgov -y
```

The output of the command will look something like the following:

![ LocalGov Drupal: drush site install output ](~@images/LGD-lando-drush-site-install)

Believe it or not, our new LocalGov Drupal site is ready! Remember those APPSERVER URLs returned by lando start above? 
You can use any of them, and the returned credentials from the last command, to access your Drupal administrator 
account on your brand new LGD site on your favourite browser:

![ LocalGov Drupal: Demo site user login page ](~@images/LGD-demo-site-user-login-page)

Logging into your admin account lands you on the Drupal content page:

![ LocalGov Drupal: Demo site admin area ](~@images/LGD-demo-site-admin-logged-in)

Your new LocalGov Drupal site is now up and running locally. 
From here, you can explore all the beautiful features LGD offers, such as content types, components and many more!

## Additional Composer notes

If developing locally and you want to force composer to clone again
from source rather than use composer cache, you can add the `--no-cache` flag.

```bash
lando composer create-project localgovdrupal/localgov-project MY_PROJECT --stability dev --no-cache  --no-install 
```

If you just want to pull in the latest changes to LocalGov Drupal run composer
update with the `--no-cache` flag.

```bash
lando composer update --no-cache
```

If you want to be sure you are getting the latest commits when developing,
clearing composer cache, deleting the folders and re-running composer update
seems to be a solid approach:

```bash

rm -rf web/profiles/contrib/ web/modules/contrib/ web/themes/contrib/;
composer clear-cache; composer update --with-dependencies --no-cache;
lando start;
lando drush si localgov -y;

```

If you run into [memory limit errors](https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors)
when running Composer commands, prefix the commands with `COMPOSER_MEMORY_LIMIT=-1`.
For example, to install the project run:

```bash
COMPOSER_MEMORY_LIMIT=-1 composer create-project --stability dev localgovdrupal/localgov-project MY_PROJECT
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for current contribution guidelines.

## Issue tracking

In the early development stages, most issues will be tracked in this repository
<https://github.com/localgovdrupal/localgov/issues>.

Development issues relating to specific projects or module should be tracked in
the project repository. In the future we might set up a separate repository for
centralised issue tracking of bug reports for end users.

## Development setup

The main development environment in use is currently
[Lando](https://docs.lando.dev/) – a Docker based development environment that
works on Linux, MacOS and Windows.

@todo Document Lando setup.

## Coding standards

PHP CodeSniffer is installed as a dev dependency by Composer and configured to
use Drupal coding standards and best practices. It is a good idea to run these
before committing any code. All code in pull requests should pass all
CodeSniffer tests.

To check code using Lando run:

```bash
lando phpcs
```

To attempt to automatically fix coding errors in Lando run:

```bash
lando phix
```

### Coding standards resources

* [Drupal coding standards](https://www.drupal.org/docs/develop/standards)

## Running tests

The included `phpunit.xml.dist` file contains configuration for automatically
running the LocalGov Drupal test suite.

To run all LocalGov Drupal tests with Lando use:

```bash
lando phpunit
```

To run all the tests for a specific module use:

```bash
lando phpunit web/modules/contrib/localgov_my_module
```

Tests can be filtered using the `--filter` option. To only run a specific test
use:

```bash
lando phpunit --filter=myTestName
```

### Testing resources

* [PHPUnit documentation](https://phpunit.readthedocs.io/en/7.5/)
* [Drupal 8 PHPUnit documentation](https://www.drupal.org/docs/8/testing/phpunit-in-drupal-8)
* [Drupal 8 testing documentation](https://www.drupal.org/docs/8/testing)
* [Workshop: Automated Testing and Test Driven Development in Drupal 8](https://github.com/opdavies/workshop-drupal-automated-testing)
