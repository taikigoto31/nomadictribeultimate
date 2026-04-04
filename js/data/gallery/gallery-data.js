// ============================================
// フォトギャラリー データ定義
//
// 【大会名・日付・URLについて】
//   schedule-data-*.js の tournament フィールドが正式な大会名の情報源です。
//   ここでは tournament に scheduleData の tournament 文字列と同じ値を書いてください。
//   gallery.js が scheduleData から日付・URLを自動で引くので、
//   大会名を変更したいときは schedule-data-*.js だけ直せばOKです。
//
// 【写真の追加方法】
//   1. images/gallery/{folder}/ に写真ファイルを入れる
//   2. 下記の galleryData 配列にオブジェクトを追加する
//
// 【記入例】
//   {
//       tournament: "NomadicTribe Cup",   // schedule-data の tournament と完全一致
//       folder: "2026_nomacup",           // images/gallery/ 以下のフォルダ名
//       cover: "01.jpg",                  // 一覧サムネに使うファイル名
//       photos: [
//           { file: "01.jpg", caption: "" },
//           { file: "02.jpg", caption: "" },
//       ]
//   },
// ============================================

const galleryData = [
    // ここに大会ごとのオブジェクトを追加してください
];
