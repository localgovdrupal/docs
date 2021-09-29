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

Our front end theme uses the localgov_skeleton theme as its base, this allows to share generic templates with other themes if you wanted to build a custom child theme not related to the localgov_theme. Jump to [documentation](/devs/theme/old-skeleton-theme).


## Styling
***

The theme is using SASS with [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/introduction/) and is compiled to CSS with Gulp. All source files can be found in `/assets/scss`, each file will be compiled into a file with the same name and folder structure into `/assets/css` that you can then include in your Drupal libraries. Files with names beginning with an underscore `_` will be ignored by the compiler, but they can still be imported into other SASS files.

### Bootstrap

tbd...

### Utilities

tbd...

### CK Editor Stylesheets

We support writing stylesheets specifically for the CK editor. In the main CK file `/assets/scss/lib/ck_style.scss` you'll find specific partials being included, these are fontface declarations, typography stylings and any other rules you want to include specifically within the CK editors in Drupal. The reason for using a separate stylesheet as opposed to the main is to limit the overall size of the CSS as it gets loaded and processes into many iframes.

This will be compiled to `/assets/css/ck_style.css` automatically with the main stylesheet.

CSS is included in Drupal CK Editor using this declaration in the `localgov_theme.info.yml` file:

```yml
ckeditor_stylesheets:
  - assets/css/font-face.css
  - assets/css/lib/ck_style.css
```

## Javascript

Currently Javascript is not being compiled or handled in anyway by Gulp so it's up to you how you structure your code. Code can be found in `/assets/js` and there is a mix of examples including jQuery and using Drupal behaviors.


## Automated tests

The theme features some automated tests written with [Mocha.js](https://mochajs.org/) localed in `tests/`. The purpose of these tests is to ensure consistency between versions and deployments and to highlight any regression issues, particularly regarding Gulp.

Mocha.js doesn't make assumptions about your assertion library of choice, in this project we opted for [Chai](https://www.chaijs.com/).

### Usage

To run the tests you can run `npm test` or `npm run health-check`. In the future more tests may be added to these, the declaration of the scripts are in the `package.json` under `scripts:`.

Generally using the helper functions is the recommended approach, so that if we need to make changes to the functions then it won't affect the written tests.

### Edge cases

There have been some difficulties with automatically testing that some Gulp commands exit without any errors. To get around this we've been running tests that check for those commands using `@jsdevtools/chai-exec` and actually running commands using a function wrapping `execSync`.

`chai-exec` does allow us to easily check that the command ran successfully but the compiled files have their output removed as part of an internal clean up step. As a result when we test for npm commands we test using chai-exec first to ensure it can run and then we re-run the command using the `runCommand()` function and then we can test for the compiled files.

### Extending

You can create your own tests by adding files to the tests folder. The naming convention is generally `xyz.test.js` but any JS file should work. You can then add your own script in the package.json to run the file using Mocha.
