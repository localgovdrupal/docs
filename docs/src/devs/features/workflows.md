# Workflows: Technical

[[toc]]

## Introduction

Default editorial workflow for LocalGov Drupal content.

LocalGov Workflows (`localgov_workflows`) provides a Drupal content moderation workflow, a content approvals dashboard, content scheduling and content preview.

The content workflow consists of draft, review, published and archived states with permissions for the editor, author and contributor roles defined in `localgov_roles` (a submodule of localgov_core).

Content scheduling uses the Drupal Scheduled Transitions module.

Content preview is provided by the Preview Link and Responsive Preview modules.

LocalGov Review Date (`localgov_review_date`) is an optional feature.

See also the overview for [Content designers](/content/features/workflow)

## Requirements

### LocalGov Roles

```yml
core_version_requirement: ^8.8 || ^9

dependencies:
  - role_delegation:role_delegation
```

### LocalGov Workflow

```yml
dependencies:
  - drupal:content_moderation
  - drupal:node
  - drupal:views
  - diff:diff
  - preview_link:preview_link
  - responsive_preview:responsive_preview
  - scheduled_transitions:scheduled_transitions
  - localgov_core:localgov_core
  - localgov_core:localgov_roles
```

### LocalGov Review Date

```yml
dependencies:
  - drupal:content_moderation
  - drupal:datetime
  - drupal:node
  - drupal:views
  - scheduled_transitions:scheduled_transitions
  - localgov_workflows:localgov_workflows
```

## Permissions

The following roles are defined by the `localgov_roles` module.

* **Editor** - can publish all content
* **Author** - can publish their own content
* **Contributor** - can draft new content
* **User manager** - can add new users and assign roles

## Basic Configuration

### LocalGov Review Date

The LocalGov Review Date feature has configuration allowing the scheduling of content from one state to another, and allows for setting a per content "Review date".

Content editors can set a review date for each piece of content. On this date a revision of the content with the state of _Needs Review_ will be created automatically. All content in this state will appear in the **Needs review** tab of the Content Moderation admin view.

* Admin > Content > Needs review
* /admin/content/localgov_review

#### Default Review Date

A site administrator can override the default next review date from a year, to any of the following options:

* 3 months
* 6 months
* 1 year
* 18 months
* 2 years
* 3 years

Update the configuration by visiting:

* Admin > Configuration > Workflows > LocalGov Review Date
* /admin/config/workflow/localgov-review-date

### Scheduled transitions

To manage which types of content can be scheduled visit:

* Admin > Configuration > Workflows > Scheduled transitions settings
* /admin/config/workflow/scheduled-transitions

## Advanced

### LocalGov Roles

#### Adding default permissions

Modules that wish to provide default permissions for these roles can implement hook_localgov_roles_default(). An example can be found in the test module tests/localgov_roles_test_one/localgov_roles_test_one.module.

```php
function hook_localgov_roles_default() {
  return [
    // @codingStandardsIgnoreLine
    \Drupal\localgov_roles\RolesHelper::ROLE_CONSTANT => [
      'name of permission',
      'name of another permission',
    ],
  ];
}
```

If you can be certain that this module is included you can import the namespace with a use statement and don't need to use the fully-qualified name, at which point you can use the alias and drop the codingStandardsIgnoreLine.

## Useful links

* [Workflows module Git repository](https://github.com/localgovdrupal/localgov_workflows)
* [Directories module Issue queue](https://github.com/localgovdrupal/localgov_workflows/issues)
* [Miro board defining work](https://miro.com/app/board/o9J_lHm9M2s=/?moveToWidget=3074457360044803901&cot=14)

## [Contributors](https://github.com/localgovdrupal/localgov_workflows/graphs/contributors)

* @stephen-cox
* @Adnan-cds
* @andybroomfield
* @finnlewis
* @ekes
* Ben Hills-Jones
* David Siddall
* Oliver Hannan
* Tom Steel
* Will Callahan
* Maria Young
* James Hall
