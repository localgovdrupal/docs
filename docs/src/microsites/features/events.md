# Events

Use events to list your upcoming events. The events can be categorised, filtered and searched. 

Microsites have localgov_events enabled by default. The site's Microsite admin may choose to disable this feature. 

Events appear at /events 

<!--@todo add images -->

The fields are identical to those in `localgov_events` except we've extended events with the following features:

## Banner field

An event may have two types of banner, which displays at the top of the page. 

- Primary banner: image, text and optional link
- Secondary banner: image

## Layout and rich content

Add one or more page sections, each of which can have 1, 2 or 3 columns, background colours and an option of width and padding. Add content via a rich range of content sections. See the [How to add fancy layouts](../how-to/fancy-layouts.md)


## How to
<!--- [Events overview and how to](/content/features/events.html)-->
<!--todo - write main Events docs -->

### Quick set up
1. Add Event location taxonomy terms
2. Add Event price taxonomy terms
2. Add an Event
3. See events listed at /events

## Embedding a list of upcoming events

You can embed a list of upcoming events with the [*Embed content lists* content section](/microsites/how-to/fancy-layouts.md). This will show up to 5 events on the current site, with an end date in the future, though you can override how many in the widget.

## Technical
Microsites brings in `localgov_events`. This is extended in `localgov_microsites_group:localgov_microsites_events` to integrate with Group and microsites. 
