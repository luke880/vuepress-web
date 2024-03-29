import { defineConfig } from 'vuepress/config'
import {
  // Sidebar4EN,
  Sidebar4ZH,
  // NavItems4EN,
  NavItems4ZH
} from './config/index'

export default defineConfig(ctx => ({
  logo: '/images/logo.png',
  title: 'Easyweb',
  theme: '@vuepress/vue',
  dest: '../../vuepress',
  base: '/easyweb/', // 部署到github相关的配置
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Easyweb',
    //   description: 'Quickly building web applications using the central platform'
    // },
    '/': {
      lang: 'zh-CN',
      title: 'Easyweb',
      description: '使用中台快速构建web应用程序'
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    // repo: 'luke880/vuepress-web',
    repo: '#',
    editLinks: false,
    docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    algolia: ctx.isProd
      ? {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        algoliaOptions: {
          facetFilters: ['tags:v1']
        }
      }
      : null,
    smoothScroll: false,
    sidebar: false,
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: false, // 默认值：true
    locales: {
      // '/en/': {
      //   label: 'English',
      //   selectText: 'Languages',
      //   ariaLabel: 'Select language',
      //   editLinkText: 'Edit this page on GitHub',
      //   lastUpdated: 'Last Updated',
      //   nav: NavItems4EN,
      //   sidebar: Sidebar4EN
      // },
      '/': {
        label: '简体中文',
        selectText: 'xzyy',
        ariaLabel: 'xzyy',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: NavItems4ZH, 
        sidebar: Sidebar4ZH
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-128189152-1'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    ['vuepress-plugin-flowchart']
  ],
  extraWatchFiles: ['.vuepress/config/**'],
  evergreen: !ctx.isProd
}))
