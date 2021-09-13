# Styling

## Deprecated

<span style="color:#B30000;">**This documentation is for the original localgov_theme and the associated localgov_skeleton theme, which have been superceded by the [localgov_base theme](https://github.com/localgovdrupal/localgov_base) documentation for which is in production.**</span>

***

The theme is using SASS with [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/introduction/) and is compiled to CSS with Gulp. All source files can be found in `/assets/scss`, each file will be compiled into a file with the same name and folder structure into `/assets/css` that you can then include in your Drupal libraries. Files with names beginning with an underscore `_` will be ignored by the compiler, but they can still be imported into other SASS files.

## Bootstrap

tbd...

## Utilities

tbd...

## CK Editor Stylesheets

We support writing stylesheets specifically for the CK editor. In the main CK file `/assets/scss/lib/ck_style.scss` you'll find specific partials being included, these are fontface declarations, typography stylings and any other rules you want to include specifically within the CK editors in Drupal. The reason for using a separate stylesheet as opposed to the main is to limit the overall size of the CSS as it gets loaded and processes into many iframes.

This will be compiled to `/assets/css/ck_style.css` automatically with the main stylesheet.

CSS is included in Drupal CK Editor using this declaration in the `localgov_theme.info.yml` file:

```yml
ckeditor_stylesheets:
  - assets/css/font-face.css
  - assets/css/lib/ck_style.css
```
