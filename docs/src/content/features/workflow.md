# Workflow

[[toc]]

## When to use Workflow

This [LocalGov Workflow module](https://github.com/localgovdrupal/localgov_workflows) provides roles, content moderation, an approvals view, preview links, scheduled publishing and service contacts. This module is included in LocalGov Drupal, but is not switched on. Talk to your developer about enabling it.

### Video guide
Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLibxxY4DUV2pf70Py14VEbOeQUtgPXKAn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Essential concepts

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

### Draft

When content is in the _Draft_ state it will appear in the "Moderated content" admin screen.

Visit **Admin > Content > Moderated content**

### Needs Review

When content is in the _Needs Review_ state it will appear in the "Approvals dashboard".

Visit **Admin > Content > Approvals dashboard**

![image](https://user-images.githubusercontent.com/3852805/136770538-e216ef58-d9e0-43ac-a1df-b18d35e07745.png)

If you have the permission to edit the content you will see the Edit button.

When viewing a new (unpublished) revision of a piece of content, you will see a form at the top of the content which allows you to publish (or not).

![image](https://user-images.githubusercontent.com/3852805/136771222-66460351-f23c-4d86-a37d-27d4adfea4e7.png)

### Creating a new draft of Published content

When we edit a piece of published content and save it as _Draft_ or _Needs Review_, the content remains published and creates a new revision.

The **Latest version** tab will show the new revision, whereas the View tab will allow you to see the current _Published_ version.

![image](https://user-images.githubusercontent.com/3852805/136771107-70ed6ed6-c79a-45bb-b41e-ee4adbb2177c.png)

## Revision log

You can leave a comment in the Revision log to describe what is being changed in any given edit.

![image](https://user-images.githubusercontent.com/3852805/136771305-195cef7c-e2d6-415f-86a0-04abffa5391e.png)

You can view all revisions of the content by visiting the Revisions log. You can compare versions, and restore a previous version if necessary.

## Previews

### Responsive layout preview

At the top of the edit page, next to your account settings there is a button ("Layout preview") which allows you to preview how the content will look across a number of devices.

![image](https://user-images.githubusercontent.com/3852805/136771397-660c4ec2-7d7d-4a9d-9aea-cd837a0d65a1.png)

If you don't see this button talk to the site administrator.

### Preview Link

Depending on your permissions, you may also be able to generate a Preview link. This allows you to share a draft of a piece of content with another person for 1 week.

![image](https://user-images.githubusercontent.com/3852805/136771480-9d863bf0-f0a5-4a39-9582-a5c8d8292860.png)

The preview can be viewed by anyone with the link, so caution should be taken when sharing unpublished content.

#### Sharing a Preview Link for multiple pages

It's now possible to create a single link for a Guide, Step by Step and Subsite, so you don't have to send individual links to each pages. Go to an overview page then click on 'Preview Link' and you should see the child pages have been automatically added. 

If you don't see this happening:

- update [localgov](https://github.com/localgovdrupal/localgov) and code for each content format: [Guides](https://github.com/localgovdrupal/localgov_guides), [Step by Step](https://github.com/localgovdrupal/localgov_step_by_step) and [Subsites](https://github.com/localgovdrupal/localgov_subsites)
- when logged in, go to Config > Content Authoring > Preview Link settings and turn 'Multiple entities' on
- if neither work, ask your developer or post a message in #group-content and we'll help

Previewing multiple pages at once doesn't work in Directories or on Service pages yet. We're working on this and will keep you posted.


## Scheduling content*

If you want to publish or unpublish content on a particular date you can use Scheduled transitions to line them up in advance. 

### How to schedule transitions

#### How to publish content on a specific date

1. Create a piece of content and leave it in either "Draft" or "Needs review"
3. Click the Scheduled transition tab
1. Click "Add Scheduled transition" button
4. Leave the "latest revision" revision selected
5. Select Publish option from the Execute transition dropdown
6. Set the date and time that you change the state
7. Press the Schedule transition button

#### How to unpublish content on a specific date

1. Create a piece of content and Publish it
3. Click the Scheduled transition tab
1. Click "Add Scheduled transition" button
4. Leave the "latest revision" revision selected
5. Select Archive option from the Execute transition dropdown
6. Set the date and time that you change the state
7. Press the Schedule transition button

#### How to publish a new version of a piece of published content on a specific date

1. Create the two versions
    1. Create a piece of content and Publish it 
    1. Edit the content to create the new version and save it as Draft or Needs Review
3. Create a transtion to unpublish the first version
    1. Click the Scheduled transition tab
    1. Click "Add Scheduled transition" button
    4. Select the currently published revision
    5. Select Archive option from the Execute transition dropdown
    6. Set the date and time that you change the state
    7. Press the Schedule transition button
3. Create a transtion to publish the second version
    1. Click "Add Scheduled transition" button
    4. Select the version that you want pulished in the future
    5. Select Publish option from the Execute transition dropdown
    6. Set the date and time that you change the state
    7. Press the Schedule transition button

### Manage all scheduled transitions

To see / manage the list of currently scheduled to change state

Visit **Admin > Content > Scheduled Transitions**

Here you can review, delete or reschedule any of the transitions.

## Review date*

Content should be reviewed regularly to ensure that it is relevant and up to date. We can track these reviews using the **Review Date** feature.

### An example workflow for Review date

1. On publishing a piece of content we set a default review date of 1 year
4. A year passes and the review due date passes
5. A revision of the content appears in the "Needs Review" dashboard
6. An editor does a thorough review and publishes the reviewed content, with a new review date of 1 year.

### Managing the Review date

When you create or edit a piece of content you will see the Review date panel in the sidebar.

When you make an edit you can choose whether to classify it as a "Content review" or not. By default this is set to false.

If you toggle this button to true you can set the date that the next review is due.

![image](https://user-images.githubusercontent.com/3852805/136772751-cfc3a0d6-cb19-4149-9630-895058390024.png)

When the next review is due, a revision of the content will appear in the "Needs Review" dashboard. The (unreviewed) content will remain published.

Visit **Admin > Content > Needs review**

![image](https://user-images.githubusercontent.com/3852805/136771578-c8e8927f-b355-456f-b9e0-0176a589aca8.png)

* Review date and Scheduled transitions are part of the LocalGov Workflows submodule LocalGov Review Date. If these features are not available talk to your site administrator.
