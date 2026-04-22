// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem9 = {
    id: 9,
    date: "2026.04.12",
    category: "大会結果",
    title: "2026 CLUB.jr Invitational Ultimate Tournament IN 大阪　準優勝",
    image: "images/NomadicTribeLogo.png",
    link: "",
    galleryTournament: "",
    content: `
    <p>2026年4月11日（土）～12日（日）の2日間にわたり、大阪府で開催された「2026 CLUB.jr Invitational Ultimate Tournament IN 大阪」に出場いたしました。</p>

    <p>昨年優勝という結果を残した中で臨んだ今大会は、準優勝という結果でした。<br>
    悔しさの残るフィニッシュとなりましたが、チームとしての成長も確かに感じています。一方で、まだまだ課題も明確に残る大会となりました。</p>

    <h3>大会結果</h3>
    <ul>
        <li>NomadicTribe：準優勝（4勝1敗）</li>
    </ul>

    <h3>試合詳細</h3>
    <h4>4/11 (Sat)</h4>
    <ul>
        <li>vs 関西学院大学ARROWS ｜ 13-4 ○</li>
        <li>vs Rascals ｜ 12-10 ○</li>
    </ul>
    <h4>4/12 (Sun)</h4>
    <ul>
        <li>vs テクニカラー ｜ 11-7 ○</li>
        <li>vs 大阪スピリッツ ｜ 13-8 ○</li>
        <li>vs BuzzBullets ｜ 9-13 ●</li>
    </ul>

    <h3>総評</h3>
    <p>昨年の大会は優勝を果たし、今大会では二連覇を目標に臨みましたが、結果は準優勝という悔しさの残るものとなりました。それでも、チームとしての成長や手応えを感じられる場面も多く、確かな前進を実感しています。一方で、いまだに課題は残っており、さらなるレベルアップの余地があることも明確になりました。今回の結果を真摯に受け止め、課題と向き合いながら、次こそ頂点に立てるようチーム一丸となって努力を続けていきます。引き続き、応援のほどよろしくお願いいたします。</p>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem9);
}
