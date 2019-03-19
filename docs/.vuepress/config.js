module.exports = {
  title: 'star-个人博客',
  description: 'star个人博客,java学习笔记,后端笔记',
  markdown: {
    lineNumbers: true,
    toc:{
      includeLevel:[2, 3],
      containerHeaderHtml: '文章目录'
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'star-个人博客',
      description: 'star个人博客,java学习笔记,后端笔记'
    }
  },
  head: [
    ['link', { rel: 'icon', type: "image/png", href: 'https://cdn.star59.top/bg/20190319/KjF3HWTMj5WD.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'aDxlDtobeu' }]
  ],
  themeConfig: {
    search: true ,
    logo: 'https://cdn.star59.top/bg/20190319/B5tjVTWasxqa.png',
    nav: [
      {
        text: '首页',
        link: '/'
      }, {
        text: '随笔',
        link: '/essay/'
      }, {
        text: '在线工具',
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
