# News

The 'News' module provides the pages and navigation for presenting news articles. It provides:

* a landing page listing all articles, called a 'Newsroom'
* 'News article' content type
* 'News editor' role

To use this you need [LocalGov News](https://github.com/localgovdrupal/localgov_news) which is an optional part of LocalGov Drupal. Talk to your developer about installing it.

### Examples in the wild

* [Brighton & Hove: News](https://www.brighton-hove.gov.uk/news)
* [London Councils: Press Releases](https://beta.londoncouncils.gov.uk/)

## How to use

A single 'Newsroom' is created on installation, which will list all News articles by default. There will be up to three “featured” News articles listed at the top of the page. 

The Newsroom page will display a search and filters block, allowing end users to filter the list of news by date and category.

If multiple Newsrooms are created the News Editor will be given the option to choose to associate a News article with a single Newsroom. 

### Adding a news article

A News article is designed to be a piece of content that has a date, and a story. Optionally, you can extend the News article with an image, related articles and related terms. 

The required fields are:

* Title - this is the Headline of the News article. 
* Date - The date will be shown on the News article, and will be used to order the list of news
* Summary - The summary is often used to show as a snippet of text on listings
* Body - The main story
* (Newsroom - see below)

Optional fields are:

* Categories - You can choose a Category which will appear as a filter.
* Image - By default this appears on the list of News articles and not on the main content
* Related articles - You can link to relevant News articles, these will appear at the bottom of the main page content.
* Promote on newsroom - see below

![Full article at London Councils - shows Title, date, category link, and body](https://user-images.githubusercontent.com/3852805/124797652-692c0a80-df4a-11eb-9d61-16f4e26fd8db.png)
![List of News Articles at Brighton described below](https://user-images.githubusercontent.com/3852805/124797277-02a6ec80-df4a-11eb-8327-f04047748bb7.png)

Image description: The lists of News article teasers show a Title, Summary, Date and image. 

### Newsroom

When the feature is enabled, a piece of content of the type Newsroom is created, with the title News, and the URL /news

By default, this will list any News articles that you add, and present you with a search widget. 

News articles will be presented in descending date order, however there is a feature to promote up to three items per Newsroom. 

### Creating an additional Newsroom

You may add an additional Newsroom - for example if you wanted a section within the site for news for a specific Service or subject matter. 

When you create a new Newsroom, there will be an additional field shown on the News Article to determine which Newsroom a News Article belongs to. 

![The Newsroom field, displaying Select a value, with the help text Which newsroom does this news article appear in.](https://user-images.githubusercontent.com/3852805/124797813-9c6e9980-df4a-11eb-9811-bc1cd9412062.png)

### Featuring News articles

You can feature / unfeature a News Article in two ways.

Either:

1. Visit the Newsroom, and use the link fields to reference the appropriate News article. This will also also you to order the articles. 
2. Check the "Promote on newsroom" checkbox on the edit form of the News article. If there is already the maximum number of promoted news items the last will be removed to make space.

Featured News articles will not appear in the general list of News articles. 

![Promote on newsroom checkbox - unchecked - with the helptext Add to promoted news in the newsroom. If there is already the maximum number of promoted news items the last will be removed to make space.](https://user-images.githubusercontent.com/3852805/124797795-95478b80-df4a-11eb-824d-c988b82bccf1.png)


