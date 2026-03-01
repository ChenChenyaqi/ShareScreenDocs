[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

<p align="center">
  <img src="./docs/public/localscreen-logo.png" alt="LocalScreen logo" width="104" />
</p>

# LocalScreen Docs

Marketing, support, and privacy website for `LocalScreen`, built with VitePress and deployed to GitHub Pages.

Live site: `https://chenchenyaqi.github.io/ShareScreenDocs/`

## Overview

This repository hosts the public website used for:

- product marketing pages
- App Store Marketing URL
- App Store Support URL
- App Store Privacy Policy URL
- multilingual public pages in English, Simplified Chinese, and Traditional Chinese

The site is published at:

- `https://chenchenyaqi.github.io/ShareScreenDocs/`

## Stack

- VitePress
- pnpm
- GitHub Pages
- GitHub Actions

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the local dev server:

```bash
pnpm docs:dev
```

Build the static site:

```bash
pnpm docs:build
```

Preview the production build locally:

```bash
pnpm docs:preview
```

## Project Structure

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

## Localization

The site supports:

- English at `/`
- Simplified Chinese at `/zh-CN/`
- Traditional Chinese at `/zh-TW/`

App Store related public pages:

- English support: `/support`
- English privacy: `/privacy`
- Simplified Chinese support: `/zh-CN/support`
- Simplified Chinese privacy: `/zh-CN/privacy`
- Traditional Chinese support: `/zh-TW/support`
- Traditional Chinese privacy: `/zh-TW/privacy`

## Deployment

Deployment is handled by GitHub Actions in:

- `.github/workflows/deploy.yml`

The workflow:

1. installs dependencies with `pnpm`
2. builds the VitePress site
3. uploads `docs/.vitepress/dist`
4. deploys to GitHub Pages

## SEO

The site includes:

- `robots.txt`
- `sitemap.xml`
- canonical URLs
- `hreflang` alternate links
- Open Graph metadata
- structured data for `SoftwareApplication`

## App Store URLs

Recommended App Store Connect fields:

- Marketing URL: `https://chenchenyaqi.github.io/ShareScreenDocs/`
- Support URL: `https://chenchenyaqi.github.io/ShareScreenDocs/support`
- Privacy Policy URL: `https://chenchenyaqi.github.io/ShareScreenDocs/privacy`

Localized pages are also available for `zh-CN` and `zh-TW`.
