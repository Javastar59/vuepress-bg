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
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      }, {
        text: '前端随笔',
        link: '/fe/'
      }, {
        text: '后端随笔',
        link: '/java/'
      },{
        text: '部署运维',
        link: '/docker/'
      },{
        text: '工具资源',
        link: '/resource/'
      }
    ]
  }
}
