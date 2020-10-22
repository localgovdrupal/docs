# Automated tests

The theme features some automated tests written with [Mocha.js](https://mochajs.org/) localed in `tests/`. The purpose of these tests is to ensure consistency between versions and deployments and to highlight any regression issues, particularly regarding Gulp.

Mocha.js doesn't make assumptions about your assertion library of choice, in this project we opted for [Chai](https://www.chaijs.com/).

## Usage

To run the tests you can run `npm test` or `npm run health-check`. In the future more tests may be added to these, the declaration of the scripts are in the `package.json` under `scripts:`.

Generally using the helper functions is the recommended approach, so that if we need to make changes to the functions then it won't affect the written tests.

## Edge cases

There have been some difficulties with automatically testing that some Gulp commands exit without any errors. To get around this we've been running tests that check for those commands using `@jsdevtools/chai-exec` and actually running commands using a function wrapping `execSync`.

`chai-exec` does allow us to easily check that the command ran successfully but the compiled files have their output removed as part of an internal clean up step. As a result when we test for npm commands we test using chai-exec first to ensure it can run and then we re-run the command using the `runCommand()` function and then we can test for the compiled files.

## Extending

You can create your own tests by adding files to the tests folder. The naming convention is generally `name.test.js` but any JS file should work. You can then add your own script in the package.json to run the file using Mocha.

