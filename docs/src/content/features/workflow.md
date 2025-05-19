# Workflow

[[toc]]

## When to use Workflow

This [LocalGov Workflow module](https://github.com/localgovdrupal/localgov_workflows) provides roles, content moderation, an approvals view, preview links, scheduled publishing and service contacts. This module is included in LocalGov Drupal, but is not switched on. Talk to your developer about enabling it.


#### Video guide
Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLibxxY4DUV2pf70Py14VEbOeQUtgPXKAn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Checking if Workflow is enabled

There's an easy way to check if Workflow is enabled on your site. If you see a'Published' toggle and a 'Save' button, Workflow is not enabled.

![Workflow not enabled](https://github.com/user-attachments/assets/aaac5b81-61a6-4666-bcc9-448313abf2a2)

If you see a 'Current state' drop down menu in the sidebar, Workflow is enabled. Click 'Save' to save the page in the selected state.

![Workflow enabled](https://github.com/user-attachments/assets/4d86e5de-b604-4fba-a44a-f0a11a7fc493)


## Workflow concepts

* **Role**: A named set of permissions that can be applied to a user account. Depending on your role and your site's custom configuration, you may not be able to do all the actions on this page.
* **Revision**: Drupal lets you create a new revision every time a piece of content is updated. This allows you to track how the piece of content has changed over time on your site. [Read more on drupal.org](https://www.drupal.org/docs/administering-a-drupal-site/node-revisions). One version will be the **current revision**, indicating which version is available to logged out users.
* **State**: A revision can exist in one of a number of states (Draft, Needs review, Published, Archived). If the current revision is Published it is available to logged out users.
* **Transitions**: Moving the current revision from one state to another is called a transitition. We can do this manaully by setting the state when we save a piece of content, or we can schedule a time for it to happen automatically.

## Roles

### Editor

A Editor may publish all content, and is responsible for moderating content written by Contributors. 

* Can move content between all transitions
* Can create, edit, delete media
* Can create, edit, delete all content (except News article / Newsroom)
* Can manage revisions on all content (except News article / Newsroom)

### Author

An author can publish their own content

* Can move content between most transitions
* Can create and edit any media
* Can delete own media
* Can create and edit own content (except News article / Newsroom)
* Can delete own content

### Contributor

A contributor can draft content and it will be reviewed by an Editor

* Can move content between limited transitions (cannot publish)
* Can create and edit any media
* Can delete own media
* Can create and edit own content (except News article / Newsroom)
* Can delete own content

## Content moderation

Content can exist in one of the following states:

* Draft
* Needs Review
* Published
* Archived

Not all roles have the permission to move content between all states.

A common workflow may be:

1. A Contributor creates a new piece of content and saves it as _Draft_
2. They return to the content and finish it and save it as _Needs review_
3. An Editor reviews the content and either:
    1. _Publishes_ it,
    2. Suggests some amendments and returns it to _Draft_.

### Viewing content

![Content sub menu showing Overview, Approve, Review and Unpublished views](https://github.com/user-attachments/assets/7a505e5d-926f-4b07-9206-5eaaaab0dfea)

Content is shown under four tabs according to its state:

- The "Overview" tab includes all content you have permission to view or edit

- "Approve" shows content waiting for you to check and publish

- "Review" shows content that has reached its expiry date

- "Unpublished" shows content that's not live on your site, in a _Draft_, _Needs Review_ or _Archived_ state


### Creating a new draft of Published content

When we edit a piece of published content and save it as _Draft_ or _Needs Review_, the content remains published and creates a new revision.

The **Latest version** tab will show the new revision, whereas the View tab will allow you to see the current _Published_ version.

![Menu with 'latest version' button selected](https://user-images.githubusercontent.com/3852805/136771107-70ed6ed6-c79a-45bb-b41e-ee4adbb2177c.png)

## Revision log

You can leave a comment in the Revision log to describe what is being changed in any given edit.

![Sidebar showing 'revision log' field](https://user-images.githubusercontent.com/3852805/136771305-195cef7c-e2d6-415f-86a0-04abffa5391e.png)

You can view all revisions of the content by visiting the Revisions log. You can compare versions, and restore a previous version if necessary.

## Previews

### Responsive layout preview

At the top of the edit page, next to your account settings there is a button ("Layout preview") which allows you to preview how the content will look across a number of devices.

!['Responsive preview' button](https://user-images.githubusercontent.com/3852805/136771397-660c4ec2-7d7d-4a9d-9aea-cd837a0d65a1.png)

If you don't see this button talk to the site administrator.

### Preview link

Depending on your permissions, you can also generate a Preview link. This allows you to share a draft of a piece of content with another person for time you specify.

![Menu with 'preview link' button selected](https://user-images.githubusercontent.com/3852805/136771480-9d863bf0-f0a5-4a39-9582-a5c8d8292860.png)

The preview can be viewed by anyone with the link, so caution should be taken when sharing unpublished content.

#### Sharing a Preview link for multiple pages

It's now possible to create a single link for a Guide, Step by Step and Subsite, so you don't have to send individual links to each pages. Go to an overview page then click on 'Preview link' and you should see the child pages have been automatically added. 

If you don't see this happening:

- update [localgov](https://github.com/localgovdrupal/localgov) and code for each content format: [Guides](https://github.com/localgovdrupal/localgov_guides), [Step by Step](https://github.com/localgovdrupal/localgov_step_by_step) and [Subsites](https://github.com/localgovdrupal/localgov_subsites)
- when logged in, go to Config > Content Authoring > Preview Link settings and turn 'Multiple entities' on
- if neither work, ask your developer or post a message in #group-content and we'll help

Previewing multiple pages at once doesn't work in Directories or on Subsite pages yet. We're working on this and will keep you posted.

#### Setting the Preview link expiry time

You can now decide how long a preview link will continue working. It's a single value for all preview links you send, rather than a different value for each one.

To set the expiry time:

- go to Configuration > Preview link settings
- scroll to the foot of the page and you'll see this field

  

![Preview link expiry time field](https://github.com/user-attachments/assets/5a3507f2-ac8c-4bfc-9495-d126147dd90a)

- Enter the number of days you would like the preview link to last
- Click 'Save configuration'


## Scheduled publishing

'Scheduling' allows you to publish or unpublish content at a specific date and time, so you don't have to stay up late! 

This needs a submodule called  'LocalGov Review Date'. It's included in LocalGov Drupal, but is not switched on - talk to your developer about enabling it.

### How to publish content on a specific date

1. Create a piece of content and leave it in either "Draft" or "Needs review"
2. Click the 'Scheduling' tab
3. Click 'Add Schedule' button
4. Leave the 'latest revision' revision selected
5. On the 'Execute transition dropdown' select the 'Publish' option
6. Set the date and time you want
7. Click the 'Schedule' button when done

![Add a schedule to publish content](https://github.com/user-attachments/assets/407f1f41-185a-4611-bc2a-28cb998120c6)

#### How to unpublish content on a specific date

1. Create a piece of content and Publish it
2. Click the 'Scheduling' tab
3. Click 'Add Schedule' button
4. Leave the 'latest revision' revision selected
5. On the 'Execute transition dropdown' select the 'Archive' option
6. Set the date and time you want
7. Click the 'Schedule' button when done

![Add a schedule to unpublish content](https://github.com/user-attachments/assets/91c2eed4-e0af-49a4-b9f5-8472e1e38b04)


#### How to publish a new version of a piece of published content on a specific date

1. Create the two versions
* Create a piece of content and publish it 
* Edit the content to create the new version and save it as Draft or Needs Review
  
2. Create a transtion to unpublish the first version
* Click the 'Scheduling' tab
* Click 'Add Schedule' button
* Select the currently published revision
* On the 'Execute transition dropdown' select the 'Archive' option
* Set the date and time you want
* Click the 'Schedule' button when done

3. Create a transtion to publish the second version
* Click 'Add Schedule' button
* Select the version that you want published in the future
* On the 'Execute transition dropdown' select the 'Publish' option
* Set the date and time you want
* Click the 'Schedule' button when done

### Manage all scheduled content

To see and manage all current scheduled content, click on Content > Scheduling. Here you can review, delete or reschedule any of the transitions.

![Scheduling option in the main menu](https://github.com/user-attachments/assets/9d7f6445-ad4e-493f-891d-b4cde21cac66)

## Review date

This needs a submodule called  'LocalGov Review Date'. It's included in LocalGov Drupal, but is not switched on - talk to your developer about enabling it.

Content should be reviewed regularly to ensure that it is relevant and up to date. We can track these reviews using the 'Review date' feature.

### An example workflow for Review date

1. On publishing a piece of content we set a default review date of 1 year
2. A year passes and the review due date passes
3. A revision of the content appears in the "Needs Review" dashboard
4. An editor does a thorough review and publishes the reviewed content, with a new review date of 1 year.

### Managing the Review date

When you create or edit a piece of content you will see the Review date panel in the sidebar.

When you make an edit you can choose whether to classify it as a "Content review" or not. By default this is set to false.

If you toggle this button to true you can set the date that the next review is due.

![Sidebar showing 'content reviewed' toggle](https://user-images.githubusercontent.com/3852805/136772751-cfc3a0d6-cb19-4149-9630-895058390024.png)

When the next review is due, a revision of the content will appear under the 'Review' tab. The (unreviewed) content will remain published unless you decide to remove it.

!['Review content' view](https://github.com/user-attachments/assets/c246ef26-3289-48f4-8392-12edf4091ebe)

## Service contacts

This feature allows you to:

* assign 'owners' or 'subject matter experts' to content to save you capturing this information in a spreadsheet or elsewhere
* automatically email them when content needs to be reviewed

To use this you need the 'LocalGov Workflow Notifications' and 'LocalGov Review Date' which are included in LocalGov Drupal, but not switched on. Talk to your developer about enabling them.

### How to use Service contacts

Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qgdzxpDF9Ww?si=nCtLiO7EYRUSf-PF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>










