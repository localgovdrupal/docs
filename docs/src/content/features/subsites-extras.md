# Subsites extras 

## When to use Subsite extras

This module allows you to create menu-driven subsites in your LGD site. This is an optional part of LGD, so please ask your developer to [install it](https://github.com/localgovdrupal/localgov_subsites_extras).

The menu defines the structure of the subsite, and also lets you use Drupal's standard menu blocks and tools to display the subsite's navigation and manage the hierarchy of the pages within it.

### Video guide

Rupert gave us a [demo at our monthly Community Meetup in June 2024](https://youtu.be/rCREsyceNBw?si=VStYnJHetCs0Mpmf&t=1355).
 
Also see [Mark Conroy's blog post about Subsites Extras.](https://mark.ie/blog/using-the-localgov-drupal-subsites-extras-module/)

## Examples in the wild 

* [Black History Month, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/celebrating-hf/celebrating-our-history/black-history-365)
* [Business Connects, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/business/business-connects)
* [Pest Control Services, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/pest-control-services)
* [Fostering, Essex County Council](https://www.essex.gov.uk/children-young-people-and-families/fostering)
* [Fostering, London Borough of Haringey](https://new.haringey.gov.uk/children-young-people-families/childrens-social-care/fostering)

## Getting started

1. Install and enable the module.
2. Add a subsite overview page. Choose a theme, and choose to create a menu link in the subsites menu. Save the page.
3. When you view the page, you can inspect the markup, and should see classes `subsite-extra` and `subsite-extra--color-x` (where `x` is the theme you chose) applied to the body tag. You can use these classes to style the subsite in different colour schemes.
4. Create another page. This time, choose to create a menu link and select the page you just created under "Parent link".
5. Again, you can inspect the markup of this new page, and should see classes `subsite-extra` and `subsite-extra--color-x` on the body tag, picked up from the parent.
6. To set up the menus, place a new menu block. Choose the 'subsites' menu when creating the block. Under "Menu levels" set Initial visibility level to 2, and no of levels to display to 1.
7. This module will add a variable into the menu template for the subsite homepage when you're in a subsite. (e.g. this is the link styled like a house on [https://www.lbhf.gov.uk/celebrating-hf](https://www.lbhf.gov.uk/celebrating-hf)). To make use of this, add the following to your menu template:

```twig
{% if subsite_homepage_link %}
<div class="subsite--menu__title">
{{ subsite_homepage_link }}
</div>
{% endif %}
```

## Advanced use

By default, this module will work with the content types and fields provided by localgov_subsites. It doesn't have to though. You can use any content type you like as a subsite homepage, and any field you like to determine the colour scheme. 

One current limitation is that the code currently assumes that the theme field is of a type that has 'value' as a key e.g. a string list field.

There's currently no UI to set these options, but you can change them by editing the `localgov_subsites_extras.settings` config in your site's exported config, then importing, or overriding it in `settings.php` like this:

```php
$config['localgov_subsites_extras.settings'] = [
  'subsite_types' => ['localgov_subsites_overview'],
  'theme_field' => 'localgov_subsites_theme',
];
```

## Thanks

- [Chicken](https://wearechicken.co.uk/) for developing this with the London Borough of Hammersmith & Fulham
- Essex County Council for funding an LGD module for use by everyone
