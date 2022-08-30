const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nexaverse Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'For Users',
        link: '/guide/',
      },
      {
        text: 'For Creators',
        link: '/creators/'
      },
      {
        text: 'For Investors',
        link: '/investors/'
      },
      {
        text: 'Launch Nexaverse',
        link: 'https://nexaverse.net'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            '',
            'exchange',
          ]
        }
      ],
      '/creators/': [
        {
          title: 'Creator Guide',
          collapsable: false,
          children: [
            '',
            'games',
          ]
        }
      ],
      '/investors/': [
        {
          title: 'Investor Guide',
          collapsable: false,
          children: [
            '',
            'kickbacks',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
