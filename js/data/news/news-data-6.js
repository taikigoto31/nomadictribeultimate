// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem6 = {
    id: 6,
    date: "2026.02.17",
    category: "大会結果",
    title: "2026ULTIMATE 甲州オープン IN山梨 優勝・準優勝",
    image: "images/NomadicTribeLogo.png",
    link: "",
    content: `
    <p>2026年2月14日（土）〜15日（日）の2日間にわたり、山梨県で開催された「甲州オープン」に出場いたしました。<br>
    今大会、Nomadic Tribeからは「ノマ」と「トラ」の2チーム編成で出場。2026シーズンの初陣として、1月の始動から積み上げてきた練習の成果を試す重要な大会となりました。<br>
    結果、両チームとも予選から着実に勝利を積み重ね、決勝戦での「身内対決」を実現。激闘の末、ノマが勝利し、Nomadic Tribeとして優勝・準優勝という最高の結果を収めることができました。</p>

    <h3>大会結果</h3>
    <ul>
        <li>Nomadic Tribe ノマ：優勝</li>
        <li>Nomadic Tribe トラ：準優勝</li>
    </ul>
    <div class="news-photo-grid">
        <figure class="news-photo">
            <img src="images/news/news_6_noma.jpg" alt="Nomadic Tribe ノマ 集合写真">
            <figcaption>Nomadic Tribe ノマ</figcaption>
        </figure>
        <figure class="news-photo">
            <img src="images/news/news_6_tora.jpg" alt="Nomadic Tribe トラ 集合写真">
            <figcaption>Nomadic Tribe トラ</figcaption>
        </figure>
    </div>


    <h3>個人賞</h3>
    <ul>
        <li>MVP：尾崎 聡大（Nomadic Tribeノマ)</li>
        <li>Fighting-spirit award：村上 吏旺（Nomadic Tribeトラ）</li>
    </ul>
    <div class="news-photo-grid">
        <figure class="news-photo">
            <img src="images/news/news_6_mvp.jpg" alt="大会MVP 尾崎 聡大">
            <figcaption>大会MVP</figcaption>
        </figure>
        <figure class="news-photo">
            <img src="images/news/news_6_fsa.jpg" alt="敢闘賞 村上 吏旺">
            <figcaption>敢闘賞</figcaption>
        </figure>
    </div>
    <hr>

    <h3>試合詳細</h3>
    <h4>Nomadic Tribe ノマ（結果：優勝 / 6勝0敗）</h4>
    <p>圧倒的な得点力と安定したディフェンスで予選から全勝。決勝戦でもトラを振り切り、見事頂点に立ちました。</p>
    <ul>
        <li>2/14 (Sat) vs BeA ｜ 19-4 ○</li>
        <li>2/14 (Sat) vs Silvana ｜ 15-6 ○</li>
        <li>2/14 (Sat) vs フリースタイル ｜ 36-0 ○</li>
        <li>2/14 (Sat) vs STILTS ｜ 15-3 ○</li>
        <li>2/15 (Sun) vs SAMURAI A ｜ 15-4 ○</li>
        <li>2/15 (Sun) vs Nomadic Tribe トラ ｜ 11-6 ○</li>
    </ul>

    <h4>Nomadic Tribe トラ（結果：準優勝 / 5勝1敗）</h4>
    <p>BuzzBullets戦での1点差を制する勝負強さを見せるなど、粘り強い戦いで決勝進出を果たしました。</p>
    <ul>
        <li>2/14 (Sat) vs SAMURAI A ｜ 11-8 ○</li>
        <li>2/14 (Sat) vs 信州roots ｜ 11-3 ○</li>
        <li>2/14 (Sat) vs JANDLUX ｜ 13-9 ○</li>
        <li>2/15 (Sun) vs BeA ｜ 12-8 ○</li>
        <li>2/15 (Sun) vs BuzzBullets ｜ 10-9 ○</li>
        <li>2/15 (Sun) vs Nomadic Tribe ノマ ｜ 6-11 ●</li>
    </ul>

    <hr>

    <h3>総評</h3>
    <p>新シーズン最初の大会で「ワンツーフィニッシュ」という最高の結果を残せたことは、チームにとって大きな自信となりました。<br>
    1月から取り組んできた戦術や連携が形になりつつあることを実感した2日間でした。</p>
    <p>対戦いただいた各チームの皆様、ならびに素晴らしい大会を運営してくださった関係者の皆様、誠にありがとうございました。<br>
    2026シーズン、Nomadic Tribeはさらなる高みを目指して走り続けます。引き続き応援のほど、よろしくお願いいたします！</p>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem6);
}
