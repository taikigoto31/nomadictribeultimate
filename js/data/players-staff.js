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
        bio: "生年月日：1997/08/29　/　出身大学：日本体育大学",
        representativeCareer: ["WFDF2024世界マスターズアルティメット選手権大会　オープン部門　トレーナー"],
        playerImage: "images/players/staff/staff_2_thumb1.jpg",
        qnaImages: [
            "images/players/staff/staff_2_thumb1.jpg",
            "images/players/staff/staff_2_thumb2.jpg",
            "images/players/staff/staff_2_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "鍼灸師" },
            { q: "ニックネーム", a: "ごろー" },
            { q: "MBTI", a: "ENFJ" },
            { q: "得意なプレー", a: "チームの仲の良さ" },
            { q: "試合前ルーティン", a: "湯浅さんと戯れる" },
            { q: "好きな食べ物", a: "焼き鳥" },
            { q: "好きな曲", a: "Wind / Akeboshi" },
            { q: "趣味", a: "読書(医療書)、筋トレ" },
            { q: "もしも生まれ変わったら何になりたい", a: "華佗(後漢末期の医師)" },
            { q: "インスタグラムアカウント", a: "@orient_hari_56" },
            { q: "ひとことコメント", a: "全アルティメットプレイヤー！怪我だけはするな！！" }
        ]
    },
    {
        id: 3,
        name: "伊藤 菜月",
        nameEn: "Natsuki Ito",
        number: "",
        position: "STAFF",
        role: "Manager",
        bio: "生年月日：2001/01/30　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/staff/staff_3_thumb1.jpg",
        qnaImages: [
            "images/players/staff/staff_3_thumb1.jpg",
            "images/players/staff/staff_3_thumb2.jpg",
            "images/players/staff/staff_3_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "エンジニア" },
            { q: "ニックネーム", a: "なっちゃん" },
            { q: "MBTI", a: "INFP" },
            { q: "得意なプレー", a: "試合の動画撮影" },
            { q: "試合前ルーティン", a: "プリキュアカードグミ購入" },
            { q: "好きな食べ物", a: "しめ鯖" },
            { q: "好きな曲", a: "Lee Youngji/2 / 星野源" },
            { q: "趣味", a: "ハロー！プロジェクト、シルバニア" },
            { q: "もしも生まれ変わったら何になりたい", a: "お金持ちの家の猫" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "マネージャーも楽しめるチームです！" }
        ]
    }
];

