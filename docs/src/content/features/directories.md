# Directories

Contents:

[[toc]]

## Introduction

Directories provide a way for editors go present content as a list which can be searched\filtered by end-users. A part of the LocalGovDrupal distribution.

## Examples in the wild
* [Croydon: Secondary schools ](https://www.croydon.gov.uk/schools-and-education/schools/find-school-near-you/secondary-schools)
* [Lambeth: Libraries](https://beta.lambeth.gov.uk/libraries-0)

## How to log issues
* [Github issue queue](https://github.com/localgovdrupal/localgov_directories/issues)

## When to use Directories

- You have content with a large volume of variations. Car parks, sports facilities or parks are good examples.
- Users are looking for content based on their needs and these can be described as a series of attributes such as _price range_ or _sports catered for_.
- Your content related to a specific geographical location which is relevant to users.

## Concepts

### Directory Facets

Facets are groups of attributes users will filter by when searching for a Directory Item(s) most relevant to them. Each Facet type should be made up of at least 2 Facets each of which can apply to 1 or more Directory Items. As an example, when searching for a school, there are a variety of attributes which users will obviously be interested in when looking for a schools that fits their needs. This is illustrated well by [Croydon's Secondary school Directory](https://www.croydon.gov.uk/schools-and-education/schools/find-school-near-you/secondary-schools):

![school-facets](https://user-images.githubusercontent.com/11015602/134496028-5d424f43-da4c-455d-af28-03479d06c0e8.png)

Note that not all Facet types are made up of mutually-exclusive Facets; in the case of gender Facets most schools are applicable to both _Girls_ and _Boys_ where as other shcools are only applicable to one gender.

Another example of Facets which aren't mutually exclusive would be releavant to sports facilities:

**Sports (Directory Facet type)**
- Swimming (Directory facet)
- Football (Directory facet)
- Tennis (Directory facet)
- Gym (Directory facet)

But there is often cases where Facets will be mutually exclusive such the maxiumum lenght of stay for car parks: 

**Maximum stay (Directory Facet type)**
- 1 hr (Directory facet)
- 2 hrs (Directory facet)
- 4 hrs (Directory facet)
- 6 hrs (Directory facet)

### Directory Channels

Directory Channels can be thought of as the Directory itself; it's the page where users will be presented with a list of Directory Items and have the option to filter by Facets or perform a free text search. Additionally, Channels automatically provide a logic information archicture. For example, consider a Directory Channel with a URL of `/schools/find-a-school/secondary-schools` and a breadcrumb of `Schools > Find a school > Secondary schools`; each Directory Item will then have a URL and breadcrumb based on it's _Primary Channel_, e.g.  _St. Example High School_ would have the URL `/schools/find-a-school/secondary-schools/st-example-high-school` and breadcrumb `Schools > Find a school > Secondary schools > St. Example High School`.

As an editor, Channels give you the flexibility to compose a Directory made up of 1 or more types of Directory Item which can be filtered by 1 or more Directory Facet types.

### Directory Items

Directory Items are pieces of content, and pages, in their own right but also a member of 1 or more Directory Channels. For example, a _School_ content type could allow editors to publish detailed information on individual schools and belong to the _Secondary schools_ Channel.

As a minimum a Directory Item must belong to a _Primary_ Channel, and this can be any Channel which accepts Directory Items of that type e.g. School. The _Primary_ Channel is required as it is the basis for the inferred URL and breadcrumb as described above. Items may also, optionally, belong  multiple _Other_ Channels, these additional Channels do not influence the URL or breadcrumb but do still impact the available Facets (as described below).

In order to allow users to filter Directory Items by Directory Facets, Items must be 'tagged' with the appropriate Facets. When creating\editing an Item, the available Facets is determined by the Channels it belongs to. For example, consider the following Channels:

**Sports facilities**

- Facet types: Sports, Location
- Content types: Sports venue

**Secondary shools**

- Facet types: Age, Location
- Content types: School

When creating\editing _Sports venue_ Directory Items _Sports_ and _Location_ facets can be selected while with _Schools_ the _Age_ and _Location_ facets will be available.  

## Guides

### Create a Directory of schools

In this guide we'll step through the process to create a Directory of secondary schools using features which come out-of-the-box with LocalGov Drupal.

#### Pre-requisites 

- You'll need to have access to a Drupal installation based on the LocalGov install profile.
- The following Drupal modules will need to be installed: LocalGov Directories, LocalGov Directories Location and LocalGov Directories Venue.
- You'll need to be able to log in with a user which has editorial rights.

#### Creating the Facet types

We'll create two Facets types which allow users to filter secondary schools by the type of school and the age range.

Once you've logged in navigate to the Facets types overview page via the menu items _Content_ > _Directory Facets_ > _Add directory facet type_ 

![Add facet type menu](https://user-images.githubusercontent.com/11015602/134885404-81984346-2db0-4a61-86b8-41c9d778091d.png)

From this screen, enter 'Age' into the _Label_ field and click _Save directory facets type_. You'll be taken to the types ovweview page where you can see your new type. 

![Screenshot at 10-50-45](https://user-images.githubusercontent.com/11015602/134886415-d784e54a-01de-4f43-ac40-bcb10c418a80.png)

From here, click _Add directory facets type_ button to create another. This time, enter 'Location' into the _Label_ field and click the save button.


#### Creating the Facets

With our Types in place, it's time to create the Facets which users can use to filter our list of schools. Using the admin menu, choose _Content_ > _Directory Facets_ > _Add directory facet_ 

![Screenshot at 10-50-45](https://user-images.githubusercontent.com/11015602/134886950-0f1a1c03-7068-4bc9-97d3-759ba4ec1391.png)

From the next screen choose the previously created _Age_ Type and, finally, enter '11 to 16 years' into the _Title_ field and click the _Save_ button. You'll be taken to the Facet overview screen.

![Screenshot at 10-57-04](https://user-images.githubusercontent.com/11015602/134887389-1a196aa0-bc79-451d-b66e-953aaf97a918.png)

From here, click the _Add directory facets_ button and repeat the process until you have the following:

| Age      | Location |
| ----------- | ----------- |
| 11-16 years      | North Somewhere       |
| 11-18 year   | South Somewhere        |


#### The Channel

OK we're getting somewhere. Next up let's create a 'Channel'. Remember, the purpose of this channel is to allow users to filter a list of secondary schools by age and location so they can find a school which meets their criteria. Here we're going to make use of the _Directory venue_ content type, that comes out-of-the-box with LocalGov Drupal, to represent a school.

Using the admin menu, navigate to _Add content_ > _Directory_ > _Directory channel_:

![Screenshot at 11-04-03](https://user-images.githubusercontent.com/11015602/134888409-ad6a4066-cbdf-49a4-8186-334bb802424b.png)

From this screen, enter 'Secondary schools' into the _Title_ field and then scroll down the page and check all the boxes under _Enabled Content types_ and _Enabled facets_.

![Screenshot at 11-05-46](https://user-images.githubusercontent.com/11015602/134888679-0c71d500-2e5a-4a92-9185-a06b75d10bf1.png)

Finally, click _Save_ to create your new Channel. 

#### Directory Items

With the Channel and Facets in place we are ready to start creating some Directory Items, in this case secondary schools.

Using the admin menu, navigate to _Add content_ > _Directory_ > _Directory venue:

![Screenshot at 11-08-35](https://user-images.githubusercontent.com/11015602/134889091-ec4ac81d-1f26-40a9-8787-edd3f88c0610.png)

From here, enter 'Example high school' into the _Title_ field then select the _Channels and facets_ tab. After selecting 'Secondary schools' as the _Primary_ Channel you will be presented with some Facets for selection. Choose some Facts, in this case it probably doesn't make sense to have more than one Facet per Type:

![Screenshot at 11-16-56](https://user-images.githubusercontent.com/11015602/134890324-a4f58d4e-d572-4553-bbf3-5537d7c8e9d2.png)

Finally, we can harness the power of the LocalGov location intergration so users can browse the schools by using a map interface. Open the _Venue_ tab and click the _Select location_ button. From the popup, choose the _Create new address_ tab. Populate the fields with an address familiar to you:

![image](https://user-images.githubusercontent.com/11015602/134891269-220a1873-2732-4539-b60a-e8806fd9d43d.png)













