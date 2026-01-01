// ============================================
// トップページの試合スケジュール表示
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (!isDataAvailable('scheduleData')) {
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
        
        // 試合データをソート（新しい順）
        const sortedMatches = sortMatchesByDate(allMatches);

        // 直近4試合を取得（試合結果がある試合のみ、日付が新しい順）
        const recentMatches = sortedMatches
            .filter(match => match.score && match.result) // 試合結果がある試合のみ
            .slice(0, 4);

        // 試合がない場合
        if (recentMatches.length === 0) {
            displayErrorMessage('試合結果はありません', matchesList);
            return;
        }

        // 試合リストを表示
        matchesList.innerHTML = '';
        recentMatches.forEach(match => {
            const matchItem = createMatchItemElement(match, {
                showWeekday: true,
                showYoutube: true
            });
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

});

