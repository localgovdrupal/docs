# Policy for adding a new feature, functionality or modules to LocalGov Drupal

This policy was discussed and agreed in May 2023 and is intended to act as a
guide to assessing new functionality to be included in LocalGov Drupal. There
are notes on the original discussion and proposal in a [Google Doc](https://docs.google.com/document/d/1OCs3W7WFGtDNpL0U-6lhT6pQpOf2RydjtpkAMOrUeI4/edit).

## Background

Requests for new functionality come from a number of places, content designers,
council website product owners, developers to name a few.

New features usually come in the form of Drupal contributed modules or custom
modules that can be included in the default codebase.

Additionally, the installation profile can enable such features on a default
installation. For any request, we need to assess whether we should include the
new module module or feature in the localgov profile codebase (i.e. make it a
dependency in the profile composer.json) as installed by default (i.e. add it to
the .info.yml file such that it is installed by default on a fresh installation).

## Process for assessment

To assess a new feature, functionality or module for addition to LocalGov
Drupal, we would like to answer these questions:

1. Does more than one council want this feature? / Do a significant proportion
of our users want this feature?

2. Are there known ways to mitigate any adverse behaviours that this new feature might present to existing sites?

4. Can the feature be disabled after installation without any dependency
problems?

5. Does the product group want to prioritise this feature?

6. Will this enhancement be communicated to users with an existing installation?
(e.g. release notes / README.md / drupal_set_message )

If questions 1-4 are all answered with a "yes", this is a candidate to be
included directly in the installation profile.

We can then choose whether it’s enabled by default or not.

If question 2 is "no", then the feature or module is probably better as an
optional module.

## Documenting the process

To document the consideration of the questions above, it is probably best to
create an issue to record the discussion for future reference.

