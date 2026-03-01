[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

<p align="center">
  <img src="./docs/public/localscreen-logo.png" alt="LocalScreen logo" width="104" />
</p>

# LocalScreen 文档站

这是 `LocalScreen` 的营销、技术支持和隐私政策网站项目，基于 VitePress 构建，并部署到 GitHub Pages。

在线地址：`https://chenchenyaqi.github.io/ShareScreenDocs/`

## 项目用途

这个仓库用于承载以下公开页面：

- 产品宣传首页
- App Store 营销网址
- App Store 技术支持网址
- App Store 隐私政策网址
- 英文、简体中文、繁体中文三语公开页面

站点地址：

- `https://chenchenyaqi.github.io/ShareScreenDocs/`

## 技术栈

- VitePress
- pnpm
- GitHub Pages
- GitHub Actions

## 本地开发

安装依赖：

```bash
pnpm install
```

启动本地开发服务器：

```bash
pnpm docs:dev
```

构建静态站点：

```bash
pnpm docs:build
```

本地预览生产构建结果：

```bash
pnpm docs:preview
```

## 项目结构

```text
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts
│   │   └── theme/
│   ├── public/
│   ├── index.md
│   ├── support.md
│   ├── privacy.md
│   ├── zh-CN/
│   └── zh-TW/
├── .github/
│   └── workflows/
└── package.json
```

## 国际化

当前站点支持：

- 英文：`/`
- 简体中文：`/zh-CN/`
- 繁体中文：`/zh-TW/`

App Store 相关公开页面：

- 英文技术支持：`/support`
- 英文隐私政策：`/privacy`
- 简体中文技术支持：`/zh-CN/support`
- 简体中文隐私政策：`/zh-CN/privacy`
- 繁体中文技术支持：`/zh-TW/support`
- 繁体中文隐私政策：`/zh-TW/privacy`

## 部署

GitHub Actions 工作流位于：

- `.github/workflows/deploy.yml`

部署流程：

1. 使用 `pnpm` 安装依赖
2. 构建 VitePress 站点
3. 上传 `docs/.vitepress/dist`
4. 发布到 GitHub Pages

## SEO

当前站点已包含：

- `robots.txt`
- `sitemap.xml`
- canonical 链接
- `hreflang` 多语言标记
- Open Graph 元数据
- `SoftwareApplication` 结构化数据

## App Store 建议填写

建议在 App Store Connect 中填写：

- 营销网址：`https://chenchenyaqi.github.io/ShareScreenDocs/`
- 技术支持网址：`https://chenchenyaqi.github.io/ShareScreenDocs/support`
- 隐私政策网址：`https://chenchenyaqi.github.io/ShareScreenDocs/privacy`

如需本地化页面，也可填写对应的 `zh-CN` 和 `zh-TW` 路径。
