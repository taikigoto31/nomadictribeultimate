document.addEventListener("DOMContentLoaded", function() {
    
    // 選手データをカテゴリ別に振り分けるコンテナを取得
    const handlerGrid = document.getElementById("handler-grid");
    const deepGrid = document.getElementById("deep-grid");
    const staffGrid = document.getElementById("staff-grid");

    // playersData (data/players.js から読み込まれた変数) が存在するか確認
    if (typeof playersData !== 'undefined' && handlerGrid && deepGrid && staffGrid) {
        
        // 選手カードを生成する関数
        function createPlayerCard(player) {
            // プレイヤーカードのHTMLを文字列で構築
            // リンク先に ?id= を付与して、どの選手のページか識別できるようにする
            return `
                <a href="player.html?id=${player.id}" class="player-card-link">
                    <div class="player-card">
                        <div class="player-image">
                            <img src="${player.playerImage}" 
                                 alt="${player.name}" 
                                 loading="lazy"
                                 onerror="this.closest('.player-card-link').remove();">
                        </div>
                        <div class="player-info">
                            <span class="player-number">${player.number ? '#' + player.number : ''}</span>
                            <span class="player-name">${player.name}</span>
                            <span class="player-position">${player.role || ''}</span>
                        </div>
                    </div>
                </a>
            `;
        }

        // 選手データをループ処理（写真がある人のみ表示）
        playersData.forEach(player => {
            // playerImage が設定されていない or 空文字の場合は表示しない
            if (!player.playerImage || (typeof player.playerImage === 'string' && player.playerImage.trim() === '')) {
                return;
            }

            const cardHTML = createPlayerCard(player);
            
            // ポジションに応じて適切なグリッドに追加
            switch(player.position) {
                case "HANDLER":
                    handlerGrid.innerHTML += cardHTML;
                    break;
                case "DEEP":
                    deepGrid.innerHTML += cardHTML;
                    break;
                case "STAFF":
                    staffGrid.innerHTML += cardHTML;
                    break;
            }
        });

    } else {
        console.error("playersData が見つからないか、グリッドコンテナがありません。");
        console.log("playersData の型:", typeof playersData);
        console.log("handlerGrid:", handlerGrid);
        console.log("deepGrid:", deepGrid);
        console.log("staffGrid:", staffGrid);
    }
});