// HANDLERポジションの選手データ
// 画像パス: images/players/handler/player_{id}.jpg (メイン画像)
//          images/players/handler/player_{id}_thumb1.jpg, thumb2.jpg, thumb3.jpg (Q&A用、最大3枚)
// IDは選手ごとに重複しないように設定してください (例: 1, 2, 3...)

const handlerPlayers = [
    {
        id: 7,
        name: "佐々木 慶汰",
        nameEn: "Keita Sasaki",
        number: 7,
        position: "HANDLER",
        role: "",
        bio: "身長：185cm　/　体重：78kg　/　生年月日：2001/12/03　/　出身大学：関西学院大学",
        representativeCareer: [
            "2023年 WFDF世界U24アルティメット選手権大会 オープン部門",
            "2024年 WFDFアジア•オセアニアビーチアルティメット選手権大会 ミックス部門",
            "2025年 WFDF世界ビーチアルティメット選手権大会 オープン部門"
        ],
        playerImage: "images/players/handler/player_7_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_7_thumb1.jpg",
            "images/players/handler/player_7_thumb2.jpg",
            "images/players/handler/player_7_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "金融会社" },
            { q: "ニックネーム", a: "ケイタ" },
            { q: "MBTI", a: "ENFP" },
            { q: "得意なプレー", a: "コートを広く使ったプレー" },
            { q: "試合前ルーティン", a: "スパイクは左から" },
            { q: "好きな食べ物", a: "ラーメン、お寿司" },
            { q: "好きな曲", a: "目配せ / SUPER BEAVER" },
            { q: "趣味", a: "釣り、ギター、料理" },
            { q: "もしも生まれ変わったら何になりたい", a: "猫ちゃん" },
            { q: "インスタグラムアカウント", a: "@keiter.sasaki" },
            { q: "ひとことコメント", a: "日本のアルティメットを革新します。一緒に頑張りましょう！" }
        ]
    },
    {
        id: 9,
        name: "関 拓哉",
        nameEn: "Takuya Seki",
        number: 9,
        position: "HANDLER",
        role: "",
        bio: "身長：175cm　/　体重：65kg　/　生年月日：1994/07/02　/　出身大学：慶応義塾大学",
        representativeCareer: [
            "2015年　WFDFU23アルティメット選手権大会 ミックス部門",
            "2018年　WFDFU23アルティメット選手権大会 ミックス部門",
            "2023年　AOUGCアルティメットアジア選手権大会 オープン部門",
            "2024年　WFDFアルティメット選手権大会 ミックス部門"
        ],
        playerImage: "images/players/handler/player_9_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_9_thumb1.jpg",
            "images/players/handler/player_9_thumb2.jpg",
            "images/players/handler/player_9_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "住友生命保険相互会社" },
            { q: "ニックネーム", a: "団長" },
            { q: "MBTI", a: "ENFP" },
            { q: "得意なプレー", a: "走ること" },
            { q: "試合前ルーティン", a: "お腹いっぱいにすること" },
            { q: "好きな食べ物", a: "ラーメン二郎" },
            { q: "好きな曲", a: "アポロ / ポルノグラフィティ" },
            { q: "趣味", a: "ラーメン巡り" },
            { q: "もしも生まれ変わったら何になりたい", a: "ブラックマジシャンガール" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "ノマを世界一のチームに！" }
        ]
    },
    {
        id: 13,
        name: "大久保 拓海",
        nameEn: "Takumi Okubo",
        number: 13,
        position: "HANDLER",
        role: "",
        bio: "身長：168cm　/　体重：62kg　/　生年月日：1996/04/28　/　出身大学：上智大学",
        representativeCareer: ["2019年 WFDF世界U-24アルティメット世界選手権 ミックス部門"],
        playerImage: "images/players/handler/player_13_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_13_thumb1.jpg",
            "images/players/handler/player_13_thumb2.jpg",
            "images/players/handler/player_13_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "重工メーカー" },
            { q: "ニックネーム", a: "たくみ、たっくん" },
            { q: "MBTI", a: "ENTJ" },
            { q: "得意なプレー", a: "勝負所のダイブD" },
            { q: "試合前ルーティン", a: "家の掃除、整理整頓" },
            { q: "好きな食べ物", a: "ハンバーグ、エクレア" },
            { q: "好きな曲", a: "I Ain’t Worried / OneRepublic" },
            { q: "趣味", a: "世界各国のスイーツを現地で食べること" },
            { q: "もしも生まれ変わったら何になりたい", a: "カリフォルニアのサーファーガール" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "応援よろしくお願いします！個人的にも気軽に声をかけてくれたら嬉しいです！" }
        ]
    },
    {
        id: 21,
        name: "川合 哲史",
        nameEn: "Satoshi Kawai",
        number: 21,
        position: "HANDLER",
        role: "",
        bio: "身長：173cm　/　体重：68kg　/　生年月日：2002/03/09　/　出身大学：上智大学",
        representativeCareer: ["WFDF2025世界U24アルティメット選手権大会 オープン部門",
            "WFDF2025世界ビーチアルティメット選手権大会 オープン部門"],
        playerImage: "images/players/handler/player_21_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_21_thumb1.jpg",
            "images/players/handler/player_21_thumb2.jpg",
            "images/players/handler/player_21_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "フリーター" },
            { q: "ニックネーム", a: "さとし、さとぼう" },
            { q: "MBTI", a: "INTP" },
            { q: "得意なプレー", a: "ディフェンス、走力" },
            { q: "試合前ルーティン", a: "何も意識してないです" },
            { q: "好きな食べ物", a: "白米に合うもの" },
            { q: "好きな曲", a: "愛を伝えたいだとか / あいみょん" },
            { q: "趣味", a: "読書" },
            { q: "もしも生まれ変わったら何になりたい", a: "女の子" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "若手らしく頑張ります" }
        ]
    },
    {
        id: 23,
        name: "新井 康平",
        nameEn: "Kohei Arai",
        number: 23,
        position: "HANDLER",
        role: "",
        bio: "身長：168cm　/　体重：63kg　/　生年月日：1999/11/06　/　出身大学：慶応義塾大学",
        representativeCareer: ["2023年　WFDFアジア・オセアニアアルティメット＆ガッツ選手権大会 オープン部門",
            "2024年　WFDFアジア・オセアニアビーチアルティメット選手権大会 オープン部門"],
        playerImage: "images/players/handler/player_23_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_23_thumb1.jpg",
            "images/players/handler/player_23_thumb2.jpg",
            "images/players/handler/player_23_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "エンジニア" },
            { q: "ニックネーム", a: "ぺい" },
            { q: "MBTI", a: "ENFP" },
            { q: "得意なプレー", a: "マンツーマンD＆ダッシュ" },
            { q: "試合前ルーティン", a: "脱力ストレッチ" },
            { q: "好きな食べ物", a: "チーズケーキ" },
            { q: "好きな曲", a: "らしさ / Official髭男dism" },
            { q: "趣味", a: "ChatGPTと遊ぶ" },
            { q: "もしも生まれ変わったら何になりたい", a: "深海魚" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "精一杯がんばります！NomadicTribeをよろしくお願いします！" }
        ]
    },
    {
        id: 24,
        name: "山田 和俊",
        nameEn: "Kazutoshi Yama",
        number: 24,
        position: "HANDLER",
        role: "",
        bio: "身長：180cm　/　体重：75kg　/　生年月日：1999/1/1　/　出身大学：早稲田大学",
        representativeCareer: [],
        playerImage: "images/players/handler/player_24_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_24_thumb1.jpg",
            "images/players/handler/player_24_thumb2.jpg",
            "images/players/handler/player_24_thumb3.jpg"
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
        id: 34,
        name: "萬代 翔太",
        nameEn: "Shota Mandai",
        number: 34,
        position: "HANDLER",
        role: "",
        bio: "身長：172cm　/　体重：68kg　/　生年月日：2002/06/07　/　出身大学：関西学院大学",
        representativeCareer: [ "2025年　WFDF世界ビーチアルティメット選手権大会 ミックス部門"],
        playerImage: "images/players/handler/player_34_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_34_thumb1.jpg",
            "images/players/handler/player_34_thumb2.jpg",
            "images/players/handler/player_34_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "人事システムの営業" },
            { q: "ニックネーム", a: "まんちゃん、まんでぃー、まんちゅう" },
            { q: "MBTI", a: "ESFJ" },
            { q: "得意なプレー", a: "左利きを生かしたスロー幅、バックインサイ" },
            { q: "試合前ルーティン", a: "慣れないことしない" },
            { q: "好きな食べ物", a: "親子丼" },
            { q: "好きな曲", a: "サムライハート / SPYAIR" },
            { q: "趣味", a: "アルティメット" },
            { q: "もしも生まれ変わったら何になりたい", a: "身長が180センチ越えの人" },
            { q: "インスタグラムアカウント", a: "@mandeeee_0607" },
            { q: "ひとことコメント", a: "2年目も大阪から頑張ります！" }
        ]
    },
    {
        id: 37,
        name: "陸 慶",
        nameEn: "Kei Sako",
        number: 37,
        position: "HANDLER",
        role: "",
        bio: "身長：183cm　/　体重：70kg　/　生年月日：2000/06/25　/　出身大学：早稲田大学",
        representativeCareer: ["2023年　WFDF世界U-24アルティメット選手権大会　オープン部門",
            "2024年　WFDFアジア・オセアニアビーチアルティメット選手権大会　オープン部門"],
        playerImage: "images/players/handler/player_37_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_37_thumb1.jpg",
            "images/players/handler/player_37_thumb2.jpg",
            "images/players/handler/player_37_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "サコッシュ、さこっピー" },
            { q: "MBTI", a: "ENTJ" },
            { q: "得意なプレー", a: "投げること" },
            { q: "試合前ルーティン", a: "ソンナモノナイヨ" },
            { q: "好きな食べ物", a: "まぜそば" },
            { q: "好きな曲", a: "doppelgänger / Creepy Nuts" },
            { q: "趣味", a: "サウナ" },
            { q: "もしも生まれ変わったら何になりたい", a: "ボディビルダー" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "まだまだやるよ〜" }
        ]
    },
    {
        id: 55,
        name: "田中 拓斗",
        nameEn: "Hiroto Tanaka",
        number: 55,
        position: "HANDLER",
        role: "",
        bio: "身長：173cm　/　体重：63kg　/　生年月日：2001/07/08　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/handler/player_55_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_55_thumb1.jpg",
            "images/players/handler/player_55_thumb2.jpg",
            "images/players/handler/player_55_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "会社員" },
            { q: "ニックネーム", a: "田中" },
            { q: "MBTI", a: "ESTJ" },
            { q: "得意なプレー", a: "サイドスロー" },
            { q: "試合前ルーティン", a: "戦術確認" },
            { q: "好きな食べ物", a: "寿司" },
            { q: "好きな曲", a: "アイデンティティ / サカナクション" },
            { q: "趣味", a: "フットサル" },
            { q: "もしも生まれ変わったら何になりたい", a: "センスのある人" },
            { q: "インスタグラムアカウント", a: "@no_takuto0708" },
            { q: "ひとことコメント", a: "Nomadic Tribeの応援お願いします！" }
        ]
    },
    {
        id: 80,
        name: "浜島 哲史",
        nameEn: "Tetsuhumi Hame",
        number: 80,
        position: "HANDLER",
        role: "",
        bio: "身長：179cm　/　体重：75kg　/　生年月日：1998/12/09　/　出身大学：慶応義塾大学",
        representativeCareer: ["2016年　世界ジュニア選手権大会　オープン部門"],
        playerImage: "images/players/handler/player_80_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_80_thumb1.jpg",
            "images/players/handler/player_80_thumb2.jpg",
            "images/players/handler/player_80_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "SE" },
            { q: "ニックネーム", a: "はま" },
            { q: "MBTI", a: "INTP" },
            { q: "得意なプレー", a: "シュート" },
            { q: "試合前ルーティン", a: "ストレッチ" },
            { q: "好きな食べ物", a: "ポテト" },
            { q: "好きな曲", a: "何なんw / 藤井風" },
            { q: "趣味", a: "ドライブ" },
            { q: "もしも生まれ変わったら何になりたい", a: "人間" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "頑張ります！" }
        ]
    },
    {
        id: 83,
        name: "伊藤 広斗",
        nameEn: "Hiroto Ito",
        number: 83,
        position: "HANDLER",
        role: "",
        bio: "身長：171cm　/　体重：55kg　/　生年月日：2000/10/25　/　出身大学：同志社大学",
        representativeCareer: [],
        playerImage: "images/players/handler/player_83_thumb1.jpg",
        qnaImages: [
            "images/players/handler/player_83_thumb1.jpg",
            "images/players/handler/player_83_thumb2.jpg",
            "images/players/handler/player_83_thumb3.jpg"
        ],
        qna: [
            { q: "職業", a: "SE" },
            { q: "ニックネーム", a: "イトウ" },
            { q: "MBTI", a: "INFJ" },
            { q: "得意なプレー", a: "DF" },
            { q: "試合前ルーティン", a: "そんなものなくても頑張れるタイプです" },
            { q: "好きな食べ物", a: "中華料理" },
            { q: "好きな曲", a: "セントレイ / サカナクション" },
            { q: "趣味", a: "カップ麺食べ比べ" },
            { q: "もしも生まれ変わったら何になりたい", a: "鳥" },
            { q: "インスタグラムアカウント", a: "" },
            { q: "ひとことコメント", a: "敵でも味方でも仲良くしてください" }
        ]
    }
];

