---
tags:
  - theme
  - theming
  - frontend
---

# LocalGov Base

[GitHub Repository](https://github.com/localgovdrupal/localgov_base)

This theme was developed with scalability and easy of use in mind. That means, the theme should be a very good starting point for any website using the LocalGov Drupal distribution, and it provides an easy way to be customised out of the box.

## Inline Documentation
Instead of creating documentation for the theme and storing it in a wiki or something else that is unlikely to be updated, we have written detailed comments inline with the code. This should make it easier to know exactly what code block any specific documentation item refers to.

## Installation

The theme should automatically be installed through composer if you're getting setup on the localgov project. You can also simply clone the theme and remove the `.git` folder, make sure you clone from the latest `production` branch.

## Getting started

### Sub-theme

Create a sub-them by running the sub-theme creation script in the `/scripts` directory, like so:
```
  cd web/themes/contrib/localgov_base/
  bash scripts/create_subtheme.sh
```

You need to enter two items when creating a sub-theme:

1. The name of the theme, this can be anything and can include spaces, e.g. `Super Council`
2. The machine name for the theme, this must start with a letter and use only lowercase letters and underscores, e.g. `super_council`

#### Create a sub-theme demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/41Y-Dd4aJFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Custom styles

The theme relies on css custom properties (aka css variables). You can set these in the `css/variables.css` file in your subtheme.

This is where you set your colours, fonts, spacing, etc. Then you "apply" these variables where needed, like so:
```
  :root {
    /* Set/Override Variables */
    --color-accent: red;
    --spacing-largest: 5rem;

    /* Apply Variables */
    --color-link: var(--color-accent);
    --breadcrumbs-background-color: var(--color-accent);
    --section-spacing-vertical-header: var(--spacing-largest);
  }
```
If you need to add any CSS overides, you can create custom CSS files for these and then a library/libraries to attach them to your components.

## Automated CSS Coding Standards
To make sure we follow Drupal's CSS coding standards (without having to think about it), there is a handy `npm` script to automatically scan and fix any CSS coding standards violations.

Simply run `npm install` to get the necessary packages, then run `npm start` to scan the files and fix any issues.

