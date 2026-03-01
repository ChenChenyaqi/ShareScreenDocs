import { defineConfig } from "vitepress";

const SITE_URL = "https://chenchenyaqi.github.io/ShareScreenDocs";
const REPO_URL = "https://github.com/ChenChenyaqi/ShareScreenDocs";

function resolveCanonicalPath(relativePath: string): string {
  if (relativePath === "index.md") {
    return "/";
  }

  if (relativePath.endsWith("/index.md")) {
    return `/${relativePath.slice(0, -"index.md".length)}`;
  }

  if (relativePath.endsWith(".md")) {
    return `/${relativePath.slice(0, -".md".length)}`;
  }

  return `/${relativePath}`;
}

function resolveAlternateLinks(canonicalPath: string) {
  const localeMap: Record<string, string> = {
    "/": "/",
    "/support": "/support",
    "/privacy": "/privacy",
    "/zh-CN/": "/zh-CN/",
    "/zh-CN/support": "/zh-CN/support",
    "/zh-CN/privacy": "/zh-CN/privacy",
    "/zh-TW/": "/zh-TW/",
    "/zh-TW/support": "/zh-TW/support",
    "/zh-TW/privacy": "/zh-TW/privacy"
  };

  if (!(canonicalPath in localeMap)) {
    return [];
  }

  const key = canonicalPath
    .replace(/^\/zh-CN/, "")
    .replace(/^\/zh-TW/, "") || "/";

  const alternates = [
    ["link", { rel: "alternate", hreflang: "en", href: `${SITE_URL}${key}` }],
    ["link", { rel: "alternate", hreflang: "zh-CN", href: `${SITE_URL}/zh-CN${key === "/" ? "/" : key}` }],
    ["link", { rel: "alternate", hreflang: "zh-TW", href: `${SITE_URL}/zh-TW${key === "/" ? "/" : key}` }],
    ["link", { rel: "alternate", hreflang: "x-default", href: `${SITE_URL}${key}` }]
  ];

  return alternates;
}

export default defineConfig({
  title: "LocalScreen",
  description: "LocalScreen is an iOS local screen sharing app for iPhone and iPad, with support and privacy information in English, Simplified Chinese, and Traditional Chinese.",
  base: "/ShareScreenDocs/",
  cleanUrls: true,
  sitemap: {
    hostname: SITE_URL
  },
  head: [
    ["meta", { name: "theme-color", content: "#f6f3eb" }],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "author", content: "LocalScreen" }],
    ["meta", { name: "keywords", content: "iOS screen sharing, iPhone screen sharing, iPad screen sharing, local screen sharing, LocalScreen, 本地屏幕共享, iPhone 屏幕共享, iPad 屏幕共享, iOS 屏幕共享" }],
    ["link", { rel: "icon", type: "image/png", href: "/localscreen-logo.png" }],
    ["link", { rel: "shortcut icon", type: "image/png", href: "/localscreen-logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/localscreen-logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "LocalScreen" }],
    ["meta", { property: "og:site_name", content: "LocalScreen" }],
    ["meta", { property: "og:description", content: "LocalScreen is an iOS local screen sharing app for iPhone and iPad, with support information and privacy policy pages." }],
    ["meta", { property: "og:image", content: `${SITE_URL}/localscreen-logo.png` }],
    ["meta", { property: "og:image:alt", content: "LocalScreen logo" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "LocalScreen" }],
    ["meta", { name: "twitter:description", content: "LocalScreen is an iOS local screen sharing app for iPhone and iPad, with support information and privacy policy pages." }],
    ["meta", { name: "twitter:image", content: `${SITE_URL}/localscreen-logo.png` }],
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "LocalScreen",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS",
        inLanguage: ["en", "zh-CN", "zh-TW"],
        description: "LocalScreen is an iOS local screen sharing app for iPhone and iPad.",
        keywords: "iOS screen sharing, iPhone screen sharing, iPad screen sharing, local screen sharing",
        url: SITE_URL,
        downloadUrl: "https://apps.apple.com/us/app/localscreen-share/id6759612385",
        image: `${SITE_URL}/localscreen-logo.png`,
        author: {
          "@type": "Person",
          name: "ChenChenyaqi",
          url: REPO_URL
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        }
      })
    ]
  ],
  transformHead({ pageData }) {
    const canonicalPath = resolveCanonicalPath(pageData.relativePath);
    const head = [
      ["link", { rel: "canonical", href: `${SITE_URL}${canonicalPath}` }],
      ["meta", { property: "og:url", content: `${SITE_URL}${canonicalPath}` }]
    ] as [string, Record<string, string>, string?][];

    if (pageData.relativePath.startsWith("en/")) {
      head.push(["meta", { name: "robots", content: "noindex, follow" }]);
      return head;
    }

    return head.concat(resolveAlternateLinks(canonicalPath) as [string, Record<string, string>, string?][]);
  },
  themeConfig: {
    logo: { src: "/localscreen-logo.png", alt: "LocalScreen" },
    socialLinks: [{ icon: "github", link: REPO_URL }]
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
          { text: "GitHub", link: REPO_URL }
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
          { text: "GitHub", link: REPO_URL }
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
          { text: "GitHub", link: REPO_URL }
        ],
        footer: {
          message: "技術支援：localscreen423@163.com",
          copyright: "Copyright © 2026 LocalScreen"
        }
      }
    }
  }
});
