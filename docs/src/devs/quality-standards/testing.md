# Quality standard: Testing

Let's make sure our code keeps working with any other changes that are
introduced over time.

LocalGov Drupal already has good test coverage, which helps us avoid releasing
updates that break existing functionality.

Before recommending a project for use with LopcalGov Drupal, project maintainers
should confirm the following.

## 1. Existing tests pass

Check existing test coverage and ensure all tests pass. Currently the
localgov_project runs all tests on a daily basis.

See [https://github.com/localgovdrupal/localgov_project/actions](https://github.com/localgovdrupal/localgov_project/actions)

## 2. Add new automated tests

Add new tests to cover any new functionlality


For furthter reference, please see [recomendations for testing on drupal.org.](https://www.drupal.org/about/core/policies/core-change-policies/core-gates/testing)
