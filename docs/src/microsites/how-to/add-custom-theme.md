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

Once the new theme is ready, a developer will need to deploy then theme, then install it through the Appearance UI of the control site. 

When the theme is installed it will be available to Microsite admins in the [Site settings](/microsites/how-to/manage-site-settings.md) tab of the microsite.
