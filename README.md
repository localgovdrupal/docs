# LocalGovDrupal Docs

The repository for the documentation sitting at https://localgovdrupal.org/

## Local development

1. Start lando

2. Change directory to `docs`

3. `lando yarn install` to install dependencies

4. `lando yarn dev` to start a dev server

## Blog

`*.md` files within `src/blog` will be parsed to generate blog posts which are listed at http://localgovdrupal.org/blog. Blog markdown files are required to have the following front matter.

```
---
title: Example title
description: An example description.
date: 25-03-18 (dd-mm-yy)
author: J. Smith
author_url: '#' (optional)
cannonicalUrl: '' (optional - for blog posts present on other sites)
---
```
Posts will be displayed on the listing page in reverse chronological order based on the `date` key within the front matter.

## Known issues

When making config changes in development mode vuepress will not reload, so you have to restart the compiler, this is currently being [worked on](https://github.com/vuejs/vuepress/issues/2254).
