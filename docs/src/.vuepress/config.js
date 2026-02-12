import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from 'vuepress/utils'
import { childTheme } from './theme'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  title: 'LocalGov Drupal Docs',
  description: 'LocalGov Drupal is an open source collaboration between UK councils and Drupal developers.',

  port: 49728,

  /**
   * Extra tags to be injected to the page HTML `<head>`
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
   */
  theme: childTheme({
    repo: 'https://github.com/localgovdrupal/localgov',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last updated',
    docsRepo: 'https://github.com/localgovdrupal/docs',
    docsBranch: 'main',
    docsDir: 'docs/src',
    displayAllHeaders: false,
    sidebarDepth: 1,
    smoothScroll: false,
    navbar: [
      {
        text: 'Overview',
        link: '/overview'
      },
      {
        text: 'Getting Started',
        children: [
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
        ]
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Contributing',
            link: '/contributing/'
          },
          {
            text: 'Credits System',
            link: '/contributing/credits-system'
          },
          {
            text: 'Accessibility',
            link: '/accessibility/'
          },
          {
            text: 'Governance',
            link: '/governance/'
          },
        ]
      },
      {
        text: 'Microsites',
        link: '/microsites/'
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
          text: 'Getting started',
          link: '/devs/getting-started/',
          collapsible: true,
          children: [
            '/devs/getting-started/drupal-requirements',
            '/devs/getting-started/working-with-lando',
            '/devs/getting-started/working-with-ddev',
            '/devs/getting-started/debugging-with-xdebug',
            '/devs/getting-started/working-with-gitpod',
          ]
        },
        {
          text: 'General configuration',
          link: '/devs/general/',
          collapsible: true,
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
          text: 'Features',
          link: '/devs/features/',
          collapsible: true,
          children: [
            '/devs/features/services-technical',
            '/devs/features/alert-banner-technical',
            '/devs/features/news-technical',
            '/devs/features/directories-technical',
            '/devs/features/geo-technical',
            '/devs/features/subsites',
            '/devs/features/workflows',
            '/devs/features/search',
          ]
        },
        {
          text: 'Theme',
          link: '/devs/theme/',
          collapsible: true,
          children: [
            '/devs/theme/',
            '/devs/theme/regions',
            '/devs/theme/old-localgov-theme',
            '/devs/theme/old-skeleton-theme',
            '/devs/theme/admin-theme', // keep at the end
          ]
        },
        {
          text: 'Testing',
          link: '/devs/testing/',
        },
        {
          text: 'Development workflows',
          link: '/devs/workflows/',
          collapsible: true,
          children: [
            '/devs/workflows/installing-and-deploying-lgd',
          ]
        },
        {
          text: 'Hosting',
          link: '/devs/hosting/',
          collapsible: true,
          children: [
            '/devs/hosting/',
            '/devs/hosting/azure-hosting',
          ]
        },
        {
          text: 'Release statuses',
          link: '/devs/release-statuses/',
          collapsible: true,
          children: [
            '/devs/release-statuses/',
          ]
        },
        {
          text: 'Security',
          link: '/devs/security/',
          collapsible: true,
          children: [
            '/devs/security/best-practices',
            '/devs/security/sso'
          ]
        },
        {
          text: 'Quality standards',
          link: '/devs/quality-standards/',
          collapsible: true,
          children: [

            '/devs/quality-standards/accessibility',
            '/devs/quality-standards/documentation',
            '/devs/quality-standards/testing'
          ]
        },

        {
          text: 'How-tos',
          link: '/devs/how-to/',
          collapsible: true,
          children: [
            '/devs/how-to/how-to-test-modules-with-gitpod',
          ]
        },
      ],

      '/content/': [
        '',
        {
          text: 'Features',
          link: '/content/features/',
          collapsible: true,
          children: [
            '/content/features/services',
            '/content/features/alert-banner',
            '/content/features/directories',
            '/content/features/elections',
            '/content/features/guide',
            '/content/features/news',
            '/content/features/publications',
            '/content/features/step-by-step',
            '/content/features/subsites',
            '/content/features/workflow',
            '/content/features/paragraphs',
          ]
        },
        'patterns',
        {
          text: 'How-tos',
          link: '/content/how-to/',
          collapsible: true,
          children: [
            '/content/how-to/how-to-log-in',
            '/content/how-to/how-to-github',
            '/content/how-to/how-to-manage-content',
            '/content/how-to/how-to-wysiwyg-styles',
            '/content/how-to/how-to-set-character-limits',
            '/content/how-to/how-to-crop-images',
            '/content/how-to/how-to-media-library',
            '/content/how-to/how-to-bulk-upload-images',
            '/content/how-to/how-to-check-where-media-is-used',
            '/content/how-to/how-to-manage-menus',
            '/content/how-to/how-to-devolve-publishing',
            '/content/how-to/how-to-tag-content',
            '/content/how-to/how-to-archive-ua-data',
            '/content/how-to/how-to-migrate-content-from-existing-sites',
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
          text: 'Features',
          link: '/microsites/features/',
          collapsible: true,
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
          text: 'How-tos',
          link: '/microsites/how-to/',
          collapsible: true,
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

      '/governance/': [
        '',
        'contributor-agreement',
        'code-of-conduct',
        'technical-group-overview',
        'patch-maintenance-policy',
        'new-features-policy',
        'branch-naming-conventions',
      ],
    }
  }),

  plugins: [
    searchPlugin({}),
  ],

  bundler: viteBundler(),

})
