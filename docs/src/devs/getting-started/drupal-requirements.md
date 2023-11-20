---
tags:
  - local development
  - ddev
  - docker
  - composer
---

# Drupal requirements

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