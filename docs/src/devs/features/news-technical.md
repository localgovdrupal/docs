# News: Technical

[[toc]]

## Introduction

When you enable this feature you will get:

- News Article content type
- Newsroom content type
- News editor role

A single Newsroom is created on installation, which will list all News Articles by default. There will be up to three “featured” News articles listed at the top of the page.

The Newsroom page will display a search and filters block, allowing end-users to filter the list of news by date and category.

If multiple Newsrooms are created the editor will be given the option to choose to associate a News Article with a single Newsroom.

## Requirements

Drupal core

- Drupal 8: >= 8.8
- Drupal 9: >= 9.0

Drupal modules

```
dependencies:
  - drupal:datetime
  - drupal:field
  - drupal:link
  - drupal:menu_ui
  - drupal:node
  - drupal:path
  - drupal:taxonomy
  - drupal:text
  - drupal:user
  - entity_browser:entity_browser
  - entity_reference_facet_link:entity_reference_facet_link
  - facets:facets
  - field_group:field_group
  - link_attributes:link_attributes
  - localgov_core:localgov_core
  - pathauto:pathauto
  - search_api:search_api
  - search_api:search_api_db
  - search_api_autocomplete:search_api_autocomplete
  - schema_metatag:schema_metatag
  - schema_metatag:schema_article
```

## Permissions

By default a person with the news_editor role can publish and unpublish News Articles.

Custom permissions will need to be set up to define which roles can feature News, and create, edit and delete content of the type “Newsroom”.

## Installation

This module is part of the LGD distribution, but is not installed by default.

Install as you would normally install a contributed Drupal module.

`composer require localgovdrupal/localgov_news`

## Basic Configuration

By default the search and facet blocks for News are shown in the view mode for the Newsroom, and as blocks on all pages under the news/\* path if you have the localgov_theme installed. Alternatively, add, or change the configuration for these three blocks from the Drupal block layout admin page.

### General

#### News Article

Name:  
`News Article`

Machine name:  
`localgov_news_article`

Description:  
`A stand-alone news article that may also appear in a news listing page.`

::: details Menu settings
Available menus:

- `Main navigation`

Default menu: `none`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name       |       Machine name       |                           Field type |
| ---------------- | :----------------------: | -----------------------------------: |
| Body             |           body           | Text (formatted, long, with summary) |
| Categories       | localgov_news_categories |                     Entity reference |
| Date             |    localgov_news_date    |                                 Date |
| Image            |    field_media_image     |                     Entity reference |
| Newsroom         |    localgov_newsroom     |                     Entity reference |
| Related articles |  localgov_news_related   |                     Entity reference |

:::

#### Newsroom

Name:  
`Newsroom`

Machine name:  
`localgov_newsroom`

Description:  
`A page for listing and featuring News Articles.`

::: details Menu settings
Available menus:

- `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name |        Machine name        |       Field type |
| ---------- | :------------------------: | ---------------: |
| Title      |           title            |             Text |
| Featured   | localgov_newsroom_featured | Entity reference |

:::

## Managing content

### Usage

Newsroom

- A default News '/news' Newsroom will be installed. News Articles by default go into this.
- It is possible to post more Newsrooms for articles to go into.
- A Newsroom has a field in which it is possible to select 3 featured News Articles.
- The Featured News block shows up to 3 featured articles - if there are fewer than 3 explicitly featured News Articles the remainder will be filled by the latest promoted articles (if any).
- The Article List block will show 10 articles per page, excluding those in the featured block.
- The limits (3 and 10) can be changed in the localgov_news_list view on the all_news and featured_news displays.

Add News articles. By default:

- The Categories field uses the LocalGov Topics vocabulary. Edit the field to use alternative or additional vocabularies.
- Image is a required field - authors can upload a new image or select an image from the media library.
- Article nodes are not promoted - see the Featured News section below.
- Article aliases are: [node:localgov_newsroom:entity:url:relative]/[node:localgov_news_datedatehtml_year]/[node:title] thus prefacing the path with that of their Newsroom, followed by year and sanitised title.

## Advanced **Configuration**

### Structured data

The Schema.org Metatag module is used to generate structured data for individual News Articles. This is rendered as JSON LD in the `<head>` element.

eg. creating new entity_types etc etc

### Search Api & Facets

On installation there is a new Server created named News, which can be used or replaced.
The News Index is indexing _Content_ of type _News articles_ and is set to _Index items immediately_.

### Indexed fields

The fields being indexes are the Rendered HTML output, using the view mode _Search index_.
The following fields are also indexed to provide faceted search, or view configuration

- Categories
- Date
- Newsroom
- Title

### Processors

Entity status, HTML filter, Ignore case, Stemmer, Stopwords, Tokenizer, Transliteration are enabled on all supported fields.

### Facets

Facets for Category and Date are provided by default.

## Theming

### Twig templates

- [field--localgov-newsroom-featured.html.twig](https://github.com/localgovdrupal/localgov_news/blob/1.x/templates/field--localgov-newsroom-featured.html.twig)
- [node--localgov-news-article--full.html.twig](https://github.com/localgovdrupal/localgov_news/blob/1.x/templates/node--localgov-news-article--full.html.twig)
- [node--localgov-news-article--teaser.html.twig](https://github.com/localgovdrupal/localgov_news/blob/1.x/templates/node--localgov-news-article--teaser.html.twig)

### Theme suggestions

### Markup and CSS

Css is defined in the css directory: [https://github.com/localgovdrupal/localgov_news/tree/2.x/css](https://github.com/localgovdrupal/localgov_news/tree/2.x/css)

## Useful links

- [Git repo](https://github.com/localgovdrupal/localgov_news)
- [Readme](https://github.com/localgovdrupal/localgov_news/blob/2.x/README.md)
- [Issue Queue](https://github.com/localgovdrupal/localgov_news/issues)

## Contributors

- @danchamp
- @ekes
- @finnlewis
- @stephen-cox
