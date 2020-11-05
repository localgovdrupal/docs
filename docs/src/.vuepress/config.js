const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LocalGovDrupal Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  port: 49728,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/localgovdrupal/docs',
    docsDir: '',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last updated',
    docsDir: 'docs/src',
    displayAllHeaders: true,
    sidebarDepth: 1,
    smoothScroll: false,
    nav: [
      {
        text: 'Getting started',
        link: '/getting-started/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Theme',
        link: '/theme/'
      },
      {
        text: 'Contributing',
        link: '/contributing/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ],
    sidebar: {
      '/getting-started/': [
        '',
        'using-vue',
        'working-with-lando',
      ],

      '/config/': [
        '',
      ],

      '/theme/': [
        '',
        'styling',
        'javascript',
        'regions',
        'automated-tests',
        'skeleton-theme',
        'admin-theme', // keep at the end
      ],

      '/contributing/': [
        '',
        'development',
        'design',
        'research',
        'testing',
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-nprogress',
  ]
}
