// ============================================
// お知らせ詳細ページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const ready = typeof window !== 'undefined' ? window.newsDataReady : null;
    const start = () => {
        // データが存在するか確認
        if (typeof newsData === 'undefined') {
            console.error("お知らせデータが見つかりません");
            return;
        }

        // URLパラメータからIDを取得
        const urlParams = new URLSearchParams(window.location.search);
        const newsId = parseInt(urlParams.get('id'), 10);

        if (!newsId || isNaN(newsId)) {
            displayError("お知らせIDが指定されていません");
            return;
        }

        // お知らせデータを取得
        const news = newsData.find(item => item.id === newsId);

        if (!news) {
            displayError("お知らせが見つかりません");
            return;
        }

        // ページタイトルを更新
        document.title = `${news.title} - NEWS - Nomadic Tribe Ultimate`;

        // お知らせ詳細を表示
        displayNewsDetail(news);
    };

    if (ready && typeof ready.then === 'function') {
        ready.then(start);
    } else {
        start();
    }

    /**
     * お知らせ詳細を表示
     * @param {Object} news - お知らせデータ
     */
    function displayNewsDetail(news) {
        // パンくずリストを生成
        displayBreadcrumb(news);

        // 記事コンテンツを生成
        displayNewsContent(news);

        // ページナビゲーションを生成
        displayNewsNavigation(news);
    }

    /**
     * パンくずリストを表示
     * @param {Object} news - お知らせデータ
     */
    function displayBreadcrumb(news) {
        const breadcrumb = document.getElementById('breadcrumb');
        if (!breadcrumb) return;

        breadcrumb.innerHTML = `
            <a href="index.html">ホーム</a>
            <span>></span>
            <a href="news.html">お知らせ</a>
            <span>></span>
            <span>${news.category}</span>
            <span>></span>
            <span>${news.title}</span>
        `;
    }

    /**
     * 記事コンテンツを表示
     * @param {Object} news - お知らせデータ
     */
    function displayNewsContent(news) {
        const content = document.getElementById('news-detail-content');
        if (!content) return;

        // 本文が存在する場合は表示、ない場合はタイトルを表示
        const bodyContent = news.content || `<p>${news.title}の詳細情報です。</p>`;

        content.innerHTML = `
            <div class="news-detail-header">
                <div class="news-detail-meta">
                    <span class="news-detail-date">${news.date}</span>
                    <span class="news-detail-category">${news.category}</span>
                </div>
                <h1 class="news-detail-title">${news.title}</h1>
            </div>
            <div class="news-detail-body">
                ${bodyContent}
            </div>
        `;
    }

    /**
     * ページナビゲーションを表示
     * @param {Object} news - お知らせデータ
     */
    function displayNewsNavigation(news) {
        const navigation = document.getElementById('news-navigation');
        if (!navigation) return;

        // ID順でソート
        const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
        const currentIndex = sortedNews.findIndex(item => item.id === news.id);

        // 前の記事
        const prevNews = currentIndex < sortedNews.length - 1 ? sortedNews[currentIndex + 1] : null;
        // 次の記事
        const nextNews = currentIndex > 0 ? sortedNews[currentIndex - 1] : null;

        let navHTML = '';

        if (prevNews) {
            navHTML += `<a href="news-detail.html?id=${prevNews.id}" class="news-nav-link back">
                <i class="fas fa-chevron-left"></i>
                <span>前のお知らせへ</span>
            </a>`;
        } else {
            navHTML += '<span></span>'; // スペーサー
        }

        navHTML += `<a href="news.html" class="news-nav-link list">お知らせ一覧へ</a>`;

        if (nextNews) {
            navHTML += `<a href="news-detail.html?id=${nextNews.id}" class="news-nav-link next">
                <span>次のお知らせへ</span>
                <i class="fas fa-chevron-right"></i>
            </a>`;
        }

        navigation.innerHTML = navHTML;
    }

    /**
     * エラーを表示
     * @param {string} message - エラーメッセージ
     */
    function displayError(message) {
        const content = document.getElementById('news-detail-content');
        if (content) {
            content.innerHTML = `
                <div class="news-detail-header">
                    <h1 class="news-detail-title">エラー</h1>
                </div>
                <div class="news-detail-body">
                    <p>${message}</p>
                    <p><a href="news.html">お知らせ一覧に戻る</a></p>
                </div>
            `;
        }
    }
});

