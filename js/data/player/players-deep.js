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
        bio: "身長：180cm　/　体重：65kg　/　生年月日：1991/01/29　/　出身大学：千葉大学",
        representativeCareer: [
            "2010年　WFDF世界ジュニアアルティメット選手権大会 オープン部門",
            "2013年　WFDF世界U24アルティメット選手権大会 オープン部門",
            "2014年　WFDF世界ビーチアルティメット選手権大会 オープン部門",
            "2015年　WFDFアジアアルティメット選手権大会 オープン部門",
            "2016年　WFDF世界アルティメット選手権大会 オープン部門",   
            "2019年　WFDFアジアビーチアルティメット選手権大会 ミックス部門",
            "2025年　WFDF世界ビーチアルティメット選手権大会 オープン部門",
        ],
        playerImage: "images/players/deep/player_1_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_1_thumb1.jpg",
            "images/players/deep/player_1_thumb2.jpg",
            "images/players/deep/player_1_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "OVNI社長" },
            { q: "ニックネーム", a: "HIRO" },
            { q: "MBTI", a: "ENFP" },
            { q: "得意なプレー", a: "サイドシュート" },
            { q: "試合前ルーティン", a: "トレーナーに用意してもらったアップ内容の確認" },
            { q: "好きな食べ物", a: "うどん" },
            { q: "好きな曲", a: "オワリはじまり / かりゆし58" },
            { q: "趣味", a: "ゴルフ、ローグライクのゲーム" },
            { q: "もしも生まれ変わったら何になりたい", a: "すごい歌手" },
            { q: "インスタグラムアカウント", a: "@h.yuasa78" },
            { q: "ひとことコメント", a: "チーム最年長で頑張っています！！年上のオールドルーキーお待ちしてます！！" }
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
            { q: "MBTI", a: "ESFP" },
            { q: "得意なプレー", a: "サイドシュート・シュートレシーブ" },
            { q: "試合前ルーティン", a: "ラムネを食べる" },
            { q: "好きな食べ物", a: "グミ" },
            { q: "好きな曲", a: "Stage of the ground / BUMP OF CHICKEN\r\n勝利の笑みを君と / ウカスカジー" },
            { q: "趣味", a: "サウナ・漫画を読むこと" },
            { q: "もしも生まれ変わったら何になりたい", a: "ヨーロッパのイケメン貴族になって悠々自適生活" },
            { q: "インスタグラムアカウント", a: "@tk4_ultimate" },
            { q: "ひとことコメント", a: "メンバーが互いにリスペクトし合っており、居心地の良いとても素敵なチームです。注目、応援していただけると嬉しいです！" }
        ]
    },
    {
        id: 5,
        name: "小林 史",
        nameEn: "Fuhito Kobayashi",
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
            { q: "好きな曲", a: "夜行 / ヨルシカ" },
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
        bio: "身長：169cm　/　体重：61kg　/　生年月日：2002/02/08　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_8_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_8_thumb1.jpg",
            "images/players/deep/player_8_thumb2.jpg",
            "images/players/deep/player_8_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "くの、ブロ" },
            { q: "MBTI", a: "INFJ" },
            { q: "得意なプレー", a: "雰囲気作り" },
            { q: "試合前ルーティン", a: "試合前用プレイリストを聴く" },
            { q: "好きな食べ物", a: "餃子" },
            { q: "好きな曲", a: "one of wun / Gunna" },
            { q: "趣味", a: "スポーツ観戦" },
            { q: "もしも生まれ変わったら何になりたい", a: "猫" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "応援よろしくお願いします" }
        ]
    },
    {
        id: 11,
        name: "大野 颯太",
        nameEn: "Sota Ono",
        number: 11,
        position: "DEEP",
        role: "",
        bio: "身長：168cm　/　体重：55kg　/　生年月日：2001/03/02　/　出身大学：慶応義塾大学",
        representativeCareer: ["2023年　WFDF世界U-24アルティメット選手権大会　オープン部門",
            "2024年　WFDFアジア・オセアニアビーチアルティメット選手権大会 オープン部門",
            "2025年　WFDF世界ビーチアルティメット選手権大会 オープン部門"],
        playerImage: "images/players/deep/player_11_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_11_thumb1.jpg",
            "images/players/deep/player_11_thumb2.jpg",
            "images/players/deep/player_11_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "そうた" },
            { q: "MBTI", a: "ESFP" },
            { q: "得意なプレー", a: "運動量、サイドシュート" },
            { q: "試合前ルーティン", a: "特にないです" },
            { q: "好きな食べ物", a: "肉" },
            { q: "好きな曲", a: "キミシダイ列車 / ONE OK ROCK" },
            { q: "趣味", a: "F1観戦" },
            { q: "もしも生まれ変わったら何になりたい", a: "ハヤブサ" },
            { q: "インスタグラムアカウント", a: "@sotaono11" },
            { q: "ひとことコメント", a: "走り回ります！！！" }
        ]
    },
    {
        id: 14,
        name: "馬場 俊介",
        nameEn: "Shunsuke Baba",
        number: 14,
        position: "DEEP",
        role: "",
        bio: "身長：179cm　/　体重：67kg　/　生年月日：1997/06/10　/　出身大学：慶応義塾大学",
        representativeCareer: [],
        playerImage: "images/players/deep/player_14_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_14_thumb1.jpg",
            "images/players/deep/player_14_thumb2.jpg",
            "images/players/deep/player_14_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "ばばしゅん" },
            { q: "MBTI", a: "ESTJ" },
            { q: "得意なプレー", a: "サイドスロー" },
            { q: "試合前ルーティン", a: "やまちゃんカーで会場入りすること" },
            { q: "好きな食べ物", a: "ハンバーガー" },
            { q: "好きな曲", a: "ロングホープ・フィリア / 菅田将暉" },
            { q: "趣味", a: "野球観戦" },
            { q: "もしも生まれ変わったら何になりたい", a: "ドアラ" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "Go! Nomadic!!" }
        ]
    },
    {
        id: 17,
        name: "中尾 賢太郎",
        nameEn: "Kentaro Nakao",
        number: 17,
        position: "DEEP",
        role: "",
        bio: "身長：176cm　/　体重：64kg　/　生年月日：1995/03/26　/　出身大学：国際基督教大学",
        representativeCareer: ["2018年 WFDF 世界U24アルティメット選手権 オープン部門",
            "2024年 WFDF 世界アルティメット選手権 オープン部門"],
        playerImage: "images/players/deep/player_17_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_17_thumb1.jpg",
            "images/players/deep/player_17_thumb2.jpg",
            "images/players/deep/player_17_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "コンサルタント" },
            { q: "ニックネーム", a: "けんたろう" },
            { q: "MBTI", a: "ー" },
            { q: "得意なプレー", a: "気が利くレシーブ" },
            { q: "試合前ルーティン", a: "お浄め塩スプレー" },
            { q: "好きな食べ物", a: "富士そば" },
            { q: "好きな曲", a: "はちゃめちゃわちゃライフ！ / FRUITS ZIPPER" },
            { q: "趣味", a: "料理" },
            { q: "もしも生まれ変わったら何になりたい", a: "デコピン" },
            { q: "インスタグラムアカウント", a: "@kentaronakao" },
            { q: "ひとことコメント", a: "アルティメット人生の集大成です" }
        ]
    },
    {
        id: 18,
        name: "山村 颯",
        nameEn: "Soh Yamamura",
        number: 18,
        position: "DEEP",
        role: "",
        bio: "身長：180cm　/　体重：72kg　/　生年月日：1998/11/24/　出身大学：上智大学",
        representativeCareer: ["2019年　WFDFU24世界アルティメット選手権大会　オープン部門"],
        playerImage: "images/players/deep/player_18_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_18_thumb1.jpg",
            "images/players/deep/player_18_thumb2.jpg",
            "images/players/deep/player_18_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "金融会社" },
            { q: "ニックネーム", a: "冷蔵庫" },
            { q: "MBTI", a: "ESTP" },
            { q: "得意なプレー", a: "バックシュート、大きな声" },
            { q: "試合前ルーティン", a: "お気に入りの服を着てアップ" },
            { q: "好きな食べ物", a: "シュークリーム" },
            { q: "好きな曲", a: "明るい未来 / never young beach" },
            { q: "趣味", a: "東京帰省" },
            { q: "もしも生まれ変わったら何になりたい", a: "帰国子女" },
            { q: "インスタグラムアカウント", a: "@soh__1124" },
            { q: "ひとことコメント", a: "Soh show in Ireland!" }
        ]
    },
    {
        id: 19,
        name: "稲本 響",
        nameEn: "Hibiki Inamoto",
        number: 19,
        position: "DEEP",
        role: "",
        bio: "身長：179cm　/　体重：69kg　/　生年月日：2002/09/09　/　出身大学：筑波大学",
        representativeCareer: ["2025年　WFDF世界ビーチアルティメット選手権大会 オープン部門"],
        playerImage: "images/players/deep/player_19_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_19_thumb1.jpg",
            "images/players/deep/player_19_thumb2.jpg",
            "images/players/deep/player_19_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "大学院生" },
            { q: "ニックネーム", a: "ヒビキ" },
            { q: "MBTI", a: "ENFP" },
            { q: "得意なプレー", a: "ミドルディフェンス、サイドシュート" },
            { q: "試合前ルーティン", a: "両手の指の腹を合わせる" },
            { q: "好きな食べ物", a: "寿司、おでん" },
            { q: "好きな曲", a: "冬のある日の唄 / Greeeen" },
            { q: "趣味", a: "旅行" },
            { q: "もしも生まれ変わったら何になりたい", a: "飼い猫" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "ノンキャリ卒業 Go Nomadic！" }
        ]
    },
    {
        id: 25,
        name: "三上 康成",
        nameEn: "Kosei Mikami",
        number: 25,
        position: "DEEP",
        role: "",
        bio: "身長：183cm　/　体重：68kg　/　生年月日：2000/03/30　/　出身大学：秋田大学",
        representativeCareer: ["2019年　WFDF世界U24アルティメット選手権大会　ミックス部門"],
        playerImage: "images/players/deep/player_25_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_25_thumb1.jpg",
            "images/players/deep/player_25_thumb2.jpg",
            "images/players/deep/player_25_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "こうちゃん" },
            { q: "MBTI", a: "ESFP" },
            { q: "得意なプレー", a: "サイドシュート、スローオフ" },
            { q: "試合前ルーティン", a: "2025シーズンはリポビタンD飲んでました" },
            { q: "好きな食べ物", a: "オムライス" },
            { q: "好きな曲", a: "beautifulさ / BiSH" },
            { q: "趣味", a: "サイクリング" },
            { q: "もしも生まれ変わったら何になりたい", a: "魔法使い" },
            { q: "インスタグラムアカウント", a: "@mk___3303" },
            { q: "ひとことコメント", a: "NomadicTribeの応援よろしくお願いします！！" }
        ]
    },
    {
        id: 44,
        name: "後藤 大輝",
        nameEn: "Taiki Goto",
        number: 44,
        position: "DEEP",
        role: "",
        bio: "身長：182cm　/　体重：70kg　/　生年月日：1999/03/01/　出身大学：同志社大学",
        representativeCareer: ["2023年　アジアオセアニアアルティメット選手権大会　オープン部門"],
        playerImage: "images/players/deep/player_44_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_44_thumb1.jpg",
            "images/players/deep/player_44_thumb2.jpg",
            "images/players/deep/player_44_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "ITコンサルタント" },
            { q: "ニックネーム", a: "ごっち" },
            { q: "MBTI", a: "ISTP" },
            { q: "得意なプレー", a: "勝負強さ" },
            { q: "試合前ルーティン", a: "右足からグラウンドに入る" },
            { q: "好きな食べ物", a: "手羽先" },
            { q: "好きな曲", a: "欲望に満ちた青年団 / ONE OK ROCK" },
            { q: "趣味", a: "サウナ・HP作り" },
            { q: "もしも生まれ変わったら何になりたい", a: "鷹" },
            { q: "インスタグラムアカウント", a: "@taikigoto_ultimate44" },
            { q: "ひとことコメント", a: "まだまだ進化し続けるNomadicTribeをご注目ください！" }
        ]
    },
    {
        id: 47,
        name: "尾崎 聡大",
        nameEn: "Sodai Ozaki",
        number: 47,
        position: "DEEP",
        role: "",
        bio: "身長：180cm　/　体重：74kg　/　生年月日：2000/07/19　/　出身大学：同志社大学",
        representativeCareer: ["2023年　WFDF世界U-24アルティメット選手権大会　オープン部門"],
        playerImage: "images/players/deep/player_47_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_47_thumb1.jpg",
            "images/players/deep/player_47_thumb2.jpg",
            "images/players/deep/player_47_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "営業" },
            { q: "ニックネーム", a: "おざき、Ozzie" },
            { q: "MBTI", a: "ESFP" },
            { q: "得意なプレー", a: "お笑い" },
            { q: "試合前ルーティン", a: "佐山聡の動画を見る" },
            { q: "好きな食べ物", a: "お米" },
            { q: "好きな曲", a: "Sorrows / King Gnu" },
            { q: "趣味", a: "ゴルフ、料理" },
            { q: "もしも生まれ変わったら何になりたい", a: "馬" },
            { q: "インスタグラムアカウント", a: "@sodai_0719" },
            { q: "ひとことコメント", a: "NomadicTribeを応援すること、これも技術のうち。" }
        ]
    },
    {
        id: 64,
        name: "石黒 陽晴",
        nameEn: "Yosei Ishiguro",
        number: 64,
        position: "DEEP",
        role: "",
        bio: "身長：178cm　/　体重：66kg　/　生年月日：2002/03/23　/　出身大学：早稲田大学",
        representativeCareer: ["2025年　WFDF 世界U24アルティメット選手権大会　オープン部門",
            "2025年　WFDF世界ビーチアルティメット選手権大会 ミックス部門"],
        playerImage: "images/players/deep/player_64_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_64_thumb1.jpg",
            "images/players/deep/player_64_thumb2.jpg",
            "images/players/deep/player_64_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "大学5年目" },
            { q: "ニックネーム", a: "よせし" },
            { q: "MBTI", a: "ISTP" },
            { q: "得意なプレー", a: "サイドシュート" },
            { q: "試合前ルーティン", a: "特になし" },
            { q: "好きな食べ物", a: "メキシコ料理" },
            { q: "好きな曲", a: "リリック / TOKIO" },
            { q: "趣味", a: "麻雀" },
            { q: "もしも生まれ変わったら何になりたい", a: "アメリカの農家、牧場" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "Nomadic Tribeをよろしくお願い申し上げます。" }
        ]
    },
    {
        id: 67,
        name: "Riley Wood",
        nameEn: "ライリー ウッド",
        number: 67,
        position: "DEEP",
        role: "",
        bio: "身長：181cm　/　体重：78kg　/　生年月日：1999/07/26　/　出身大学：Deakin University ",
        representativeCareer: [],
        playerImage: "images/players/deep/player_67_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_67_thumb1.jpg",
            "images/players/deep/player_67_thumb2.jpg",
            "images/players/deep/player_67_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "英語の先生" },
            { q: "ニックネーム", a: "Riz" },
            { q: "MBTI", a: "INFJ" },
            { q: "得意なプレー", a: " Drinking water" },
            { q: "試合前ルーティン", a: "No eating" },
            { q: "好きな食べ物", a: "キムチ" },
            { q: "好きな曲", a: "Sleep / Godspeed you black emperor " },
            { q: "趣味", a: "Bikepacking" },
            { q: "もしも生まれ変わったら何になりたい", a: "キノコ" },
            { q: "インスタグラムアカウント", a: "@Shrexbox360" },
            { q: "ひとことコメント", a: "Fuck Clankers" }
        ]
    },
    {
        id: 87,
        name: "村上 吏旺",
        nameEn: "Rio Murakami",
        number: 87,
        position: "DEEP",
        role: "",
        bio: "身長：173cm　/　体重：60kg　/　生年月日：1998/06/26　/　出身大学：慶応義塾大学",
        representativeCareer: ["WFDF2024アジア・オセアニアビーチアルティメット選手権大会　オープン部門"],
        playerImage: "images/players/deep/player_87_thumb1.jpg",
        qnaImages: [
            "images/players/deep/player_87_thumb1.jpg",
            "images/players/deep/player_87_thumb2.jpg",
            "images/players/deep/player_87_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "ちょげ" },
            { q: "MBTI", a: "ISFP" },
            { q: "得意なプレー", a: "走" },
            { q: "試合前ルーティン", a: "試合前用のプレイリストを聞く" },
            { q: "好きな食べ物", a: "パクチー/ピザ/パクチー/ハンバーガー/パクチー" },
            { q: "好きな曲", a: "SHEESH / These \r\n Days / All Too Well(10minute version)" },
            { q: "趣味", a: "映画鑑賞　KPOP" },
            { q: "もしも生まれ変わったら何になりたい", a: "猫" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "がんばります。" }
        ]
    },
    // {
    //     id: 88,
    //     name: "高橋 翼",
    //     nameEn: "Tsubasa Takahashi",
    //     number: 88,
    //     position: "DEEP",
    //     role: "",
    //     bio: "身長：189cm　/　体重：86kg　/　生年月日：1999/1/1　/　出身大学：早稲田大学",
    //     representativeCareer: [],
    //     playerImage: "images/players/deep/player_88_thumb1.jpg",
    //     qnaImages: [
    //         "images/players/deep/player_88_thumb1.jpg",
    //         "images/players/deep/player_88_thumb2.jpg",
    //         "images/players/deep/player_88_thumb3.jpg"
    //     ],
    //     qna: [
    //         { q: "職業", a: "ー" },
    //         { q: "ニックネーム", a: "ー" },
    //         { q: "MBTI", a: "ー" },
    //         { q: "得意なプレー", a: "ー" },
    //         { q: "試合前ルーティン", a: "ー" },
    //         { q: "好きな食べ物", a: "ー" },
    //         { q: "好きな曲", a: "ー" },
    //         { q: "趣味", a: "ー" },
    //         { q: "もしも生まれ変わったら何になりたい", a: "ー" },
    //         { q: "インスタグラムアカウント", a: "ー" },
    //         { q: "ひとことコメント", a: "ー" }
    //     ]
    // }
];

