# LocalGov Docs contribution guidelines

Anybody is welcome to contribute to the documentation, right now there aren't any specific processes so just open a PR with the changes and a description and it'll be reviewed.

Please make sure you've read the main [contribution guidelines](https://github.com/localgovdrupal/localgov/blob/master/CONTRIBUTING.md).

## How to use docs

This project is currenlty using vuepress with the default theme which has some [configuration options](https://vuepress.vuejs.org/theme/).

Using lando is quite simple, otherwise you'll need to find other means to compile using Yarn.

1. Change directory to `docs/src`

2. Run `lando yarn dev`

This will spin up a dev environment with a live preview of your changes.

Next you can just edit any markdown file or add a new markdown file into any folder along the other docs. If you add a new file and you want it included in the sidebar you will need to edit the `.vuepress/config.js` file and add it to the `sidebar`, for example:

```js
'/contributing/': [
  '',
  'development',
  'design',
  'research',
  'testing',
],
```

Each folder contains a `README.md` file which is the index for that folder, in the sidebar this is represented by an empty string `''`.

All files use markdown.
