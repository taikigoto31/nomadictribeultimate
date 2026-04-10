// ============================================
// グッズデータ
// ============================================
// お知らせを簡単に編集できます

const goodsDataItem1 = {
    id: "1",
    name: "大会優勝記念 ロングスリーブTシャツ",
    price: "3,000円（税込）",
    deadline: "販売期限：4/5（日）まで",
    description: [
        "大会優勝を記念した特別デザインのロングスリーブTシャツです。中央のディスクデザイン内には、共に戦った全選手・スタッフの名前が印字されたメモリアルな1枚。",
        "",
        "【商品仕様】",
        "カラー：ブラック × イエロー",
        "価格：3,000円（税込）※郵送の場合は別途送料500円",
        "",
        "【サイズ感】",
        "画像左：185cm / XL",
        "画像中：175cm / L",
        "画像右：168cm / M",
        "",
        "【注意事項】",
        "販売用モデルのため、選手着用モデルとは一部仕様が異なります。"
    ],
    images: [
        "images/goods/goods1_1.JPG",
        "images/goods/goods1_2.png"
    ],
    sizeChart: {
        title: "Tシャツ",
        headers: ["サイズ", "SS", "S", "M", "L", "LL", "3L"],
        rows: [
            ["身丈", "62", "65", "68", "71", "74", "77"],
            ["身幅", "44", "47", "50", "53", "56", "60"],
            ["肩幅", "42", "44", "46", "48", "50", "53"],
            ["袖丈", "57", "59", "60", "61", "62", "63"]
        ]
    },
    endDate: "2026-04-05",
    orderUrl: "https://forms.gle/xXYYFcJvJmMqv21T9"
};

if (typeof window !== "undefined") {
    if (!window.goodsData) {
        window.goodsData = [];
    }
    const exists = window.goodsData.some(item => item && item.id === goodsDataItem1.id);
    if (!exists) {
        window.goodsData.push(goodsDataItem1);
    }
}
