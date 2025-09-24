# Search

[[toc]]

## Introduction

A default installation of LocalGov Drupal comes with the optional localgov_search module.

See https://github.com/localgovdrupal/localgov_search

This installs and configures the Search API module for a default sitewide search.

The sitewide search indexes all content on the site and provides a search page (at /search) and a search block that is placed in the site header by default.

The Search API database backend is enabled when installing the module, but this can be replaced by a different backend if desired (for example Apache Solr).

All content types are added to the search index when the module is installed and new content types are automatically added when they are created.

If a content type shouldn't be part of the search then this will need to be manually removed from the search index (admin/config/search/search-api/index/localgov_sitewide_search/edit).

Content is indexed using the 'Search index' display mode and displayed using the 'Search result highlighting input' display mode. To change what is indexed and how the results are displayed can be done by adjusting these display modes on the desired content type.

## Search API Database Search

By default, we use the [Search API Database Search module](https://www.drupal.org/project/search_api_db).

This module provides a backend server for the Search API that uses a normal database to index data.

It is therefore a cheap and simple alternative to backends like Solr, but can also be a great option for larger sites if you can configure the database to be high performance.

## Search API Solr

For better performance and more flexibility, we recommend the [Search API solr module](https://www.drupal.org/project/search_api_solr).

This allows you to use [Apache Solr](https://solr.apache.org/) as a backend server.

Apache Solr is the "blazing-fast, open source, multi-modal search platform built on the full-text, vector, and geospatial search capabilities of Apache Lucene™"

To use Search API Solr, you will need to ask your hosting provider to installl and maintain Apache Solr.

Most Drupal hosting providers are experienced with Apache Solr.

### Local Solr setup with DDEV

DDEV provides an easy way to configure and test a local Apache Solr instance.

See the [DDEV Solr](https://github.com/ddev/ddev-solr) add-on.

For a quick start, you can run the following commands.

```
ddev add-on get ddev/ddev-solr
ddev restart
```

We then need to configure the Solr server and connect Search API to the server.

To configure the Search API server, [please see the README on the ddev-solr add-on](https://github.com/ddev/ddev-solr?tab=readme-ov-file#drupal-and-search-api-solr).

## Extending Search API Solr

With Search API Solr installed, we can now make use of some features specific to Solr, for example:

 - [Search API Best Bets](https://www.drupal.org/project/search_api_best_bets)
 - [Search API Spellcheck](https://www.drupal.org/project/search_api_spellcheck)
