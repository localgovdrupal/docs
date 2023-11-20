# Getting started

## Requirements for installing LocalGov Drupal locally for testing and development

### Drupal Requirements

LocalGov Drupal is built on Drupal and, naturally, the same requirements apply. To install LocalGov Drupal locally you will need the appropriate versions of:
- PHP
- Database server
- Web server

You can have a more thorough look at the Drupal requirements on [Drupal requirements](https://docs.localgovdrupal.org/devs/getting-started/drupal-requirements.html).

### Working with Lando or DDEV

Many of us use Lando or DDEV locally for testing and development. Both of these tools use containerization technology
to simplify the process of setting up and managing development environments for web projects.
Some people prefer running the web servers natively on their host machine.

If you choose to work with Lando or DDEV, make sure you've installed the additional requirements below before moving on
to [working with Lando](https://docs.localgovdrupal.org/devs/getting-started/working-with-lando.html) or
[working with DDEV](https://docs.localgovdrupal.org/devs/getting-started/working-with-ddev.html) respectively.

### Additional Requirements

#### Composer

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

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for current contribution guidelines.

## Issue tracking

In the early development stages, most issues will be tracked in this repository
<https://github.com/localgovdrupal/localgov/issues>.

Development issues relating to specific projects or module should be tracked in
the project repository. In the future we might set up a separate repository for
centralised issue tracking of bug reports for end users.

### Coding standards resources

* [Drupal coding standards](https://www.drupal.org/docs/develop/standards)

### Testing resources

* [PHPUnit documentation](https://phpunit.readthedocs.io/en/7.5/)
* [Drupal 8 PHPUnit documentation](https://www.drupal.org/docs/8/testing/phpunit-in-drupal-8)
* [Drupal 8 testing documentation](https://www.drupal.org/docs/8/testing)
* [Workshop: Automated Testing and Test Driven Development in Drupal 8](https://github.com/opdavies/workshop-drupal-automated-testing)
