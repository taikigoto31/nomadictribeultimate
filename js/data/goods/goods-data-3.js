// ============================================
// グッズデータ
// ============================================

const goodsDataItem3 = {
    id: "3",
    name: "ネックチューブ",
    price: "2,000円（税込）",
    description: [
        "オリジナルデザインのネックチューブ。すでにあるユニフォームに合わせて作れば、統一感がアップします。",
        "",
        "【商品仕様】",
        "カラー：ブラック × レッド",
        "価格：2,000円（税込）",
        "",
    ],
    images: [],
    orderUrl: "https://ovni.theshop.jp/"
};

if (typeof window !== "undefined") {
    if (!window.goodsData) {
        window.goodsData = [];
    }
    const exists = window.goodsData.some(item => item && item.id === goodsDataItem3.id);
    if (!exists) {
        window.goodsData.push(goodsDataItem3);
    }
}
