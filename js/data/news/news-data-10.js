// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem10 = {
    id: 10,
    date: "2026.04.26",
    category: "大会結果",
    title: "2026 JAPAN ULTIMATE SPRING CAMP",
    image: "images/NomadicTribeLogo.png",
    link: "",
    galleryTournament: "",
    content: `
    <p>2026年4月25日（土）〜26日（日）の2日間、茨城県神栖市にて開催された「2026 JAPAN ULTIMATE SPRING CAMP」に出場いたしました。<br>
    国内外の強豪チームが集うこの大会で、6戦全勝という結果を残すことができました。</p>

    <h3>大会結果</h3>
    <ul>
        <li>NomadicTribe：6勝0敗（全勝）</li>
    </ul>

    <h3>試合詳細</h3>
    <h4>4/25 (Sat)</h4>
    <ul>
        <li>vs Pokemonkado_wa_Doko ｜ 15-4 ○</li>
        <li>vs Technicolor ｜ 12-9 ○</li>
        <li>vs Trigger ｜ 13-6 ○</li>
    </ul>
    <h4>4/26 (Sun)</h4>
    <ul>
        <li>vs A+ ｜ 15-10 ○</li>
        <li>vs 大阪成蹊大学Plum Bonds ｜ 9-3 ○</li>
        <li>vs Loquitos ｜ 9-5 ○</li>
    </ul>

    <h3>総評</h3>
    <p>前大会（CLUB.jr Invitational）での準優勝という悔しい結果を真摯に受け止め、チームとして積み上げてきた修正・改善の成果が、今大会で確かな形となって現れました。全6試合を通じて自分たちのアルティメットを体現でき、チーム全体のボトムアップという点でも手応えを感じる内容となりました。</p>
    <p>また、海外チームとの対戦を通じて、自分たちのスタイルが国内に留まらず、外国チームに対しても十分に通用することを確認できました。5月のTom's Tourneyに向けて、これ以上ない準備ができたと感じています。</p>
    <p>引き続き応援よろしくお願いいたします！</p>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem10);
}
