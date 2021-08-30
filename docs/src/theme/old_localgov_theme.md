---
tags:
  - theme
  - theming
  - frontend
---

# LocalGov Theme (Deprecated)

## Deprecated

<span style="color:#B30000;">**This documentation is for the original localgov_theme and the associated localgov_skeleton theme, which have been superceded by the [localgov_base theme](https://github.com/localgovdrupal/localgov_base) documentation for which is in production.**</span>

***

[GitHub Repository](https://github.com/localgovdrupal/localgov_theme)

The theme uses Bootstrap 4 and uses Gulp for compiling SASS to CSS. We aim for each library to be included and compiled separately so that child themes can selectively override each library they don't wish to inherit.

## Installation

The theme should automatically be installed through composer if you're getting setup on the localgov project. You can also simply clone the theme and remove the `.git` folder, make sure you clone from the latest `production` branch.

## Getting started

Install dependencies using `npm install`.

If you want to start development then `npm run-script dev` will run compilers, with watchers for file changes and BrowserSync.

You can compile the theme for production using `npm run-script generate`. This will run all the compilers once with the 'production' environment variable _without_ any watchers or BrowserSync.

An alternative to `dev` is the `build` script, this will run the same function with the 'production' environment variable instead. This can be useful for debugging production compilations.

The main difference between 'production' and 'development' compilations are how some internal plugins work and in some cases if particular plugins such as PurgeCSS are run.

The `node_modules` folder will be, and should be, gitignored. You can replace `npm` with `yarn` if you prefer it, just note that the lock file will be different and that may have issues.

## Skeleton theme

Our front end theme uses the localgov_skeleton theme as its base, this allows to share generic templates with other themes if you wanted to build a custom child theme not related to the localgov_theme. Jump to [documentation](/theme/skeleton-theme).

## Admin theme

We also have an admin theme that comes with some enhancements to the Claro theme found in core. You can read more about it in its [documentation](/theme/admin-theme).
