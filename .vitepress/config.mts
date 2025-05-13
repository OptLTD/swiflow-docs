import { defineConfig } from 'vitepress'
import { GIT_REPO_NAME } from './consts.js'
import { GIT_REPO_OWNER } from './consts.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swiflow",
  description: "聊天即功能，想法即实现",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "功能", link: "/#features" },
      { text: "工作原理", link: "/#how-it-works" },
      { text: "使用场景", link: "/#use-cases" },
      { text: "下载链接", link: "/#download" },
      { text: "帮助文档", link: "/docs/" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "入门指南",
          collapsed: false,
          items: [
            { text: "功能介绍", link: "/docs/" },
            { text: "快速开始", link: "/docs/getting-started" },
            {
              text: "个性化设置",
              collapsed: true,
              items: [
                { text: "设置 Bot", link: "/docs/customization/setup-bot" },
                { text: "设置 Tool", link: "/docs/customization/setup-tool" },
              ],
            },
          ],
        },
        {
          text: "快速上手",
          collapsed: false,
          items: [
            { text: "作为 PC 助理", link: "/docs/bot-usage/pc-assistant" },
            { text: "作为数据分析师", link: "/docs/bot-usage/data-analyst" },
            { text: "作为开发工程师", link: "/docs/bot-usage/dev-engineer" },
          ],
        },
        {
          text: "优化 Bot",
          collapsed: false,
          items: [
            { text: "提示词优化", link: "/docs/bot-optimize/optimize-prompt" },
            { text: "最佳实践", link: "/docs/bot-optimize/best-practices" },
            { text: "获取 Bot", link: "/docs/bot-optimize/get-more-bots" },
          ],
        },
        {
          text: "其他",
          collapsed: false,
          items: [
            { text: "常见问题", link: "/docs/learn-more/questions-answers" },
            { text: "故障排除", link: "/docs/learn-more/trouble-shooting" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: `https://github.com/${GIT_REPO_OWNER}/${GIT_REPO_NAME}` }],
    footer: {
      message: "© 2024 Swiflow. 保留所有权利。",
      copyright: "隐私政策 | 使用条款 | 联系我们",
    },
    outline: {
      level: "deep",
      label: "本页目录",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
  },
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],
  vite: {
    server: {
      host: true,
      fs: {
        // Allow serving files from one level up to the project root
        allow: [".."],
      },
    },
  },
})
