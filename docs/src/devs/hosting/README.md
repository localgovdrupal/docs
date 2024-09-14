# Hosting a LocalGov Drupal site

There are many options for hosting a Drupal wesite and a LocalGov Drupal site is
generally no different.

For most council sites, it is considered best practice to have a three tiered
approach for your website.

 - Development site
 - Staging / testing site
 - Production site

Most developers prefer to work on their local computers in a development
environment that closely matches the production site environment, with the same
versions of webserver, PHP, MySQL etc. Often Lando or DDEV will be used on the
developer's local machine to work in Docker containers, before deploying changes
to dev / staging / production sites.

## Development site

This is where developers can deploy changes to code and configuration to review
the functionality and styling of the site and resolve any bugs before deploying
to the staging site for acceptance testing.

## Staging site

Once work is reaady to be deployed the developers and wider team use the staging
site to test the deployment against a copy of the production database and files.
Ideally the staging site should be identical to the produciton site with any
additional performance and security configurations to support full testing.

## Production site

This is the live public facing site where content designers manage live content
and the public can access and interact with the content and funcionality.

## Hosting providors and options

Councils hosting with LocalGov Drupal use a range of providors and hosting
technologies and we are not in a position to recommend one over another.
We'd recommend talking to other councils about their experience hosting
LocalGov Drupal.

### Croydon Council

Croydon Council manage their hosting on the Microsoft Azure platform. There is
some usful discussion of that on this Github issue:
https://github.com/localgovdrupal/localgov/issues/497

### Brighton and Hove City Council

Brighton and Hove City Council use the Acquia Cloud platform to host their main
public facing site.

### How does your council host LocalGov Drupal?

Please feel free to edit this page and add details of the hosting setup at your
council, it is useful for new councils to see the range of approaches.
