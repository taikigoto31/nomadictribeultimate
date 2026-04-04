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
    {
        tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
        folder: "2026_koshu_open",
        cover: "",
        photos: [
            // 写真ファイルを images/gallery/2026_koshu_open/ に入れたら追加してください
            // { file: "01.jpg", caption: "" },
        ]
    },
    {
        tournament: "2026 CLUB Jr ULTIMATE DREAM CUP",
        folder: "2026_dreamcup",
        cover: "LINE_ALBUM_2026ドリーム_260404_1.jpg",
        photos: [
            { file: "LINE_ALBUM_2026ドリーム_260404_1.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_2.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_3.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_4.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_5.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_6.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_7.jpg", caption: "" },
            { file: "LINE_ALBUM_2026ドリーム_260404_8.jpg", caption: "" },
        ]
    },
];
