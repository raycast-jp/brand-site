# Raycast Community Japan - Site Specification

## Goals

### サイトの目的
訪問者に以下の行動を促す：
1. Raycastを使い始める
2. イベントに参加する
3. SNSをフォローする
4. コアメンバーに応募する（将来的に）

### ターゲット
- Raycastユーザー（既存ユーザーのコミュニティ参加促進）
- Raycast未使用者（新規ユーザー獲得）

---

## Site Structure

```
/
├── index (トップページ)
├── about (コミュニティについて) ※1ページ完結
├── events/
│   ├── index (イベント一覧)
│   └── [slug] (イベント詳細)
└── team/
    ├── index (メンバー一覧)
    └── [slug] (メンバー詳細)

将来的に追加検討:
├── blog/ (ブログ)
├── privacy (プライバシーポリシー)
└── terms (利用規約)
```

---

## Navigation

### ヘッダー
- ロゴ（トップへリンク）
- About
- Events
- Team

### フッター
- ナビゲーションリンク（About / Events / Team）
- SNSリンク（X / Slack / connpass）
- 法的リンク（将来的に: Privacy / Terms）
- コピーライト（© Raycast Community Japan）

---

## Pages

### 1. トップページ (/)
- ヒーローセクション（Mission / Visionを端的に伝える）
- コミュニティの概要
- 直近のイベント情報
- CTAボタン（参加方法へ誘導）

### 2. About (/about)
- Mission / Vision / Value
- コミュニティの目的（Purpose）
- ターゲット
- 実績（Achievements）
※1ページに全て掲載

### 3. Events
#### /events (一覧)
- イベント一覧
- 過去のイベントアーカイブ
- connpassへのリンク

#### /events/[slug] (詳細)
- イベント詳細情報
- 開催日時・場所
- connpass申し込みリンク
- 運営からのレポート文章
- スクラップ形式のまとめ:
  - イベント写真
  - 参加者のX投稿
  - 参加者のブログ記事

### 4. Team
#### /team (一覧)
- コアメンバー一覧
- 各メンバーの主な役割を表示

#### /team/[slug] (詳細)
- メンバープロフィール
- コミュニティへの貢献履歴（時系列）

---

## Content Management

| コンテンツ | 管理方法 |
|-----------|---------|
| イベント情報 | Astro Content Collections |
| チームメンバー | Astro Content Collections |

---

## External Links

- X (Twitter): 公式アカウント
- connpass: イベント申し込みページ
- Slack: コミュニティ参加

---

## Design Direction

- シンプルな白黒のデザイン
- ミニマルでモダンなUI

---

## Tech Stack

| 項目 | 技術 |
|-----|-----|
| フレームワーク | Astro |
| ホスティング | Cloudflare Pages |
| ドメイン | devx.jp |
| アナリティクス | Google Analytics (GA4) |

---

## Language

- 日本語のみ

---

## Notes

-
