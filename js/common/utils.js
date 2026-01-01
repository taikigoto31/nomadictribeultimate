// ============================================
// 共通ユーティリティ関数
// ============================================

/**
 * 定数定義
 */
const CONSTANTS = {
    FALLBACK_LOGO: 'images/NomadicTribeLogo.png',
    PLACEHOLDER_IMAGE_MAIN: 'https://placehold.co/800x600/cccccc/666666?text=No+Image',
    PLACEHOLDER_IMAGE_THUMB: 'https://placehold.co/100x75/cccccc/666666?text=No+Image',
    INSTAGRAM_BASE_URL: 'https://www.instagram.com/',
    INSTAGRAM_QUESTION_KEY: 'インスタグラムアカウント',
    EMPTY_ANSWER: 'ー'
};

/**
 * データの存在確認
 * @param {string} dataName - データ名（例: 'newsData', 'scheduleData'）
 * @returns {boolean} データが存在する場合true
 */
function isDataAvailable(dataName) {
    // windowオブジェクトをチェック
    // データファイルでwindowオブジェクトに明示的に設定されているため
    return typeof window !== 'undefined' && typeof window[dataName] !== 'undefined';
}

/**
 * ニュースアイテムのHTML要素を作成
 * @param {Object} news - お知らせデータ
 * @param {Object} options - オプション
 * @param {string} options.baseUrl - ベースURL（デフォルト: 'news-detail.html'）
 * @returns {HTMLElement} お知らせ項目の要素
 */
function createNewsItemElement(news, options = {}) {
    const {
        baseUrl = 'news-detail.html',
        showCategory = true
    } = options;

    const li = document.createElement('li');
    li.className = 'news-item';
    
    // 画像のパス（存在しない場合はロゴを使用）
    const imageSrc = news.image && news.image.trim() !== '' 
        ? news.image 
        : CONSTANTS.FALLBACK_LOGO;
    
    // リンクの決定：news.linkがあればそれを使用、なければ詳細ページに遷移
    let newsLink = `${baseUrl}?id=${news.id}`;
    if (news.link && news.link.trim() !== '') {
        newsLink = news.link;
    }
    
    // タイトルとカテゴリを取得
    const title = news.title || '';
    const category = news.category || '';
    
    // リンクで囲む
    const categoryHTML = showCategory && category 
        ? `<span class="news-category">${category}</span>` 
        : '';
    
    const contentHTML = `
        <div class="news-image">
            <img src="${imageSrc}" alt="${title}" onerror="this.src='${CONSTANTS.FALLBACK_LOGO}'; this.onerror=null;">
        </div>
        <div class="news-content">
            <div class="news-header">
                <span class="news-date">${news.date || ''}</span>
                ${categoryHTML}
            </div>
            <p class="news-description">${title}</p>
        </div>
    `;
    
    li.innerHTML = `<a href="${newsLink}" class="news-link">${contentHTML}</a>`;

    return li;
}

/**
 * 試合アイテムのHTML要素を作成
 * @param {Object} match - 試合データ
 * @param {Object} options - オプション
 * @returns {HTMLElement} 試合項目の要素
 */
function createMatchItemElement(match, options = {}) {
    const {
        showWeekday = true,
        showYoutube = true
    } = options;

    const li = document.createElement('li');
    
    // 結果テキストとクラス
    const resultText = getResultText(match.result);
    const resultClass = match.result || '';
    
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
    const youtubeIcon = (showYoutube && match.youtubeUrl) 
        ? `<a href="${match.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link" title="YouTube配信"><i class="fab fa-youtube youtube-icon"></i></a>` 
        : '';
    
    const weekdayHTML = showWeekday && match.weekday
        ? `<span class="weekday">${match.weekday}</span>`
        : '';
    
    li.innerHTML = `
        <div class="schedule-date">
            <span class="day">${match.date || ''}</span>
            ${weekdayHTML}
        </div>
        <div class="schedule-info">
            ${tournamentHTML}
            <span class="schedule-opponent">${match.opponent || ''}</span>
        </div>
        <div class="schedule-result">
            ${youtubeIcon}
            <span class="schedule-score">${match.score || ''}</span>
            ${resultClass ? `<span class="result-tag ${resultClass}">${resultText}</span>` : ''}
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

/**
 * 日付を比較（MM.DD形式）
 * @param {string} date1 - 日付1（MM.DD形式）
 * @param {string} date2 - 日付2（MM.DD形式）
 * @returns {number} 比較結果（-1, 0, 1）
 */
function compareDates(date1, date2) {
    if (!date1 || !date2) return 0;
    
    const [month1, day1] = date1.split('.').map(Number);
    const [month2, day2] = date2.split('.').map(Number);
    
    if (isNaN(month1) || isNaN(day1) || isNaN(month2) || isNaN(day2)) {
        return 0;
    }
    
    if (month1 !== month2) {
        return month1 - month2;
    }
    return day1 - day2;
}

/**
 * ニュースデータをソート（ID降順）
 * @param {Array} newsArray - お知らせデータの配列
 * @returns {Array} ソートされた配列
 */
function sortNewsById(newsArray) {
    return [...newsArray].sort((a, b) => b.id - a.id);
}

/**
 * 試合データをソート（年、月、日で降順）
 * @param {Array} matchesArray - 試合データの配列
 * @returns {Array} ソートされた配列
 */
function sortMatchesByDate(matchesArray) {
    return [...matchesArray].sort((a, b) => {
        // idがある場合はidでソート
        if (a.id !== undefined && b.id !== undefined) {
            return b.id - a.id;
        }
        // idがない場合は年、月、日でソート（新しい順）
        if (a.year !== b.year) {
            return b.year - a.year;
        }
        if (a.month !== b.month) {
            return b.month - a.month;
        }
        return compareDates(b.date, a.date);
    });
}

/**
 * エラーメッセージを表示
 * @param {string} message - エラーメッセージ
 * @param {HTMLElement} container - 表示先のコンテナ要素
 */
function displayErrorMessage(message, container) {
    if (!container) return;
    container.innerHTML = `<li><span class="details">${message}</span></li>`;
}

/**
 * 空のメッセージを表示
 * @param {string} message - メッセージ
 * @param {HTMLElement} container - 表示先のコンテナ要素
 * @param {string} className - 追加するクラス名
 */
function displayEmptyMessage(message, container, className = '') {
    if (!container) return;
    const classAttr = className ? ` class="${className}"` : '';
    container.innerHTML = `<li${classAttr}><span class="news-description">${message}</span></li>`;
}

