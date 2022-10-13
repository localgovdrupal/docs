# News

Use news to list your latest news articles. News articles can be categorised, filtered and searched. 

Microsites have localgov_news enabled by default. The site's Microsite admin may choose to disable this feature. 

<!--@todo add images -->

The fields are identical to those in `localgov_news` except we've extended news with the following features:

## Banner field

A news article may have two types of banner, which displays at the top of the page. 

- Primary banner: image, text and optional link
- Secondary banner: image

## Layout and rich content

Add one or more page sections, each of which can have 1, 2 or 3 columns, background colours and an option of width and padding. Add content via a rich range of content sections. See the [How to add fancy layouts](../how-to/fancy-layouts.md)


## How to
- [News overview and how to](/content/features/news.html)

### Quick set up
1. Add Topic terms
2. Add a Newsroom
3. Add one or more News articles

## Embedding a list of latest news

You can embed a list of latest news with the [*Embed content lists* content section](/microsites/how-to/fancy-layouts.md). This will show up to 5 recent news articles on the current site, though you can override how many in the widget.

## Technical
Microsites brings in `localgov_news`. This is extended in `localgov_microsites_group:localgov_microsites_news` to integrate with Group and microsites, and add the additional features we need. 
