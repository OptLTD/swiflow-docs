import { defineConfig } from "vitepress"

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
      { text: "下载", link: "/#download" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/swiflow/swiflow-app" }],
    footer: {
      message: "© 2024 Swiflow. 保留所有权利。",
      copyright: "隐私政策 | 使用条款 | 联系我们",
    },
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
