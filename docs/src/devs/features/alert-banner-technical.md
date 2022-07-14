# Alert banners: Technical

[[toc]]

## Introduction
The LGD Alert Banner module provides alert banners that can be placed sitewide or on selected pages. The modules provides one predefined banner type named Alert banner, with four alert types: **Announcement, Minor Alert, Major Alert**, and **Death of a notable person**. 

Visitors can close individual alert banners, thereby preventing the banners from being displayed again. 

Editors can manage a number of different banners, and choose which ones are published at any given time.

Administrators can create additional banner types, and configure the alert types for each one. (learn more in the Configuration section)

Typical usage scenario:
* Administrator creates new alert type(s) for the Alert banner.
* Site editors create new banners, decide where and when all the banners are displayed.

## Requirements

Drupal core
*   Drupal 8: >= 8.8
*   Drupal 9: >= 9.0
*   Drupal 10: >= 10.0


Drupal modules
* Block (core)
* Field (core)
* Link (core)
* Node (core)
* Options (core)
* User (core)
* Views (core)

This module does not have any dependencies on the LGD distribution, and can be used on any Drupal site that meets the above requirements.

## Permissions
This module introduces the following permissions:

* View list of Alert banners
* Administer Alert banner types
* View All alert banner entities
* Manage All alert banner entities

## Installation
This module is part of the LGD distribution, but is not installed by default.  

Install as you would normally install a contributed Drupal module. Visit https://www.drupal.org/node/1897420 for further information.

## Basic Configuration
### Managing banner types
**Administration > Structure > Alert banner type entities**

Banner types themselves are fieldable entities, so you can manage their fields, form settings, and display settings in the usual way using the Drupal Field UI. 

*Note:*
While it's possible to create new banner types, you can get a lot done with zero additional templating or preprocessing code by using the default Alert banner type and customising its alert types. (more on this in the Advanced Configuration section)

### Managing alert types
You can manage the Alert banner type's alert types via the settings of its Type of alert field at **Administration > Structure > Alert banner type entities > Alert banner > Edit Alert banner > Manage fields > Type of alert > Field settings**:

INSERT SCREENSHOT

In the above example we've added an alert type named Covid alert, with the internal key `99--covid`.

*Note:*
The structure of the internal key is important. It consists of two parts, separate by a double hyphen (--):
* `99`: the weight of the alert type.
* `--`
* `covid`: the alert type's internal identifier (only letters, digits, hyphens, and underscores allowed) which is used as part of the css classes that style the alerts. (learn more in the Theming section)

### Managing banners
You can manage the alert banners at **Administration > Content > Alert Banners**:

INSERT SCREENSHOT

### Displaying banners
Banners have one of two statuses: 
* Off (unpublished)
* Live (published)

By default, all live Alert banners are shown together in a single block named Alert banner, which you can place in any theme region at **Administration > Structure > Block layout**. 

If the block contains multiple banners, they are ordered first by weight, then by modification date.

See the Advanced Configuration section for what to do when you need more advanced grouping / sorting options for displaying multiple banners.


## Advanced Configuration

### Grouping and ordering banners

By default, all live banners are displayed in a single block named Alert banner. 

If you need custom grouping or sorting logic, or if you want to be able to assign some banners to one region, and others to another region, you could:


* Create one or more block views of (alert) banners
* Create a block using views
* Create one or more custom block plugins that use an EntityQuery to fetch and render the desired banners in the desired order.

### Creating new Banner types
You can create new banner types at  Administration > Structure > Alert banner type entities > Add Alert banner type.

Alert banner types are bundles of the Alert banner type entity type. This entity type is fieldable and revisionable.

When you create a new Alert banner type, it does not come with any predefined fields or logic other than the fact that visitors can dismiss individual banner instances.

It will be up to you to add fields, specify alert types, and provide one or more template files + CSS for theming.


## Theming
### Twig templates
The module provides supports twig templates for theming individual banners. 

By default it provides one banner type: Alert banner, which comes with a twig file at modules/contrib/localgov_alert_banner/templates/localgov-alert-banner.html.twig.

The following theme suggestions are provided:
* localgov-alert-banner--VIEW-MODE.html.twig
* localgov-alert-banner--BANNER-TYPE.html.twig
* localgov-alert-banner--BANNER-TYPE--VIEW-MODE.html.twig
* localgov-alert-banner--BANNER-TYPE--VIEW-MODE.html.twig
* localgov-alert-banner--ENTITY-ID.html.twig
* localgov-alert-banner--ENTITY-ID--VIEW-MODE.html.twig

### Markup and CSS
Individual banners get the following classes by default:
* localgov-alert-banner
* localgov-alert-banner--BANNER-TYPE
* localgov-alert-banner--homepage (if displayed on homepage)
* localgov-alert-banner--has-link or localgov-alert-banner--no-link

## Contributing
Contribution guidelines go here

## Maintainers, contributors, and supporters
Maintainers
Name
Name

## Contributors
Name
Name


