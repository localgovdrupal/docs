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
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-ETT82J89DV'}],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ETT82J89DV');`],
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
        text: 'Microsites',
        link: '/microsites/'
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
            '/devs/getting-started/drupal-requirements',
            '/devs/getting-started/working-with-lando',
            '/devs/getting-started/working-with-ddev',
            '/devs/getting-started/debugging-with-xdebug',
            '/devs/getting-started/working-with-gitpod',
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
            '/devs/features/subsites',
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
        {
          title: 'Development workflows',
          path: '/devs/workflows/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/workflows/installing-and-deploying-lgd',
          ]
        },
        {
          title: 'Hosting',
          path: '/devs/hosting/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/hosting/',
          ]
        },
        {
          title: 'Security',
          path: '/devs/security/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/devs/security/best-practices',
            '/devs/security/sso'
          ]
        },
        {
          title: 'Quality standards',
          path: '/devs/quality-standards/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [

            '/devs/quality-standards/accessibility',
            '/devs/quality-standards/documentation',
            '/devs/quality-standards/testing'
          ]
        },
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
            //'/content/features/microsites',
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
            '/content/how-to/how-to-manage-content',
            '/content/how-to/how-to-wysiwyg-styles',
            '/content/how-to/how-to-crop-images',
            '/content/how-to/how-to-media-library',
            '/content/how-to/how-to-manage-menus',
            '/content/how-to/how-to-tag-content',
          ]
        },
      ],
      '/design/': [
        '',
        'documentation',
        'research',
        'feature-design',
      ],
      '/microsites/': [
        '',
        'microsites',
        'roles',
        {
          title: 'Features',
          path: '/microsites/features/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/microsites/features/appearance',
            '/microsites/features/editorial',
            '/microsites/features/pages',
            '/microsites/features/directories',
            '/microsites/features/events',
            '/microsites/features/news',
            '/microsites/features/blogs',
            '/microsites/features/shared-media',
            '/microsites/features/taxonomy-terms',
          ]
        },
        {
          title: 'How-tos',
          path: '/microsites/how-to/',
          collapsable: true,
          initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup
          children: [
            '/microsites/how-to/find-your-way-around',
            '/microsites/how-to/fancy-layouts',
            '/microsites/how-to/domain-aliases',
            '/microsites/how-to/add-microsite-editors',
            '/microsites/how-to/enable-disable-content',
            '/microsites/how-to/manage-site-settings',
            '/microsites/how-to/manage-menus',
            '/microsites/how-to/create-delete-microsite',
            '/microsites/how-to/install-update',
            '/microsites/how-to/add-custom-theme',

          ]
        },
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
