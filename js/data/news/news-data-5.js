// ============================================
// お知らせデータ
// ============================================
// お知らせを簡単に編集できます

// グローバルスコープとwindowオブジェクトの両方で利用可能にする
const newsDataItem5 = {
    id: 5,
    date: "2026.01.23",
    category: "大会情報",
    title: "Tom's Tourney 2026 出場のお知らせ",
    image: "images/news/news_5.jpg",
    link: "",
    content: `
    <p>今年5月にベルギーで開催される「Tom's Tourney 2026」への出場が決定いたしました。</p>
    <p>「WUCC2026（世界アルティメットクラブチーム選手権）」を見据え、欧州の強豪チームが集うこの大会をチーム強化のチャンスと捉えています。<br>
    海外の強豪相手にどこまで通用するのか、自分たちの現在地を知り、タフな試合を通じてチーム全体のレベルアップを図ることを目的としています。<br>
    WUCC2026での「メダル獲得」という悲願を達成するため、チーム一丸となって準備を進めてまいります。<br>
    応援のほど、よろしくお願いいたします！<br>
    <p>詳細な大会情報は、以下の公式サイト・SNSをご確認ください。<br>
    <div class="news-links">
        <p>大会HP：<a href="https://www.tomstourney.be/" target="_blank" rel="noopener noreferrer">https://www.tomstourney.be/</a></p><p>大会公式Instagram：<a href="https://www.instagram.com/toms_tourney/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/toms_tourney/</a></p>
    </div>
    `
};

// windowオブジェクトに追加（統合用）
if (typeof window !== 'undefined') {
    if (!window.newsData) {
        window.newsData = [];
    }
    window.newsData.push(newsDataItem5);
}
