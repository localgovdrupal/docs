# Design

LocalGov Drupal is a [Drupal distribution](https://www.drupal.org/project/localgov) that has been developed collaboratively by councils and their suppliers. It aims to deliver default functionality that most local councils need for web publishing.

It will need some design resource to apply a council's brand to the default installation, and some councils take the design further to make significant changes to the features, information architecture and visual design of the site.

Below is some background in to the design of LocalGov Drupal so far.

## Information architecture

LocalGov Drupal ships with a number of [predefined content templates](/devs/general/content-types) known as content types. These have been architected following guidance from the [GOV.UK Design System](https://design-system.service.gov.uk/)&nbsp;.

Local government is responsible for a range of services for people and businesses. Among them are well known functions such as social care, schools, housing and planning and waste collection.

LocalGov Drupal groups its content around this concept of services, which may or may not map to the departments within the council itself. Services can contain various types of content - pages, guides, step by steps, directories (of places or things) and news.

Subsites exist outside services and allow for more campaign-like sites, with different designs, more complex content components and multi-column layouts to be created on the fly by content designers.

Events also exist outside services.

## Design systems

Some councils have developed their own design systems and made them open access for other councils to make use of:
- [Southwark's Design System in Figma](https://www.figma.com/community/file/1387072265514780981/southwark-council-localgov-design-system-v1-0) 

Where wireframes exist, they can be found on the [documentation](/design/documentation) page.

## Visual design

The visual design of the site can be changed subtley or substantially, depending on the needs and resources of a council.

We have created a base theme (localgov\_base) which allows for a quick re-skin of LocalGov Drupal with a council's own colours, fonts and logo.

However it is perfectly possible to create a new design (and theme) from scratch allowing for total control over the front-end of the website. (See also decoupled websites)

### Designs in the wild

*   [Bedford Borough Council](https://www.bedford.gov.uk/)
*   [Barking & Dagenham Council](https://www.lbbd.gov.uk/)
*   [Blackburn with Darwen Borough Council](http://www.blackburn.gov.uk/)
*   [Bracknell Forest Council](https://www.bracknell-forest.gov.uk/)
*   [Brighton and Hove City Council](https://www.brighton-hove.gov.uk/)
*   [Canterbury City Council](https://www.canterbury.gov.uk/)
*   [Croydon Council](https://www.croydon.gov.uk/)
*   [Cumberland Council](https://cumberland.gov.uk/)
*   [Hammersmith & Fulham Council](https://www.lbhf.gov.uk/)
*   [Hart District Council](https://www.hart.gov.uk/)
*   [Kensington and Chelsea London Borough Council](https://www.rbkc.gov.uk/)
*   [Lambeth Council](https://www.lambeth.gov.uk/)
*   [Milton Keynes Council](https://www.milton-keynes.gov.uk/)
*   [North Kesteven District Council](https://www.n-kesteven.gov.uk/)
*   [North Yorkshire Council](https://www.northyorks.gov.uk/)
*   [Redcar and Cleveland Council](https://www.redcar-cleveland.gov.uk/)
*   [Rutland County Council](https://www.rutland.gov.uk/)
*   [Sheffield City Council](https://www.sheffield.gov.uk/)
*   [South Staffordshire Council](https://www.sstaffs.gov.uk/)
*   [Tipperary County Council](https://www.tipperarycoco.ie/)
*   [Waltham Forest Council](https://www.walthamforest.gov.uk/)
*   [West Lindsey District Council](https://www.west-lindsey.gov.uk/)
*   [Westminster City Council](https://www.westminster.gov.uk/)
*   [Westmorland and Furness Council](https://westmorlandandfurness.gov.uk/)
*   [Wirral Council](https://www.wirral.gov.uk/)

## Feature design

When a new feature is proposed (or backported) we encourage a small working group to carry out a feature design process to ensure that it meets the needs of many. This should be [documented](/design/#frontend-working-group) in a place people can refer back to it in the future.

We'd love to have more design resources involved in these working groups so please get in touch if you'd like to be involved.

## Get involved

LocalGov Drupal needs all sorts of designers to help push forward features and issues. We now need more evidence based design based on best practices and existing user research, as well as new ideas that we can test with further user research. If you are a designers in a council using or considering Localgov Drupal please get in touch!

We also encourage contributions from suppliers supporting councils using LocalGov Drupal.

### Slack channels

Join the LocalGov Drupal slack channel to ask questions or find other designers to work with. Email [hello@localgovdrupal.org](mailto:hello@localgovdrupal.org) to join.

## Drupal terminology

It's hard to get away from [Drupal terminology](/content/#drupal-terminology), but please let us know if anything in this documenation could be clearer.
