module.exports = {
    title: 'Hello-VuePress',
    description: '',
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Hello-VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home',
                items: [
                    { text: 'Group1', items: [
                            { text: 'Chinese', link: '/language/chinese' },
                            { text: 'Japanese', link: '/language/japanese' }
                        ] },
                    { text: 'Group2', items: [
                            { text: 'Chinese', link: '/language/chinese' },
                            { text: 'Japanese', link: '/language/japanese' }
                        ] }
                ]},
            { text: 'Guide', link: '/guide/' }
        ],
        displayAllHeaders: true,
        sidebar: 'auto',
        sidebarDepth: 2,
        searchMaxSuggestions: 10,
        lastUpdated: '上次更新'
    }
}
