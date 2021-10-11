# Directories: Technical
[[toc]]

## Introduction
For an overview of Directories it's worth familiarising yourself with the [Content Designer's Documentation](/content/features/directories).

Directories are built around the _Directory Channel_ node content type and Directory Items that are content types with an entity reference field to a _Directory Channel_. As outlined in the Content Designer's Documentation there are three preconfigured Directory Item content types: _Directory Page_, _Directory Venue_ and _Directory Organisation_.

In addition to the node content types directories provides _Directory Facets_. This is a simple entity type used for categorization, search facets. Unlike Taxonomy, Directory Facet types do not export configuration by default and can be treated as content to be managed by Content Editors.

## Permissions

Normal Drupal permissions exist for the node content types. The module additionally provides permissions to administer _Directory Facets Types_ and edit, create, view the _Directory Facet_ entities. If installed as part of a LGD distribution these are given to the Editor role by default.

Related permissions that need configuration for _Directory Venue_ and any other content type that uses _Location_ are the permissions from the _LocalGov Geo_ module. These again should already be configured for the Editor role if installed as part of the LGD distribution.

## Installation

This module is included in the LGD distribution. For the most simple configuration you can enable _LocalGov Directories_ module and one for an Item content type, for example _LocalGov Directories Page_.

The installation of an Item content type automatically configures the Search API Index.

### Facet, and Search Blocks

There is configuration for placing the _Directory channel search_ and _Directory facets_ blocks in the LGD theme. The search is placed on all directory related content types, the facets on the Channel content type. If you are using another theme you will have to enable these blocks. Alternatively the blocks are available as 'fields' on the Channel and Item content types and can be configured in the Content Type _Manage display_.

## Configuration

Channels and Facets can be configured as content as outlined in the [Content Designer's Documentation](/content/features/directories).

### Adding Fields to existing Directory Item types

You can add your fields to a supplied Item types, like _Directory Venue_. Fields supplied by LGD have a machine name that is always prefixed `localgov_`, it is advised you prefix your additional fields with a 'namespace' unique to your site.

If you want the content of the field to be found in the full text search make sure it is included in the _Directory Search Index_ view display, see below.

### Directory Search Index View Display

The Search API _Directories_ Index will include the content of the Directory Items in the full text. For this it will use the _Directory Search Index_ display. If you would like to add, remove fields, or change their output you can do this on the content type _Manage display_ page for example:  **Administration > Structure > Content types > Directory organisation > Manage display** selecting the **Directory search index** tab. 

If you have created your own Directory Item type you may have to enable the 'view mode', this can be found in the same **Manage display** section under the **Default** tab in **Custom settings**.

### Enabling Open Referral

[Open Referral](https://openreferraluk.org/) integration with Directories makes it easy to provide information about Services in an open standards format that can be shared and reused.

The standard requires at least 'Services' and 'Organisations' to be present. To make this possible the default implementation maps _Directory Venue_ to 'Service' and _Directory Organisation_ to Organisation.

Enable the *_LocalGov Directories Venue Open Referral_* module. This will install the mappings for Venue to Service, and enable the _Directory Organisation_ if it is not yet. If there is existing _Directory Venue_ content it will also create 'stub' Organisations for each venue that are only used for the purpose of the Open Referral output, so you will want to test this.

## Advanced configuration

### Adding a custom Directory Item content type

The chances are your Information Architecture won't exactly map to the default Directory Item content types. While you can extend them, it will often be better to create seperate content types that better fit your requirements.

Once you have made a [Content Type and added the fields you require](https://www.drupal.org/docs/user_guide/en/content-structure-chapter.html) you need to add the fields to include it in a Directory:

![Add field form selecting the existing field Entity Reference: localgov_directory_channels](~@images/directories-technical--add-directory-field.png)

The essential field is the _Directory channels_ (`localgov_directory_channels`) which uses the 'Reference Method' _LocalGov: Directories channels selection_. Adding this field will also automatically add the content type to the _Directories_ search index.

You should probably also add the _Facets_ (`localgov_directory_facets_select`) field.

It is best to also configure the Display view for the search index, see *Directory Search Index View Display* above. If you don't do this it will use the 'Default' display.

### Mapping a custom content type to Open Referral

**Administration > Configuration > Web services > Open Referral Entity Mapping configuration**

In the Web services Open Referral section you will find existing mappings from Drupal Entity Bundles (for example Node Content Types) to Open Referral Types (for example Service). Here you can also **+ Add Open Referral Mapping**. 

![Add open referral mapping](~@images/directories-technical--add-openreferral-map.png)

Once you have selected the Entity Type (probably Node), the Bundle (the Content Type you are adding) and the [Open Referral Type](http://docs.openreferral.org/en/latest/hsds/logical_model/) (probably an Organisation or a Service) you can pre-populate the mappings with the **Populate mappings** button. This will make a best guess of the mappings. So if, for example, you have an entity reference restricted to something that is already mapped to an Open Referral location type on something to be a Service it will make it a `service_at_location`. The mapping might miss fields, you will then need to add the manually. Note: To validate Services _must_ reference an Organisation.

There is a [Validation service](https://validator.openreferraluk.org/) you can test your feeds against if they are on a URL accessible to the internet. Your feed will be at `http://example.com/openreferral/v1/services` where http://example.com is the URL of the base of your LocalGov Drupal site.

### Adding a custom Taxonomy to a Directory

As an addition, or alternative, to the _Directory Facet_ entity type, you might want to include a Taxonomy Vocabulary. These have the opportunity to include for example, heirarchy. Taxonomy is however not automatically added to the _Directories_ index, nor is it included in the _Directories Facet Block_. You will need to:
* Create the Taxonomy vocabulary.
* Add a reference field from your Directory Item Content Type to the new vocabulary.
* Add the new field to the index, this can be done at: Administration > Configuration > Search and metadata > Search API > Directories > Manage fields for search index Directories.
* Create a facet for that field for the Directory view: Configuration > Search and metadata > Search API Directories > Manage fields for search index Directories. You should already see `localgov_directories_facets` under `search_api:views_embed__localgov_directory_channel__node_embed`, it is for this 'Source' you need to add your facet.
* Place the Facet Block that is then created.

One reason to do this would be to import controlled vocabularies like [OpenActive](https://www.openactive.io/) or [the LGAs lists](https://standards.esd.org.uk/). There is an experimental module [LocalGov Vocab](https://github.com/localgovdrupal/localgov_vocab) that could help to syncronise these.

## Useful links

- [Directories module Git repository](https://github.com/localgovdrupal/localgov_directories)
- [Directories module Issue queue](https://github.com/localgovdrupal/localgov_directories/issues)
- [Blog post about the OpenReferral module](https://localgovdrupal.org/news/2021/open-referral-uk-and-localgov-drupal)

## [Contributors](https://github.com/localgovdrupal/localgov_directories/graphs/contributors)

* @ekes
* @Adnan-cds
* @stephen-cox
* @finnlewis
* @mattrfletcher
* @danchamp
