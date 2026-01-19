// ============================================
// トップページのお知らせ表示
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const ready = typeof window !== 'undefined' ? window.newsDataReady : null;
    const start = () => {
        // データが存在するか確認
        if (!isDataAvailable('newsData')) {
            console.error("お知らせデータが見つかりません");
            return;
        }

        // 直近3件のお知らせを表示
        displayRecentNews();
    };

    if (ready && typeof ready.then === 'function') {
        ready.then(start);
    } else {
        start();
    }

    /**
     * 直近3件のお知らせを表示
     */
    function displayRecentNews() {
        const newsList = document.getElementById('recent-news-list');
        if (!newsList) {
            return;
        }

        // ID順でソート（降順：大きいIDが先、新しいお知らせが上）
        const sortedNews = sortNewsById(newsData);

        // 直近3件を取得
        const recentNews = sortedNews.slice(0, 3);

        // お知らせがない場合
        if (recentNews.length === 0) {
            displayEmptyMessage('お知らせはありません', newsList);
            return;
        }

        // お知らせリストを表示
        newsList.innerHTML = '';
        recentNews.forEach(news => {
            const newsItem = createNewsItemElement(news, {
                baseUrl: 'news-detail.html'
            });
            newsList.appendChild(newsItem);
        });
    }
});

