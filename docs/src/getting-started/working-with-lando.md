# Working with Lando

[Lando documentation](https://docs.lando.dev/)

In the main project we've provided a `.lando.dist.yml` file out of the box to make it easier to get started with the local development setup. Of course you are free to use other alternatives to Lando.

If you've never used Lando before you should read the [basics](https://docs.lando.dev/basics/); essentially it is a wrapper around Docker providing a much more simplified setup.

## Usage

Assuming you've installed Lando and have it setup, the commands you will commonly use are

`lando start` - starts up the project from the `.lando.yml` file, if it's the first time it will pull the images and build the project

`lando stop` - halts the project

`lando help` - provides a full list of available commands, including custom commands

`lando db-import file.sql` - imports a database file, accepts gzipped databases

`lando drush` - custom command to run drush commands inside the appserver container

`lando npm` - custom command to run npm inside the node container

For a full list you can visit the [official documentation](https://docs.lando.dev/basics/usage.html).

Lando also has [several guides](https://docs.lando.dev/guides/lando-101/lando-overview.html) for How-Tos, including using it with [PhpStorm](https://docs.lando.dev/guides/lando-phpstorm.html), [VSCode](https://docs.lando.dev/guides/lando-with-vscode.html) and [working with PHP](https://docs.lando.dev/guides/installing-php-extensions-on-lando.html).

## Configuration

If your project contains a `.lando.dist.yml` it's meant for that file to be overrideable. In fact you can have multiple layers of configuration so that you can [override](https://docs.lando.dev/config/lando.html#base-file) them with your own config for local development for example.

If you're looking for more configuration options the Lando docs are the best place to find them, here's a useful list:

- [Tooling](https://docs.lando.dev/config/tooling.html) (aka custom commands)

- [Proxying](https://docs.lando.dev/config/proxy.html)

- [Environment](https://docs.lando.dev/config/env.html)

## Extending

In your `.lando.yml` you can continue adding other services for any Python, Solr, Node or database containers your project will need in addition to the defaults. Most Drupal installations are setup with a [recipe](https://docs.lando.dev/config/recipes.html) that simply provides some sensible defaults, but you also have a full list of [services](https://docs.lando.dev/config/services.html#supported-services) you can add. Of course you can also add specific images.
