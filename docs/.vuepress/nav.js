/*
 * @Author: your name
 * @Date: 2020-05-09 22:52:08
 * @LastEditTime: 2020-05-13 08:59:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\docs\.vuepress\nav.js
 */
module.exports = [
    { text: '首页', link: '/' },
    { text: 'js', link: '/js/' },
    { text: 'css', link: '/css/' },
    { text: 'node', link: '/node/' },
    {
        text: '开发经验',
        items: [
            { text: '工具', link: '/experience/tool/' },
            { text: '异常', link: '/experience/exception/' },
            { text: '工程化', link: '/experience/engineering/' },
            { text: '优化', link: '/experience/optimize/' }
        ]
    },
    {
        text: '设计模式',
        items: [
            { text: '基础知识', link: '/pattern/basic/' },
            { text: '设计模式', link: '/pattern/core/' },
            { text: '设计原则与编程技巧', link: '/pattern/skill/' }
        ]
    },
    { text: '修身', link: '/progress/' },
    { text: '职业', link: '/career/' },
]