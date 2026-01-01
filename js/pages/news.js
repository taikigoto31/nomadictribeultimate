// ============================================
// お知らせページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (!isDataAvailable('newsData')) {
        console.error("お知らせデータが見つかりません");
        return;
    }

    // お知らせを表示
    displayAllNews();

    /**
     * 全お知らせを表示
     */
    function displayAllNews() {
        const newsList = document.getElementById('news-list');
        if (!newsList) {
            return;
        }

        // ID順でソート（降順：大きいIDが先、新しいお知らせが上）
        const sortedNews = sortNewsById(newsData);

        // お知らせがない場合
        if (sortedNews.length === 0) {
            displayEmptyMessage('お知らせはありません', newsList, 'news-item');
            return;
        }

        // お知らせリストを表示
        newsList.innerHTML = '';
        sortedNews.forEach(news => {
            const newsItem = createNewsItemElement(news, {
                baseUrl: 'news-detail.html'
            });
            newsList.appendChild(newsItem);
        });
    }
});

