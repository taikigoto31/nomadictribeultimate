// ============================================
// お知らせデータ統合ファイル
// ============================================
// 個別のニュースファイルを読み込んで統合します
// 各ニュースのデータは js/data/news/news-data-{ID}.js で管理されています
// このファイルは既存分を統合し、未読み込み分を自動で読み込みます

// 統合されたニュースデータ（既存のコードとの互換性のため）
// 各ファイルはwindow.newsDataに個別のニュースアイテムをpushします

// ブラウザ環境のみ実行
if (typeof window !== 'undefined') {
    // 既存の配列があれば利用（参照を維持）
    if (!window.newsData) {
        window.newsData = [];
    }

    // 既に読み込まれているIDの最大値を取得
    const existingIds = window.newsData
        .map(item => (item && typeof item.id === 'number' ? item.id : null))
        .filter(id => id !== null);
    const maxExistingId = existingIds.length > 0 ? Math.max(...existingIds) : 0;

    const MAX_AUTO_LOAD = 30;

    function loadScriptOnce(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.head.appendChild(script);
        });
    }

    async function loadSequentialNews(startId, maxId) {
        for (let id = startId; id <= maxId; id += 1) {
            const ok = await loadScriptOnce(`js/data/news/news-data-${id}.js`);
            if (!ok) {
                break;
            }
        }
        return window.newsData;
    }

    // 自動読み込み（既存分の次から最大値まで）
    const autoLoadPromise = loadSequentialNews(maxExistingId + 1, maxExistingId + MAX_AUTO_LOAD);

    // どのページからでも待てるようにPromiseを公開
    window.newsDataReady = Promise.resolve(autoLoadPromise);
}

// windowオブジェクトから統合されたデータを取得
// window.newsDataは同一配列を維持する
const newsData = typeof window !== 'undefined' && window.newsData ? window.newsData : [];

