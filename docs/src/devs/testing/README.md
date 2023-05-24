---
tags:
  - test
  - testing
  - automated testing
---

# Testing expectations

As part of our [Development and contribution processes and standards](https://github.com/localgovdrupal/localgov/blob/2.x/CONTRIBUTING.md) we state our aim to [cover all new functionality with automated tests](
https://github.com/localgovdrupal/localgov/blob/2.x/CONTRIBUTING.md#automated-tests):

> Developers on this project will embrace the philosophy of using automated
> tests, consisting of both unit tests (which test the functionality of classes
> at a low level) and functional tests (which test the functionality of Drupal
> systems at a higher level, usually involving web output).

This documentation aims to help developers run tests locally, debug existing tests and write new tests.

# Running tests in Lando from the host

Assuming you have the standard lando setup that is deployed with LocalGov Drupal,
you should be able to run tests from your host machine with the following command.

```bash
lando phpunit
```
This command on its own will run all the LocalGov Drupal tests in the following
directories:

web/profiles/contrib/localgov
web/modules/contrib/localgov_*

# Runing tests inside Lando directly

It seems that the phpunit output can be more detailed ifyou run it inside lando.
To do this

```bash
lando ssh
phpunit
```

The rest of this documentation will assume that you are shelled into the Lando
container.

## Running specific tests

To run tests from a given module or folder you can specify a path. For example
to run all tests in the localgov_subsite module, you can with:

```bash
phpunit web/modules/contrib/localgov_subsites
```

Note: this will run all the tests under that path, which in this case will
include the tests under web/modules/contrib/localgov_subsites/modules/localgov_subsites_paragraphs/tests
too.

Running the following command will restirct the tests to just those under the
localgov_subsites/tests directory.

```bash
phpunit web/modules/contrib/localgov_subsites/tests
```

To run a specific test, you can use the --filter command.

```bash
phpunit --filter=myTestName
```


# phpunit.xml.dist

PHPunit will use the default configuration specified in the
[phpunit.xml.dist](https://github.com/localgovdrupal/localgov_project/blob/2.x/phpunit.xml.dist)
file that comes with the distrubution.

# phpunit.xml

You can create a phpunit.xml file in your project root directory and phpunit
will use this instead of the phpunit.xml.dist. This is useful if you want to
change the database connection or set a directory to ouput html of failed tests.



