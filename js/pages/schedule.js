// ============================================
// 試合スケジュールページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // データが存在するか確認
    if (!isDataAvailable('scheduleData')) {
        console.error("試合データが見つかりません");
        return;
    }

    // 最後に試合があった月を取得
    const { year, month } = getLastMatchMonth();
    let currentYear = year;
    let currentMonth = month;

    // 利用可能な年の範囲を取得
    const availableYears = getAvailableYears();

    // 初期表示
    initializeSchedule(currentYear, currentMonth);

    // 年の切り替えイベント
    const yearPrevBtn = document.getElementById('year-prev');
    const yearNextBtn = document.getElementById('year-next');
    
    if (yearPrevBtn) {
        yearPrevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchYear(currentYear - 1);
        });
    }
    
    if (yearNextBtn) {
        yearNextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            switchYear(currentYear + 1);
        });
    }

    // 月の切り替えイベント
    const monthLinks = document.querySelectorAll('#schedule-months a');
    monthLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const month = parseInt(this.getAttribute('data-month'), 10);
            switchMonth(currentYear, month);
        });
    });

    /**
     * 利用可能な年の範囲を取得
     * @returns {Array} 利用可能な年の配列
     */
    function getAvailableYears() {
        const years = [];
        for (const year in scheduleData) {
            if (scheduleData.hasOwnProperty(year)) {
                years.push(parseInt(year, 10));
            }
        }
        return years.sort((a, b) => a - b);
    }

    /**
     * 最後に試合があった月を取得
     * @returns {Object} {year: number, month: number}
     */
    function getLastMatchMonth() {
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let lastYear = currentYear;
        let lastMonth = 0;

        // 現在の年から過去に遡って、試合がある最後の月を探す
        // 2026年まで考慮する
        for (let year = currentYear + 1; year >= currentYear - 1; year--) {
            if (scheduleData[year]) {
                for (let month = 12; month >= 1; month--) {
                    if (scheduleData[year][month] && scheduleData[year][month].length > 0) {
                        lastYear = year;
                        lastMonth = month;
                        return { year: lastYear, month: lastMonth };
                    }
                }
            }
        }

        // 試合が見つからない場合は現在の月を返す
        return { year: currentYear, month: currentDate.getMonth() + 1 };
    }

    /**
     * スケジュールを初期化
     * @param {number} year - 年
     * @param {number} month - 月
     */
    function initializeSchedule(year, month) {
        // 年を表示
        const yearElement = document.getElementById('schedule-year');
        if (yearElement) {
            yearElement.textContent = year;
        }

        // 月のアクティブ状態を設定
        setActiveMonth(month);

        // 年のナビゲーションボタンの状態を更新
        updateYearNavButtons();

        // 試合リストを表示
        displaySchedule(year, month);
    }

    /**
     * 年のナビゲーションボタンの状態を更新
     */
    function updateYearNavButtons() {
        const yearPrevBtn = document.getElementById('year-prev');
        const yearNextBtn = document.getElementById('year-next');
        
        // 前年ボタンの有効/無効
        if (yearPrevBtn) {
            const prevYear = currentYear - 1;
            if (scheduleData[prevYear]) {
                yearPrevBtn.disabled = false;
                yearPrevBtn.style.opacity = '1';
                yearPrevBtn.style.cursor = 'pointer';
            } else {
                yearPrevBtn.disabled = true;
                yearPrevBtn.style.opacity = '0.5';
                yearPrevBtn.style.cursor = 'not-allowed';
            }
        }
        
        // 次年ボタンの有効/無効
        if (yearNextBtn) {
            const nextYear = currentYear + 1;
            if (scheduleData[nextYear]) {
                yearNextBtn.disabled = false;
                yearNextBtn.style.opacity = '1';
                yearNextBtn.style.cursor = 'pointer';
            } else {
                yearNextBtn.disabled = true;
                yearNextBtn.style.opacity = '0.5';
                yearNextBtn.style.cursor = 'not-allowed';
            }
        }
    }

    /**
     * 年を切り替え
     * @param {number} year - 年
     */
    function switchYear(year) {
        // 利用可能な年の範囲内かチェック
        if (!scheduleData[year]) {
            return; // データがない年は切り替え不可
        }
        
        currentYear = year;
        // 現在の年で最初に試合がある月を探す、なければ1月を表示
        let targetMonth = 1;
        for (let month = 1; month <= 12; month++) {
            if (scheduleData[year][month] && scheduleData[year][month].length > 0) {
                targetMonth = month;
                break;
            }
        }
        currentMonth = targetMonth;
        
        initializeSchedule(currentYear, currentMonth);
        updateYearNavButtons();
    }

    /**
     * 月を切り替え
     * @param {number} year - 年
     * @param {number} month - 月
     */
    function switchMonth(year, month) {
        currentMonth = month;
        setActiveMonth(month);
        displaySchedule(year, month);
    }

    /**
     * アクティブな月を設定
     * @param {number} month - 月
     */
    function setActiveMonth(month) {
        const monthLinks = document.querySelectorAll('#schedule-months a');
        monthLinks.forEach(link => {
            const linkMonth = parseInt(link.getAttribute('data-month'), 10);
            if (linkMonth === month) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * 試合リストを表示
     * @param {number} year - 年
     * @param {number} month - 月
     */
    function displaySchedule(year, month) {
        const scheduleList = document.getElementById('schedule-list');
        if (!scheduleList) {
            return;
        }

        // リストをクリア
        scheduleList.innerHTML = '';

        // 該当月の試合データを取得
        const monthData = scheduleData[year] && scheduleData[year][month] ? scheduleData[year][month] : [];

        if (monthData.length === 0) {
            scheduleList.innerHTML = '<li class="schedule-item schedule-item-empty"><p>この月の試合はありません</p></li>';
            return;
        }

        // ID順でソート（昇順：小さいIDが先、古い試合が上）
        const sortedData = [...monthData].sort((a, b) => {
            // idがある場合はidでソート、ない場合は日付でソート
            if (a.id !== undefined && b.id !== undefined) {
                return a.id - b.id;
            }
            // idがない場合は日付でソート（昇順）
            return compareDates(a.date, b.date);
        });

        // 試合データを表示
        sortedData.forEach(match => {
            const matchItem = createMatchItem(match);
            scheduleList.appendChild(matchItem);
        });
    }

    /**
     * 試合項目のHTML要素を作成（スケジュールページ用）
     * @param {Object} match - 試合データ
     * @returns {HTMLElement} 試合項目の要素
     */
    function createMatchItem(match) {
        const li = document.createElement('li');
        li.className = 'schedule-item';

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

        // 試合結果の表示（YouTubeマーク付き）
        let resultHTML = '';
        const youtubeIcon = match.youtubeUrl ? `<a href="${match.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link" title="YouTube配信"><i class="fab fa-youtube youtube-icon"></i></a>` : '';
        
        if (match.score && match.result) {
            const resultText = getResultText(match.result);
            resultHTML = `
                <div class="schedule-result">
                    ${youtubeIcon}
                    <span class="schedule-score">${match.score}</span>
                    <span class="result-tag ${match.result}">${resultText}</span>
                </div>
            `;
        } else {
            // 試合前の場合
            resultHTML = `
                <div class="schedule-result">
                    ${youtubeIcon}
                    <span class="schedule-score">-</span>
                    <span class="result-tag upcoming">UPCOMING</span>
                </div>
            `;
        }

        const venueHTML = match.venue ? `<span class="schedule-venue">${match.venue}</span>` : '';

        li.innerHTML = `
            <div class="schedule-date">
                <span class="day">${match.date || ''}</span>
                <span class="weekday">${match.weekday || ''}</span>
            </div>
            <div class="schedule-info">
                ${tournamentHTML}
                <span class="schedule-opponent">${match.opponent || ''}</span>
                ${venueHTML}
            </div>
            ${resultHTML}
        `;

        return li;
    }
});

