/*
 * @Author: your name
 * @Date: 2020-05-09 22:52:08
 * @LastEditTime: 2020-05-09 23:38:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\docs\.vuepress\nav.js
 */
module.exports = [
    {text:'首页', link: '/'},
    {text: 'js', link: '/js/'},
    {text: 'css', link: '/css/' },
    {text: 'node', link: '/node/' },
    {   
        text: '设计模式', 
        items: [
            { text: '基础知识', link: '/pattern/basic/' },
            { text: '设计模式', link: '/pattern/core/' },
            { text: '设计原则与编程技巧', link: '/pattern/skill/' }
        ]
    },
    // {
    //      text: 'External', link: 'https://google.com' 
    // },
]