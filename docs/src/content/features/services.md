# Services

The 'Services' module provides a range of content types to show the services and policies you provide. These include:

* Service landing page - the top level section for each service
* Service sub-landing page - detail and links to specific pages within a service
* Service page - the basic page that can be placed in a service, and on a Service Sub-landing Page
* Service status - an optional additional type for providing updates about a the status of a service

Other LocalGov Drupal content types such as Guides, Directories and Step by step pages can also be linked from service landing and sub-landing pages.

### Examples in the wild

* [LocalGov Drupal demo: Adult health and social care](https://demo.localgovdrupal.org/adult-health-and-social-care)
* [Croydon: Adult health and social care ](https://www.croydon.gov.uk/adult-health-and-social-care)
* [Lambeth: Bins and recycling](https://beta.lambeth.gov.uk/rubbish-recycling)
* [Brighton & Hove: Rubbish, recycling and streets](https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets)

## How to use

Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iIe74boCjII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Service landing pages

Use a service landing page for the homepage of a section. For example:

* [Adult social care (on LGD demo site)](https://demo.localgovdrupal.org/adult-health-and-social-care)
* [Children, young people and families (on Croydon)](https://www.croydon.gov.uk/children-young-people-and-families)

![iScreenshot of Croydon's Children, young people and families Service Landing Page (full description below)](https://user-images.githubusercontent.com/3852805/123272337-906deb00-d4f9-11eb-8661-7307f6423a31.png)
Image caption: A screenshot of Croydon's Children, young people and families Service Landing Page, showing the title, an introductory paragraph, two common task links and a list of links to Service Pages and Service Sub-landing Pages, each displayed with a title and summary. Source: [Croydon](https://www.croydon.gov.uk/children-young-people-and-families).

It's common to link to service landing pages from the homepage of your website.

### Provide a summary

Your summary should provide more information than what the title suggests. It should include what a user can do and find out in the section. Read the [guidance on summaries](https://www.gov.uk/guidance/content-design/writing-for-gov-uk#summaries).

***Example:*** 

*Title: Rubbish and recycling*

*Summary: Household recycling and rubbish collection service and collection times, what you can recycle, how to report a problem, and street cleaning.*

### Adding top tasks

'Top task' links allow quick access to high priority tasks within a section. Just click the 'top tasks' tab and add urls and link text.

Talk to your service team to understand what the top tasks are within a section and use analytics to see what pages users engage with most. Monitor this over time and change it according to users' needs.

Tasks can be tagged as either "Action" or "Information" - these may display differently depending on how your theme is set up.

![Screenshot of the LGD demo site "Adult and social care" Service Landing Page, showing three common task links - 2 blue information links and 1 green action link](https://user-images.githubusercontent.com/3852805/123274826-c2804c80-d4fb-11eb-844b-d4c09a5a00f8.png)
Image caption: in the screenshot from the LGD demo site, the action links have a green background and the information links have a blue background.

## Service sub-landing pages

Service sub-landing Pages are index pages that link out to other pages. They usually sit a level below a service landing Page. Think of them as chapters of a book, giving the user the option to browse everything in that section.

You can use them to link to:

* Step by step Pages
* Guide Pages
* Service Pages
* Subsite Pages

They automatically pull in the title and the summary of the page they're linking to.

***Examples:*** 
- *[Cycling and walking (Lambeth)](https://beta.lambeth.gov.uk/streets-roads-transport/cycling-walking)*
- *[Bins (Brighton & Hove)](https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/rubbish)*

![Screenshot of Lambeth Councils Births Service Sub-landing Page - description below](https://user-images.githubusercontent.com/3852805/123276043-bea0fa00-d4fc-11eb-80fb-0cf85b4e86da.png)
Image description: Lambeth Council's Births Service Sub-landing Page. They show the title, summary and the sub-pages, without a summary.

## Service pages

Service pages are the most commonly used type of page on your site. They're useful if you're creating content that:

* addresses one user need or task
* is relatively brief
* can fit on one single page
* links out to an online form

If the page requires more guidance or information you will need to consider using either:

* [Guide pages](/content/features/guide.html) – if there's more content that's relevant to the user completing the task, but it doesn't follow a strict process. For example types of animal welfare licences
* [Step by step pages](/content/features/step-by-step.html) – if the guidance follows a sequential process. For example registering a death

***Examples***
* *[Correcting a death registration (Croydon)](https://www.croydon.gov.uk/births-deaths-marriages-and-citizenship/death-and-bereavement/correcting-death-registration-certificate)*
* *[Claim a refund (Lambeth)](https://beta.lambeth.gov.uk/council-tax/claim-refund)*
* *[How to use a wheelie bin (Brighton & Hove)](https://www.brighton-hove.gov.uk/rubbish-recycling-and-streets/rubbish/how-use-wheelie-bins)*

![Brighton and Hove's How to use a wheelie bin Service Page, description below ](https://user-images.githubusercontent.com/3852805/123277011-9fef3300-d4fd-11eb-8fc2-f67c65227bac.png)
Image description: Brighton and Hove Council's How to use a wheelie bin Service Page, showing a title, summary, a common task link, then text with headings and related links in the sidebar. 

### Adding a Task button to a Service Page

You can add a 'top task' button at the top of a service page. Just click the 'top tasks' tab and add urls and link text.

***Examples***
* *[Find a school near you (Croydon)](https://www.croydon.gov.uk/schools-and-education/schools/find-school-near-you)*
* *[Apply to join the housing register(Brighton & Hove)](https://www.brighton-hove.gov.uk/housing/council-housing/apply-join-housing-register)*

### Related links and Related topics

The sidebar can show Related links and Related topics, which you can add in the 'Related content' section of the Service Page editor.

The related topics can be suppressed by checking the 'Hide the related topics panel' checkbox in the same section.

## Service status

Service status allow you to give updates about the status of the relevant service. You can position these around your site so users will see them as they engaged with a particular service.

![Screenshot of Brighton's Rubbish & Waste Service Landing Page, with 2 status shown below a title Service updates](https://user-images.githubusercontent.com/3852805/123281746-d75fde80-d501-11eb-8408-232d35a98c40.png)

A list of service statuses also appears on the URL service-path/update:

![Screenshot of Brighton's Rubbish & Waste Service Status updates, showing 4 updates with the most recent first](https://user-images.githubusercontent.com/3852805/123282093-1d1ca700-d502-11eb-8077-f820eba2fb30.png)

### When to use a service status

Publish a service status when you want to tell your citizens about a significant impact to the service. 

You can choose one of 3 categories to assign to a service status:

* Limited service (if a service is dramatically reduced or stopped)
* Revised service (if a service pattern has changed)
* Normal service

### Where service status messages can be displayed

You have lots of choices about where service status messages can be displayed:

* on the service landing page where this service lives
* on your organisation's overall service status list (at /service-status)
* on specfic pages around your site, below the title and above the body copy for the page

This means users will see this content before they start reading your page.

To set the position of a service status update, edit it and you'll see the following controls.

<img width="1024" alt="Screenshot 2025-02-04 at 10 48 33" src="https://github.com/user-attachments/assets/4c2184a6-13e0-4c45-ae95-99304f939b4b" />

In the pages field, enter paths rather than entire urls. For example:

* /rubbish-recycling-and-streets/bins-and-collections/check-your-bin-and-box-collection-days puts the status message on that page alone
* /rubbish-recycling-and-streets/* puts the status message on the entire section

You can define a set of pages and either include or exclude them.

