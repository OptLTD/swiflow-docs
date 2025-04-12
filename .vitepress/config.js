import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Swiflow",
  description: "聊天即功能，想法即实现",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "功能", link: "/#features" },
      { text: "工作原理", link: "/#how-it-works" },
      { text: "使用场景", link: "/#use-cases" },
      { text: "下载", link: "/#download" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "入门指南",
          collapsed: false,
          items: [
            { text: "介绍", link: "/docs/" },
            { text: "快速开始", link: "/docs/getting-started" },
            { text: "基本概念", link: "/docs/concepts" },
          ],
        },
        {
          text: "使用指南",
          collapsed: false,
          items: [
            { text: "创建功能", link: "/docs/creating-features" },
            { text: "管理功能", link: "/docs/managing-features" },
            { text: "自定义设置", link: "/docs/customization" },
          ],
        },
        {
          text: "高级主题",
          collapsed: false,
          items: [
            { text: "最佳实践", link: "/docs/best-practices" },
            { text: "常见问题", link: "/docs/faq" },
            { text: "故障排除", link: "/docs/troubleshooting" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/swiflow/swiflow-app" }],
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
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
