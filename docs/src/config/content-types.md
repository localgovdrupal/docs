# Content types

A full list of content types.

Contents:

[[toc]]

## Service landing page

Name:  
`Service landing page`  

Machine name:  
`localgov_services_landing`

Description:  
`Top level section page for each service.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
| Address     | field_address | Text (formatted, long)  |
| Body | body | Text (formatted, long, with summary) |
|Child pages | field_destinations | Entity reference |
| Contact us online URL | field_contact_us_online | Text (plain) |
| Email address | field_email_address | Text (plain) |
| Facebook | field_facebook | Text (plain) |
| First line of address | field_address_first_line | Text (plain) |
| Hearing or speech difficulties phone number | field_hearing_difficulties_phone | Text (plain) |
| Link to map | field_link_to_map | Link |
| Opening hours | field_opening_hours | Text (formatted, long) |
| Other team contacts URL | field_other_team_contacts | Text (plain) |
| Phone | field_phone | Text (plain) |
| Popular topics | field_popular_topics | Entity reference |
| Task buttons | field_common_tasks | Link |
| Twitter | field_twitter | Text (plain) |

:::

## Service page

Name:  
`Service page`  

Machine name:  
`localgov_services_page`

Description:  
`Basic page that can be placed in a service and on a service sub landing page.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Body |body |Text (formatted, long, with summary)|
|Download links | field_download_links | Link|
|Hide the related topics panel | field_hide_related_topics | Boolean |
|Page components | field_page_components | Entity reference|
|Parent | localgov_services_parent | Entity reference|
|Related links | field_related_links | Link|
|Replace automatically generated links | field_override_related_links | Boolean|
|Task buttons |field_common_tasks | Link|
|Topic terms | localgov_topic_classified |Entity reference|

:::

## Service sub-landing page

Name:  
`Service sub-landing page`  

Machine name:  
`localgov_services_sublanding`

Description:  
`Pages for detail and links to specific pages within a service.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `true`

Priority: `0.5`

Change frequency: `Not specified`

Include images: `No`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Body | body | Text (formatted, long, with summary)|
|Child pages | field_topics | Entity reference revisions|
|Services: Parent | localgov_services_parent | Entity reference|

:::

## News article

Name:  
`News article`  

Machine name:  
`localgov_news_article`

Description:  
`A stand-alone news article that may also appear in a news listing page.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `none`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Body | body | Text (formatted, long, with summary)|
|Categories | localgov_news_categories | Entity reference|
|Date | localgov_news_date | Date|
|Image | field_media_image | Entity reference|
|Newsroom | localgov_newsroom | Entity reference|
|Related articles | localgov_news_related | Entity reference|

:::

## Newsroom

Name:  
`Newsroom`  

Machine name:  
`localgov_newsroom`

Description:  
`A page for listing and featuring news articles.`

::: details Menu settings
Available menus: 

* `Main navigation`

Default menu: `<main>`
:::

::: details Simple XML Sitemap
Included: `false`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Title | title | Text|

:::
