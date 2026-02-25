// ============================================
// グッズデータ統合ファイル
// ============================================
// 各商品データは js/data/goods/goods-data-{ID}.js で管理

if (typeof window !== "undefined") {
    if (!window.goodsData) {
        window.goodsData = [];
    }

    const MAX_AUTO_LOAD = 30;

    function loadScriptOnce(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.head.appendChild(script);
        });
    }

    async function loadSequentialGoods(startId, maxId) {
        for (let id = startId; id <= maxId; id += 1) {
            const ok = await loadScriptOnce(`js/data/goods/goods-data-${id}.js`);
            if (!ok) {
                break;
            }
        }
        return window.goodsData;
    }

    const autoLoadPromise = loadSequentialGoods(1, MAX_AUTO_LOAD);
    window.goodsDataReady = Promise.resolve(autoLoadPromise);
}

const goodsData = typeof window !== "undefined" && window.goodsData ? window.goodsData : [];
