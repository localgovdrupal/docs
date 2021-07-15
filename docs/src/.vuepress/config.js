const path = require('path');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'LocalGov Drupal Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'LocalGov Drupal is an open source collaboration between UK councils and Drupal developers.',

  port: 49728,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#0762B5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/favicons/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/favicons/favicon.ico"}],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/localgovdrupal/localgov',
    docsDir: '',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last updated',
    docsRepo: 'https://github.com/localgovdrupal/docs',
    docsDir: 'docs/src',
    displayAllHeaders: false,
    sidebarDepth: 1,
    smoothScroll: false,
    nav: [
      {
        text: 'Getting started',
        link: '/getting-started/',
      },
      {
        text: 'Features',
        link: '/features/'
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
        text: 'Accessibility',
        link: '/accessibility/'
      },
      {
        text: 'Testing',
        link: '/testing/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
    ],
    sidebar: {
      '/getting-started/': [
        '',
        'working-with-lando',
      ],

      '/features/': [
        '',
        {
          title: 'General',
          path: '/features/general/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/features/general/content-types',
            '/features/general/custom-modules',
            '/features/general/image-styles',
            '/features/general/media-types',
            '/features/general/paragraph-types',
            '/features/general/taxonomies',
            '/features/general/user-roles',
          ]
        },
        {
          title: 'Services',
          path: '/features/services/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/features/services/content-design',
            '/features/services/technical',
            '/features/services/background',
          ]
        },
        {
          title: 'Alert Banners',
          path: '/features/alert-banner/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/features/alert-banner/content-design',
            '/features/alert-banner/technical',
            '/features/alert-banner/background',
          ]
        },
        {
          title: 'News',
          path: '/features/news/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/features/news/content-design',
            '/features/news/technical',
            '/features/news/background',
          ]
        },
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

      '/accessibility/': [
        '',
        'tools',
        'testing',
        'tests',
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
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../images')
      }
    }
  }
}
