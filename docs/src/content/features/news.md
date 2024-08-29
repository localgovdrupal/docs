# News

[[toc]]

## Introduction
Provides the pages and navigation for presenting News Articles. An optional part of the LocalGov Drupal distribution.

## Overview
When you enable this feature you will get:
* **News Article** content type
* **Newsroom** content type
* News editor role

A single Newsroom is created on installation, which will list all News Articles by default. There will be up to three “featured” News Articles listed at the top of the page. 

The Newsroom page will display a search and filters block, allowing end-users to filter the list of news by date and category.

If multiple Newsrooms are created the News Editor will be given the option to choose to associate a News Article with a single Newsroom. 

## Examples in the wild
* [Brighton & Hove: News](https://www.brighton-hove.gov.uk/news)
* [London Councils: Press Releases](https://beta.londoncouncils.gov.uk/)

![Screenshot from Brighton and Hove, showing th B&H Newsroom, description below](https://user-images.githubusercontent.com/3852805/124795643-2701c980-df48-11eb-9100-2aa1fb241673.png)

Image description: The Brighton and Hove Newsroom shows three promoted News Articles, with blocks promoting the Newsletter. Below the Latest articles with a sidebar allowing Search, or browsing by category.

![London Councils Newsroom, description below](https://user-images.githubusercontent.com/3852805/124796475-1c93ff80-df49-11eb-99d5-922dc7165b24.png)
Image description: London Councils have used the News room for their Press Releases. This screenshot showing three featured News Articles, the Latest News Articles and a Contact our Media Team block in the sidebar .


## News Article

A News Article is designed to be a piece of content that has a date, and a story. 

Optionally, you can extend the News Article with an image, related articles and related terms. 

### Adding a News Article

The required fields are:

* Title - this is the Headline of the News Article. 
* Date - The date will be shown on the News Article, and will be used to order the list of news
* Summary - The summary is often used to show as a snippet of text on listings
* Body - The main story
* (Newsroom - see below)

Optional fields are:

* Categories - You can choose a Category which will appear as a filter.
* Image - By default this appears on the list of News Articles and not on the main content
* Related articles - You can link to relevant News Articles, these will appear at the bottom of the main page content.
* Promote on newsroom - see below

![Full article at London Councils - shows Title, date, category link, and body](https://user-images.githubusercontent.com/3852805/124797652-692c0a80-df4a-11eb-9d61-16f4e26fd8db.png)
![List of News Articles at Brighton described below](https://user-images.githubusercontent.com/3852805/124797277-02a6ec80-df4a-11eb-8327-f04047748bb7.png)

Image description: The lists of News Article teasers show a Title, Summary, Date and image. 

## Newsroom

When the feature is enabled, a piece of content of the type Newsroom is created, with the title News, and the URL /news

By default, this will list any News Articles that you add, and present you with a search widget. 

News Articles will be presented in descending date order, however there is a feature to promote up to three items per Newsroom. 

### Creating an additional Newsroom

You may add an additional Newsroom - for example if you wanted a section within the site for news for a specific Service or subject matter. 

When you create a new Newsroom, there will be an additional field shown on the News Article to determine which Newsroom a News Article belongs to. 

![The Newsroom field, displaying Select a value, with the help text Which newsroom does this news article appear in.](https://user-images.githubusercontent.com/3852805/124797813-9c6e9980-df4a-11eb-9811-bc1cd9412062.png)

## Featuring News Articles

You can feature / unfeature a News Article in two ways.

Either
1. Visit the Newsroom, and use the link fields to reference the appropriate News Article. This will also also you to order the articles. 
2. Check the "Promote on newsroom" checkbox on the edit form of the News Article. If there is already the maximum number of promoted news items the last will be removed to make space.

Featured News Articles will not appear in the general list of News Articles. 

![Promote on newsroom checkbox - unchecked - with the helptext Add to promoted news in the newsroom. If there is already the maximum number of promoted news items the last will be removed to make space.](https://user-images.githubusercontent.com/3852805/124797795-95478b80-df4a-11eb-824d-c988b82bccf1.png)


