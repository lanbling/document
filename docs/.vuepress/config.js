/*
 * @Author: your name
 * @Date: 2020-04-03 09:09:37
 * @LastEditTime: 2020-05-09 23:24:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \document\docs\.vuepress\config.js
 */
const moment = require('moment');
moment.locale('zh-CN');
module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    title: '罗湖',
    description: '不如意事常八九，可与言者无二三',
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
        logo: '/assets/img/profile.png',
        repo: 'lanbling/document',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        docsDir: 'docs',
        nav: require('./nav'),
        sidebar: require('./sidebar')
    }
}