module.exports = {
  title: 'Intl Number Input',
  description: 'Easy input of formatted numbers',
  head: [
    ['link', { rel: 'icon', href: '/intl-number-input/favicon.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap' }]
  ],
  base: '/intl-number-input/',
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      {
        text: '❤ Sponsor',
        link: 'https://ko-fi.com/dm4t2'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/dm4t2/intl-number-input/releases'
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'Config Reference',
        link: '/config'
      },
      {
        text: 'Playground',
        link: '/playground'
      }
    ],
    repo: 'dm4t2/intl-number-input',
    docsDir: 'docs'
  }
}
