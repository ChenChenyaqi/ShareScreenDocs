[English](./README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)

<p align="center">
  <img src="./docs/public/localscreen-logo.png" alt="LocalScreen logo" width="104" />
</p>

# LocalScreen 文件網站

這是 `LocalScreen` 的行銷、技術支援與隱私政策網站專案，使用 VitePress 建置，並部署到 GitHub Pages。

線上地址：`https://chenchenyaqi.github.io/ShareScreenDocs/`

## 專案用途

這個倉庫用來承載以下公開頁面：

- 產品宣傳首頁
- App Store 行銷網址
- App Store 技術支援網址
- App Store 隱私政策網址
- 英文、簡體中文、繁體中文三語公開頁面

站點地址：

- `https://chenchenyaqi.github.io/ShareScreenDocs/`

## 技術棧

- VitePress
- pnpm
- GitHub Pages
- GitHub Actions

## 本地開發

安裝依賴：

```bash
pnpm install
```

啟動本地開發伺服器：

```bash
pnpm docs:dev
```

建置靜態網站：

```bash
pnpm docs:build
```

在本地預覽正式建置結果：

```bash
pnpm docs:preview
```

## 專案結構

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

## 國際化

目前網站支援：

- 英文：`/`
- 簡體中文：`/zh-CN/`
- 繁體中文：`/zh-TW/`

App Store 相關公開頁面：

- 英文技術支援：`/support`
- 英文隱私政策：`/privacy`
- 簡體中文技術支援：`/zh-CN/support`
- 簡體中文隱私政策：`/zh-CN/privacy`
- 繁體中文技術支援：`/zh-TW/support`
- 繁體中文隱私政策：`/zh-TW/privacy`

## 部署

GitHub Actions 工作流程位於：

- `.github/workflows/deploy.yml`

部署流程：

1. 使用 `pnpm` 安裝依賴
2. 建置 VitePress 網站
3. 上傳 `docs/.vitepress/dist`
4. 發布到 GitHub Pages

## SEO

目前網站已包含：

- `robots.txt`
- `sitemap.xml`
- canonical 連結
- `hreflang` 多語系標記
- Open Graph 中繼資料
- `SoftwareApplication` 結構化資料

## App Store 建議填寫

建議在 App Store Connect 中填寫：

- 行銷網址：`https://chenchenyaqi.github.io/ShareScreenDocs/`
- 技術支援網址：`https://chenchenyaqi.github.io/ShareScreenDocs/support`
- 隱私政策網址：`https://chenchenyaqi.github.io/ShareScreenDocs/privacy`

如果需要本地化頁面，也可以填入對應的 `zh-CN` 與 `zh-TW` 路徑。
