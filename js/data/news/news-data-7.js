// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem7 = {
    id: 7,
    date: "2026.02.28",
    category: "大会結果",
    title: "NomadicTribe Cup 2026",
    image: "images/NomadicTribeLogo.png",
    link: "",
    content: `
    <p>2026年2月28日（土）、茨城県筑西市の鬼怒緑地公園にて「NomadicTribe Cup 2026」が開催されました。<br>
    今大会も「ノマ」と「トラ」の2チーム編成で出場。2026シーズン序盤の強化を目的に、各チームが白熱した試合を繰り広げました。<br>
    今後とも応援よろしくお願いします！</p>

    <h3>大会結果</h3>
    <ul>
        <li>NomadicTribe ノマ：3位（2勝1敗）</li>
        <li>NomadicTribe トラ：2位（2勝1敗）</li>
    </ul>

    <h3>試合詳細</h3>
    <h4>NomadicTribe ノマ</h4>
    <ul>
        <li>2/28 (Sat) vs BeA ｜ 8-2 ○</li>
        <li>2/28 (Sat) vs 文化シャッターバズバレッツ ｜ 10-13 ●</li>
        <li>2/28 (Sat) vs 上智大学フリークス ｜ 13-7 ○</li>
    </ul>

    <h4>NomadicTribe トラ</h4>
    <ul>
        <li>2/28 (Sat) vs 慶應義塾大学ホワイトホーンズ ｜ 10-7 ○</li>
        <li>2/28 (Sat) vs 上智大学フリークス ｜ 11-9 ○</li>
        <li>2/28 (Sat) vs 文化シヤッターバズバレッツ ｜ 9-13 ●</li>
    </ul>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem7);
}
