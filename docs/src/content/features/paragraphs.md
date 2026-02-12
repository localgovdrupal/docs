# Paragraphs

Paragraphs allow editors to create pre-defined blocks of content to be added to pages around your LocalGov Drupal site.

Many paragraph types are available out of the box (including an accordion, contact details, document, image and video).

It's also easy to create a library of 'reusable paragraphs' - this allows you to change content once centrally, and all instances of the paragraph dotted around your site update automatically. This is ideal for contact details such as phone numbers and addresses of council venues.

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

**Machine name**

localgov_accordion

**Fields**

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

**Machine name**

localgov_accordion_pane

**Fields**

Title*
Heading level*
Description*

**Images of accordion and accordion pane**

<img width="1177" height="391" alt="Screenshot 2026-02-12 at 14 31 53" src="https://github.com/user-attachments/assets/f5b20083-eb45-4a6d-aa43-bbb9064ae62a" />

### Banner primary

Wider width promotional block to promote a specific image, content or call to action

**Machine name**

localgov_banner_primary

**Fields**

Image*
Title*
Text*
Logo
URL

<img width="1209" height="449" alt="Screenshot 2026-02-12 at 14 52 47" src="https://github.com/user-attachments/assets/203c47a2-94c8-4046-885f-f3d4acf8bf14" />


### Banner secondary

Banner image

**Machine name**

localgov_banner_secondary

**Fields**

Image*

<img width="949" height="421" alt="Screenshot 2026-02-12 at 14 55 02" src="https://github.com/user-attachments/assets/56c83ecf-9f07-45f6-84dc-ee33783e9126" />

-------
### 

**Machine name**

**Fields**

