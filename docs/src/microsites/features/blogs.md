---
title: Blogs
---

<div class="alpha"><span>Alpha</span> This documentation is a work in progress</div>

# Blogs

Use blogs to list your sites blog posts. Blog posts can be categorised by tag and author.

Microsites have localgov_blogs enabled by default. The site's Microsite admin may choose to disable this feature. 

<!--@todo add images -->

The fields are identical to those in `localgov_blogs` except we've extended blog with the following features:

## Banner field

A blog post may have two types of banner, which displays at the top of the page. 

- Primary banner: image, text and optional link
- Secondary banner: image

## Layout and rich content

Add one or more page sections, each of which can have 1, 2 or 3 columns, background colours and an option of width and padding. Add content via a rich range of content sections. See the [How to add fancy layouts](../how-to/fancy-layouts.md)


## How to
- Blog overview and how to - @todo

### Quick set up
1. Add Topic taxonomy terms
2. Add Blog author taxonomy terms
2. Add a Blog channel
3. Add one or more Blog posts

## Embedding a list of latest news

You can embed a list of blogs with the [*Embed content lists* content section](/microsites/how-to/fancy-layouts.md). 

There are 3 displays available:

1. Recent blog posts: Up to 5 most recent blog posts from across all the blog channels on the site.
2. Recent blog channels: Up to 5 most recent blog channels on the site.
3. Featured blog posts: Up to 5 most recent *featured* blog posts from across all the blog channels on the site.  

## Technical
Microsites brings in `localgov_blog`. This is extended in `localgov_microsites_group:localgov_microsites_blog` to integrate with Group and microsites, and add the additional features we need. 
