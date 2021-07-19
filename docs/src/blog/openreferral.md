---
title: "Open Referral and LocalGov Drupal"
description: "Directories sharing their services information using the Open Referral standard."
date: "2021-07-20"
author: "ekes"
author_url: "https://drupal.org/u/ekes"
canonicalUrl: "https://localgovdrupal.org/blog/localgovdrupal-openreferraluk"
---

# Open Referral and LocalGov Drupal
## Collaborating and Sharing resources
LocalGov Drupal facilitates councils working together to share the best practice for building a platform to communicate content. Open Referral is an agreed standard for sharing content about community services. Combining Open Referral in LocalGov Drupal is an obvious win.

Directories are a core part of the LocalGov Drupal distribution. Developed as an advanced and flexible system to meet the diverse needs of different users and types of listings. They provide filterable, searchable, directories for all sorts of things: schools, libraries, leisure facilities, other services, but also quite different information about permits, or conservation areas. Topics to filter by can be attached, or developed, as required makes sense for the content. If items have an address, or cover an area, that can also be mapped.

![Screenshot of Croydon's LocalGov Drupal Directory of Secondary Schools with map and filters visible](~@images/croydon-secondary-schools-directory.png)

Being able to browse, filter and search, information in an accessible website is a great feature. However, there are so many more places these resources could be useful. Councils have huge amounts of this data, why should it only be found on their website? By also supplying this content in a format that machines can read it becomes possible to be used in many more ways. For example: organisations working with a particular community can provide information about services for their audience available across councils boundaries; developers can make apps targeting different groups: front-line workers, partners or end users with specific interests. Why lock the information into one directory, no matter how good it is, when we can share it?

Sharing information about community services is where [Open Referral](https://openreferraluk.org/) comes in. Building on an international open data standard, the Local Government Association (LGA) with partners have developed an agreed system anyone can implement to publish and read Services Information.

There are more open standards that can help too. These can work with the Directories directly, and be presented in Open Referral data to enrich it, and make it easier to find. An example of these is [Open Active](https://www.openactive.io/) which is used to describe sports and physical activities.

## The challenge
Open Referral works because it has a clear standard way of presenting the information. LocalGov Drupal's directories work because they provide a framework for site builders and content designers to present their different directories information flexibly.
![Overview Entity Relationship Diagram of the extended Open Referral UK standard](~@images/LGA_ApplicationProfileBasicEntityRelationshipDiagram.png)
Where the Standard has just one Service class and just one Organization class each with specified fields and relationships. A LocalGov Drupal directory can have multiple entities, each representing a different type of organisation, it's for the content designer knowing their data and their end users to decide what fields are available. By default the distribution ships with an simple entry and a venue directory entry type, but sites builders have already created much more rich entities for their different directories from Schools, and Family Information Services, to Car Parks and Conservation Areas.

The standard does largely match up with the LocalGov Drupal data model, there are entities for taxonomy, locations, services, organizations, it doesn't exactly, the concept of the link_taxonomy for example exists in Open Referral and doesn't have any equivalent in Drupal. Schedules and Reviews are also not yet in the standard LocalGov Drupal directories, although they are a desired feature for the future, and some councils have already extended directories to encompass.

Taxonomies in LocalGov Drupal directories can also be flexible. We can now offer Open Active and the LGA's Circumstances, Needs and Services lists, these are fixed and externally defined. In addition content designers want ways of creating dynamic categorisation to fit their particular needs, so Directories offers this and the data should be made available in the Open Referral output.

Any implementation of Open Referral in LocalGov Drupal therefore needs to be flexible, extendible and configurable to match any Directory people build with it. At the same time exposing data in machine readable formats on an API is often not top of the priority list, with limited time and high complexity it's often been something that doesn't get implemented. The flexibility and extensibility can't come at the cost of to much work for who ever is implementing the Directory.

## Getting technical
This is where this post will start delving into some of the implementation details. If you're not interested in the internals of Drupal and building sites feel free to skip to the end. If you are interested in some of the challenges, and possible alternatives that you could use in Drupal for your APIs, here we go.

### It's actually very simple ...
The first go at outputting compliant json that validates proved to be straightforward. A controller for selected endpoints (services list, services entity), with an entity query accepting basic filter parameters, the results passed through some function to assign the correct field data to the correct Open Referral properties.

Yay JSON:

![Some example directory entries mapped as services in Open Referral](~@images/basic-services-json.png)

It's limitations are already apparent. Open Referral allows drilling down into related entities, and it allows for this differently per entity per where it is in the list. As more endpoints are made, and more mappings are going to be required depending on if the entity is for example in an organisation list, or referenced from a service, it's going to get complicated very quickly. That complexity could be overcome, by using a similar pattern of recursive calls, just as the Symfony normalizer does; why not use the normalizer then?

Doing it this way does already highlight an interesting detail that needs resolving. The pager has to start at 1, the Drupal pager starts at 0.

The other challenge, and it's the deal breaker, is this now only maps the Venue directory entry, and there is no straightforward way of adding or removing fields from it, let alone doing the same for another directory entry with differently named fields.

It's clear there has to be some way for the site builder to configure the mappings, just as they can configure the fields on a directory entry content type.

### ... so leverage Contrib ...

Any task in Drupal is bound to have had someone trying to do something at least similar before. Often they will take the time to package their solution up in a [module on drupal.org](https://www.drupal.org/project/project_module).

Reviewing what was out there some potential candidates suggest themselves. Views can also be built on Search API indexes. With field, rather than entity, rows that can start to cover the mapping decision. The pager might not roll out of the box so easily, looks like [Pager Serializer](https://www.drupal.org/project/pager_serializer) has us covered.

So what about these nested entities, and deeper still, nested entities that have a intervening reference entity (eg. `service_at_locations`, `service_taxonomies`).

#### [Views Rest](https://www.drupal.org/project/rest_views) method

The module uses the render arrays to transport serialized data objects which the core rest serializer views style processes. To do this the module adds a new 'field' for every existing views field - in the Views UI its ugly as you end up with the 'Content: field' and 'Content: field (serialized)' for everything.

There are new field formatters that return "render arrays" with data as Serialized data objects. This plugin rather than outputting HTML from the render outputs the data itself wrapped.
Somehow this all makes sense. It can be configured in a way that site builders are familiar with, creates a fair bit of flexibility. But it's using display and rendering system that wasn't just designed for it, and ends up exposed these all over the place when it's not a data view display.

To embed an entity. As we need to. The suggestion is to add an entity display mode, and include this as the rendered entity. The field formatter for entity reference field entity is thenn wrapping the whole entity up and it gets serialized as everything else! Adding the 'relationship entity' in between could be done by inheriting this and extending it with the required wrapper. Yet another formatter!

The UI and configuration is starting to get more complex than would be desirable. To change the field names on an embedded entity we'd need to make custom formatters for all the fields that allow setting the name - as unlike views field output where you can set the field name, you can't on the output of the whole 'rendered' entity. 

Except for reusing a system not designed for the purpose, I really quite like the approach. Maybe it could inspire something for core. For us for now. It needs to be something else.

#### [Rest Export Nested](https://www.drupal.org/project/rest_export_nested) method

A different approach to trying to get complex data into the fields outputted by the core rest serializer views style plugin, this extends the core rest export display plugin. It adds to the display plugin testing every string to see if it's json and then correctly nesting it into the field before reserializing it.

The suggested usage for this is to embed [Views Field View](https://www.drupal.org/project/views_field_view) the clever if exponentially complicated module that exposes view as fields into the rows.

We'd still need custom formatters, outputting json to nest into the required 'relationship entity'.

Great again for some straightforward, single field use cases, but it's not going to cover all of our requirements.

### ... it's custom Config Entities and Normalizers then

Building our own configuration to control specific normalization for an Open Referral request starts to look the best long term solution that will actually meet the requirements. It's either basic hard coded output, or throwing the energy into writing it all. Here we go.

## Introducing the LocalGov Open Referral module
The bit where we go right into the code. There are many parts, but each in itself isn't that large.

![LocalGov Drupal Open Referral directory tree](~@images/localgov_openreferral-tree.png)

To meet the first requirement to iterate through the entities, their fields, and referenced entities, and output compliant Open Referral JSON some custom normalizers are used. Before the normalizer can target creating output we have to do something to announce that this is a request for Open Referral formatted data. To do that we announce a new encoding format.

```
<?php

namespace Drupal\localgov_openreferral\Encoder;

use Drupal\serialization\Encoder\JsonEncoder as SerializationJsonEncoder;

/**
 * Uses JSON Encoder for Open Referral.
 */
class JsonEncoder extends SerializationJsonEncoder {

  /**
   * The formats that this Encoder supports.
   *
   * @var string
   */
  protected static $format = ['openreferral_json'];

}
```

That's it, just gets passed through to the normalizers so particular ones can be selected. We announce the format on the route.
```

localgov_openreferral.service: 
  path: '/openreferral/v1/services/{entity}'
  defaults:
    _title: 'A single service'          
    _controller: '\Drupal\localgov_openreferral\Controller\EndpointsController::single'    
  requirements:
    _format: 'openreferral_json' 
    _openreferral_type: 'entity:service'
    _entity_access: 'entity.view'
  options:                                      
    parameters:                              
      entity:
        type: entity:node   
```
This is then passed through to the normalizer that we'll look at next; before getting to it though two more classes help our route:
 * [Drupal\localgov_openreferral\EventSubscriber\RequestTypes](https://github.com/localgovdrupal/localgov_openreferral/blob/1.x/src/EventSubscriber/RequestTypes.php) adds the `application/json` headers for our format.
 * [Drupal\localgov_openreferral\ParamConverter\EntityUuidConverter](https://github.com/localgovdrupal/localgov_openreferral/blob/1.x/src/ParamConverter/EntityUuidConverter.php) is a complete lift of the same class in the core jsonapi module to handle using UUIDs as the {entity} identifier for upcasting, rather than the normal Drupal internal ID.
 
### Normalizers
So we get to one of the things we started out for, an existing system for controlling the output of entities, referenced entities and fields.
```
localgov_openreferral/src/Normalizer on  1.x
❯ ls
AddressFieldItemNormalizer.php
ConfigEntityNormalizer.php
ContentEntityNormalizer.php
EntityReferenceFieldNormalizer.php
FieldItemNormalizer.php
GeoFieldItemNormalizer.php
ListNormalizer.php
```
There are a few here, most but all is straightforward. The Address field normalizer for example:
```
namespace Drupal\localgov_openreferral\Normalizer;                                                        
                                                                                                          
...

/**                                             
 * Converts the Drupal address field item to open referral value.                                          
 */                                                                                                       
class AddressFieldItemNormalizer extends FieldItemNormalizer {

...
  public function normalize($field_item, $format = NULL, array $context = []) {
    assert($field_item instanceof FieldItemInterface);
    $values = [
      'id' => 'address:' . $field_item->getEntity()->id(),
      'location_id' => $field_item->getEntity()->uuid(),
      'address_1' => $field_item->address_line1,
      'city' => $field_item->locality,
      'state_province' => $field_item->administrative_area,
      'postal_code' => $field_item->postal_code,
      'country' => $field_item->country_code,
    ];
    return $values;
  }
```
The Open Referral standard is [clear about which fields are available](https://developers.openreferraluk.org/Guidance/) for an address so we only map those with knowledge of how addressfield stores UK addresses. The `GeoFieldItemNormalizer` is no different, geofield stores data about the geohash, bounding boxes, etc. but for output we just need correctly keyed longitude and latitude. These are quite specific mappings, with multiple properties. 

Fields that just have one value that needs to be outputted can be configured to just output that property. For example a URL field that internally has uri, title and options, but will usually want to be outputted just as uri. Here the configuration, which we'll look at in a bit, for the mapping is simply 'field_website:uri' rather than 'field_website'. The other thing that the general [FieldItemNormalizer]()https://github.com/localgovdrupal/localgov_openreferral/blob/1.x/src/Normalizer/FieldItemNormalizer.php) does for the standard is flatten, remove the array, if the field is singular rather than an array.

Now for the entities, nested entities, and their linking classes defined in the standard that made previous attempts to output the data more complicated. A _Service_ in Open Referral can look like:
```
  "name": "string",
  "organization": {
    "description": "string",
    "id": "string",
    ...
  },
  "service_at_locations": [
    {
      "id": "string",
      "location": {
        "description": "string",
        "id": "string",
        "latitude": 0,
        "longitude": 0,
        "name": "string",
        "physical_addresses": [
          {
            "address_1": "string",
            ...
          }
        ],
      }
    }
  ],
       
```
_Organization_ is a required referenced class that is a single value, and directly included under the _Service_ class. _Location_, and _Taxonomy_ is similar, has a `service_at_locations` entity with its own ID that links the _Location_ it is an array property. To add a final level of complexity, when an _Location_ is being shown on its own, or in a list of locations, it will include a `service_at_locations` listing the Services referencing it, not when it's embedded in a _Service_. 

To account for these factors there is an EntityReferenceFieldNormalizer, which just as the one in core will iterate and normalize the Entity, but it adds logic to generate the 'link classes' with a unique ID. Context is also passed about the parent entity.
```
<?php                                                                                                                                                                                                               
                                                                                                                                                                                                                    
namespace Drupal\localgov_openreferral\Normalizer;                                                                                                                                                                  
                                                                                                                                                                                                                    
...
/**                                                                                                                                                                                                                 
 * Normalizer class specific for entity reference items in field.                                                                                                                                                   
 */
class EntityReferenceFieldNormalizer extends NormalizerBase {    
...
   /**  
   * {@inheritdoc}
   */     
  public function normalize($field, $format = NULL, array $context = []) {
    ...
    $parent = $field->getEntity();
    $parent_type = $this->mappingInformation->getPublicType($parent->getEntityTypeId(), $parent->bundle());
    if (!empty($reference_parent[$context['field']['public_name']])) {
      $direction = $reference_parent[$context['field']['public_name']] == $parent_type;

      foreach ($field->referencedEntities() as $entity) {
        $type = $this->mappingInformation->getPublicType($entity->getEntityTypeId(), $entity->bundle());
        $id = $direction ?
          $parent->uuid() . '-' . $entity->uuid() :
          $entity->uuid() . '-' . $parent->uuid();
        $attribute = ['id' => $id];
        if (count($context['parents']) < 3) {
```  
One final note that will lead us to the next set of challenges. If you look in [ContentEntityNormalizer](https://github.com/localgovdrupal/localgov_openreferral/blob/1.x/src/Normalizer/ContentEntityNormalizer.php) when it is outputting an entity destined to be an Open Referrer Taxonomy (this is not only Drupal Taxonomy Terms, other entities are mapped to Taxonomy) then the mapped Vocabulary ID is coded separately and retrieved from the mapping configuration.
### A Search API property processor plugin
Classes in Open Referral UK can be associated with Taxonomy, which are in Vocabularies. This is great, it's been the model for Drupal since version 4.0 surely one of the features that made it stand out way back in the early 2000s. Our entities map, given the normalization mentioned with the link classes.

In Drupal vocabularies have an ID, the machine name, otherwise they are configuration entities, which can have third party settings, but are not fieldable. Open Referral requires us to use [specific identifiers for vocabularies](https://developers.openreferraluk.org/UseOfTaxonomies/#curies-to-use) which won't necessarily be the machine name, and certainly don't include character case. Adding this as a third party setting was an option, using RDF module was another - but which value to use if there are more than one? As we already have configuration to say which entities map we can also add to what vocabulary - as shown at the section on normalizers.

Problem solved? Not quite. We also need to filter by them. An example query would be:
```
https://example.com/directory/services/?&taxonomy_id=LowIncome&taxonomy_type=service&vocabulary=esdCircumstances&page=1
```
So we need to index the Open Referral identifier to filter by it.

Within Directories we also have two types of categorisation entities that both map to Open Referral taxonomy. The first we've already discussed is ideal for controlled vocabularies, where the directory is configured to index specific fields with specific vocabularies, and facet blocks are added by the site builder as required. The vocabularies, and the facet configuration, and the index are all configuration. The second type of categorisation are a different, simple entity, that by default is configured such that its entity type does not export to configuration. This entity is intended for content designers to make vocabularies without having to involve site builders. They can add or remove vocabularies as desired, which vocabularies can be used is configured on the Directory content type. Despite how they are displayed to the content designer and the end user they are internally stored in a single field, and a single facet, not configuration involved.

![Search API index with property fields in the General section including Aggregated field and our Open Referral ones](~@images/search-api-index-config.png)

Search API is great when you are indexing content from multiple sources for a single filter. Just use the **Aggregated Field**. Select the 'Union' option and select the fields, or rather don't select the fields in this case, because they are several entities deep and the user interface doesn't support this, export the configuration and edit the YML to drill down

```
  openreferral_vocabulary:
    label: Vocabulary
    property_path: aggregated_field
    type: string
    configuration:
      type: union
      fields:
        - 'entity:node/localgov_directory_facets_select:entity:bundle'
```
Now we could add fields as new taxonomies are attached to the indexed entities. The module [already dynamically adds content types to the index when they are defined as Open Referral Services](https://github.com/localgovdrupal/localgov_openreferral/blob/21f5d88ebfc4f7f1eeb82b62adb9621e4129e2fe/src/SearchApiIndexConfig.php#L73) The same could be done for the aggregated field, except for the issue about the vocabulary identifier.

So to index the Vocabulary ID in configuration, and save us updating the index configuration again anyway, there is [a custom property processor plugin, much like the Aggregated field](https://github.com/localgovdrupal/localgov_openreferral/blob/1.x/src/Plugin/search_api/processor/AddOrTaxonomyMetadata.php).

#### Configuration entity
So finally we have the components to format our output, and to search by it. The other requirement is that as Directory entries are created or changed the site builder can correct the mappings.

Looking at the [new vocabularies module in development](https://github.com/localgovdrupal/localgov_vocab) you'll see it can ship with the configuration for it's entities.

```
langcode: en
status: true
dependencies:
  module:
    - localgov_openreferral
id: taxonomy_term.openactiveactivity
entity_type: taxonomy_term
bundle: openactiveactivity
public_type: taxonomy
public_datatype: openActiveActivity
property_mappings:
  default:
    -
      field_name: name
      public_name: name
    -
      field_name: localgov_vocab_external_id
      public_name: id
    -
      field_name: 'parent:localgov_vocab_external_id'
      public_name: parent_id
```
Taxonomy terms are imported, and have their defined identifier stored in an extra field, which is mapped as the id (rather than the Drupal UUID or TID). The externally defined Vocabulary ID is also there.

These imported entities can then be updated, or new ones created in the UI. An improvement here would be to automatically populate some of the fields, if there is just one URL field on a Service entity it's probably for the URL, if there's a body chances are it's a description, an entity reference for to a LocalGov Geo entity of the type Address, service_at_locations; but not always, the directory entries often have a contact for the service or venue generally and for an individual for example. There are many text fields we don't, _yet_, have on a directory entry, but it would be easy for a site builder to add them.

![Mapping configuration edit page](~@images/mapping-config-entity-edit.png)

## Success
With all those moving parts we have an extensible way of getting the flexible LocalGov Directories output into Open Referral Standard compliant output. The configuration can be automated further, new entities for Reviews and Opening Times can be straightforwardly added, and different configurations can be accommodated. 

And it validates.

![Open Referral UK validator page](~@images/validates.png)
