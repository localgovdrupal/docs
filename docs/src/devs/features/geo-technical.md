# Location Geo: Technical
[[toc]]

## Introduction

The _LocalGov Geo_ module provides an Geo Entity type, for storing descriptive and geographic data about locations. By default there is a bundle for addresses, with a point; and areas, with a polygon. The module provides a geo content administration page, and entity browser widget for creating and reusing locations in content.

## Permissions

There are permissions to administer Geo Entities; and permissions to view, add, edit and remove them. At this time there aren't per bundle permissions.

If installed as part of LocalGov Drupal distribution editors have permission to view, add, edit and remove them.

## Installation

The module is included in the LocalGov Drupal distribution. It is a dependency of, and used with, modules such as Directories and Events. You can add it to other content types by configuring an entity reference field, see below.

## Configuration

### Testing a Geocoder

Out of the box the module is configured to use [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/ui/about.html). Its [Terms of Service](https://operations.osmfoundation.org/policies/nominatim/) allow us to make limited queries without requiring you to do more configuration, like registering an API key, so it works for testing. The licence is the very flexible [Open Data Commons Open Database Licensed](https://opendatacommons.org/licenses/odbl/).

### Production Geocoder

You will need to configure another geocoder for use on your production site. In the UK at the moment OpenStreetMap lacks some information you might expect, like a lot of house numbers for example - contributing to OpenStreetMap helps this. Nominatim as a free service only accepts a limited number of queries. 

[Ordnance Survey offers Councils access](https://www.ordnancesurvey.co.uk/business-government/partner-member/member) to its [Places API](https://osdatahub.os.uk/docs/places/overview), or GIS departments may have their preferred systems for your region. 

LocalGov Geo uses the [Drupal Geocoder module](https://drupal.org/project/geocoder) which in turn uses the [Geocoder PHP Library](https://geocoder-php.org/). This supports a [wide range of geocoder providers](https://geocoder-php.org/docs/#providers) and offers a straightforward way to add more. While some configuration might be different, the process is much the same for all Geocoders, usually authentication by token or oAuth.

### Example: ArcGIS Online

#### Set up an App on ArcGIS Online

To be allowed to store Geocode results you will need a paid account with permission to do so. You then create an 'oAuth 2.0' app. Logging into you ArcGIS account you will see something like:

![ArcGIS Online add auth 2.0 app](~@images/geo-technical--enabling-geocoder-02-provider-arcgis-oauth.png)

The app has a Client ID, and a Client secret. It also has a temporary token. You don't need this as Drupal Geocoder will generate them when required.

#### Install the ArcGIS Online provider

First add the ArcGIS provider. You can find the [providers list](https://geocoder-php.org/docs/#providers) and [Packagist](https://packagist.org/providers/geocoder-php/provider-implementation) basic installation instructions are also on them. These have related [plugins](https://git.drupalcode.org/project/geocoder/-/tree/8.x-3.x/src/Plugin/Geocoder/Provider) to make them 'automagically' with geocoder.

So for ArcGIS:
`
composer require geocoder-php/arcgis-online-provider
`

#### Configure the ArcGIS Plugin

Visit **Home > Administration > Configuration > System > Geocoder configuration > Geocoder providers** and add a new gecoder. You should now see your new gecoder in the list. 

**NOTE: If you don't see your new plugin** immediately after clearing caches there's an [autoloader caching bug](https://www.drupal.org/project/geocoder/issues/3153678) - you could try the patch, restart apache, or install another module, they will all make it appear.

![Select the Arc GIS Online Token plugin](~@images/geo-technical--enabling-geocoder-01-provider-select-add.png)

The [Arc GIS Online Token plugin (patch)](https://www.drupal.org/project/geocoder/issues/3179963) is the provider that permits you to store geocoder results. Once you have added the new provider plugin you will get the configuration page

![Input the user name and password you got from ArcGIS](~@images/geo-technical--enabling-geocoder-03-configure-arcgistoken.png)

### Configure LocalGov Geo to use your new provider

Installed geocoders are found at **Administration > Structure > Geo Type > Address > Manage form display**. Configure the form address element to use the new Geocoder. You can have more than one geocoder, and order them if you want.

![Address field autocomplete widget settings with Arc GIS Online Token enabled](~@images/geo-technical--enabling-geocoder-04-configure-form.png)

### Add a location to a content type

To the content type an existing `localgov_location` entity reference field.

![Administration > Structure > Content Types > content type > Manage Fields > Add field dialogue](~@images/geo-technical--configure-field-01-add-field.png)

This field can then be configured to reference Addresses and/or Areas.

![Field settings dialogue selecting just address bundle](~@images/geo-technical--configure-field-02-field-settings.png)

To get the full power of the location field you should use the 'Geo Entity Browser'.

Switch to 'Entity Browser' widget.

![Drop down selecting the Entity Browser for the widget for Location field](~@images/geo-technical--configure-field-03-choose-entity-browser.png)

Select the cog (right) to change the settings and save:

![Entity Browser settings open for Location field](~@images/geo-technical--configure-field-04-entity-browser-settings.png)

## Upgrading

- 1.0.* to 1.1.* requires [some manual configuration to enabling Geo Browser and Address Autocomplete Geocoding](https://github.com/localgovdrupal/localgov_geo/wiki/Enabling-Geo-Browser-and-Address-Autocomplete-Geocoding-(upgrading-to-version-1.1.0))
