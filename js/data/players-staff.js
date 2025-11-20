// STAFFポジションのスタッフデータ
// 画像パス: images/players/staff/staff_{id}.jpg (メイン画像)
//          images/players/staff/staff_{id}_thumb1.jpg, thumb2.jpg, thumb3.jpg (Q&A用、最大3枚)
// IDはスタッフごとに重複しないように設定してください (例: 1, 2, 3...)

const staffPlayers = [
    {
        id: 1,
        name: "大西 弘樹",
        nameEn: "Hiroki Onishi",
        number: "",
        position: "STAFF",
        role: "Coach",
        bio: "身長：175cm　/　体重：70kg　/　生年月日：ー　/　出身大学：早稲田大学",
        representativeCareer: [],
        playerImage: "images/players/staff/staff_1_thumb1.jpg",
        qnaImages: [
            "images/players/staff/staff_1_thumb1.jpg",
            "images/players/staff/staff_1_thumb2.jpg",
            "images/players/staff/staff_1_thumb3.jpg"
        ],
        qna: [
            { q: "役職", a: "監督" },
            { q: "出身大学", a: "早稲田大学" }
        ]
    },
    {
        id: 2,
        name: "茂野 雅也",
        nameEn: "Masaya Shigeno",
        number: "",
        position: "STAFF",
        role: "Trainer",
        bio: "身長：178cm　/　体重：72kg　/　生年月日：ー　/　出身大学：日本体育大学",
        representativeCareer: [],
        playerImage: "images/players/staff/staff_2_thumb1.jpg",
        qnaImages: [
            "images/players/staff/staff_2_thumb1.jpg",
            "images/players/staff/staff_2_thumb2.jpg",
            "images/players/staff/staff_2_thumb3.jpg"
        ],
        qna: [
            { q: "役職", a: "トレーナー" },
            { q: "出身大学", a: "日本体育大学" }
        ]
    },
    {
        id: 3,
        name: "伊藤 菜月",
        nameEn: "Natsuki Ito",
        number: "",
        position: "STAFF",
        role: "Manager",
        bio: "身長：165cm　/　体重：55kg　/　生年月日：ー　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/staff/staff_3_thumb1.jpg",
        qnaImages: [
            "images/players/staff/staff_3_thumb1.jpg",
            "images/players/staff/staff_3_thumb2.jpg",
            "images/players/staff/staff_3_thumb3.jpg"
        ],
        qna: [
            { q: "役職", a: "マネージャー" },
            { q: "出身大学", a: "同志社大学" }
        ]
    }
];

