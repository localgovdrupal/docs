# Getting started

## Prerequisites

To run a local development version of LocalGov Drupal following our recommended
setup, you will need the following.

* Composer: [getcomposer.org](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos)
* Lando: [docs.lando.dev](https://docs.lando.dev/basics/installation.html)

## Installing LocalGov Drupal

To install LocalGov Drupal use the
[Composer-based project template](https://github.com/localgovdrupal/localgov_project).
Change `MY_PROJECT` to whatever you'd like your folder to be called.

```bash
composer create-project --stability dev localgovdrupal/localgov-project MY_PROJECT --remove-vcs 
```

Change directory into the MY_PROJECT directory and run lando start.

```bash
cd MY_PROJECT
lando start
```

Once lando has finished building, run the site installer with the `localgov` install profile.

```bash
lando drush si localgov -y
```

## Installing from the UI (alternative)

Assuming that your settings.local.php can connect to the database and your file permissions are as expected you can visit your local URL which by default in the Lando setup is `http://localgov.lndo.site/` and you will encounter the Drupal site installation form.

When you reach the profile selection screen make sure you choose 'LocalGovDrupal' before continuing, otherwise you might have to restart the entire process.

![Screenshot of Drupal site installation screen when choosing the installation profile for localgov](~@images/install-from-ui--choose-profile.png)

Next Drupal will install all the default configuration and modules for the profile before reaching the site configuration form where you can setup your site name and user 1 details, you can always change these later.

![Screenshot of Drupal site installation screen when entering the site configuration details](~@images/install-from-ui--enter-site-config.png)

And that's it! You should now be redirected to your site and logged in as user 1.

## Composer notes

If developing locally and you want to force composer to clone again
from source rather than use composer cache, you can add the `--no-cache` flag.

```bash
composer create-project localgovdrupal/localgov-project MY_PROJECT --stability dev --no-cache
```

If you just want to pull in the latest changes to LocalGov Drupal run composer
update with the `--no-cache` flag.

```bash
composer update --no-cache
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

We accept contributions from anybody and any level of involvement is greatly appreciated, even small things like reporting issues.

You can explore more about how to get involved in the [Contributing](/contributing) section.

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

Jump to [Working with Lando](/devs/getting-started/working-with-lando) for more information.

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
