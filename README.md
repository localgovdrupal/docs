# LocalGovDrupal Docs

The repository for the documentation sitting at https://docs.localgovdrupal.org/

## Local development

1. Start lando

2. Change directory to `docs`

3. `lando yarn install` to install dependencies

4. `lando yarn dev` to start a dev server

## Blog

`*.md` files within `src/blog` will be parsed to generate blog posts which are listed at http://localgovdrupal.org/blog. Blog markdown files are required to have the following front matter.

```yml
---
title: "Example title"
description: "An example description."
date: "2021-01-18" (yyyy-mm-dd)
author: "J. Smith"
author_url: "#" (optional)
cannonicalUrl: "" (optional - for blog posts present on other sites)
---
```

Posts will be displayed on the listing page in reverse chronological order based on the `date` key within the front matter.  
The author can be linked to a website or a twitter account in order to give credit to the author.  
Please add a cannonical URL if the blog post exists originally on another website as well. [Google article on this topic](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls)

## Adding images to posts

You can add your images to the `images` folder next to the other folders and then you can reference these by using `![Alt text here](~@images/image.png)`.

## Known issues

Occasionally when making changes vuepress will not reload, so you have to restart the compiler.

## Maintainers

This project is currently maintained by: 

 - Maria Young https://github.com/msayoung
 - Finn Lewis https://github.com/finnlewis
 
