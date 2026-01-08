// ============================================
// お知らせデータ統合ファイル
// ============================================
// 個別のニュースファイルを読み込んで統合します
// 各ニュースのデータは以下のファイルで管理されています：
// - js/data/news/news-data-1.js
// - js/data/news/news-data-2.js
// - js/data/news/news-data-3.js

// 統合されたニュースデータ（既存のコードとの互換性のため）
// 注意: このファイルを読み込む前に、上記のニュースファイルを読み込む必要があります
// 各ファイルはwindow.newsDataに個別のニュースアイテムをpushします

// windowオブジェクトから統合されたデータを取得
// 各ファイルが読み込まれた後、window.newsDataに統合されたデータが存在する
const newsData = typeof window !== 'undefined' && window.newsData ? window.newsData : [];

// windowオブジェクトにも設定（isDataAvailable関数で検出可能にするため）
if (typeof window !== 'undefined') {
    window.newsData = newsData;
}

