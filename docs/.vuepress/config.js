module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    basc: '/document',
    themeConfig: {
        lastUpdated: '最后更新时间',
        logo: '/assets/img/1.jpg',
        nav: [
            {text:'首页', link: '/'},
            {text: 'js', link: '/js/' },
            {text: 'css', link: '/css/' },
            {text: 'html', link: '/html/' },
            {text: 'node', link: '/node/' },
            {
                 text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: {
            '/js/': [
                {
                    title: 'vue学习指南',
                    collapsable: true,
                    children: [
                        '/js/vue/原型链',
                        '/js/vue/this指针'
                    ]
                },
                {
                    title: 'lodash源码分析',
                    collapsable: true,
                    children: [
                        '/js/lodash/'
                    ]
                }
            ],
        }
    }
}