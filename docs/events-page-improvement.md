# /events ページ改善計画

## 現状の構成

### ファイル構成
- `src/pages/events/index.astro` - イベント一覧ページ
- `src/pages/events/[...slug].astro` - イベント詳細ページ
- `src/content/events/*.md` - イベントコンテンツ（Markdown）

### 現在のコンテンツスキーマ
```typescript
{
  title: string;
  date: string;
  location: string;
  connpassUrl?: string;
  description: string;
  thumbnail?: string;
  photos?: string[];
  tweets?: string[];
  blogPosts?: { title: string; url: string; author: string; }[];
}
```

### 現在のUI構成（一覧ページ）
- Hero セクション（タイトル + 説明）
- 開催予定のイベント（グリッド表示）
- connpass CTA ボタン
- 過去のイベント（グリッド表示）

### 現在のUI構成（詳細ページ）
- ヘッダー（戻るリンク、ステータス、日付、タイトル、場所）
- コンテンツ本文（Markdown）
- connpass 申込ボタン（開催予定のみ）
- イベント写真
- 参加者のポスト（X/Twitter）
- 参加者のブログ記事

---

## 改善案

### 一覧ページ（/events）

#### UI/UX
- [ ] Hero セクションの余白調整
- [ ] イベントカードのデザイン改善
- [ ] サムネイル画像の表示対応
- [ ] 開催予定/過去の切り替えタブUI
- [ ] 年別フィルター機能

#### 情報設計
- [ ] イベント参加者数の表示
- [ ] イベントのタグ/カテゴリ表示
- [ ] 次回イベントのハイライト表示

### 詳細ページ（/events/[slug]）

#### UI/UX
- [ ] ヘッダーにサムネイル画像表示
- [ ] 写真ギャラリーの改善（ライトボックス）
- [ ] ツイート埋め込み表示
- [ ] SNSシェアボタン

#### 情報設計
- [ ] 登壇者/ゲスト情報セクション
- [ ] タイムテーブル表示
- [ ] 関連イベントへのリンク

### コンテンツスキーマ拡張案
```typescript
{
  // 既存
  title: string;
  date: string;
  location: string;
  connpassUrl?: string;
  description: string;
  thumbnail?: string;
  photos?: string[];
  tweets?: string[];
  blogPosts?: { title: string; url: string; author: string; }[];

  // 追加案
  endDate?: string;           // 複数日開催対応
  capacity?: number;          // 定員
  attendees?: number;         // 参加者数
  tags?: string[];            // タグ
  speakers?: {                // 登壇者
    name: string;
    role?: string;
    avatar?: string;
  }[];
  schedule?: {                // タイムテーブル
    time: string;
    title: string;
    speaker?: string;
  }[];
}
```

---

## 優先度

### Phase 1（必須）
1. Hero セクションの余白調整
2. サムネイル画像の表示対応
3. イベントカードのデザイン統一

### Phase 2（推奨）
1. 写真ギャラリーの改善
2. ツイート埋め込み
3. 登壇者情報の追加

### Phase 3（将来）
1. タグ/カテゴリ機能
2. 年別フィルター
3. タイムテーブル表示

---

## 参考

- 現在のイベント: 2件（raycast-meetup-japan-1, raycast-meetup-japan-2）
- connpass: https://raycast.connpass.com/
