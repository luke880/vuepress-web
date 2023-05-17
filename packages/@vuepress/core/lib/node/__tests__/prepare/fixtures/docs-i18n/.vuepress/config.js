module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Middle Platform',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '玄剑中台',
      description: '中台快速构建Web应用程序'
    }
  },
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated'
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新'
      }
    }
  }
}
