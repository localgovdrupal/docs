# Directories

The LocalGov Directories module and it's sub-modules allows editors to create 'filterable' lists of content using a 'content-based' approach. In constrast with the traditional 'configuration-based' workflow, where developers\site-builders would need to combine Views; Taxonomies; Search API indexes and Facets and then deploy these via Configuration Sync, LocalGov directories allow editors to create new listing pages 'on-the-fly' as they would a Node or any other content.  

## Quick-start

The LocalGov Directories sub-modules provide a variety of defaults so if you're needs are basis or if you're just wanting to take it for a test drive then you should be able to get started with minimal configuration.

### Pre-requisites 

You'll need to have access to a Drupal installation based on the LocalGov install profile and be logged as User 1 or any other user with the rights to install modules.

### 1 Install modules

LocalGov directories is included in the LocalGov installation profile but it is not enabled by default so the first job is to install the `LocalGov directories` module. Installing this module will also install, if not already, a number of other modules such as Search API and Facets.

Once the core module is installed then we can choose to enable one or more of the sub-modules for some useful defaults. Let's also install `LocalGov Directories Page` and `LocalGov Directories Venue`. Again a number of other required modules will be installed.

With all these modules successfully installed you will see 3 new content types, Directory channel; Directory page and Directory venue, as well as `Directory Facet type` within the structure menu. 

### 2 Directory Facets

Directory Facets types and Diretory Facets can be thought of like Taxonomies and Taxonomy Terms respectively with the difference that they are ignored by Configuration Synchronisation. 

Directory Facets are, as the name implies, the things by which content within a Directory can be facetted. You can have as many Directory Facet types as you like and each Directory Facet type can apply to zero or more Directory Channels. Presently, Directory Items are required to use at least one Directory Facet type so let's create a couple.

Navigate to the Directory Facets type overview page (admin/structure/localgov_directories_facets_types) and click `Add directory facets type`, fill in the `Label` field and click the save button. Repeat this process so we have 2 types.

Next we'll need to add some Directory Facets. Navigate to the Directory Facets overview page (/admin/content/directories/facets) and hit the `Add directory facets`, choose one of the previously created types, fill in the `Title` and save. Repeat this so we have a few Directory Facets in each Directory Facets type.

### 3 Channels

OK we're getting somewhere. Next up let's create a 'Channel'. Channels provide the page where your users will be able to browse all of the Directory Items belonging to the Channel and filter by the applicable Directory Facet types; both of which are configurable by editors.

Navigate to the Create Directory channel page (/node/add/localgov_directory). There are a number of different options here but for now let's focus on the core functionality: populate the `Title` field, check both of the `Enabled Facets`, choose the `Directory page` `Content type` and save. Repeat this process again but this time choose the other `Content type`.

You may have noticed that these pages aren't up much; that's because we don't have any Directory Items yet.

### 4 Page Driectory Items

Now we have some Channels we can create some Directory Items and assign them to their channels. As things are set up currently we have one Channel which will list our `Directory Page` items and allow users to filter by either Facet Type and another channels with the same filters by instead listing `Directory Venues`.

Create a `Directory Page` (/node/add/localgov_directories_page). Populate the `Title` field and then move onto the `Channels and facets` tab. Notice that there is only one channel available within the `Directory channels` fieldset; this is because we have only created one Directory Channel which applies to Directory pages. Select the only Directory Channel amd you will be presented with Directory Facet types allowed by our Channel. Choose some Facets and save. Repeat this process a few times choosing various Facets.


