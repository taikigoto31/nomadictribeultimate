// ============================================
// 試合スケジュールデータ
// ============================================
// 各月の試合データを簡単に編集できます

const scheduleData = {
    2025: {
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
            //     result: "win" // "win", "loss", "draw", または試合前の場合は ""
            // }
        ],
        2: [
            {
                id: 1,
                date: "02.15",
                weekday: "SAT",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs NO SIDE",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "21-1",
                result: "win"
            },
            {
                id: 2,
                date: "02.15",
                weekday: "SAT",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs STILTS",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "16-1",
                result: "win"
            },
            {
                id: 3,
                date: "02.15",
                weekday: "SAT",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs 信州ルーツ",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "15-6",
                result: "win"
            },
            {
                id: 4,
                date: "02.16",
                weekday: "SUN",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs BOMBERS",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "14-3",
                result: "win"
            },
            {
                id: 5,
                date: "02.16",
                weekday: "SUN",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs BuzzBullets",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "8-9",
                result: "loss"
            },
            {
                id: 6,
                date: "02.16",
                weekday: "SUN",
                tournament: "2025 ULTIMATE 甲州オープン IN 山梨",
                tournamentUrl: "https://score.clubjr.com/scview/438?lang=jp",
                youtubeUrl: "",
                opponent: "vs TRIGGER",
                venue: "山梨県中巨摩郡昭和町／押原公園",
                score: "11-12",
                result: "loss"
            }
        ],
        3: [
            {
                id: 7,
                date: "03.02",
                weekday: "SUN",
                tournament: "NomadicTribe Cup",
                tournamentUrl: "https://www.ovniultimate.com/2025/01/29/nomadic-tribe-cup/",
                youtubeUrl: "",
                opponent: "vs 日本体育大学BARBARIANS",
                venue: "鬼怒緑地公園 (茨城県筑西市伊佐山)",
                score: "11-8",
                result: "win"
            },
            {
                id: 8,
                date: "03.02",
                weekday: "SUN",
                tournament: "NomadicTribe Cup",
                tournamentUrl: "https://www.ovniultimate.com/2025/01/29/nomadic-tribe-cup/",
                youtubeUrl: "",
                opponent: "vs Loquitos",
                venue: "鬼怒緑地公園 (茨城県筑西市伊佐山)",
                score: "11-6",
                result: "win"
            },
            {
                id: 9,
                date: "03.02",
                weekday: "SUN",
                tournament: "NomadicTribe Cup",
                tournamentUrl: "https://www.ovniultimate.com/2025/01/29/nomadic-tribe-cup/",
                youtubeUrl: "",
                opponent: "vs 文化シヤッター バズバレッツ",
                venue: "鬼怒緑地公園 (茨城県筑西市伊佐山)",
                score: "15-10",
                result: "win"
            },
            {
                id: 10,
                date: "03.15",
                weekday: "SAT",
                tournament: "2025 CLUB Jr ULTIMATE DREAM CUP",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15665?lang=jp",
                youtubeUrl: "",
                opponent: "vs 関西学院大学ARROWS",
                venue: "静岡県富士市／富士川緑地公園",
                score: "15-4",
                result: "win"
            },
            {
                id: 11,
                date: "03.15",
                weekday: "SAT",
                tournament: "2025 CLUB Jr ULTIMATE DREAM CUP",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15665?lang=jp",
                youtubeUrl: "",
                opponent: "vs 静岡大学GLANZ",
                venue: "静岡県富士市／富士川緑地公園",
                score: "15-8",
                result: "win"
            },
            {
                id: 12,
                date: "03.16",
                weekday: "SUN",
                tournament: "2025 CLUB Jr ULTIMATE DREAM CUP",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15665?lang=jp",
                youtubeUrl: "",
                opponent: "vs Bulldogs",
                venue: "静岡県富士市／富士川緑地公園",
                score: "8-5",
                result: "win"
            }
        ],
        4: [
            {
                id: 13,
                date: "04.12",
                weekday: "SAT",
                tournament: "2025 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "vs GONA",
                venue: "大阪府堺市／J-GREEN堺",
                score: "13-8",
                result: "win"
            },
            {
                id: 14,
                date: "04.12",
                weekday: "SAT",
                tournament: "2025 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "vs 國學院大學TRIUMPH",
                venue: "大阪府堺市／J-GREEN堺",
                score: "13-8",
                result: "win"
            },
            {
                id: 15,
                date: "04.13",
                weekday: "SUN",
                tournament: "2025 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "vs 大阪スピリッツ",
                venue: "大阪府堺市／J-GREEN堺",
                score: "10-9",
                result: "win"
            },
            {
                id: 16,
                date: "04.13",
                weekday: "SUN",
                tournament: "2025 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "vs BuzzBullets",
                venue: "大阪府堺市／J-GREEN堺",
                score: "10-8",
                result: "win"
            },
            {
                id: 17,
                date: "04.13",
                weekday: "SUN",
                tournament: "2025 CLUB JUNIOR INVITATIONAL ULTIMATE TOURNAMENT",
                tournamentUrl: "https://score.clubjr.com/pscore/scv_team/open/15713?lang=jp",
                youtubeUrl: "",
                opponent: "vs Bulldogs",
                venue: "大阪府堺市／J-GREEN堺",
                score: "10-5",
                result: "win"
            }
        ],
        5: [
            {
                id: 18,
                date: "05.17",
                weekday: "SAT",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "vs 大阪スピリッツ",
                venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
                score: "7-10",
                result: "loss"
            },
            {
                id: 19,
                date: "05.17",
                weekday: "SAT",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "vs 文化シヤッターバズバレッツ",
                venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
                score: "11-8",
                result: "win"
            },
            {
                id: 20,
                date: "05.18",
                weekday: "SUN",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "vs Technicolor",
                venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
                score: "13-5",
                result: "win"
            },
            {
                id: 21,
                date: "05.18",
                weekday: "SUN",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会　選抜予選",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "vs Bulldogs",
                venue: "静岡県御殿場市 時之栖スポーツセンター（うさぎ島グラウンド）",
                score: "13-10",
                result: "win"
            }
        ],
        6: [
        ],
        7: [
            {
                id: 22,
                date: "07.25",
                weekday: "FRI",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs Outsiterz",
                venue: "Amsterdam",
                score: "15-9",
                result: "win"
            },
            {
                id: 23,
                date: "07.25",
                weekday: "FRI",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs XVI Ultimate",
                venue: "Amsterdam",
                score: "15-5",
                result: "win"
            },
            {
                id: 24,
                date: "07.25",
                weekday: "FRI",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs Saltimbanque",
                venue: "Amsterdam",
                score: "15-13",
                result: "win"
            },
            {
                id: 25,
                date: "07.26",
                weekday: "SAT",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs Grut",
                venue: "Amsterdam",
                score: "13-9",
                result: "win"
            },
            {
                id: 26,
                date: "07.26",
                weekday: "SAT",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs UFO",
                venue: "Amsterdam",
                score: "15-5",
                result: "win"
            },
            {
                id: 27,
                date: "07.26",
                weekday: "SAT",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs Comunidad el Oso",
                venue: "Amsterdam",
                score: "14-12",
                result: "win"
            },
            {
                id: 28,
                date: "07.27",
                weekday: "SUN",
                tournament: "Windmill",
                tournamentUrl: "https://www.windmilltournament.com/year/2025",
                youtubeUrl: "",
                opponent: "vs Grut",
                venue: "Amsterdam",
                score: "8-15",
                result: "loss"
            }
        ],
        8: [
        ],
        9: [
            {
                id: 29,
                date: "09.03",
                weekday: "WED",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Philippines",
                venue: "茨城県神栖市",
                score: "15-4",
                result: "win"
            },
            {
                id: 30,
                date: "09.04",
                weekday: "THU",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Hong Kong, China",
                venue: "茨城県神栖市",
                score: "15-2",
                result: "win"
            },
            {
                id: 31,
                date: "09.05",
                weekday: "FRI",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Twig",
                venue: "茨城県神栖市",
                score: "15-4",
                result: "win"
            },
            {
                id: 32,
                date: "09.06",
                weekday: "SAT",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Sunder",
                venue: "茨城県神栖市",
                score: "15-14",
                result: "win"
            },
            {
                id: 33,
                date: "09.06",
                weekday: "SAT",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Gaja",
                venue: "茨城県神栖市",
                score: "15-7",
                result: "win"
            },
            {
                id: 34,
                date: "09.07",
                weekday: "SUN",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "",
                opponent: "vs Rascals",
                venue: "茨城県神栖市",
                score: "15-7",
                result: "win"
            },
            {
                id: 35,
                date: "09.07",
                weekday: "SUN",
                tournament: "WFDF2025アジア・オセアニアアルティメット選手権大会",
                tournamentUrl: "https://results.wfdf.sport/aouc/team/open/nomadic-tribe-18",
                youtubeUrl: "https://www.youtube.com/live/dPS72bu8P2Y?si=dkjUIa93qKpC-X1B",
                opponent: "vs Buzz Bullets",
                venue: "茨城県神栖市",
                score: "15-9",
                result: "win"
            }
        ],
        10: [
            {
                id: 36,
                date: "10.11",
                weekday: "SAT",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 1回戦",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "https://www.youtube.com/live/9WDac3VSFGM?si=Pmnj2Z6GRVld9BGp&t=7338",
                opponent: "vs Bustar",
                venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
                score: "15-9",
                result: "win"
            },
            {
                id: 37,
                date: "10.11",
                weekday: "SAT",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 2回戦",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "",
                opponent: "vs CLOWN",
                venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
                score: "15-5",
                result: "win"
            },
            {
                id: 38,
                date: "10.12",
                weekday: "SUN",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 準決勝",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "https://www.youtube.com/live/qrZkI-q7kow?si=RgVKaTrTy6HU3pJ6&t=6565",
                opponent: "vs GONA",
                venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
                score: "15-11",
                result: "win"
            },
            {
                id: 39,
                date: "10.12",
                weekday: "SUN",
                tournament: "文部科学大臣杯第50回全日本アルティメット選手権大会 決勝",
                tournamentUrl: "https://www.jfda.or.jp/2025/03/12/2025alljapan-ultimate-main/",
                youtubeUrl: "https://www.youtube.com/live/qrZkI-q7kow?si=jVJdsEBrtQFLktud&t=19793",
                opponent: "vs 大阪スピリッツ",
                venue: "ナショナルトレーニングセンターＪヴィレッジ (福島県楢葉町)",
                score: "15-12",
                result: "win"
            }
        ],
        11: [
            // 11月の試合データ
        ],
        12: [
            // 12月の試合データ
        ]
    },
    2026: {
        1: [
            // 1月の試合データ
        ],
        2: [
            // 2月の試合データ
        ],
        3: [
            // 3月の試合データ
        ],
        4: [
            // 4月の試合データ
        ],
        5: [
            // 5月の試合データ
        ],
        6: [
            // 6月の試合データ
        ],
        7: [
            // 7月の試合データ
        ],
        8: [
            // 8月の試合データ
        ],
        9: [
            // 9月の試合データ
        ],
        10: [
            // 10月の試合データ
        ],
        11: [
            // 11月の試合データ
        ],
        12: [
            // 12月の試合データ
        ]
    }
};

