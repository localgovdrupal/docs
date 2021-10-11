# Media types

Full list of Media types.

Contents:

[[toc]]

## Document

Name:  
`Document`  

Machine name:  
`document`

Description:  
`An uploaded file or document, such as a PDF.`

Media source:  
`File`

::: details Field mapping

Name:  
`Name`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Document|field_media_document|File|
:::

### Display modes

Default - Generic file - use description as link text

## Image

Name:  
`Image`  

Machine name:  
`image`

Description:  
`Use local images for reusable media.`

Media source:  
`Image`

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Image|field_media_image|Image|

:::
### Display modes

| Display mode name| Format | Style name |
| ---- | ---- | ---- |
| Default | Responsive image | 3:2 Image |
| Event thumbnail | Image | Square small |
| Featured | Image | LocalGov 248x181 |
| Featured large | Responsive image | LocalGov Newsroom featured |
| Newsroom teaser | Image | LocalGov Newsroom teaser |
| Medium 8:7 | Image | Medium 8:7 |
| Responsive 3x2 | Responsive image | 3:2 image |
| Responsive banner | Responsive image | Banner (28:9) |
| Scale crop 7:3 large | Image | Scale crop 7:3 large |
| Square | Responsive image | Square |

to do - Full content view mode available for media types and used by Localgov call out box http://localgov.lndo.site/admin/structure/paragraphs_type/localgov_call_out_box/display - but doesn't exist

## Remote video

Name:  
`Remote video`  

Machine name:  
`remote_video`

Description:  
`A remotely hosted video from YouTube or Vimeo.`

Media source:  
`Remote video`

::: details Media source configuration

Thumbnails location:  
`public://oembed_thumbnails`

Allowed providers:  

- YouTube
- Vimeo

:::

::: details Field mapping

Resource title:  
`Name`

The name of the author/owner:  
`- Skip field -`
:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Video URL|field_media_oembed_video|Text (plain)|
:::


### Display modes

Default - Format settings oEmbed content
