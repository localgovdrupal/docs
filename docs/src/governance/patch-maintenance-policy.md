# Patch maintenance policy

Drupal core and contributed project code sometimes needs patching to fix
specific issues. The policy outlines how we deal with patches and maintain them
in a variety of situations.

## 1.0 Where patches are defined

We currently aim to include patches in the module, project or theme that
requires the project to be patched.

For example, the [locacalgov profile requires drupal/core (Drupal core)](https://github.com/localgovdrupal/localgov/blob/4b409e32693c80a6d5bb6fd46f73b5455427895c/composer.json#L16):

So [patches for drupal/core live in the localgov profile's composer.json](https://github.com/localgovdrupal/localgov/blob/4b409e32693c80a6d5bb6fd46f73b5455427895c/composer.json#L61-L63).

## 2.0 Applying patches

We currently use the composer-patches plugin to manage patches with composer.
See [https://github.com/cweagans/composer-patches](https://github.com/cweagans/composer-patches)

This supports nesting of patches in composer.json files of projects that we
require from the main composer.json file or our project.

This may change in the future!

## 3.0 Testing patches

To test a pull request with changes to patches, we sometimes need to run
a composer require with an alias, to require a dev branch while pretending to
composer we are on a recent tagged release.

For example, [here's a historical change to a patch in the localgov profile](https://github.com/localgovdrupal/localgov/pull/756/files).

This is a merge request from the 'fix/redirect-1.10-patch' branch.

To test this branch, from the composer root of our LocalGov Drupal project, we
can run.

```
composer require "localgovdrupal/localgov:dev-fix/redirect-1.10-patch as 3.0.10" -W
```

This will fetch the `fix/redirect-1.10-patch` branch but alias it as 3.0.10, the
current latest release of the localgov profile.

## 4.0 Patching major versions of Drupal core

Sometimes we have a patch required for one version of Drupal that is not needed
for a more recent version.

In this case, we aim to support the latest version of Drupal core that we are
currently able to support (or contributed project, module, theme) and remove
any patches that have been merged into the upstream codebase.

At the time of writing, we are supporting Drupal 10 and unable to support Drupal
11 just yet, so we are targetting Drupal 10.3.6, the latest version of Drupal 
core.

For example, we relied on a patch for Drupal core in our localgov profile.

See [this line in the composer.json](https://github.com/localgovdrupal/localgov/blob/3.0.10/composer.json#L63)

This was [committed to Drupal core](https://git.drupalcode.org/project/drupal/-/commit/79054d8a7b2595fa2e074e40d19d7d66b2918d79)
and [a new 10.3.6 release was made](https://www.drupal.org/project/drupal/releases/10.3.6)

So we now [remove this patch from the localgov profile](https://github.com/localgovdrupal/localgov/pull/781/files).

We also add notes to the README.md and to the subsequent release notes to advise
people that this patch might be desirable if you are using Drupal core before
version 10.3.6.

## Using patches-ignore

It is also useful to note that we can ignore patches in dependent packages with
composer's patches-ignore.

For example, the 2.1.3 release of localgov/localgov_services [includes a patch](https://github.com/localgovdrupal/localgov_services/blob/2.1.13/composer.json#L26)
for Drupal core.

```
"patches": {
    "drupal/core": {
        "node_access filters out accessible nodes when node is left joined (1349080)": "https://git.drupalcode.org/project/drupal/-/commit/c271adb.diff"
    }
}
```

This is needed for Drupal 9, but not needed for Drupal 10.

However localgov_services still supports both Drupal 9 and 10.

To work around this, we kept the patch in localgov_services and told composer
to ignore it in our root composer.json like this:

```
"patches-ignore": {
    "localgovdrupal/localgov_services": {
        "drupal/core": {
            "node_access filters out accessible nodes when node is left joined (1349080)" : "https://git.drupalcode.org/project/drupal/-/commit/c271adb.diff"
        }
    }
},
```

[See https://github.com/localgovdrupal/localgov_project/blob/3.1.1/composer.json#L71-L77](https://github.com/localgovdrupal/localgov_project/blob/3.1.1/composer.json#L71-L77)

As far as we know, `patches-ignore` only works in the root composer.json file.

## Notes

It is important to note that the localgovdrupal/localgov_project composer file
is meant as both a starting point and a reference for ongoing LocalGov Drupal
codebases. Most people will use this as a starting point and evolve and maintain
their own root composer.json file as the project evolves.
