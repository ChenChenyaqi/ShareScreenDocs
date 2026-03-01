import { defineConfig } from "vitepress";

export default defineConfig({
  title: "LocalScreen",
  description: "LocalScreen support and privacy information",
  base: "/ShareScreenDocs/",
  cleanUrls: true,
  head: [
    ["meta", { name: "theme-color", content: "#f6f3eb" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "LocalScreen" }],
    ["meta", { property: "og:description", content: "LocalScreen product overview, support information, and privacy policy." }]
  ],
  themeConfig: {
    logo: { src: "/localscreen-logo.png", alt: "LocalScreen" },
    socialLinks: [{ icon: "github", link: "https://github.com/ChenChenyaqi" }]
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Support", link: "/support" },
          { text: "Privacy Policy", link: "/privacy" },
          { text: "GitHub", link: "https://github.com/ChenChenyaqi" }
        ],
        footer: {
          message: "Support: localscreen423@163.com",
          copyright: "Copyright © 2026 LocalScreen"
        }
      }
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-CN/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh-CN/" },
          { text: "技术支持", link: "/zh-CN/support" },
          { text: "隐私政策", link: "/zh-CN/privacy" },
          { text: "GitHub", link: "https://github.com/ChenChenyaqi" }
        ],
        footer: {
          message: "技术支持：localscreen423@163.com",
          copyright: "Copyright © 2026 LocalScreen"
        }
      }
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zh-TW/",
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          { text: "技術支援", link: "/zh-TW/support" },
          { text: "隱私政策", link: "/zh-TW/privacy" },
          { text: "GitHub", link: "https://github.com/ChenChenyaqi" }
        ],
        footer: {
          message: "技術支援：localscreen423@163.com",
          copyright: "Copyright © 2026 LocalScreen"
        }
      }
    }
  }
});
