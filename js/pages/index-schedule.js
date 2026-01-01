// ============================================
// トップページの試合スケジュール表示
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (typeof scheduleData === 'undefined') {
        console.error("試合データが見つかりません");
        return;
    }

    // 直近4試合を取得して表示
    displayRecentMatches();

    /**
     * 直近4試合を表示
     */
    function displayRecentMatches() {
        const matchesList = document.getElementById('recent-matches-list');
        if (!matchesList) {
            return;
        }

        // 全試合データを取得してソート
        const allMatches = getAllMatches();
        
        // ID順でソート（降順：大きいIDが先、新しい試合が上）
        allMatches.sort((a, b) => {
            // idがある場合はidでソート、ない場合は年、月、日でソート
            if (a.id !== undefined && b.id !== undefined) {
                return b.id - a.id;
            }
            // idがない場合は年、月、日でソート（新しい順）
            if (a.year !== b.year) {
                return b.year - a.year; // 新しい年が先
            }
            if (a.month !== b.month) {
                return b.month - a.month; // 新しい月が先
            }
            return compareDates(b.date, a.date);
        });

        // 直近4試合を取得（試合結果がある試合のみ、日付が新しい順）
        const recentMatches = allMatches
            .filter(match => match.score && match.result) // 試合結果がある試合のみ
            .slice(0, 4);

        // 試合がない場合
        if (recentMatches.length === 0) {
            matchesList.innerHTML = '<li><span class="details">試合結果はありません</span></li>';
            return;
        }

        // 試合リストを表示
        matchesList.innerHTML = '';
        recentMatches.forEach(match => {
            const matchItem = createMatchListItem(match);
            matchesList.appendChild(matchItem);
        });
    }

    /**
     * 全試合データを取得
     * @returns {Array} 全試合データの配列
     */
    function getAllMatches() {
        const allMatches = [];
        const currentYear = new Date().getFullYear();

        // 利用可能な全ての年のデータを取得（現在の年から過去に遡る）
        // まず利用可能な年を取得
        const availableYears = [];
        for (const year in scheduleData) {
            if (scheduleData.hasOwnProperty(year)) {
                availableYears.push(parseInt(year, 10));
            }
        }
        // 新しい年から古い年の順にソート
        availableYears.sort((a, b) => b - a);
        
        // 各年のデータを取得
        availableYears.forEach(year => {
            if (scheduleData[year]) {
                for (let month = 1; month <= 12; month++) {
                    if (scheduleData[year][month] && scheduleData[year][month].length > 0) {
                        scheduleData[year][month].forEach(match => {
                            allMatches.push({
                                ...match,
                                year: year,
                                month: month
                            });
                        });
                    }
                }
            }
        });

        return allMatches;
    }

    /**
     * 日付を比較（MM.DD形式）
     * @param {string} date1 - 日付1（MM.DD形式）
     * @param {string} date2 - 日付2（MM.DD形式）
     * @returns {number} 比較結果（-1, 0, 1）
     */
    function compareDates(date1, date2) {
        const [month1, day1] = date1.split('.').map(Number);
        const [month2, day2] = date2.split('.').map(Number);
        
        if (month1 !== month2) {
            return month1 - month2;
        }
        return day1 - day2;
    }

    /**
     * 試合リスト項目のHTML要素を作成
     * @param {Object} match - 試合データ
     * @returns {HTMLElement} 試合項目の要素
     */
    function createMatchListItem(match) {
        const li = document.createElement('li');
        
        // 結果テキストとクラス
        const resultText = getResultText(match.result);
        const resultClass = match.result;
        
        // 大会名の表示（リンク付き）
        let tournamentHTML = '';
        if (match.tournament) {
            const tournamentText = match.tournament;
            
            if (match.tournamentUrl) {
                tournamentHTML = `<span class="schedule-tournament"><a href="${match.tournamentUrl}" target="_blank" rel="noopener noreferrer" class="tournament-link">${tournamentText}</a></span>`;
            } else {
                tournamentHTML = `<span class="schedule-tournament">${tournamentText}</span>`;
            }
        }

        // YouTubeマーク
        const youtubeIcon = match.youtubeUrl ? `<a href="${match.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link" title="YouTube配信"><i class="fab fa-youtube youtube-icon"></i></a>` : '';
        
        li.innerHTML = `
            <div class="schedule-date">
                <span class="day">${match.date}</span>
                <span class="weekday">${match.weekday}</span>
            </div>
            <div class="schedule-info">
                ${tournamentHTML}
                <span class="schedule-opponent">${match.opponent}</span>
            </div>
            <div class="schedule-result">
                ${youtubeIcon}
                <span class="schedule-score">${match.score}</span>
                <span class="result-tag ${resultClass}">${resultText}</span>
            </div>
        `;

        return li;
    }

    /**
     * 結果テキストを取得
     * @param {string} result - 結果（"win", "loss", "draw"）
     * @returns {string} 結果テキスト
     */
    function getResultText(result) {
        const resultMap = {
            'win': 'WIN',
            'loss': 'LOSS',
            'draw': 'DRAW'
        };
        return resultMap[result] || '';
    }
});

