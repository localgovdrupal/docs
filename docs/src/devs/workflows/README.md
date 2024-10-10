# Development workflows

Developers will often have preferences on how they work, but it is worth highlighting different development workflows.
There are at least two main strands of development to consider.

1. Collaboration on the products within the open source Github organisation
2. Installing, developing and deploying a site based on LocalGov Drupal or LocalGov Microsites.

## 1. Collaborating on Github

We encourage everyone to collaborate on Github to help improve the products, modules and themes we use and support.
To help with this, we aim to follow a number of conventions and best practices.

 - [Code of conduct](https://localgovdrupal.org/resources/code-conduct)
 - [Contribution guidelines](https://github.com/localgovdrupal/localgov/blob/2.x/CONTRIBUTING.md)
 - [Git branch naming conventions](https://github.com/localgovdrupal/localgov/wiki/Git-branch-naming-conventions)
 - [Module, project and field naming conventions](https://github.com/localgovdrupal/localgov/wiki/Naming-conventions)
 - [Reporting security issues](https://github.com/localgovdrupal/localgov/wiki/Security)
 - [Testing branches for pull requests](https://github.com/localgovdrupal/localgov/wiki/Testing-branches-and-PRs)

## 2. Building and deploying your own site(s)

Since Drupal 8, the Drupal community has benefitted from the use of composer to manage code dependencies and configuration management to manage the state of a Drupal site. This has led to different approaches to building and deploying code and configuration and some challenges inherent in doing so consistently.

Useful backgound reading:

 - [Configuration management in Drupal](https://www.drupal.org/docs/configuration-management)
 - [Deployment Workflows for Drupal](https://drupalize.me/topic/deployment-workflows)

For an example on how to install LocalGov Drupal and deploy changes to a development site:
 -  [Installing and deploying a LocalGov Drupal site] DEAD LINK

## Reviewing and selecting updates from a Drupal distribution or project.

Sometimes the LocalGov Drupal distribution will want to make changes to the default configuration that comes when we run the install profile.
Where possible, we try not to deploy updates to configuration as we cannot assume that individual installations will have kept the original configuration. On occasions we will want to use update hooks to change active configuration. These changes will be clearly documented in release notes and will aim to avoid making changes to configuration that has deviated from the original.

There are also modules that can help with reviewing and accepting configuration changes from upstream distributions and modules.

 - https://www.drupal.org/project/config_distro
 - https://www.drupal.org/project/config_sync
