/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  // { text: '常用笔记', link: '/常用笔记/' },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    items: [
      {
        text: 'Vuepress Theme',
        icon: 'icon-park-solid:theme',
        items: [
          {
            text: 'vuepress-theme-plume',
            link: '/vuepress-theme-plume/',
            icon: 'mdi:paper-airplane',
            badge: '徽章'
          },
        ],
      },
    ],
  },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])
