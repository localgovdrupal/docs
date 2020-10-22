# LocalGovDrupal Docs

The repository for the documentation sitting at https://trusting-noyce-aebebc.netlify.app/

## Local development

1. Start lando

2. Change directory to `docs`

3. `lando yarn install` to install dependencies

4. `lando yarn dev` to start a dev server

## Known issues

When making config changes in development mode vuepress will not reload, so you have to restart the compiler, this is currently being [worked on](https://github.com/vuejs/vuepress/issues/2254).
