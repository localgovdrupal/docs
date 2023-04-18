# Installing and deploying a LocalGov Drupal site

If you are new to Drupal it is worth thinking about how best to build, develop and deploy your website. 

## 1. Initial installation

The LocalGov Drupal distribution comes with a localgov_project repository and composer package that helps to scaffold the Drupal core files and comes with configuration for local development (Lando and DDEV), PHPunit testing and coding standards review.

The default documentation assumes:
 - PHP
 - Composer
 - Docker 
 - Lando 

We use composer to install the project.

composer create-project localgovdrupal/localgov-project MY_PROJECT --no-install 
cd MY_PROJECT
lando start
lando composer install
lando drush si localgov -y

At this stage we will have a local site up and running. 

This has run the installation profile which enables some default modules and themes for the LocalGov Drupal distribution. 

## 2. Committing your code to a git repository

We now have a local codebase that will run Drupal. Most of the code we have locally was pulled in by composer on the composer install step. There are at least two approaches to adding this to a git repository.

a. Slimline git repository: 
Exclude vendor and composer files, just committing the composer.lock files, custom code and config. In this case we need to run composer install on the server (dev/test/prod) when deploying updates.  

b. Monolithic git repository. 
Include all vendor, Drupal core and contributed code. In this case the git repository has all the code files needed to run the website. (Note: this still does not include content files that live in sites/default/files or environment  specific files like settings.local.php )

For now, let’s work with a) - we’ll commit just the files we need to define the website application. This is widely regarded as best practice and the default .gitignore is set up with this in mind.


