# Overview of Features

## Multisite

Multiple microsites served from a single code and database. The sites can live on individual domains, be managed by different teams and have distinct visual identities. 

The microsite controller has oversight of all microsites. 

## Content

- Pages
- Events
- Directories
- News
- Blogs

## Layout

- Multicolumn layouts and rich content available on each page type.
    - One, two or three column layouts, with an option of widths and colour schemes.

  Rich content
    - Accordion
    - Call out box
    ... 
    ... 

## Site appearance

Each microsite can have a distinct visual appearance. This can be set through the Site design UI by a site admin. This allows the sites branding colours, fonts and logos to be set as well as header and footer content.

This can be extended by creating a child theme of localgov_microsites_base. 

## Microsite admin

- Control panel to turn on and off features.
- Set the site homepage, site name and domain.


## Technical

Modules in the localgov ecosystem are extended in localgov_microsites_group to make them compatible with group, and add addtional features. For example:

Events: localgov_events is extended in localgov_microsites_group:localgov_microsite_events to 
- Enable events as Group content
- Set the correct permissions
- Enable the additional banner and rich content fields

