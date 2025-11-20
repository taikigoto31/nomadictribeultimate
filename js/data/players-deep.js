// DEEPポジションの選手データ
// 画像パス: images/players/deep/player_{id}.jpg (メイン画像)
//          images/players/deep/player_{id}_thumb1.jpg, thumb2.jpg, thumb3.jpg (Q&A用、最大3枚)
// IDは選手ごとに重複しないように設定してください (例: 1, 2, 3...)

const deepPlayers = [
    {
        id: 1,
        name: "湯浅 広史",
        nameEn: "Hiroshi Yuasa",
        number: 1,
        position: "DEEP",
        role: "",
        bio: "身長：185cm　/　体重：80kg　/　生年月日：1999/1/1　/　出身大学：千葉大学",
        representativeCareer: [
            "2010年　WFDF世界ジュニアアルティメット選手権大会 オープン部門",
            "2016年　WFDF世界アルティメット選手権大会 オープン部門",
            "2025年　WFDF世界ビーチアルティメット選手権大会 オープン部門",
        ],
        playerImage: "images/players/deep/player_1_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_1_thumb1.jpg",
            "images/players/deep/player_1_thumb2.jpg",
            "images/players/deep/player_1_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 2,
        name: "伊藤 優吾",
        nameEn: "Yugo Ito",
        number: 2,
        position: "DEEP",
        role: "",
        bio: "身長：185cm　/　体重：77kg　/　生年月日：2002/07/29　/　出身大学：中央大学",
        representativeCareer: [
            "2023年　WFDF2023世界U-24アルティメット選手権大会 オープン部門",
            "2025年　WFDF2023世界U-24アルティメット選手権大会 ミックス部門",
        ],
        playerImage: "images/players/deep/player_2_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_2_thumb1.jpg",
            "images/players/deep/player_2_thumb2.jpg",
            "images/players/deep/player_2_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "ゆうご" },
            { q: "MBTI", a: "ENFJ" },
            { q: "得意なプレー", a: "上競り" },
            { q: "試合前ルーティン", a: "ふくらはぎのストレッチ" },
            { q: "好きな食べ物", a: "ハンバーグ" },
            { q: "好きな曲", a: "365日 / Mr.Children" },
            { q: "趣味", a: "ゴルフ" },
            { q: "もしも生まれ変わったら何になりたい", a: "バレーボール日本代表" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "Nomadic Tribeで楽しく強いアルティメットしましょう！" }
        ]
    },
    {
        id: 4,
        name: "本名 拓",
        nameEn: "Taku Honna",
        number: 4,
        position: "DEEP",
        role: "",
        bio: "身長：168cm　/　体重：59kg　/　生年月日：1991/10/27　/　出身大学：日本体育大学",
        representativeCareer: [
            "2013年　WFDF世界U23アルティメット選手権大会 オープン部門",
            "2015年　アジアアルティメット選手権大会 オープン部門",
            "2016年　世界アルティメット選手権大会 オープン部門",
            "2017年　ワールドゲームズ",
            "2022年　ワールドゲームズ",
            "2024年　世界アルティメット選手権大会 オープン部門",
            "2025年　ワールドゲームズ（サポートメンバー）"
        ],
        playerImage: "images/players/deep/player_4_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_4_thumb1.jpg",
            "images/players/deep/player_4_thumb2.jpg",
            "images/players/deep/player_4_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "人材エージェント" },
            { q: "ニックネーム", a: "タク" },
            { q: "MBTI", a: "ESTP" },
            { q: "得意なプレー", a: "サイドシュート・シュートレシーブ" },
            { q: "試合前ルーティン", a: "ラムネを食べる" },
            { q: "好きな食べ物", a: "グミ" },
            { q: "好きな曲", a: "BUMP OF CHICKEN / Stage of the ground\r\nウカスカジー / 勝利の笑みを君と" },
            { q: "趣味", a: "サウナ・漫画を読むこと" },
            { q: "もしも生まれ変わったら何になりたい", a: "ヨーロッパのイケメン貴族になって悠々自適生活" },
            { q: "インスタグラムアカウント", a: "@tk4_ultimate" },
            { q: "ひとことコメント", a: "メンバーが互いにリスペクトし合っており、居心地の良いとても素敵なチームです。注目、応援していただけると嬉しいです！" }
        ]
    },
    {
        id: 5,
        name: "小林 史",
        nameEn: "Fuhito Kobayasi",
        number: 5,
        position: "DEEP",
        role: "",
        bio: "身長：174cm　/　体重：72kg　/　生年月日：2000/09/20　/　出身大学：明治大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_5_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_5_thumb1.jpg",
            "images/players/deep/player_5_thumb2.jpg",
            "images/players/deep/player_5_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "先生" },
            { q: "ニックネーム", a: "ふっぴー" },
            { q: "MBTI", a: "INTP" },
            { q: "得意なプレー", a: "サイドインサイド" },
            { q: "試合前ルーティン", a: "拍手" },
            { q: "好きな食べ物", a: "ラーメン二郎 神田神保町店 麺柔らかめ" },
            { q: "好きな曲", a: "ヨルシカ / 夜行" },
            { q: "趣味", a: "お弁当" },
            { q: "もしも生まれ変わったら何になりたい", a: "関 拓哉" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "濃い人募集してます。" }
        ]
    },
    {
        id: 8,
        name: "久野 翔平",
        nameEn: "Shohei Kuno",
        number: 8,
        position: "DEEP",
        role: "",
        bio: "身長：181cm　/　体重：77kg　/　生年月日：1999/1/1　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_8_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_8_thumb1.jpg",
            "images/players/deep/player_8_thumb2.jpg",
            "images/players/deep/player_8_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 11,
        name: "大野 颯太",
        nameEn: "Sota Ono",
        number: 11,
        position: "DEEP",
        role: "",
        bio: "身長：181cm　/　体重：77kg　/　生年月日：1999/1/1　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_11_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_11_thumb1.jpg",
            "images/players/deep/player_11_thumb2.jpg",
            "images/players/deep/player_11_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 14,
        name: "馬場 俊介",
        nameEn: "Shunsuke Baba",
        number: 14,
        position: "DEEP",
        role: "",
        bio: "身長：181cm　/　体重：77kg　/　生年月日：1999/1/1　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_14_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_14_thumb1.jpg",
            "images/players/deep/player_14_thumb2.jpg",
            "images/players/deep/player_14_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 17,
        name: "中尾 賢太郎",
        nameEn: "Kentaro Nakao",
        number: 17,
        position: "DEEP",
        role: "",
        bio: "身長：179cm　/　体重：74kg　/　生年月日：1999/1/1　/　出身大学：国際基督教大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_17_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_17_thumb1.jpg",
            "images/players/deep/player_17_thumb2.jpg",
            "images/players/deep/player_17_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 18,
        name: "山村 颯",
        nameEn: "Soh Yamamura",
        number: 18,
        position: "DEEP",
        role: "",
        bio: "身長：187cm　/　体重：84kg　/　生年月日：1999/1/1　/　出身大学：上智大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_18_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_18_thumb1.jpg",
            "images/players/deep/player_18_thumb2.jpg",
            "images/players/deep/player_18_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 19,
        name: "稲本 響",
        nameEn: "Hibiki Inamoto",
        number: 19,
        position: "DEEP",
        role: "",
        bio: "身長：184cm　/　体重：81kg　/　生年月日：1999/1/1　/　出身大学：筑波大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_19_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_19_thumb1.jpg",
            "images/players/deep/player_19_thumb2.jpg",
            "images/players/deep/player_19_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 25,
        name: "三上 康成",
        nameEn: "Kosei Mikami",
        number: 25,
        position: "DEEP",
        role: "",
        bio: "身長：186cm　/　体重：83kg　/　生年月日：1999/1/1　/　出身大学：秋田大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_25_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_25_thumb1.jpg",
            "images/players/deep/player_25_thumb2.jpg",
            "images/players/deep/player_25_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 44,
        name: "後藤 大輝",
        nameEn: "Taiki Goto",
        number: 44,
        position: "DEEP",
        role: "",
        bio: "身長：176cm　/　体重：71kg　/　生年月日：1999/1/1　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_44_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_44_thumb1.jpg",
            "images/players/deep/player_44_thumb2.jpg",
            "images/players/deep/player_44_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 47,
        name: "尾崎 聡大",
        nameEn: "Sodai Ozaki",
        number: 47,
        position: "DEEP",
        role: "",
        bio: "身長：176cm　/　体重：71kg　/　生年月日：1999/1/1　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_47_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_47_thumb1.jpg",
            "images/players/deep/player_47_thumb2.jpg",
            "images/players/deep/player_47_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 64,
        name: "石黒 陽晴",
        nameEn: "Yosei Ishiguro",
        number: 64,
        position: "DEEP",
        role: "",
        bio: "身長：189cm　/　体重：86kg　/　生年月日：1999/1/1　/　出身大学：早稲田大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_64_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_64_thumb1.jpg",
            "images/players/deep/player_64_thumb2.jpg",
            "images/players/deep/player_64_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 67,
        name: "Riley Wood",
        nameEn: "Riley Wood",
        number: 67,
        position: "DEEP",
        role: "",
        bio: "身長：190cm　/　体重：85kg　/　生年月日：1999/1/1　/　出身大学：ー",
        representativeCareer: [],
        playerImage: "images/players/deep/player_67_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_67_thumb1.jpg",
            "images/players/deep/player_67_thumb2.jpg",
            "images/players/deep/player_67_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 87,
        name: "村上 吏旺",
        nameEn: "Rio Murakami",
        number: 87,
        position: "DEEP",
        role: "",
        bio: "身長：181cm　/　体重：77kg　/　生年月日：1999/1/1　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_87_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_87_thumb1.jpg",
            "images/players/deep/player_87_thumb2.jpg",
            "images/players/deep/player_87_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    },
    {
        id: 88,
        name: "高橋 翼",
        nameEn: "Tsubasa Takahashi",
        number: 88,
        position: "DEEP",
        role: "",
        bio: "身長：189cm　/　体重：86kg　/　生年月日：1999/1/1　/　出身大学：早稲田大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_88_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_88_thumb1.jpg",
            "images/players/deep/player_88_thumb2.jpg",
            "images/players/deep/player_88_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ー" },
            { q: "ニックネーム", a: "ー" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "ー" },
            { q: "試合前ルーティン", a: "ー" },
            { q: "好きな食べ物", a: "ー" },
            { q: "好きな曲", a: "ー" },
            { q: "趣味", a: "ー" },
            { q: "もしも生まれ変わったら何になりたい", a: "ー" },
            { q: "インスタグラムアカウント", a: "ー" },
            { q: "ひとことコメント", a: "ー" }
        ]
    }
];

