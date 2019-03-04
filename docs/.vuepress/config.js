module.exports = {
  title: 'star-个人博客',
  description: 'star个人博客,java学习笔记,后端笔记',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'star-个人博客',
      description: 'star个人博客,java学习笔记,后端笔记'
    }
  },
  head: [
    ['link', { rel: 'icon', type: "image/png", href: '/favicon.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'TSXvc1KyeR' }]
  ],
  themeConfig: {
    search: true ,
    logo: 'http://cdn.star59.top/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      }, {
        text: '随笔',
        items: [
          { text: '前端', items: [
              { text: 'vue', link: '/vue/' },
              { text: 'vuepress', link: '/vuepress/' }
            ] },
          { text: '后端', items: [
              { text: 'java', link: '/java/' },
              { text: 'spring boot', link: '/spring boot/' }
            ] },
          { text: '部署', items: [
              { text: 'linux', link: '/linux/' },
              { text: 'docker', link: '/docker/' }
            ] }
        ]
      }, {
        text: '工具文档',
        items: [
          { text: '在线编辑', items: [
              { text: 'JSON 编辑器', link: 'https://www.bejson.com/jsoneditoronline/' },
              { text: 'MARKDOWN 表格', link: 'https://tool.lu/tables/' },
              { text: '二维码生成器', link: 'https://cli.im/' },
              { text: 'YAML <-> PROPERTIES', link: 'http://www.toyaml.com/index.html' }
            ] },
          { text: '在线服务', items: [
              { text: 'BOOT CDN', link: 'https://www.bootcdn.cn/' },
              { text: 'GOOGLE 字体加速', link: 'https://servers.ustclug.org/2014/06/blog-googlefonts-speedup/' }
            ] },
          { text: '在线文档', items: [
              { text: 'VUE', link: 'https://cn.vuejs.org/v2/api/' },
              { text: 'VUE PRESS', link: 'https://vuepress.vuejs.org/zh/default-theme-config/' },
              { text: 'SPRING BOOT', link: 'https://spring.io/projects/spring-boot/#learn/' }
            ] },
          { text: '趋势分析', items: [
              { text: '百度指数', link: 'http://index.baidu.com/#/' },
              { text: '谷歌趋势', link: 'https://trends.google.com/' }
            ] }
        ]
      }, {
        text: '知识库',
        link: '/resource/'
      }
    ]
  }
}
