---
tags:
  - local development
  - drupal
  - php
---

# Drupal Requirements

This page describes the minimum requirements that need to be honoured on any environment Drupal is set up on, locally or 
in the Cloud (e.g. development or production environments).

For local development and testing, if you choose to run a local server natively, the following requirements for PHP and 
database and web servers should be in place. If you work locally using Lando or DDEV, the containers will already have 
everything properly installed for you (that's the main reason why many of us prefer this approach).

## PHP

We follow [Drupal's PHP requirements](https://www.drupal.org/docs/system-requirements/php-requirements).

Drupal 10 uses Symfony 6, which requires PHP 8.1. Requiring PHP 8.1 helps Drupal provide a longer support lifetime
for Drupal 10, as well as more stability and predictability in its dependency requirements.

![Compatible PHP versions for various Drupal versions](~@images/drupal-php-versions.png)

### PHP Extensions

You will also need to have certain PHP extensions enabled including:

- PHP mbstring
- PHP cURL
- GD library
- XML

You can find more information about Drupal's PHP extension requirements 
[here](https://www.drupal.org/docs/system-requirements/php-requirements#extensions))

## A database server like MySQL
You can find detailed information about Drupal's database server requirements 
[here](https://www.drupal.org/docs/system-requirements/database-server-requirements).

## A web server like Apache2
You can find more information about Drupal's web server requirements 
[here](https://www.drupal.org/docs/system-requirements/web-server-requirements).
