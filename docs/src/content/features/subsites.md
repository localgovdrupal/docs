# Subsites

Subsites are useful if you're creating content that:

* needs to be more visual, with photos and videos
* needs a more flexible layout
* needs to market or promote a service

You can create a subsite landing page, with links through to connecting pages, as well as an image banner, photos and videos. It is relatively easy to visually make the whole subsite look different to the rest of the site.

To use the you need [LocalGov Subsites](https://github.com/localgovdrupal/localgov_subsites) which is an optional part of LocalGov Drupal. Talk to your developer about installing it.

### Examples in the wild

[Croydon: Bereavement services](https://www.croydon.gov.uk/bereavement-services)

[Lambeth: Fostering](https://beta.lambeth.gov.uk/fostering) 

## How to use

A Subsite contains two content types - a Subsite Overview and a Subsite Page, and a large number of content components. Most subsites will contain a single Subsite Overview, acting as the landing page for the subsite, and multiple Subsite Pages. You will need to create the Overview before creating the Page, as the Parent field is required in order to Save the page. 

Both the Subsite Overview and and Subsite Page allow flexible layouts. 

### Banners

Out of the box two banner options are available. 

'Banner primary' allows an image, title, text, logo and a URL 
'Banner secondary' allows an image

The banners allow you to create a visual identity for the subsite - so you may want to consider keeping them visually similar to one another. 

### Subsite settings
On the Subsite Overview page you can set settings that affect the whole subsite.

* 'Hide page menu' allows you to toggle on and off the menu in the sidebar on the Subsite Overview and child Subsite Pages. Consider this to create a full page layout. Consider using the IA Block (todo) or extending the menu system to add internal navigation in the site
* 'Visual theme' allows you to choose from a number of defined themes to apply to the site. These need futher configuration by a developer to set up, but once done so would allow you to apply a selection of visual identities to the site

### Page builder

Page builder allows you to build the content of the page in one, two or three column layouts.

When creating a new page, within the Page Builder tab click the plus (+) icon to add a new section. The Page section icon will allow you to choose you layout. 

You can then choose components for each new column. 

### Components

Most of the components below can be seen on the [demo site](https://demo.localgovdrupal.org/test-subsite-demo-all-components). 

Simple:

* Text - a text component with the usual WYSIWYG features
* Image - an image with optional caption
* Video - a video with optional title
* Documents - multiple file upload
* Quote - text with a field for the quote attribution
* Fact box - plain text field with optional fields for pre/post quote text
* Key facts - rich text with a title, can be in a group with its own title

Complex:

* Tabs - a single or group of tabs, optionally grouped by a title (displays as normal text at mobile)
* Table - a component for tabular data, with optional upload from a csv.

Featured content:

* Link and summary -  Title as a link, with a rich text field
* Call out box - title, rich text, link (displayed as a button), with an optional image (displayed behind the text)
* Media with text - Image or video, title, rich text field and link. Optional layouts available (media placed top, left, right, bottom)
* Box links - Image and title link, optionally grouped with a title
* Featured teasers - title, rich text, image, link, optionally grouped with a title
* Featured subsite - image, title link, plain text
* Key contacts - title, image, website url and text, email field, optionally grouped with a title*. 

Only available on Subsite Overview

* IA block - a list of links to create in page menus
* Featured subsite - image, title link, plain text
* Labelled icon - Icons (from font awesome) with a title and link
* Newsroom teaser - Title as link, plain text summary, image
* Subscribe panel - Fields to add social media and newsletter subscriptions.

Only available on Subsite Page

* Box links - Image and title link, optionally grouped with a title
* Accordion - a single or group of accordions, optionally grouped by a title

Note most items allow the content editor to set the heading level per component, to allow for appropriate heading nesting. 

### Wireframes

[Subsite wireframes](https://www.figma.com/file/WkubIZ0JtHpPIAiO5DoQ9B/LGD-subsite-components?node-id=0%3A1)

## Subsites extras 

The 'Subsites extra' module allows you menu-driven subsites in your LGD site. 

The menu defines the structure of the subsite, and also lets you use Drupal's standard menu blocks and tools to display the subsite's navigation and manage the hierarchy of the pages within it.

To use this you need [LocalGov Subsites Extras](https://github.com/localgovdrupal/localgov_subsites_extras) which is an optional part of LocalGov Drupal. Talk to your developer about installing it.

### Examples in the wild 

* [Black History Month, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/celebrating-hf/celebrating-our-history/black-history-365)
* [Business Connects, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/business/business-connects)
* [Pest Control Services, London Borough of Hammersmith & Fulham](https://www.lbhf.gov.uk/pest-control-services)
* [Fostering, Essex County Council](https://www.essex.gov.uk/children-young-people-and-families/fostering)
* [Fostering, London Borough of Haringey](https://new.haringey.gov.uk/children-young-people-families/childrens-social-care/fostering)

### How to use

Rupert gave us a [demo at our monthly Community Meetup in June 2024](https://youtu.be/rCREsyceNBw?si=VStYnJHetCs0Mpmf&t=1355).
 
Also see [Mark Conroy's blog post about Subsites Extras.](https://mark.ie/blog/using-the-localgov-drupal-subsites-extras-module/)

### Thanks

- [Chicken](https://wearechicken.co.uk/) for developing this with the London Borough of Hammersmith & Fulham
- Essex County Council for funding an LGD module for use by everyone

