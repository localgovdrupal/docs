# Subsites

## When to use a Subsite

Subsites are useful if you're creating content that:

* needs to be more visual, with photos and videos
* needs a more flexible layout
* needs to market or promote a service

You can create a subsite landing page, with links through to connecting pages, as well as an image banner, photos and videos. It is relatively easy to visually make the whole subsite look different to the rest of the site.

## Examples in the wild
- [Bereavement services at Croydon](https://www.croydon.gov.uk/bereavement-services)
![Screenshot of Bereavement services subsite, with yellow banner and images of Croyon crematorium and cemetery](https://user-images.githubusercontent.com/3852805/131334898-ba09acc1-dd98-4975-82dc-198df0f7d991.png)



- [Fostering at Lambeth](https://beta.lambeth.gov.uk/fostering) 
![Screenshot of Fostering Subsite, with pink and purple banner with stylised words "Be the difference" and multicolumn layout](https://user-images.githubusercontent.com/3852805/131335090-a7b782c6-6cbd-4976-ade3-1b3033a14fa8.png)



## How to log issues
* [Github Repo](https://github.com/localgovdrupal/localgov_subsites)
* [Issue Queue](https://github.com/localgovdrupal/localgov_subsites/issues)

## Overview

A Subsite contains two content types - a Subsite Overview and a Subsite Page, and a large number of content components. Most subsites will contain a single Subsite Overview, acting as the landing page for the subsite, and multiple Subsite Pages. You will need to create the Overview before creating the Page, as the Parent field is required in order to Save the page. 

Both the Subsite Overview and and Subsite Page allow flexible layouts. 

## How to build a Subsite
### Banners
Out of the box two banner options are available. 

*Banner primary* allows an image, title, text, logo and a URL 
*Banner secondary* allows an image

The banners allow you to create a visual identity for the subsite - so you may want to consider keeping them visually similar to one another. 



### Subsite settings
On the Subsite Overview page you can set settings that affect the whole subsite.

- **Hide page menu** allows you to toggle on and off the menu in the sidebar on the Subsite Overview and child Subsite Pages. Consider this to create a full page layout. Consider using the IA Block (todo) or extending the menu system to add internal navigation in the site. 
- **Visual theme** allows you to choose from a number of defined themes to apply to the site. These need futher configuration by a developer to set up, but once done so would allow you to apply a selection of visual identities to the site. 

(To do - write some notes for how to configure this for developers)

### Page Builder

Page builder allows you to build the content of the page in one, two or three column layouts.

When creating a new page, within the Page Builder tab click the plus (+) icon to add a new section. The Page section icon will allow you to choose you layout. 

You can then choose components for each new column. 


#### Components

Most of the components below can be seen on the [demo site](https://demo.localgovdrupal.org/test-subsite-demo-all-components). 

Simple:
1. **Text** - a text component with the usual WYSIWYG features
2. **Image** - an image with optional caption
3. **Video** - a video with optional title
4. **Documents** - multiple file upload
5. **Quote** - text with a field for the quote attribution
6. **Fact box** - plain text field with optional fields for pre/post quote text
7. **Key facts** - rich text with a title, can be in a group with its own title

Complex:

8. **Tabs** - a single or group of tabs, optionally grouped by a title (displays as normal text at mobile)
20. **Table** - a component for tabular data, with optional upload from a csv.

Featured content:

10. **Link and summary** -  Title as a link, with a rich text field
2. **Call out box** - title, rich text, link (displayed as a button), with an optional image (displayed behind the text).
3. **Media with text** - Image or video, title, rich text field and link. Optional layouts available (media placed top, left, right, bottom)
4. **Box links** - Image and title link, optionally grouped with a title
5. **Featured teasers** - title, rich text, image, link, optionally grouped with a title.
6. **Featured subsite** - image, title link, plain text. 
7. **Key contacts** - title*, image, website url and text, email field, optionally grouped with a title*. 

Only available on Subsite Overview

18. **IA block** - a list of links to create in page menus
2. **Featured subsite** - image, title link, plain text. 
1. **Labelled icon** - Icons (from font awesome) with a title and link.
2. **Newsroom teaser** - Title as link, plain text summary, image
3. **Subscribe panel** - Fields to add social media and newsletter subscriptions.


Only available on Subsite Page

23. **Box links** - Image and title link, optionally grouped with a title
9. **Accordion** - a single or group of accordions, optionally grouped by a title


- Note: most items allow the content editor to set the heading level per component, to allow for appropriate heading nesting. 

## Wireframes

[Subsite wireframes](https://www.figma.com/file/WkubIZ0JtHpPIAiO5DoQ9B/LGD-subsite-components?node-id=0%3A1)
