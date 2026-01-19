// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem4 = {
    id: 4,
    date: "2025.12.21",
    category: "普及活動",
    title: "第2回 NomadicTribe Cupを開催",
    image: "images/news/news_4.jpg",
    link: "",
    content: `
    <p>この度、2回目の開催となる「NomadicTribe Cup in Xmas」を一般社団法人OVNIと共催で開催いたしました。</p>
    <p>本大会は、1回目の「ノマカップ」とは趣向を変え、ミドルクラス（全日本アルティメット選手権2025のベスト8未満）のチームをメインターゲットとして企画しました。</p>
    <p>また、今回は新たな試みとして、希望する学生チームにNomadic Tribeの選手が帯同し、試合中の指導やサポートを行いました。<br>
    これは、学生チームの競技力向上と、当チームが大切にしている考え方を普及することを目的としています。</p>
    <p>学生の皆さんの吸収力は素晴らしく、1試合の中で見違えるような進化を遂げるチームもありました。<br>
    また、今回初めてコーチを務める選手もおりましたが、普段自分たちが行っているプレーを「言語化」して伝えるプロセスは、<br>
    選手自身にとっても新たな発見や学びを得る貴重な機会となりました。</p>
    <p>今後も日本のアルティメット界のレベル向上のため、意義のある大会を開催してまいります。<br>
    次回もぜひご参加ください。</p>
    <div class="news-links">
        <p>大会HP：<a href="https://www.ovniultimate.com/2025/10/16/nomacup-xmas/" target="_blank" rel="noopener noreferrer">https://www.ovniultimate.com/2025/10/16/nomacup-xmas/</a></p>
        <p>男子部門写真：<a href="https://ovni.myportfolio.com/nomadictribe-cup-in-xmas-2025-open-div" target="_blank" rel="noopener noreferrer">https://ovni.myportfolio.com/nomadictribe-cup-in-xmas-2025-open-div</a></p>
        <p>女子部門写真：<a href="https://ovni.myportfolio.com/nomadictribe-cup-in-xmas-2025-women-div" target="_blank" rel="noopener noreferrer">https://ovni.myportfolio.com/nomadictribe-cup-in-xmas-2025-women-div</a></p>
    </div>
    <div class="news-photo-grid">
        <figure class="news-photo">
            <img src="images/news/news_4_open.jpg" alt="NomadicTribe Cup in Xmas 男子部門">
            <figcaption>男子部門</figcaption>
        </figure>
        <figure class="news-photo">
            <img src="images/news/news_4_women.jpg" alt="NomadicTribe Cup in Xmas 女子部門">
            <figcaption>女子部門</figcaption>
        </figure>
    </div>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem4);
}

