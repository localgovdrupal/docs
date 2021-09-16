# Subsites: Technical
[[toc]]

## Introduction
When you enable this feature you will get:
* Subsite Overview
* Subsite Pages
* 20+ paragraph components

A Subsite can be used to create a section, campaign or microsite within the site. 
It allows a flexible layout and a bespoke visual identity.


## Requirements

Drupal core
*   Drupal 8: >= 8.9
*   Drupal 9: >= 9.0


Drupal modules
```
dependencies:
dependencies:
  - drupal:block
  - drupal:field
  - drupal:image
  - drupal:menu_ui
  - drupal:node
  - drupal:path
  - drupal:text
  - entity_hierarchy:entity_hierarchy
  - entity_hierarchy:entity_hierarchy_breadcrumb
  - field_group:field_group
  - paragraphs:paragraphs
  - layout_paragraphs:layout_paragraphs
  - localgov_subsites:localgov_subsites_paragraphs
  - localgov_core:localgov_core
  - localgov_topics:localgov_topics
```


## Permissions
By default a person with the news_editor role can publish and unpublish News Articles.

Custom permissions will need to be set up to define which roles can feature News, and create, edit and delete content of the type “Newsroom”.

## Installation

This module is part of the LocalGov Drupal distribution, but is not installed by default.  

## Basic Configuration

### General

#### Subsite Overview

Name:  
`Subsite overview`  

Machine name:  
`localgov_subsites_overview`

Description:  
`Main subsite landing page.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `Main navigation`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Summary | localgov_subsites_summary	 | Text (formatted, long, with summary)|
|Banner | localgov_subsites_banner	 | Entity reference revisions |
|Page content | localgov_subsites_content	 | Entity reference revisions |
|Hide page menu | localgov_subsites_hide_menu	 | Boolean |
|Visual theme | localgov_subsites_theme	 | List (text) |

:::

#### Subsite page

Name:  
`Subsite page`  

Machine name:  
`localgov_subsites_page`

Description:  
`General subsite pages attached to an overview page.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Summary | localgov_subsites_summary	 | Text (formatted, long, with summary)|
|Banner | localgov_subsites_banner	 | Entity reference revisions |
|Page content | localgov_subsites_content	 | Entity reference revisions |
|Parent | localgov_subsites_parent	 | Entity reference hierarchy |
|Topic term | localgov_subsites_topic	 | Entity reference |


:::

## Managing content
### Usage
Subsite Overview
* A Subsite Overview acts as the landing page for the subsite.
* Set some options here that will affect the rest of the subsite, including whether the menu displays in the sidebar or the visual theme of the subsite (see below for more details)
* By default the url alias will be [node:title] and the subpages will use this as the base for their alias. 
* Layout builder allows for 1, 2 or 3 page layouts
* There are upward of 20 Paragraph types that can be added to the Subsite Overview and Subsite Pages. 



## Advanced **Configuration**

### Setting up theme options
By default there are no visual theme options. To add some edit the Field settings at `/admin/structure/types/manage/localgov_subsites_overview/fields/node.localgov_subsites_overview.localgov_subsites_theme/storage`

To do - what happens next? 

### Customising the Paragraph components

There are upwards of 20 paragraph components available to a subsite. It is likely that these will need configuration and design consideration. 


## Theming
### Twig templates
https://github.com/localgovdrupal/localgov_subsites/tree/2.x/templates

Todo - check these are actually working

There are also templates in the localgov_base theme. 

If you want to use the localgov_subsites feature without the base theme you may want to consider copying those templates.

https://github.com/localgovdrupal/localgov_base/tree/1.x/templates/paragraphs

## Useful links
- [Git repo](https://github.com/localgovdrupal/localgov_subsites)
- [Issue Queue](https://github.com/localgovdrupal/localgov_subsites/issues)
- [Wireframes on Figma](https://www.figma.com/file/WkubIZ0JtHpPIAiO5DoQ9B/LGD-subsite-components?node-id=0%3A1)
- [A subsite on the demo site](https://demo.localgovdrupal.org/test-subsite-demo-all-components)


## Contributors
* @gosia-mlynarczyk
* @stephen-cox
* @adnan-cds
* @finnlewis
* @ekes
* @j4-m
* @tanc
* @cjstevens78
* @andybroomfield


