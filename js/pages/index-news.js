// ============================================
// トップページのお知らせ表示
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (typeof newsData === 'undefined') {
        console.error("お知らせデータが見つかりません");
        return;
    }

    // 直近4件のお知らせを表示
    displayRecentNews();

    /**
     * 直近4件のお知らせを表示
     */
    function displayRecentNews() {
        const newsList = document.getElementById('recent-news-list');
        if (!newsList) {
            return;
        }

        // ID順でソート（降順：大きいIDが先、新しいお知らせが上）
        const sortedNews = [...newsData].sort((a, b) => {
            return b.id - a.id;
        });

        // 直近4件を取得
        const recentNews = sortedNews.slice(0, 4);

        // お知らせがない場合
        if (recentNews.length === 0) {
            newsList.innerHTML = '<li><span class="news-description">お知らせはありません</span></li>';
            return;
        }

        // お知らせリストを表示
        newsList.innerHTML = '';
        recentNews.forEach(news => {
            const newsItem = createNewsListItem(news);
            newsList.appendChild(newsItem);
        });
    }

    /**
     * お知らせリスト項目のHTML要素を作成
     * @param {Object} news - お知らせデータ
     * @returns {HTMLElement} お知らせ項目の要素
     */
    function createNewsListItem(news) {
        const li = document.createElement('li');
        li.className = 'news-item';
        
        // 画像のパス（存在しない場合はプレースホルダー）
        const imageSrc = news.image || 'https://placehold.co/150x150/E60012/ffffff?text=LOGO';
        
        // リンクの決定：news.linkがあればそれを使用、なければ詳細ページに遷移
        let newsLink = `news-detail?id=${news.id}`;
        if (news.link && news.link.trim() !== '') {
            newsLink = news.link;
        }
        
        // リンクで囲む
        const contentHTML = `
            <div class="news-image">
                <img src="${imageSrc}" alt="${news.title}" onerror="this.src='https://placehold.co/150x150/E60012/ffffff?text=LOGO'; this.onerror=null;">
            </div>
            <div class="news-content">
                <div class="news-header">
                    <span class="news-date">${news.date}</span>
                    <span class="news-category">${news.category}</span>
                </div>
                <p class="news-description">${news.title}</p>
            </div>
        `;
        
        li.innerHTML = `<a href="${newsLink}" class="news-link">${contentHTML}</a>`;

        return li;
    }
});

