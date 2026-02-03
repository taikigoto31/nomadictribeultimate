// ============================================
// 選手個人ページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // 定数は js/common/utils.js の CONSTANTS から取得
    const PLACEHOLDER_IMAGE_MAIN = typeof CONSTANTS !== 'undefined' ? CONSTANTS.PLACEHOLDER_IMAGE_MAIN : 'https://placehold.co/800x600/cccccc/666666?text=No+Image';
    const PLACEHOLDER_IMAGE_THUMB = typeof CONSTANTS !== 'undefined' ? CONSTANTS.PLACEHOLDER_IMAGE_THUMB : 'https://placehold.co/100x75/cccccc/666666?text=No+Image';
    const INSTAGRAM_BASE_URL = typeof CONSTANTS !== 'undefined' ? CONSTANTS.INSTAGRAM_BASE_URL : 'https://www.instagram.com/';
    const INSTAGRAM_QUESTION_KEY = typeof CONSTANTS !== 'undefined' ? CONSTANTS.INSTAGRAM_QUESTION_KEY : "インスタグラムアカウント";
    const EMPTY_ANSWER = typeof CONSTANTS !== 'undefined' ? CONSTANTS.EMPTY_ANSWER : "ー";

    // URLから選手IDを取得
    const playerId = getPlayerIdFromURL();
    
    // 選手データの存在確認
    if (!isPlayersDataAvailable() || !playerId) {
        handlePlayerNotFound();
        return;
    }

    // 選手データを検索
    const player = findPlayerById(playerId);
    
    if (player) {
        displayPlayerInfo(player);
    } else {
        handlePlayerNotFound();
    }

    // ============================================
    // 関数定義
    // ============================================

    /**
     * URLから選手IDを取得
     * @returns {string|null} 選手ID（文字列）またはnull
     */
    function getPlayerIdFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    /**
     * 選手データが利用可能か確認
     * @returns {boolean} 利用可能な場合true
     */
    function isPlayersDataAvailable() {
        return isDataAvailable('playersData');
    }

    /**
     * 選手IDで選手データを検索
     * @param {string} playerId - 選手ID（文字列）
     * @returns {Object|null} 選手データまたはnull
     */
    function findPlayerById(playerId) {
        const playerIdNum = parseInt(playerId, 10);
        return playersData.find(p => p.id === playerIdNum);
    }

    /**
     * 選手情報をページに表示
     * @param {Object} player - 選手データオブジェクト
     */
    function displayPlayerInfo(player) {
        updatePageTitle(player);
        updateBreadcrumb(player);
        updatePlayerHeader(player);
        updatePlayerGallery(player);
        updatePlayerBio(player);
        updateQnATable(player);
    }

    /**
     * ページタイトルを更新
     * @param {Object} player - 選手データ
     */
    function updatePageTitle(player) {
        document.title = `${player.name} - TEAM - NOMADIC TRIBE ULTIMATE`;
    }

    /**
     * パンくずリストを更新
     * @param {Object} player - 選手データ
     */
    function updateBreadcrumb(player) {
        const breadcrumbElement = document.getElementById("breadcrumb-name");
        if (breadcrumbElement) {
            breadcrumbElement.textContent = player.name;
        }
    }

    /**
     * 選手ヘッダー情報を更新
     * @param {Object} player - 選手データ
     */
    function updatePlayerHeader(player) {
        const elements = {
            "player-number": player.number ? `#${player.number}` : '',
            "player-position": player.position || '',
            "player-name": player.name || '',
            "player-name-en": player.nameEn || ''
        };

        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elements[id];
            }
        });
    }

    /**
     * 選手ギャラリー（メイン画像とサムネイル）を更新
     * @param {Object} player - 選手データ
     */
    function updatePlayerGallery(player) {
        const mainImageEl = document.getElementById("main-player-img");
        const thumbnailsEl = document.getElementById("player-thumbnails");

        if (!mainImageEl || !thumbnailsEl) {
            return;
        }

        // メイン画像を設定
        setMainImage(mainImageEl, player);

        // サムネイルを生成（実際に画像パスがあるものだけを対象にする）
        if (player.qnaImages && player.qnaImages.length > 0) {
            const validImages = player.qnaImages.filter(src => {
                return typeof src === 'string' && src.trim() !== '';
            });

            if (validImages.length > 0) {
                createThumbnails(thumbnailsEl, mainImageEl, player, validImages);
            }
        }
    }

    /**
     * メイン画像を設定
     * @param {HTMLElement} mainImageEl - メイン画像要素
     * @param {Object} player - 選手データ
     */
    function setMainImage(mainImageEl, player) {
        const imageSrc = player.playerImage || PLACEHOLDER_IMAGE_MAIN;
        mainImageEl.src = imageSrc;
        mainImageEl.alt = `${player.name} メイン写真`;
        mainImageEl.onerror = function() {
            this.src = PLACEHOLDER_IMAGE_MAIN;
            this.onerror = null;
        };
    }

    /**
     * サムネイル画像を生成
     * @param {HTMLElement} thumbnailsEl - サムネイルコンテナ要素
     * @param {HTMLElement} mainImageEl - メイン画像要素
     * @param {Object} player - 選手データ
     * @param {string[]} images - 有効な画像パス配列
     */
    function createThumbnails(thumbnailsEl, mainImageEl, player, images) {
        thumbnailsEl.innerHTML = "";

        images.forEach((imgSrc, index) => {
            const thumb = createThumbnailImage(imgSrc, player.name, index);
            
            // 最初のサムネイルをアクティブにしてメイン画像を更新
            if (index === 0) {
                thumb.classList.add("thumb-active");
                if (imgSrc) {
                    mainImageEl.src = imgSrc;
                }
            }

            // サムネイルクリックイベント
            thumb.addEventListener("click", () => {
                switchMainImage(mainImageEl, thumbnailsEl, thumb, imgSrc);
            });
            
            thumbnailsEl.appendChild(thumb);
        });
    }

    /**
     * サムネイル画像要素を作成
     * @param {string} imgSrc - 画像ソース
     * @param {string} playerName - 選手名
     * @param {number} index - インデックス
     * @returns {HTMLElement} サムネイル画像要素
     */
    function createThumbnailImage(imgSrc, playerName, index) {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.alt = `${playerName} サムネイル ${index + 1}`;
        thumb.onerror = function() {
            // 読み込みに失敗したサムネイルは非表示にする
            const parent = this.parentElement;
            if (parent) {
                parent.removeChild(this);
            } else {
                this.style.display = "none";
            }
        };
        return thumb;
    }

    /**
     * メイン画像を切り替え
     * @param {HTMLElement} mainImageEl - メイン画像要素
     * @param {HTMLElement} thumbnailsEl - サムネイルコンテナ要素
     * @param {HTMLElement} clickedThumb - クリックされたサムネイル要素
     * @param {string} imgSrc - 新しい画像ソース
     */
    function switchMainImage(mainImageEl, thumbnailsEl, clickedThumb, imgSrc) {
        mainImageEl.src = imgSrc || PLACEHOLDER_IMAGE_MAIN;
        
        // すべてのサムネイルのアクティブ状態を解除
        thumbnailsEl.querySelectorAll("img").forEach(t => {
            t.classList.remove("thumb-active");
        });
        
        // クリックしたサムネイルをアクティブに
        clickedThumb.classList.add("thumb-active");
    }

    /**
     * 選手の経歴（Bio）を更新
     * @param {Object} player - 選手データ
     */
    function updatePlayerBio(player) {
        const bioElement = document.getElementById("player-bio");
        if (bioElement) {
            bioElement.textContent = player.bio || '';
        }

        // 代表経歴の表示
        const careerElement = document.getElementById("player-career");
        const careerListElement = document.getElementById("career-list");
        
        if (careerElement && careerListElement) {
            if (player.representativeCareer && player.representativeCareer.length > 0) {
                // 代表経歴がある場合のみ表示
                careerElement.style.display = 'block';
                
                const ul = document.createElement('ul');
                player.representativeCareer.forEach(career => {
                    const li = document.createElement('li');
                    li.textContent = career;
                    ul.appendChild(li);
                });
                careerListElement.innerHTML = '';
                careerListElement.appendChild(ul);
            } else {
                // 代表経歴がない場合は非表示
                careerElement.style.display = 'none';
            }
        }
    }

    /**
     * Q&Aテーブルを更新
     * @param {Object} player - 選手データ
     */
    function updateQnATable(player) {
        const qnaTable = document.getElementById("qna-table");
        if (!qnaTable) {
            return;
        }

        qnaTable.innerHTML = "";
        
        // ヘッダー行を追加
        addQnATableHeader(qnaTable);
        
        // Q&A項目を追加
        if (player.qna && player.qna.length > 0) {
            player.qna.forEach(item => {
                addQnATableRow(qnaTable, item);
            });
        }
    }

    /**
     * Q&Aテーブルのヘッダー行を追加
     * @param {HTMLElement} qnaTable - Q&Aテーブル要素
     */
    function addQnATableHeader(qnaTable) {
        const headerRow = document.createElement("tr");
        headerRow.className = "qna-header-row";
        headerRow.innerHTML = `
            <th class="qna-header-question">質問</th>
            <th class="qna-header-answer">回答</th>
        `;
        qnaTable.appendChild(headerRow);
    }

    /**
     * Q&Aテーブルに行を追加
     * @param {HTMLElement} qnaTable - Q&Aテーブル要素
     * @param {Object} item - Q&A項目（q: 質問, a: 回答）
     */
    function addQnATableRow(qnaTable, item) {
        const row = document.createElement("tr");
        const answerContent = formatAnswerContent(item);
        
        row.innerHTML = `
            <th>${item.q}</th>
            <td>${answerContent}</td>
        `;
        qnaTable.appendChild(row);
    }

    /**
     * 回答内容をフォーマット（インスタグラムリンクなど）
     * @param {Object} item - Q&A項目
     * @returns {string} フォーマットされた回答内容
     */
    function formatAnswerContent(item) {
        // インスタグラムアカウントの場合はリンクにする
        if (isInstagramAccount(item) && hasValidAnswer(item.a)) {
            return createInstagramLink(item.a);
        }
        
        // 職業の項目で「Youtuber」をYouTubeリンクに変換
        if (item.q === "職業" && hasValidAnswer(item.a)) {
            const youtubeUrl = "https://www.youtube.com/@%E6%9C%AC%E5%90%8D%E6%8B%93";
            return item.a.replace(/Youtuber/g, `<a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" class="youtube-link">Youtuber</a>`);
        }
        
        return item.a;
    }

    /**
     * インスタグラムアカウントの質問かどうか
     * @param {Object} item - Q&A項目
     * @returns {boolean} インスタグラムアカウントの質問の場合true
     */
    function isInstagramAccount(item) {
        return item.q === INSTAGRAM_QUESTION_KEY;
    }

    /**
     * 有効な回答かどうか
     * @param {string} answer - 回答
     * @returns {boolean} 有効な回答の場合true
     */
    function hasValidAnswer(answer) {
        return answer !== EMPTY_ANSWER && answer.trim() !== "";
    }

    /**
     * インスタグラムリンクを作成
     * @param {string} accountText - アカウントテキスト（例: "@username"）
     * @returns {string} インスタグラムリンクのHTML
     */
    function createInstagramLink(accountText) {
        const username = accountText.replace(/^@/, '').trim();
        if (!username) {
            return accountText;
        }
        
        return `<a href="${INSTAGRAM_BASE_URL}${username}/" target="_blank" rel="noopener noreferrer" class="instagram-link">${accountText}</a>`;
    }

    /**
     * 選手が見つからない場合のエラー処理
     */
    function handlePlayerNotFound() {
        const profileContainer = document.getElementById("player-profile");
        if (!profileContainer) {
            return;
        }

        profileContainer.innerHTML = `
            <div class="breadcrumb">
                <a href="index.html">ホーム</a> &gt; <a href="team.html">選手・スタッフ</a>
            </div>
            <h2>選手が見つかりません</h2>
            <p>指定されたIDの選手は存在しないか、削除された可能性があります。</p>
            <a href="team.html" class="back-to-list-btn">
                <i class="fas fa-arrow-left"></i> 選手一覧へ戻る
            </a>
        `;
    }
});