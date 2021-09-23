# Directories

Contents:

[[toc]]

## Introduction

Directories provide a way for editors go present content as a list which can be searched\filtered by end-users. A part of the LocalGovDrupal distribution.

## Examples in the wild
* [Croydon: Secondary schools ](https://www.croydon.gov.uk/schools-and-education/schools/find-school-near-you/secondary-schools)
* [Lambeth: Libraries](https://beta.lambeth.gov.uk/libraries-0)

## How to log issues
* [Github Repo](https://github.com/localgovdrupal/localgov_directories)
* [Issue Queue](https://github.com/localgovdrupal/localgov_directories/issues)

## Terminology

Directories are made up from a collection of concepts. It's helpful to understand these before reading the rest of this documentation.

**Directory Facets**: A Directory Facet is an attribute by which end users can filter content by. For a Directory of car parks a each Item could be assigned a Facet for the _maximum stay_ such as 3 hours or 4 hours.

**Diretory Facets types**: Directory Facets types are collections of Directory Facets. Taking the example above the Type would be _Maximum stay_ which collects together all of the available durations, e.g. 3,4,5 hours.

**Directory Channel**: A Directory Channel is the page where end-users can view and filter the Directory Items.

**Directory Item**: An Directory Item is an individual piece of content which is available in a Directory Channel and thus can be filtered\searched.

## When to use Directories

- You have content with a large volume of variations. Car parks, sports facilities or parks are good examples.
- Users are looking for content based on their needs and these can be described as a series of attributes such as _price range_ or _sports catered for_.
- Your content related to a specific geographical location which is relevant to users.

## Directory Facets

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

## Directory Channels

Directory Channels can be thought of as the Directory itself; it's the page where users will be presented with a list of Directory Items and have the option to filter by Facets or perform a free text search. Additionally, Channels automatically provide a logic information archicture. For example, consider a Directory Channel with a URL of `/schools/find-a-school/secondary-schools` and a breadcrumb of `Schools > Find a school > Secondary schools`; each Directory Item will then have a URL and breadcrumb based on it's _Primary Channel_, e.g.  _St. Example High School_ would have the URL `/schools/find-a-school/secondary-schools/st-example-high-school` and breadcrumb `Schools > Find a school > Secondary schools > St. Example High School`.

As an editor, Channels give you the flexibility to compose a Directory made up of 1 or more types of Directory Item which can be filtered by 1 or more Directory Facet types.

## Managing Directory Items

## Information architecuture 




