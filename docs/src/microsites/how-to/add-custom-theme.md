# Add a custom theme

Each microsite can have an entirely custom theme. 

We recommend creating a child theme of `localgov_microsites_base`, which is itself a child of `localgov_base`. 

## Create a subtheme
To create a sub-theme, you simply need to run the sub-theme creation script that is in the /scripts directory, like so:
```
  cd web/themes/contrib/localgov_microsites_base/
  bash scripts/create_subtheme.sh
```
You need to enter two items when creating a sub-theme:

1. The name of the theme, this can be anything and can include spaces, e.g. Super Council
1. The machine name for the theme, this must start with a letter and use only lowercase letters and underscores, e.g. super_council

See the `localgov_microsite_base` [README](https://github.com/localgovdrupal/localgov_microsites_base#readme) for more details. 

### Custom Styles
Hopefully most of the custom styles you will need are set via CSS custom properties in the `/css/variables.css` file in your sub-theme.

This is where you set your colours, fonts, spacing, etc. Then you "apply" these variables where needed, like so:

```css
  :root {
    /* Set/Override Variables */
    --color-accent: red;
    --color-accent-contrast: white;
    --spacing-largest: 5rem;

    /* Apply Variables */
    --color-link: var(--color-accent);
    --breadcrumbs-background-color: var(--color-accent);
    --section-spacing-vertical-header: var(--spacing-largest);
  }
```

If you need to add any CSS overides, you can create custom CSS files for these and then a library/libraries to attach them to your components.


## Enabling the theme

Once the new theme is ready, a developer will need to deploy then theme, then enable it through the Appearance UI of the control site. 

Note: Enable this theme, using the "Enable" button only, <strong>not</strong> the "Enable and set as default" button, even if you intend to use it as the default theme for every site.

If you _do_ want to use it as the default theme for every site you can then hit the "Set as default" button. This 2-step process is needed to ensure all the blocks from the default theme get transition to the same block regions in your new theme.


## Overriding the default theme on an individual subsite.

When the theme is installed it will be available to Microsite admins in the [Site settings](/microsites/how-to/manage-site-settings.md) tab of the microsite.

Navigate to the **Site settings** > **Theme override** tab of your microsite. 

In the *Default theme* tab you should be able to select your new theme.

