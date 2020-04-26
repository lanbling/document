const moment = require('moment');
moment.locale('zh-CN');
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              return moment(timestamp).format('LLLL')
            }
          }
        ]
    ],
    themeConfig: {
        lastUpdated: '最后更新时间',
        logo: '/assets/img/1.jpg',
        repo: 'lanbling/document',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        docsDir: 'docs',
        nav: [
            {text:'首页', link: '/'},
            {text: 'js', link: '/js/'},
            {text: 'css', link: '/css/' },
            {text: 'html', link: '/html/' },
            {text: 'node', link: '/node/' },
            {   
                text: '设计模式', 
                items: [
                    { text: '基础知识', link: '/pattern/basic/' },
                    { text: '设计模式', link: '/pattern/core/' },
                    { text: '设计原则与编程技巧', link: '/pattern/skill/' }
                ]
            },
            {
                 text: 'External', link: 'https://google.com' 
            },
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
            '/pattern/': [
                {
                    title: '基础知识',
                    path: '/pattern/basic',
                    collapsable: true,
                    children: [
                        '/pattern/basic/面向对象的Javascript',
                        '/pattern/basic/闭包和高阶函数',
                        '/pattern/basic/this、call和apply',
                    ]
                }
            ]
        }
    }
}