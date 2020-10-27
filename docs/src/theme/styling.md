# Styling

The theme is using SASS with 

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
