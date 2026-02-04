// ============================================
// 試合スケジュールデータ
// ============================================
// 各月の試合データを簡単に編集できます
// 既存のデータがあれば結合する
var scheduleData = (typeof window !== 'undefined' && window.scheduleData) ? window.scheduleData : {};
scheduleData["2026"] = {
        1: [
            // 1月の試合データ
            // 例：
            // {
            //     id: 1, // 試合ID（数値、大きいほど新しい試合。降順で管理）
            //     date: "01.15",
            //     weekday: "WED",
            //     type: "home", // "home" または "away"
            //     tournament: "大会名", // 大会名（任意）
            //     tournamentUrl: "https://example.com", // 大会ページのURL（任意）
            //     youtubeUrl: "https://youtube.com/...", // YouTube配信のURL（任意）
            //     opponent: "vs TEAM NAME",
            //     venue: "会場名",
            //     score: "14-4", // 試合前の場合は空文字列 ""
            //     result: "" // "", "loss", "draw", または試合前の場合は ""
            // }
        ],
        2: [
            {
                id: 1,
                date: "02.14",
                weekday: "SAT",
                tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
                youtubeUrl: "",
                opponent: "",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "",
                result: ""
            },
            // {
            //     id: 2,
            //     date: "02.14",
            //     weekday: "SAT",
            //     tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
            //     tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "山梨県中巨摩郡昭和町／押原公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 3,
            //     date: "02.14",
            //     weekday: "SAT",
            //     tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
            //     tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "山梨県中巨摩郡昭和町／押原公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 4,
            //     date: "02.15",
            //     weekday: "SUN",
            //     tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
            //     tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "山梨県中巨摩郡昭和町／押原公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 5,
            //     date: "02.15",
            //     weekday: "SUN",
            //     tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
            //     tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "山梨県中巨摩郡昭和町／押原公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 6,
            //     date: "02.15",
            //     weekday: "SUN",
            //     tournament: "2026 ULTIMATE 甲州オープン IN 山梨",
            //     tournamentUrl: "http://www.clubjr.com/event_2026koshu.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "山梨県中巨摩郡昭和町／押原公園",
            //     score: "",
            //     result: ""
            // }
        ],
        3: [
            {
                id: 7,
                date: "02.28",
                weekday: "SAT",
                tournament: "NomadicTribe Cup",
                tournamentUrl: "https://www.ovniultimate.com/2026/01/20/nomacup2026-feb/",
                youtubeUrl: "",
                opponent: "",
                venue: "鬼怒緑地公園 (茨城県筑西市伊佐山)",
                score: "",
                result: ""
            // },
            // {
            //     id: 8,
            //     date: "02.28",
            //     weekday: "SAT",
            //     tournament: "NomadicTribe Cup",
            //     tournamentUrl: "https://www.ovniultimate.com/2026/01/20/nomacup2026-feb/",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "鬼怒緑地公園 (茨城県筑西市伊佐山)",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 9,
            //     date: "02.28",
            //     weekday: "SAT",
            //     tournament: "NomadicTribe Cup",
            //     tournamentUrl: "https://www.ovniultimate.com/2026/01/20/nomacup2026-feb/",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 10,
            //     date: "03.07",
            //     weekday: "SAT",
            //     tournament: "2026 CLUB Jr ULTIMATE DREAM CUP",
            //     tournamentUrl: "http://www.clubjr.com/event_2026dreamcup_jp.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "静岡県富士市／富士川緑地公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 11,
            //     date: "03.07",
            //     weekday: "SAT",
            //     tournament: "2026 CLUB Jr ULTIMATE DREAM CUP",
            //     tournamentUrl: "http://www.clubjr.com/event_2026dreamcup_jp.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "静岡県富士市／富士川緑地公園",
            //     score: "",
            //     result: ""
            // },
            // {
            //     id: 12,
            //     date: "03.08",
            //     weekday: "SUN",
            //     tournament: "2026 CLUB Jr ULTIMATE DREAM CUP",
            //     tournamentUrl: "http://www.clubjr.com/event_2026dreamcup_jp.html",
            //     youtubeUrl: "",
            //     opponent: "",
            //     venue: "静岡県富士市／富士川緑地公園",
            //     score: "",
            //     result: ""
            }
        ],
        4: [
            {
                id: 13,
                date: "04.11",
                weekday: "SAT",
                tournament: "2026 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                // tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "",
                venue: "大阪府堺市／J-GREEN堺",
                score: "",
                result: ""
            },
            // {
            //     id: 14,
            //     date: "04.12",
            //     weekday: "SAT",
            //     tournament: "2026 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
            //     tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
            //     youtubeUrl: "",
            //     opponent: "vs 國學院大學TRIUMPH",
            //     venue: "大阪府堺市／J-GREEN堺",
            //     score: "13-8",
            //     result: ""
            // },
            // {
            //     id: 15,
            //     date: "04.13",
            //     weekday: "SUN",
            //     tournament: "2026 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
            //     tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
            //     youtubeUrl: "",
            //     opponent: "vs 大阪スピリッツ",
            //     venue: "大阪府堺市／J-GREEN堺",
            //     score: "10-9",
            //     result: ""
            // },
            // {
            //     id: 16,
            //     date: "04.13",
            //     weekday: "SUN",
            //     tournament: "2026 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
            //     tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
            //     youtubeUrl: "",
            //     opponent: "vs BuzzBullets",
            //     venue: "大阪府堺市／J-GREEN堺",
            //     score: "10-8",
            //     result: ""
            // },
            // {
            //     id: 17,
            //     date: "04.13",
            //     weekday: "SUN",
            //     tournament: "2026 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
            //     tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
            //     youtubeUrl: "",
            //     opponent: "vs Bulldogs",
            //     venue: "大阪府堺市／J-GREEN堺",
            //     score: "10-5",
            //     result: ""
            // }
        ],
        5: [
            {
                id: 18,
                date: "05.01",
                weekday: "FRI",
                tournament: "Tom's Tourney 2026",
                tournamentUrl: "https://www.tomstourney.be/",
                youtubeUrl: "",
                opponent: "",
                venue: "Bruges, Belgium",
                score: "",
                result: ""
            },
            {
                id: 18,
                date: "05.16",
                weekday: "SAT",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
                // tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "",
                venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
                score: "",
                result: ""
            },
            // {
            //     id: 19,
            //     date: "05.17",
            //     weekday: "SAT",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "",
            //     opponent: "vs 文化シヤッターバズバレッツ",
            //     venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
            //     score: "11-8",
            //     result: ""
            // },
            // {
            //     id: 20,
            //     date: "05.18",
            //     weekday: "SUN",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "",
            //     opponent: "vs Technicolor",
            //     venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
            //     score: "13-5",
            //     result: ""
            // },
            // {
            //     id: 21,
            //     date: "05.18",
            //     weekday: "SUN",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "",
            //     opponent: "vs Bulldogs",
            //     venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
            //     score: "13-10",
            //     result: ""
            // }
        ],
        6: [
        ],
        7: [
            // {
            //     id: 22,
            //     date: "07.25",
            //     weekday: "FRI",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs Outsiterz",
            //     venue: "Amsterdam",
            //     score: "15-9",
            //     result: ""
            // },
            // {
            //     id: 23,
            //     date: "07.25",
            //     weekday: "FRI",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs XVI Ultimate",
            //     venue: "Amsterdam",
            //     score: "15-5",
            //     result: ""
            // },
            // {
            //     id: 24,
            //     date: "07.25",
            //     weekday: "FRI",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs Saltimbanque",
            //     venue: "Amsterdam",
            //     score: "15-13",
            //     result: ""
            // },
            // {
            //     id: 25,
            //     date: "07.26",
            //     weekday: "SAT",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs Grut",
            //     venue: "Amsterdam",
            //     score: "13-9",
            //     result: ""
            // },
            // {
            //     id: 26,
            //     date: "07.26",
            //     weekday: "SAT",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs UFO",
            //     venue: "Amsterdam",
            //     score: "15-5",
            //     result: ""
            // },
            // {
            //     id: 27,
            //     date: "07.26",
            //     weekday: "SAT",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs Comunidad el Oso",
            //     venue: "Amsterdam",
            //     score: "14-12",
            //     result: ""
            // },
            // {
            //     id: 28,
            //     date: "07.27",
            //     weekday: "SUN",
            //     tournament: "dmill",
            //     tournamentUrl: "https://www.dmilltournament.com/year/2026",
            //     youtubeUrl: "",
            //     opponent: "vs Grut",
            //     venue: "Amsterdam",
            //     score: "8-15",
            //     result: "loss"
            // }
        ],
        8: [
            {
                id: 27,
                date: "08.15",
                weekday: "SAT",
                tournament: "WUCC2026",
                tournamentUrl: "",
                youtubeUrl: "",
                opponent: "",
                venue: "Limerick, Ireland",
                score: "",
                result: ""
            },
        ],
        9: [
            // {
            //     id: 29,
            //     date: "09.03",
            //     weekday: "WED",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Philippines",
            //     venue: "茨城県神栖市",
            //     score: "15-4",
            //     result: ""
            // },
            // {
            //     id: 30,
            //     date: "09.04",
            //     weekday: "THU",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Hong Kong, China",
            //     venue: "茨城県神栖市",
            //     score: "15-2",
            //     result: ""
            // },
            // {
            //     id: 31,
            //     date: "09.05",
            //     weekday: "FRI",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Twig",
            //     venue: "茨城県神栖市",
            //     score: "15-4",
            //     result: ""
            // },
            // {
            //     id: 32,
            //     date: "09.06",
            //     weekday: "SAT",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Sunder",
            //     venue: "茨城県神栖市",
            //     score: "15-14",
            //     result: ""
            // },
            // {
            //     id: 33,
            //     date: "09.06",
            //     weekday: "SAT",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Gaja",
            //     venue: "茨城県神栖市",
            //     score: "15-7",
            //     result: ""
            // },
            // {
            //     id: 34,
            //     date: "09.07",
            //     weekday: "SUN",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "",
            //     opponent: "vs Rascals",
            //     venue: "茨城県神栖市",
            //     score: "15-7",
            //     result: ""
            // },
            // {
            //     id: 35,
            //     date: "09.07",
            //     weekday: "SUN",
            //     tournament: "WFDF2026アジア・オセアニアアルティメット選手権大会",
            //     tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
            //     youtubeUrl: "https://www.youtube.com/live/dPS72bu8P2Y?si=dkjUIa93qKpC-X1B",
            //     opponent: "vs Buzz Bullets",
            //     venue: "茨城県神栖市",
            //     score: "15-9",
            //     result: ""
            // }
        ],
        10: [
            // {
            //     id: 36,
            //     date: "10.11",
            //     weekday: "SAT",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 1回戦",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "https://www.youtube.com/live/9WDac3VSFGM?si=Pmnj2Z6GRVld9BGp&t=7338",
            //     opponent: "vs Bustar",
            //     venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
            //     score: "15-9",
            //     result: ""
            // },
            // {
            //     id: 37,
            //     date: "10.11",
            //     weekday: "SAT",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 2回戦",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "",
            //     opponent: "vs CLOWN",
            //     venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
            //     score: "15-5",
            //     result: ""
            // },
            // {
            //     id: 38,
            //     date: "10.12",
            //     weekday: "SUN",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 準決勝",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "https://www.youtube.com/live/qrZkI-q7kow?si=RgVKaTrTy6HU3pJ6&t=6565",
            //     opponent: "vs GONA",
            //     venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
            //     score: "15-11",
            //     result: ""
            // },
            // {
            //     id: 39,
            //     date: "10.12",
            //     weekday: "SUN",
            //     tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 決勝",
            //     tournamentUrl: "https://www.jfda.or.jp/2026/03/12/2026alljapan-ultimate-main/",
            //     youtubeUrl: "https://www.youtube.com/live/qrZkI-q7kow?si=jVJdsEBrtQFLktud&t=19793",
            //     opponent: "vs 大阪スピリッツ",
            //     venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
            //     score: "15-12",
            //     result: ""
            // }
        ],
        11: [
            // 11月の試合データ
        ],
        12: [
            // 12月の試合データ
        ]
    }


// windowオブジェクトにも設定（isDataAvailable関数で検出可能にするため）
if (typeof window !== 'undefined') {
    window.scheduleData = scheduleData;
}

