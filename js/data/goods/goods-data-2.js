// ============================================
// グッズデータ
// ============================================

const goodsDataItem2 = {
    id: "2",
    name: "キャップ",
    price: "3,000円（税込）",
    description: [
        "ロゴを刺繍で仕上げるので、高級感のあるデザインに。プリントではないため、洗濯や長期間の使用でもデザインが落ちにくいのが特徴です。",
        "",
        "【商品仕様】",
        "カラー：ブラック",
        "価格：3,000円（税込）",
        "",
    ],
    images: [],
    orderUrl: "https://ovni.theshop.jp/"
};

if (typeof window !== "undefined") {
    if (!window.goodsData) {
        window.goodsData = [];
    }
    const exists = window.goodsData.some(item => item && item.id === goodsDataItem2.id);
    if (!exists) {
        window.goodsData.push(goodsDataItem2);
    }
}
