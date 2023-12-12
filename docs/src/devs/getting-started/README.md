# Getting Started

## Requirements for installing LocalGov Drupal locally for testing and development

There are numerous ways of installing and running Drupal _locally_. Local development is an essential part of every web 
development workflow and it involves using your machine (a laptop for example) to maintain a stable development environment 
that closely matches a real-life web server environment commonly available on the Cloud.

That way, you're able to _rehearse_ and test the code changes you're applying on your local system before deploying them 
to a web-based server environment.

There are two main approaches to local development:

**1. Using your machine's native technologies:**

Some operating systems come with some of the required tools pre-installed out of the box and (e.g. PHP, web and database 
servers). Most of the time, you'll have to manually install the remaining ones. This approach generally requires more 
time spent on maintaining and updating every technology separately as well as making sure that all the moving parts 
continuously work well together. 

**2. Using a containerized approach:** 

i.e. a tool such as Lando or DDEV that "packages" all the required technologies for you and simulates a server environment. 
This approach is more automated and requires less manual work as the tool takes care of every component's version updates 
and compatibility is guaranteed.

No matter the local installation approach you adopt, Composer is required.

### Composer Installation

Drupal's Core, modules and themes, are all "packages" and Composer manages these dependencies in a structured and 
organised manner. To put a Drupal website together, all assets have to be sourced from a dedicated URL and compiled to 
create a fully functional build. To do that, Composer i.e. Drupal's dependency manager of choice, has to be present on 
your local system.

There are two ways to install Composer, locally and globally. The latter is usually preferred as, with a single 
executable installed once, it allows Composer to manage the dependencies of multiple projects present on your machine. 
To install Composer, follow the detailed instructions on the 
[official Composer documentation page](https://getcomposer.org/doc/00-intro.md#globally).

### Working with Lando/DDEV Containerized Servers

Many of us use a containerization technology locally for testing and development, such as Lando or DDEV. Both of these
tools simplify the process of setting up and managing development environments for web projects. To use LGD locally with 
either Lando or DDEV, you'll need to have Docker Desktop installed first.

#### Docker Desktop Installation

Docker Desktop is a one-click-install application for your Mac, Linux, or Windows environment that lets you build, share 
and run containerized applications and microservices. It provides a straightforward GUI (Graphical User Interface) that 
lets you manage your containers, applications, and images directly from your machine.

To install Docker Desktop, follow the steps outlined on the
[official Docker documentation page](https://docs.docker.com/desktop/install/mac-install/#system-requirements).

With Docker Desktop (and Composer) in place, you can now move on to:

- [Working with Lando](/devs/getting-started/working-with-lando.html) or
- [Working with DDEV](/devs/getting-started/working-with-ddev.html)


### Running Local Servers Natively

It's also possible to set up a local server in a more manual way, as some people prefer running the web servers natively
on their host machine. In that case, you will need to locally install the appropriate versions of:
- PHP
- Database server
- Web server

You can have a more thorough look on our dedicated page for the [Drupal Requirements](/devs/getting-started/drupal-requirements.html).

## Contributing

See [Contributing](/contributing/) for current contribution guidelines.

## Issue Tracking

In the early development stages, most issues will be tracked in this repository
<https://github.com/localgovdrupal/localgov/issues>.

Development issues relating to specific projects or module should be tracked in
the project repository. In the future we might set up a separate repository for
centralised issue tracking of bug reports for end users.

### Coding Standards Resources

* [Drupal coding standards](https://www.drupal.org/docs/develop/standards)

### Testing Resources

* [PHPUnit documentation](https://phpunit.readthedocs.io/en/7.5/)
* [Drupal 8 PHPUnit documentation](https://www.drupal.org/docs/8/testing/phpunit-in-drupal-8)
* [Drupal 8 testing documentation](https://www.drupal.org/docs/8/testing)
* [Workshop: Automated Testing and Test Driven Development in Drupal 8](https://github.com/opdavies/workshop-drupal-automated-testing)
