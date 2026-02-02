// グッズデータ
const SIZE_CHART = {
    TSHIRT: {
        title: "Tシャツ",
        headers: ["サイズ", "身丈", "身幅", "肩幅", "袖丈"],
        rows: [
            ["S", "66", "49", "44", "19"],
            ["M", "70", "52", "47", "20"],
            ["L", "74", "55", "50", "22"],
            ["XL", "78", "58", "53", "24"]
        ]
    },
    HOODIE: {
        title: "スウェットパーカー",
        headers: ["サイズ", "身丈", "身幅", "肩幅", "袖丈"],
        rows: [
            ["M", "67", "55", "50", "60"],
            ["L", "71", "58", "52", "61"],
            ["XL", "76", "63", "55", "62"]
        ]
    },
    CAP: {
        title: "キャップ",
        headers: ["サイズ", "頭周り", "高さ", "つば"],
        rows: [
            ["FREE", "56-60", "11", "7"]
        ]
    }
};

const goodsData = [
    {
        id: "tee-01",
        name: "全日本選手権優勝記念Tシャツ",
        price: "¥3,500",
        description: "全日本選手権優勝記念Tシャツ。練習にも普段使いにも合わせやすい1枚。",
        images: [
            "images/goods/goods1.JPG",
            "images/goods/goods1.JPG",
            "images/goods/goods1.JPG"
        ],
        sizeChartType: "TSHIRT",
        orderUrl: ""
    }
];

if (typeof window !== "undefined") {
    window.SIZE_CHART = SIZE_CHART;
    window.goodsData = goodsData;
}
