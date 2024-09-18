# What is subsites extras? 

https://github.com/localgovdrupal/localgov_subsites_extras

This module lets you create menu-driven subsites in your LGD site. The menu defines the structure of the subsite, and also lets you use Drupal's standard menu blocks and tools to display the subsite's navigation and manage the hierarchy of the pages within it.

To use it:

1. Install and enable the module.
2. Add a subsite overview page. Choose a theme, and choose to create a menu link in the subsites menu. Save the page.
3. When you view the page, you can inspect the markup, and should see classes 'subsite-extra' and 'subsite-extra--color-x' (where x is the theme you chose) applied to the body tag. You can use these classes to style the subsite in different colour schemes.
4. Create another page. This time, choose to create a menu link and select the page you just created under "Parent link".
5. Again, you can inspect the markup of this new page, and should see classes 'subsite-extra' and 'subsite-extra--color-x' on the body tag, picked up from the parent.
6. To set up the menus, place a new menu block. Choose the 'subsites' menu when creating the block. Under "Menu levels" set Initial visibility level to 2, and no of levels to display to 1.
7. This module will add a variable into the menu template for the subsite homepage when you're in a subsite. (e.g. this is the link styled like a house on https://www.lbhf.gov.uk/celebrating-hf). To make use of this, add this to your menu template:

```
{% if subsite_homepage_link %}
<div class="subsite--menu__title">
{{ subsite_homepage_link }}
</div>
{% endif %}
```


## Advanced usage

By default, this module will work with the content types and fields provided by localgov_subsites. It doesn't have to though. You can use any node type you like as a subsite homepage, and any field you like to determine the colour scheme. 

One current limitation is that the code currently assumes that the theme field is of a type that has 'value' as a key e.g. a string list field.

There's currently no UI to set these options, but you can change them by editing the localgov_subsites_extras.settings config in your site's exported config, then importing, or overriding it in settings.php like this:

```
$config['localgov_subsites_extras.settings'] = [
'subsite_types' => ['localgov_subsites_overview'],
'theme_field' => 'localgov_subsites_theme',
];
```

## Video demo

Rupert gave us a [demo at our monthly Community Meetup in June 2024](https://youtu.be/rCREsyceNBw?si=VStYnJHetCs0Mpmf&t=1355).
 
And also check out [Mark Conroy's blog on Subsites Extras.](https://mark.ie/blog/using-the-localgov-drupal-subsites-extras-module/)


## Examples in the wild 

* https://www.lbhf.gov.uk/celebrating-hf/celebrating-our-history/black-history-365
* https://www.lbhf.gov.uk/business/business-connects
* https://www.lbhf.gov.uk/pest-control-services
* https://www.essex.gov.uk/children-young-people-and-families/fostering
* https://www.essex.gov.uk/fostering
* https://new.haringey.gov.uk/children-young-people-families/childrens-social-care/fostering


## Made with love

Originally developed by [Chicken](https://wearechicken.co.uk/) for Hammersmith & Fulham and made into a LGD module by funding from Essex.
