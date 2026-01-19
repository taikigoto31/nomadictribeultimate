// ============================================
// お知らせページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const ready = typeof window !== 'undefined' ? window.newsDataReady : null;
    const start = () => {
        // データが存在するか確認
        if (!isDataAvailable('newsData')) {
            console.error("お知らせデータが見つかりません");
            return;
        }

        // フィルターを初期化して表示
        initializeNewsFilter();
    };

    if (ready && typeof ready.then === 'function') {
        ready.then(start);
    } else {
        start();
    }

    function initializeNewsFilter() {
        const newsList = document.getElementById('news-list');
        const filterSelect = document.getElementById('news-filter-select');

        if (!newsList || !filterSelect) {
            return;
        }

        // ID順でソート（降順：大きいIDが先、新しいお知らせが上）
        const sortedNews = sortNewsById(newsData);

        // カテゴリー候補を作成
        const categories = getUniqueCategories(sortedNews);
        renderCategoryOptions(filterSelect, categories);

        // 初期表示（すべて）
        renderNewsList(sortedNews, newsList);

        // カテゴリー変更で再描画
        filterSelect.addEventListener('change', () => {
            const selected = filterSelect.value;
            const filtered = selected === 'all'
                ? sortedNews
                : sortedNews.filter(item => item.category === selected);
            renderNewsList(filtered, newsList);
        });
    }

    function getUniqueCategories(newsArray) {
        const set = new Set();
        newsArray.forEach(item => {
            if (item && item.category) {
                set.add(item.category);
            }
        });
        return Array.from(set);
    }

    function renderCategoryOptions(selectElement, categories) {
        // 既存の選択肢を初期化（"すべて"は残す）
        selectElement.innerHTML = '<option value="all">すべて</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            selectElement.appendChild(option);
        });
    }

    /**
     * お知らせリストを表示
     */
    function renderNewsList(items, newsList) {
        // お知らせがない場合
        if (items.length === 0) {
            displayEmptyMessage('お知らせはありません', newsList, 'news-item');
            return;
        }

        // お知らせがない場合
        // お知らせリストを表示
        newsList.innerHTML = '';
        items.forEach(news => {
            const newsItem = createNewsItemElement(news, {
                baseUrl: 'news-detail.html'
            });
            newsList.appendChild(newsItem);
        });
    }
});

