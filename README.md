# Nomadic Tribe Ultimate - Website

Nomadic Tribe Ultimateの公式ウェブサイトです。

## ファイル構造

```
nomadictribeultimate/
├── index.html              # メインページ
├── schedule.html            # 試合スケジュール
├── news.html                # お知らせ一覧
├── news-detail.html          # お知らせ詳細
├── team.html                # 選手・スタッフ
├── goods.html               # グッズ
├── player.html               # 選手詳細
├── club.html                 # クラブ概要
├── partner.html              # パートナー
├── youth.html                # ユース
├── contact.html              # お問い合わせ
├── privacy.html              # プライバシーポリシー
├── thankyou.html             # お問い合わせ完了ページ
├── 404.html                  # 404エラーページ
├── CNAME                     # GitHub Pages用のドメイン設定
│
├── css/                      # スタイルシート
│   ├── variables.css         # CSS変数定義（デザインシステム）
│   ├── style.css             # メインスタイルシート
│   └── pages/                # ページ別スタイルシート
│       ├── club.css
│       ├── contact.css
│       ├── news.css
│       ├── news-detail.css
│       ├── partner.css
│       ├── player.css
│       ├── privacy.css
│       ├── schedule.css
│       ├── team.css
│       └── youth.css
│
├── js/                       # JavaScriptファイル
│   ├── common/               # 共通スクリプト
│   │   ├── footer.js         # フッターの動的読み込み
│   │   ├── head.js           # 共通head設定
│   │   ├── header.js         # ヘッダーの動的読み込み
│   │   └── script.js         # 共通スクリプト
│   │
│   ├── data/                 # データファイル
│   │   ├── contact-config.js # お問い合わせ設定
│   │   ├── news-data.js      # お知らせデータ
│   │   ├── goods-data.js     # グッズデータ
│   │   ├── player.js         # 選手データ（統合ファイル）
│   │   ├── players-deep.js   # DEEPポジション選手データ
│   │   ├── players-handler.js # HANDLERポジション選手データ
│   │   ├── players-staff.js  # スタッフデータ
│   │   └── schedule/         # 試合スケジュールデータ
│   │       ├── schedule-data-2025.js # 試合スケジュールデータ（2025）
│   │       └── schedule-data-2026.js # 試合スケジュールデータ（2026）
│   │
│   └── pages/                # ページ別スクリプト
│       ├── contact.js        # お問い合わせページ
│       ├── goods.js          # グッズページ
│       ├── index-news.js      # メインページのお知らせ表示
│       ├── index-schedule.js  # メインページの試合スケジュール表示
│       ├── news.js            # お知らせ一覧ページ
│       ├── news-detail.js     # お知らせ詳細ページ
│       ├── player.js          # 選手詳細ページ
│       ├── schedule.js        # 試合スケジュールページ
│       └── team.js            # 選手・スタッフページ
│
└── images/                    # 画像ファイル
    ├── header/                # ヘッダー用画像
    ├── instagram/             # Instagram画像
    ├── news/                  # お知らせ画像
    ├── players/               # 選手画像
    │   ├── deep/              # DEEPポジション選手
    │   ├── handler/           # HANDLERポジション選手
    │   └── staff/            # スタッフ
    ├── top/                   # トップページ用画像
    ├── NomadicTribeLogo.png   # ロゴ
    ├── partnerlogo_1.gif      # パートナーロゴ1
    └── partnerlogo_2.png      # パートナーロゴ2
```

## デザインシステム

### CSS変数（`css/variables.css`）

共通のデザイン要素は`css/variables.css`で一元管理されています：

- **カラーパレット**: メインカラー、アクセントカラー、背景色など
- **シャドウシステム**: 統一された影のスタイル
- **トランジション**: アニメーションの速度設定
- **ボーダー半径**: 角丸の統一
- **フォント設定**: フォントファミリー、サイズ、行間

各ページのCSSでは、これらの変数を使用することで、デザインの一貫性を保っています。

## 主要機能

### 動的コンテンツ
- **お知らせ**: `js/data/news-data.js`で管理
- **試合スケジュール**: `js/data/schedule/`配下で管理
- **選手情報**: `js/data/players-*.js`で管理

### お問い合わせフォーム
- EmailJSを使用
- 設定は`js/data/contact-config.js`で管理

## 開発・更新方法

### お知らせの追加
`js/data/news-data.js`に新しいオブジェクトを追加してください。

```javascript
{
    id: 4,
    date: "2025.01.01",
    category: "お知らせ",
    title: "タイトル",
    image: "images/news/news_4.jpg",
    link: "",
    content: "コンテンツ"
}
```

### 試合スケジュールの追加
`js/data/schedule/`配下の該当年ファイル（例: `schedule-data-2025.js`）に新しい試合情報を追加してください。

```javascript
scheduleData[2025][1].push({
    date: "2025.01.15",
    opponent: "対戦相手",
    location: "会場",
    result: "結果",
    youtubeUrl: "https://youtube.com/..."
});
```

### 選手情報の追加
- HANDLER: `js/data/players-handler.js`
- DEEP: `js/data/players-deep.js`
- STAFF: `js/data/players-staff.js`

各ファイルに新しい選手オブジェクトを追加してください。

### デザインの変更
色やフォントなどのデザイン要素を変更する場合は、`css/variables.css`を編集してください。これにより、サイト全体のデザインを一括で変更できます。

## ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

このプロジェクトはNomadic Tribe Ultimateの所有物です。
