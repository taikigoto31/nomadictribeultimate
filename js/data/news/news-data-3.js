// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem1 = {
    id: 3,
    date: "2025.11.01",
    category: "日本代表選出",
    title: "WFDF2025世界ビーチアルティメット選手権大会 日本代表選出のお知らせ",
    image: "images/news/news_1.jpg",
    link: "",
    content: `<div style="text-align: center; margin-bottom: 30px;">
        <img src="images/news/news_1.jpg" alt="WFDF2025世界ビーチアルティメット選手権大会" style="max-width: 100%; height: auto; border-radius: 8px;">
    </div>
    
    <p>2025年11月16日（日）〜22日（土）にポルトガル・ポルティマオにて開催される<a href="https://wbuc.sport/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color); text-decoration: underline;">「WFDF2025世界ビーチアルティメット選手権大会」</a>の日本代表として、NomadicTribeより選手8名、NomadicTribe Jr.より選手1名、ノマスターよりスタッフ2名が選出されましたことをお知らせいたします。</p>
    
    <p>選出された選手・スタッフは以下の通りです。</p>
    
    <h3>オープン部門</h3>
    <ul>
        <li>#6 稲本 響</li>
        <li>#7 佐々木 慶汰</li>
        <li>#11 大野 颯太</li>
        <li>#22 川合 哲史</li>
        <li>#77 山下 航平（NomadicTribe Jr.）</li>
        <li>#90 湯浅 広史</li>
        <li>サポートコーチ: 橋口 巴璃研（ノマスター）</li>
    </ul>
    
    <h3>ミックス部門</h3>
    <ul>
        <li>#3 石黒 陽晴</li>
        <li>#27 田野倉 悠正</li>
        <li>#34 萬代 翔太</li>
    </ul>
    
    <h3>全部門共通スタッフ</h3>
    <ul>
        <li>総監督: 和田 貢一（ノマスター）</li>
    </ul>
</div>`
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem1);
}

