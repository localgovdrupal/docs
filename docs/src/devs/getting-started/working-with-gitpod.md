# Working with Gitpod

Gitpod is a cloud development environment. Using Gitpod can help you get LocalGov Drupal up and running quickly, without needing to set up a local development environment. It's more like a local development environment than a production environment, and is intended for you to try out LocalGov Drupal, not for running live websites.

## Before you start
1. [Sign up for gitpod.io](https://gitpod.io/login), if you haven't already.

## Try it out:
1. Click on the "Open in Gitpod" button below

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/localgovdrupal/localgov_project)

2. Your environment is being prepared, wait about a minute.
1. VSCode code editor will be displayed.
1. Various commands will run in the terminal at the bottom of the screen. Wait for these to complete.
1. You'll get a link to your LocalGov Drupal site in a message like this. Ctrl-click the long link to open the LocalGov Drupal website in a new tab
```
Project can be reached at https://8080-essexcounty-localgovpro-i5qq2u8hn9l.ws-eu81.gitpod.io
```
6. Log in with the credentials `admin` and `admin`.

If you later make the site public, make sure you change the username and password - otherwise anyone with the link could control your site. By default, the project is not made public, so this is not an issue.

## Adding demo content
The LocalGov Drupal demo content showcases a lot of the content types in LocalGov Drupal. Enabling this will make your website look like https://demo.localgovdrupal.org. To do this:

1. Go to the Gitpod window
2. In the terminal at the bottom of the page, type `ddev drush en localgov_demo`

## Installing modules and testing branches

Our how to guides include step by step instructions for [installing new Drupal modules](/devs/how-to/how-to-test-modules-with-gitpod.html#_4-install-a-new-module) and [testing LGD work in progress)](/devs/how-to/how-to-test-modules-with-gitpod.html#_5-testing-branches-from-github).
