/*
 * @Author: your name
 * @Date: 2020-05-09 22:28:26
 * @LastEditTime: 2020-05-12 23:48:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\docs\js\sidebar.js
 */
module.exports = [
    {
        title: '基础',
        collapsable: true,
        children: [
            '/js/基础/类型转换',
            '/js/基础/面向对象类',
            '/js/基础/原型链类',
            '/js/基础/DOM事件',
            '/js/基础/HTTP协议类',
            '/js/基础/通信类',
            '/js/基础/安全类',
        ]
    },
    {
        title: '进阶',
        collapsable: true,
        children: [
            '/js/进阶/错误监控类',
            '/js/进阶/渲染机制类',
            '/js/进阶/页面性能',
            '/js/进阶/js运行机制',
            '/js/进阶/MVVM框架类',
        ]
    },
    {
        title: '手写代码',
        collapsable: true,
        children: [
            '/js/手写代码/防抖',
        ]
    }
]