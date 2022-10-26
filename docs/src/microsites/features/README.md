---
title: Overview of Features
---

<div class="alpha"><span>Alpha</span> This documentation is a work in progress</div>


# Overview of Features

Multiple microsites served from a single code and database. The sites can live on individual domains, be managed by different teams and have distinct visual identities. 

## Content

- [Pages](pages.md)
- [Events](events.md)
- [Directories](directories.md)
- [News](news.md)
- [Blogs](blogs.md)

## Flexible layouts

Multicolumn layouts and rich content available on each page type.

- One, two or three column layouts, with an option of widths and colour schemes.
- Rich content eg:
    - Accordion
    - Call out box
    - Video etc
    ... 

Read: how to [create fancy layouts](/microsites/how-to/fancy-layouts.html)

## Site appearance

Each microsite can have a distinct visual appearance. 

The Microsite admin can use the *Site design* user interface (UI) to set up the site's branding: including colours, fonts and logos to be set as well as header and footer content.

For more complex layouts, the site design can be quickly changed by creating a child theme of `localgov_microsites_base`. 

Read: [Appearance](appearance.md)

## Site settings

The Microsite admin has access to the Site settings panel, where they can install the right set of features for the site. 

## Technical

Modules in the localgov ecosystem are extended in localgov_microsites_group to make them compatible with group, and add addtional features. 

For example:

Events: `localgov_events` is extended in localgov_microsites_group:localgov_microsite_events to 
- Enable events as Group content
- Set the correct permissions
- Enable the additional banner and rich content fields

