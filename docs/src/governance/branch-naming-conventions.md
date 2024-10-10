# Git branch naming conventions

This evolved through discussion on [https://github.com/localgovdrupal/localgov/issues/489](https://github.com/localgovdrupal/localgov/issues/489)

It is useful to follow consistent branch naming conventions to help with review
and transparency (and autocomplete!).

In general for each repository, we will have one or more permanent development
branches, named 1.x / 2.x / 3.x in line with the major versions that are being
supported.

When making changes, we try to branch off the permanent development branch with
a temporary working branch that follows certain naming conventions.

These temporary branches usually fall into the following categories:

- feature: longer term branches that take time (features) and need more review
before merging
- fix: fixes that are irritants or bugs that want merging at regular intervals
to improve the product
- hotfix: issues that need fixing out of normal process and need to be released
as soon as possible

## Feature branches

When working on a feature or substantial changes, we branch off the main branch
to create a `feature` branch.

The naming convention for feature branch is:

- start with a prefix of `feature/`
- follow the prefix by the major version branch we branched from (eg 1.x or 2.x)
if relevant
- continue with the issue number and a descriptive branch name separated with
hyphens.

For example: `feature/2.x/123-nice-new-thing`

## Fix (or bugfix) branches

When working to troubleshoot and fix a bug or problem in the codebase, we branch
off the main branch to create a `fix` branch.

The naming convention for fix branch is:

- start with a prefix of `fix/`
- follow the prefix by the major version branch we branched from (eg 1.x or 2.x) if relevant
- continue with the issue number and a descriptive branch name separated with hyphens

For example: `fix/2.x/124-fix-views-listing-paragraph`

## Hotfix branches

For super urgent issue that need fixing out of normal process and released asap,
we can prefix the branch with `hotfix`

The naming convention for fix branch is:

- start with a prefix of `hotfix`
- follow the prefix by the major version branch we branched from (eg 1.x or 2.x)
if relevant
- continue with the issue number and a descriptive branch name separated with
hyphens

For example: `hotfix/2.x/125-fix-composer-install-error`

## Other notes

Some repositories on;y have one main development branch. In this case it is
reasonable to omit the 2.x portion, resulting in branches named like:

`feature/123-new-feature-name`
