# Workflows

[[toc]]

LocalGov Workflows (`localgov_workflows`) and LocalGov Review Date (`localgov_review_date`) is an optional feature.

## LocalGov Workflow

## LocalGov Review Date

The LocalGov Review Date feature has configuration allowing the scheduling of content from one state to another, and allows for setting a per content "Review date".

Content editors can set a review date for each piece of content. On this date a revision of the content with the state of _Needs Review_ will be created automatically. All content in this state will appear in the Needs review tab of the Content Moderation admin.

* Admin > Content > Needs review
* /admin/content/localgov_review

### Default Review Date

A site administrator can override the default next review date from a year, to any of the following options:

* 3 months
* 6 months
* 1 year
* 18 months
* 2 years
* 3 years

* Admin > Configuration > Workflows > LocalGov Review Date
* /admin/config/workflow/localgov-review-date

## Scheduled transitions

To manage which types of content can be scheduled visit:

* Admin > Configuration > Workflows > Scheduled transitions settings
* /admin/config/workflow/scheduled-transitions
