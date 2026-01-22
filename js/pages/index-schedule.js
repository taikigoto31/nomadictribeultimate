// ============================================
// トップページの試合スケジュール表示
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (!isDataAvailable('scheduleData')) {
        console.error("試合データが見つかりません");
        return;
    }
    const scheduleData = window.scheduleData;

    // 過去2試合と今後の試合を取得して表示
    displayTopMatches();

    /**
     * 直近4試合を表示
     */
    function displayTopMatches() {
        const matchesList = document.getElementById('recent-matches-list');
        if (!matchesList) {
            return;
        }

        // 全試合データを取得して整理
        const allMatches = getAllMatches();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const pastMatches = allMatches
            .filter(match => match.score && match.result)
            .sort((a, b) => getMatchDate(b) - getMatchDate(a))
            .slice(0, 2);

        const futureMatches = allMatches
            .filter(match => isUpcomingMatch(match, today))
            .sort((a, b) => getMatchDate(a) - getMatchDate(b))
            .slice(0, 2);

        const displayMatches = [...pastMatches, ...futureMatches];

        if (displayMatches.length === 0) {
            displayErrorMessage('試合情報はありません', matchesList);
            return;
        }

        matchesList.innerHTML = '';
        displayMatches.forEach(match => {
            const matchItem = createMatchItemElement(match, {
                showWeekday: true,
                showYoutube: true
            });
            if (isUpcomingMatch(match, today)) {
                matchItem.classList.add('is-next-match');
                const infoElement = matchItem.querySelector('.schedule-info');
                if (infoElement) {
                    infoElement.insertAdjacentHTML('afterbegin', '<span class="schedule-badge next-match">NEXT MATCH</span>');
                }
            }
            matchesList.appendChild(matchItem);
        });
    }

    /**
     * 全試合データを取得
     * @returns {Array} 全試合データの配列
     */
    function getAllMatches() {
        const allMatches = [];

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
     * 試合の日付をDateに変換
     * @param {Object} match - 試合データ
     * @returns {Date}
     */
    function getMatchDate(match) {
        const dateParts = (match.date || '').split('.');
        const month = match.month || parseInt(dateParts[0] || '1', 10);
        const day = parseInt(dateParts[1] || '1', 10);
        return new Date(match.year, month - 1, day);
    }

    /**
     * 未来の試合か判定
     * @param {Object} match - 試合データ
     * @param {Date} today - 当日0時
     * @returns {boolean}
     */
    function isUpcomingMatch(match, today) {
        return (!match.score || !match.result) && getMatchDate(match) >= today;
    }

});

