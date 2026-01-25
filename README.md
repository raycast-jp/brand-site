# Raycast Community Japan - Brand Site

Raycast Community Japan の公式ブランドサイトです。

## 技術スタック

- [Astro](https://astro.build/) v5
- [Cloudflare Pages](https://pages.cloudflare.com/) (デプロイ)
- [ESLint](https://eslint.org/) + [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
- [Lefthook](https://github.com/evilmartians/lefthook) (Git hooks)

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## コマンド一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用にビルド |
| `npm run preview` | ビルド結果をプレビュー |
| `npm run deploy` | Cloudflare Pages にデプロイ |
| `npm run lint` | ESLint を実行 |
| `npm run lint:fix` | ESLint で自動修正 |

## プロジェクト構成

```
src/
├── components/     # 共通コンポーネント
├── content/        # コンテンツコレクション (events, team)
├── layouts/        # レイアウト
├── pages/          # ページ
└── styles/         # グローバルスタイル
```

## Git Hooks

Lefthook により、コミット前に以下が自動実行されます：

- `npm run lint` - ESLint
- `npx astro check` - Astro 型チェック

## ライセンス

Private
