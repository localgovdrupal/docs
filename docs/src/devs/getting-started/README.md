# Getting started

## Requirements for installing LocalGov Drupal locally for testing and development

There are numerous ways of installing and running Drupal _locally_. Local development is an essential part of every web 
development workflow and it involves using your machine (a laptop for example) to maintain a stable development environment 
that closely matches a real-life web server environment commonly available on the Cloud.

That way, you're able to _rehearse_ and test the code changes you're applying on your local system before deploying them 
to a web-based server environment.

There are two main approaches to local development:

**1. Using Docker for a containerized approach:** 

Tools such as Lando or DDEV "packages" all the required technologies (web server, PHP and database) for you using
Docker, and simulates a server environment. This approach is more automated and requires less manual work as the
tool takes care of every component's version updates and compatibility is guaranteed.

**2. Using your machine's native technologies:**

Historically, we installed a LAMP-style stack manually, e.g. PHP, Apache/Nginx and a database. This approach generally
requires more time spent on maintaining and updating every technology separately as well as making sure that all the
moving parts continuously work well together.

No matter the local installation approach you adopt, Composer is required.

### Composer

Drupal's Core, modules and themes, are all "packages" and Composer manages these dependencies in a structured and 
organised manner. To put a Drupal website together, all assets have to be sourced from a dedicated URL and compiled to 
create a fully functional build. To do that, Composer i.e. Drupal's dependency manager of choice, has to be present on 
your local system.

There are two ways to install Composer, locally and globally. The latter is usually preferred as, with a single 
executable installed once, it allows Composer to manage the dependencies of multiple projects present on your machine. 

### Working with Lando/DDEV containerized servers

Many of us use a containerization technology locally for testing and development, such as Lando or DDEV. Both of these
tools simplify the process of setting up and managing development environments for web projects. To use LocalGov Drupal
locally with either Lando or DDEV, you'll need to have Docker installed first.

Different Docker solutions are recommended for macOS, Linux, and Windows, so please follow the instructions:

- [Installing DDEV and Docker](https://docs.ddev.com/en/stable/users/install/)
- [Installing Lando and Docker](https://docs.lando.dev/getting-started/requirements.html)

With DDEV or Lando in place, you can now move on to:

- [Working with Lando](/devs/getting-started/working-with-lando.html) or
- [Working with DDEV](/devs/getting-started/working-with-ddev.html)


### Running local servers natively

It's also possible to set up a local server in a more manual way, as some people prefer running the web servers natively
on their host machine. In that case, you will need to locally install the appropriate versions of:
- PHP
- Database server
- Web server
- [Composer](https://getcomposer.org/doc/00-intro.md#globally)

You can have a more thorough look on our dedicated page for the [Drupal Requirements](/devs/getting-started/drupal-requirements.html).

## Contributing

See [Contributing](/contributing/) for current contribution guidelines.

## Issue tracking

In the early development stages, most issues will be tracked in this repository
<https://github.com/localgovdrupal/localgov/issues>.

Development issues relating to specific projects or module should be tracked in
the project repository. In the future we might set up a separate repository for
centralised issue tracking of bug reports for end users.

### Coding standards resources

* [Drupal coding standards](https://project.pages.drupalcode.org/coding_standards/)

### Testing resources

* [PHPUnit documentation](https://phpunit.readthedocs.io/en/)
* [Drupal 8 PHPUnit documentation](https://www.drupal.org/docs/develop/automated-testing/phpunit-in-drupal)
* [Drupal 8 testing documentation](https://www.drupal.org/docs/develop/automated-testing)
