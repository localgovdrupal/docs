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
        text: 'Overview',
        link: '/overview'
      },
      {
        text: 'Developers',
        link: '/devs/'
      },
      {
        text: 'Content designers',
        link: '/content/'
      },
      {
        text: 'Designers',
        link: '/design/'
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
        text: 'Main site',
        link: 'https://localgovdrupal.org'
      },
    ],
    sidebar: {
      '/devs/': [
        '',
        {
          title: 'Getting started',
          path: '/devs/getting-started/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/getting-started/working-with-lando',
          ]
        },
        {
          title: 'General configuration',
          path: '/devs/general/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/general/content-types',
            '/devs/general/custom-modules',
            '/devs/general/image-styles',
            '/devs/general/media-types',
            '/devs/general/paragraph-types',
            '/devs/general/taxonomies',
            '/devs/general/user-roles',
          ]
        },
        {
          title: 'Features',
          path: '/devs/features/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/features/services-technical',
            '/devs/features/alert-banner-technical',
            '/devs/features/news-technical',
            '/devs/features/directories-technical',
            '/devs/features/geo-technical',
            '/devs/features/subsites'
            '/devs/features/workflows',
          ]
        },
        {
          title: 'Theme',

          path: '/devs/theme/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/theme/',
            '/devs/theme/regions',
            '/devs/theme/old-localgov-theme',
            '/devs/theme/old-skeleton-theme',
            '/devs/theme/admin-theme', // keep at the end
          ]
        },
        {
          title: 'Testing',
          path: '/devs/testing/',
        },
        'issues',
        'development-workflow',
      ],

      '/content/': [
        '',
        {
          title: 'Features',
          path: '/content/features/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/content/features/services',
            '/content/features/alert-banner',
            '/content/features/news',
            '/content/features/step-by-step',
            '/content/features/guide',
            '/content/features/subsites',
            '/content/features/directories',
            '/content/features/workflow',
          ]
        },
        'patterns',
        {
          title: 'How-tos',
          path: '/content/how-to/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/content/how-to/how-to-log-in',
            '/content/how-to/how-to-github',
            '/content/how-to/how-to-wysiwyg-styles',
            '/content/how-to/how-to-crop-images',
          ]
        },
      ],
      '/design/': [
        '',
        'documentation',
        'research',
        'feature-design',
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
