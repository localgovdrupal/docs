# Services: Technical
## Tech Introduction
Provides the pages and navigation for presenting the Services provided by Local Government. A part of the LocalGovDrupal distribution.

Content types:

* Landing page - the top level section for each service.
* Sub-landing page - detail and links to specific pages within a service.
* Page - the basic page that can be placed in a service, and on a service sub-landing page.
* Status - an optional additional type for providing updates about a the status of a service.
Other content types in the LocalGovDrupal distribution can also optionally be linked into service sections and referenced from sub-landing pages.

There are five submodules
- localgov_services_landing
- localgov_services_navigation
- localgov_services_page
- localgov_services_sublanding
- localgov_services_status (optional)


## Requirements
`core_version_requirement: ^8.9 || ^9`
```
dependencies:
  - drupal:field
  - drupal:link
  - drupal:node
  - pathauto:pathauto
  - localgov_core:localgov_core
  ```

### Service landing page
```
dependencies:
  - drupal:field
  - drupal:link
  - drupal:menu_ui
  - drupal:node
  - drupal:text
  - drupal:user
  - drupal:views
  - localgov_services:localgov_services
  - localgov_services:localgov_services_sublanding
  - localgov_services:localgov_services_page
  ```
### Service sub-landing page
```
dependencies:
  - drupal:content_moderation
  - drupal:field
  - drupal:menu_ui
  - drupal:node
  - drupal:path
  - drupal:text
  - drupal:user
  - field_group:field_group
  - localgov_paragraphs:localgov_paragraphs
  - localgov_services:localgov_services
  - localgov_services:localgov_services_landing
  - localgov_services:localgov_services_navigation
  - localgov_services:localgov_services_page
  - localgov_topics:localgov_topics
  - pathauto:pathauto

```
### Service page
```
dependencies:
  - drupal:content_moderation
  - drupal:field
  - drupal:link
  - drupal:menu_ui
  - drupal:node
  - drupal:path
  - drupal:taxonomy
  - drupal:text
  - drupal:user
  - entity_browser:entity_browser
  - field_group:field_group
  - link_attributes:link_attributes
  - localgov_services:localgov_services
  - localgov_services:localgov_services_sublanding
  - localgov_services:localgov_services_landing
  - localgov_services:localgov_services_navigation
  - localgov_page_components:localgov_page_components
  - pathauto:pathauto
  ```
### Service Status
```
dependencies:
  - drupal:options
  - drupal:path
  - drupal:text
  - drupal:user
  - condition_field:condition_field
  - localgov_services:localgov_services_landing
  - localgov_services:localgov_services_navigation
  ```
### Service Navigation
```
dependencies:
  - drupal:link
  - drupal:node
  - drupal:pathauto
  - localgov_services:localgov_services

```
## Recommended modules
n/a

## Installation
The 4 main sub-modules are a core part of the LGD install profile, and will be installed as part of that. 
The Service Status module can be optionally enabled.

To install it as a feature outside of LGD [TODO]

## Basic Configuration
### General
### Service landing page

Name:  
`Service landing page`  

Machine name:  
`localgov_services_landing`

Description:  
`Top level section page for each service.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
| Address     | localgov_address | Text (formatted, long)  |
| Body | body | Text (formatted, long, with summary) |
|Child pages | localgov_destinations | Entity reference |
| Contact us online URL | localgov_contact_us_online | Text (plain) |
| Email address | localgov_email_address | Text (plain) |
| Facebook | localgov_facebook | Text (plain) |
| First line of address | localgov_address_first_line | Text (plain) |
| Hearing or speech difficulties phone number | localgov_hearing_difficulties_ph | Text (plain) |
| Link to map | localgov_link_to_map | Link |
| Opening hours | localgov_opening_hours | Text (formatted, long) |
| Other team contacts URL | localgov_other_team_contacts | Text (plain) |
| Phone | localgov_phone | Text (plain) |
| Popular topics | localgov_popular_topics | Entity reference |
| Task buttons | localgov_common_tasks | Link |
| Twitter | localgov_twitter | Text (plain) |

:::

### Service page

Name:  
`Service page`  

Machine name:  
`localgov_services_page`

Description:  
`Basic page that can be placed in a service and on a service sub landing page.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Body |body |Text (formatted, long, with summary)|
|Download links | localgov_download_links | Link|
|Hide the related topics panel | localgov_hide_related_topics | Boolean |
|Page components | localgov_page_components | Entity reference|
|Parent | localgov_services_parent | Entity reference|
|Related links | localgov_related_links | Link|
|Replace automatically generated links | localgov_override_related_links | Boolean|
|Task buttons |localgov_common_tasks | Link|
|Topic terms | localgov_topic_classified |Entity reference|

:::

### Service sub-landing page

Name:  
`Service sub-landing page`  

Machine name:  
`localgov_services_sublanding`

Description:  
`Pages for detail and links to specific pages within a service.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Body | body | Text (formatted, long, with summary)|
|Child pages | localgov_topics | Entity reference revisions|
|Services: Parent | localgov_services_parent | Entity reference|

:::

## Roles / permissions
This feature does not define any permissions itself, but if the localgov_workflowand localgov_roles modules are enabled then they will apply to the content defined in this feature.

## Advanced configuration

## Theming

The following templates are (currently) defined within the modules. 

- [services-cta-block.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/templates/services-cta-block.html.twig )
- [node--localgov-services-landing--full.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_landing/templates/node--localgov-services-landing--full.html.twig)
- [taxonomy-vertical-list.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_landing/templates/taxonomy-vertical-list.html.twig)
- [localgov-services-navigation-child.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_navigation/templates/localgov-services-navigation-child.html.twig)
- [localgov-services-navigation-children.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_navigation/templates/localgov-services-navigation-children.html.twig)
- [services-related-links-block.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_page/templates/services-related-links-block.html.twig)
- [services-related-topics-block.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_page/templates/services-related-topics-block.html.twig)
- [node--localgov-services-status--message.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_status/templates/node--localgov-services-status--message.html.twig)
- [service-status-block.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_status/templates/service-status-block.html.twig)
- [service-status-message.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_status/templates/service-status-message.html.twig)
- [service-status-page.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_status/templates/service-status-page.html.twig)
- [views-view-localgov-services-status.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_status/templates/views-view-localgov-services-status.html.twig)
- [dummy-teaser.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_sublanding/templates/dummy-teaser.html.twig)
- [field--paragraph--topic-list-links--topic-list-builder.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_sublanding/templates/field--paragraph--topic-list-links--topic-list-builder.html.twig)
- [paragraph--topic-list-builder.html.twig](https://github.com/localgovdrupal/localgov_services/blob/2.x/modules/localgov_services_sublanding/templates/paragraph--topic-list-builder.html.twig)

### Localgov Base Theme (localgov_base)
The following templates are defined within localgov_base theme, and if you are not using this as your base theme you might like to steal these templates: 
- https://github.com/localgovdrupal/localgov_base/blob/1.x/templates/paragraphs/paragraph--topic-list-builder.html.twig
- https://github.com/localgovdrupal/localgov_base/blob/1.x/templates/field/field--paragraph--topic-list-links--topic-list-builder.html.twig
- https://github.com/localgovdrupal/localgov_base/blob/1.x/templates/content/node--localgov-services-landing--full.html.twig
- https://github.com/localgovdrupal/localgov_base/blob/1.x/templates/block/services-cta-block.html.twig

CSS
- https://github.com/localgovdrupal/localgov_base/blob/1.x/css/components/topic-list-builder.css
- https://github.com/localgovdrupal/localgov_base/blob/1.x/css/components/service-landing-page.css
- https://github.com/localgovdrupal/localgov_base/blob/1.x/css/components/service-cta-block.css

And their IE11 counterparts.


## Troubleshooting
todo

## Useful links
- [Git repo](https://github.com/localgovdrupal/localgov_services)
- [Readme](https://github.com/localgovdrupal/localgov_services/blob/2.x/README.md)
- [Issue Queue](https://github.com/localgovdrupal/localgov_services/issues)

### Maintainers
