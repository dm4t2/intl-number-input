import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme({
  title: 'Intl Number Input',
  description: 'Easy input of formatted numbers',
  head: [['link', { rel: 'icon', href: '/intl-number-input/favicon.png' }]],
  base: '/intl-number-input/',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
        activeMatch: '^/guide/'
      },
      {
        text: 'Playground',
        link: '/playground/',
        activeMatch: '^/playground/'
      },
      {
        text: 'API',
        link: '/api/',
        activeMatch: '^/api/'
      },
      {
        text: '❤ Sponsor',
        link: 'https://ko-fi.com/dm4t2'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/dm4t2/intl-number-input/releases'
      }
    ],
    sidebar: {
      '/guide/': [{ text: 'Introduction', link: '/guide/' }]
    },
    repo: 'dm4t2/intl-number-input',
    docsDir: 'docs'
  }
})
