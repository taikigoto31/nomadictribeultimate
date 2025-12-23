// ============================================
// お知らせページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (typeof newsData === 'undefined') {
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
        const sortedNews = [...newsData].sort((a, b) => {
            return b.id - a.id;
        });

        // お知らせがない場合
        if (sortedNews.length === 0) {
            newsList.innerHTML = '<li class="news-item"><p class="news-description">お知らせはありません</p></li>';
            return;
        }

        // お知らせリストを表示
        newsList.innerHTML = '';
        sortedNews.forEach(news => {
            const newsItem = createNewsItem(news);
            newsList.appendChild(newsItem);
        });
    }

    /**
     * お知らせ項目のHTML要素を作成
     * @param {Object} news - お知らせデータ
     * @returns {HTMLElement} お知らせ項目の要素
     */
    function createNewsItem(news) {
        const li = document.createElement('li');
        li.className = 'news-item';
        
        // 画像のパス（存在しない場合はロゴを使用）
        const fallbackLogo = 'images/NomadicTribeLogo.png';
        const imageSrc = news.image && news.image.trim() !== '' ? news.image : fallbackLogo;
        
        // リンクの決定：news.linkがあればそれを使用、なければ詳細ページに遷移
        let newsLink = `news-detail.html?id=${news.id}`;
        if (news.link && news.link.trim() !== '') {
            newsLink = news.link;
        }
        
        // リンクで囲む
        const contentHTML = `
            <div class="news-image">
                <img src="${imageSrc}" alt="${news.title}" onerror="this.src='images/NomadicTribeLogo.png'; this.onerror=null;">
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

