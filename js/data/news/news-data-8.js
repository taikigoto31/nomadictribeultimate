// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem8 = {
    id: 8,
    date: "2026.03.08",
    category: "大会結果",
    title: "2026 CLUB Jr ULTIMATE DREAM CUP 5位",
    image: "images/NomadicTribeLogo.png",
    link: "",
    content: `
    <p>3月7日（土）〜8日（日）の2日間にわたり、静岡県富士市の富士川緑地公園にて開催された「2026 CLUB Jr ULTIMATE DREAM CUP」に出場いたしました。<br>
    今シーズンはこれまで「ノマ」と「トラ」の2チーム編成で大会に参加してきましたが、今大会は満を辞してNomadic Tribeとしてワンチームで臨みました。<br>
    8月のWUCCに向け、国内最大級の今大会は圧倒優勝を目標に掲げていましたが、思い通りの結果を得ることはできませんでした。<br>
    この結果をしっかり受け止め、今一度気持ちを引き締めてまいります。<br>
    今後とも応援よろしくお願いします！</p>

    <h3>大会結果</h3>
    <ul>
        <li>Nomadic Tribe：5位（5勝1敗）</li>
    </ul>

    <h3>試合詳細</h3>
    <h4>3/7 (Sat)</h4>
    <ul>
        <li>vs 学習院大学ER ｜ 19-0 ○</li>
        <li>vs Heat Haze ｜ 13-7 ○</li>
        <li>vs Pendants ｜ 12-6 ○</li>
    </ul>
    <h4>3/8 (Sun)</h4>
    <ul>
        <li>vs Rascals ｜ 8-9 ●</li>
        <li>vs ゲッカーズ ｜ 12-5 ○</li>
        <li>vs 2026WJUC日本代表 ｜ 12-9 ○</li>
    </ul>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem8);
}
