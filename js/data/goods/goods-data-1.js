// ============================================
// グッズデータ
// ============================================
// お知らせを簡単に編集できます

const goodsDataItem1 = {
    id: "1",
    name: "大会優勝記念 ロングスリーブTシャツ",
    price: "3,000円（税込）",
    description: [
        "Nomadic Tribeの大会優勝を記念し、特別デザインのロングスリーブTシャツを製作いたしました。",
        "",
        "デザインのこだわり",
        "・フロントには「CHAMPIONS」のロゴと「NOMADIC TRIBE」を力強く配置。",
        "・中央のディスクデザイン内には、共に戦った全選手・スタッフの名前が印字されたメモリアルな1枚です。",
        "",
        "商品仕様",
        "・カラー：ブラック × イエロー",
        "・価格：3,000円（税込）",
        "・配送：郵送希望の場合は別途送料500円",
        "",
        "注意事項",
        "・本商品は販売用モデルです。選手着用モデルとは一部仕様が異なりますので、あらかじめご了承ください。"
    ],
    images: [
        "images/goods/goods1_1.JPG",
        "images/goods/goods1_2.png"
    ],
    sizeChart: {
        title: "Tシャツ",
        headers: ["サイズ", "身丈", "身幅", "肩幅", "袖丈"],
        rows: [
            ["S", "66", "49", "44", "19"],
            ["M", "70", "52", "47", "20"],
            ["L", "74", "55", "50", "22"],
            ["XL", "78", "58", "53", "24"]
        ]
    },
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
