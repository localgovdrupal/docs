# Paragraphs

Paragraphs allow editors to pre-defined blocks of content to be added to pages around your LocalGov Drupal site.

Many paragraph types of are available out of the box (including an accordion, contact details, document, image and video).

It's also easy to create a library of 'reusable paragraphs' - this allows you to change content once centrally, and all instances of the paragraph update automatically. This is ideal for contact details such as phone numbers and addresses of council venues.

## Dev work in progress

Paragraphs are being overhauled as part of our 2025/ 2026 'Refresh' mission. This includes:

* removing references to 'Page Components' which has been used as an alterative name for this feature
* improving the UX for adding and editing paragraphs
* allowing pargraphs to be added to more places around your site
* tidying up the list of paragraphs and making it clear what each is used for. Over time some lesser used paragraphs may be deprecated

## How to use

We'll add to this section once we've finished our review of the UX.

## Paragraph types

Here's the [complete list](https://docs.google.com/document/d/1OJ6lA_8tzHyKWOdpz3hGGIpB-2f9o5JcTn837Whfr5c/edit?usp=sharing).

Thanks to [Big Blue Door](https://www.bigbluedoor.net/) for sharing this.

### Accordion

Element that allows users to show and hide sections of content on a web page to save space and reduce scrolling
A typical example of this would be an “FAQ” page.

#### Machine name

localgov_accordion

#### Fields

Title

Display show/ hide all (Yes/No) 

Allow multiple open panes (Yes/No)

Heading level*

Ability to add multiple panes, each with:

* Title*
* Heading level*
* Description*

### Accordion pane

A single accordion pane (one single expandable item). Unlikely to be used in isolation, it will be added as part of an Accordion

#### Machine name

localgov_accordion_pane

#### Fields

Title*
Heading level*
Description*

#### Images of accordion and accordion pane

<img width="1177" height="391" alt="Screenshot 2026-02-12 at 14 31 53" src="https://github.com/user-attachments/assets/f5b20083-eb45-4a6d-aa43-bbb9064ae62a" />


<!-- ## How to use

Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLibxxY4DUV2pf70Py14VEbOeQUtgPXKAn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Checking if Workflow is enabled

There's an easy way to check if Workflow is enabled on your site. If you see a'Published' toggle and a 'Save' button, Workflow is not enabled.

![Workflow not enabled](https://github.com/user-attachments/assets/aaac5b81-61a6-4666-bcc9-448313abf2a2)

-->
