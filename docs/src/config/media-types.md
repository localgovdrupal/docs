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

MIME type:  
`- Skip field -`

File size:  
`- Skip field -`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Document|field_media_document|File|
:::


## Image

Name:  
`Image`  

Machine name:  
`image`

Description:  
`Use local images for reusable media.`

Media source:  
`Image`

::: details Field mapping

Name:  
`- Skip field -`

MIME type:  
`- Skip field -`

File size:  
`- Skip field -`

Width:  
`- Skip field -`

Height:  
`- Skip field -`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Image|field_media_image|Image|
:::

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

Resource type:  
`- Skip field -`

Resource title:  
`Name`

The name of the author/owner:  
`- Skip field -`

The URL of the author/owner:  
`- Skip field -`

The name of the provider:  
`- Skip field -`

The URL of the provider:  
`- Skip field -`

Suggested cache lifetime:  
`- Skip field -`

Default name of the media item:  
`- Skip field -`

Local URI of the thumbnail:  
`- Skip field -`

Thumbnail width:  
`- Skip field -`

Thumbnail height:  
`- Skip field -`

The source URL of the resource:  
`- Skip field -`

The width of the resource:  
`- Skip field -`

The height of the resource:  
`- Skip field -`

The HTML representation of the resource:  
`- Skip field -`

:::

::: details Fields

| Field name  | Machine name  | Field type              |
| ----------- |:-------------:| -----------------------:|
|Video URL|field_media_oembed_video|Text (plain)|
:::
