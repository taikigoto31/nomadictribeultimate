document.addEventListener("DOMContentLoaded", function() {

    // ======== ヒーロー画像ギャラリー ========

    // 1. 表示する画像リストを定義
    const galleryImages = [
        "images/top/top1.jpg",  // 1枚目
        "images/top/top2.jpg",  // 2枚目
        "images/top/top3.jpg"   // 3枚目
    ];
    const numImages = galleryImages.length;

    // 2. HTML要素を取得
    const mainImage = document.getElementById("mainHeroImage");
    const prevImage = document.getElementById("prevHeroImage");
    const nextImage = document.getElementById("nextHeroImage");
    const thumbnailsContainer = document.getElementById("heroThumbnails");
    const sliderContainer = document.querySelector(".hero-slider-container");

    // 3. ギャラリーがページに存在する場合のみ実行
    if (mainImage && prevImage && nextImage && thumbnailsContainer && sliderContainer && numImages > 0) {
        
        // 4. 画像を更新する関数
        function updateImages(selectedIndex) {
            // (A) メイン画像を設定
            mainImage.src = galleryImages[selectedIndex];

            // (B) 前の画像を設定 (インデックスが-1になったら最後の画像へループ)
            const prevIndex = (selectedIndex - 1 + numImages) % numImages;
            prevImage.src = galleryImages[prevIndex];

            // (C) 次の画像を設定 (インデックスが配列長を超えたら最初の画像へループ)
            const nextIndex = (selectedIndex + 1) % numImages;
            nextImage.src = galleryImages[nextIndex];

            // (D) サムネイルのアクティブクラスを更新
            if (thumbnailsContainer) {
                thumbnailsContainer.querySelectorAll('img').forEach((thumb, idx) => {
                    if (idx === selectedIndex) {
                        thumb.classList.add("active-thumb");
                    } else {
                        thumb.classList.remove("active-thumb");
                    }
                });
            }
        }

        // 5. サムネイルを自動生成してコンテナに追加
        if (thumbnailsContainer) {
            galleryImages.forEach((src, index) => {
                const thumb = document.createElement("img");
                thumb.src = src;
                thumb.alt = `Thumbnail ${index + 1}`;
                thumbnailsContainer.appendChild(thumb);
            });
        }

        // 6. 初期画像を設定 (0番目の画像で初期化)
        let currentIndex = 0;
        mainImage.src = galleryImages[0];
        prevImage.src = galleryImages[(0 - 1 + numImages) % numImages];
        nextImage.src = galleryImages[(0 + 1) % numImages];
        if (thumbnailsContainer && thumbnailsContainer.querySelectorAll('img')[0]) {
            thumbnailsContainer.querySelectorAll('img')[0].classList.add("active-thumb");
        }

        // 7. 自動で画像を切り替える機能（8秒ごと）
        let autoSlideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % numImages;
            updateImages(currentIndex);
        }, 8000); // 8000ミリ秒 = 8秒

        // 8. サムネイルクリック時に自動切り替えをリセット（デスクトップのみ）
        if (thumbnailsContainer) {
            thumbnailsContainer.querySelectorAll('img').forEach((thumb, index) => {
                thumb.addEventListener("click", function() {
                    currentIndex = index;
                    updateImages(currentIndex);
                    // 自動切り替えをリセット
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(function() {
                        currentIndex = (currentIndex + 1) % numImages;
                        updateImages(currentIndex);
                    }, 8000);
                });
            });
        }

        // 9. モバイルでのスワイプ機能
        const centerImageContainer = document.querySelector('.hero-center-image-container');
        if (centerImageContainer) {
            let touchStartX = 0;
            let touchEndX = 0;
            let isSwiping = false;

            centerImageContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                isSwiping = false;
            }, { passive: true });

            centerImageContainer.addEventListener('touchmove', function(e) {
                isSwiping = true;
            }, { passive: true });

            centerImageContainer.addEventListener('touchend', function(e) {
                if (!isSwiping) return;
                
                touchEndX = e.changedTouches[0].screenX;
                const swipeThreshold = 50; // スワイプ判定の最小距離（px）

                // 左にスワイプ（次の画像）
                if (touchStartX - touchEndX > swipeThreshold) {
                    currentIndex = (currentIndex + 1) % numImages;
                    updateImages(currentIndex);
                    // 自動切り替えをリセット
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(function() {
                        currentIndex = (currentIndex + 1) % numImages;
                        updateImages(currentIndex);
                    }, 8000);
                }
                // 右にスワイプ（前の画像）
                else if (touchEndX - touchStartX > swipeThreshold) {
                    currentIndex = (currentIndex - 1 + numImages) % numImages;
                    updateImages(currentIndex);
                    // 自動切り替えをリセット
                    clearInterval(autoSlideInterval);
                    autoSlideInterval = setInterval(function() {
                        currentIndex = (currentIndex + 1) % numImages;
                        updateImages(currentIndex);
                    }, 8000);
                }
            }, { passive: true });
        }
    }

    // ======== テキスト選択時に下線を追加 ========
    let currentUnderlinedElements = [];
    let selectionTimeout = null;

    function addUnderlineToSelection() {
        // 既存の下線を削除
        removeUnderlines();

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || selection.toString().trim() === '') {
            return;
        }

        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;

        // ヘッダーまたはチーム情報ページ内で選択されているか確認
        const header = document.querySelector('.header');
        const teamPage = document.querySelector('.team-page');
        const teamCategory = document.querySelector('.team-category');
        const playerCard = document.querySelector('.player-card');
        
        const isInHeader = header && header.contains(container);
        const isInTeamPage = (teamPage && teamPage.contains(container)) ||
                             (teamCategory && teamCategory.contains(container)) ||
                             (playerCard && playerCard.contains(container));

        if (!isInHeader && !isInTeamPage) {
            return;
        }

        try {
            // 範囲が要素の境界をまたぐ場合は、先に内容を抽出
            if (range.collapsed) {
                return;
            }

            // 選択範囲の内容を取得
            const contents = range.cloneContents();
            
            // 選択範囲を削除して、<span>を挿入
            range.deleteContents();
            
            // 複数のノードがある場合は、Fragmentで囲む
            const fragment = document.createDocumentFragment();
            const span = document.createElement('span');
            span.className = 'selection-underline';
            
            // テキストノードのみの場合は直接追加
            if (contents.childNodes.length === 0 || 
                (contents.childNodes.length === 1 && contents.childNodes[0].nodeType === Node.TEXT_NODE)) {
                span.textContent = contents.textContent || selection.toString();
            } else {
                // 複数のノードがある場合は、すべてをspanに追加
                while (contents.firstChild) {
                    span.appendChild(contents.firstChild);
                }
            }
            
            fragment.appendChild(span);
            range.insertNode(fragment);
            
            currentUnderlinedElements.push(span);

            // 選択範囲を再設定（選択を維持）
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            selection.removeAllRanges();
            selection.addRange(newRange);
        } catch (e) {
            // エラーが発生した場合は何もしない
            console.log('Selection underline error:', e);
        }
    }

    function removeUnderlines() {
        currentUnderlinedElements.forEach(span => {
            if (span && span.parentNode) {
                const parent = span.parentNode;
                const textNode = document.createTextNode(span.textContent);
                parent.replaceChild(textNode, span);
                parent.normalize(); // 隣接するテキストノードを結合
            }
        });
        currentUnderlinedElements = [];
    }

    // マウスアップ時に選択範囲を確認
    document.addEventListener('mouseup', function() {
        if (selectionTimeout) {
            clearTimeout(selectionTimeout);
        }
        
        selectionTimeout = setTimeout(() => {
            const selection = window.getSelection();
            if (selection && selection.toString().trim() !== '' && selection.rangeCount > 0) {
                addUnderlineToSelection();
            } else {
                removeUnderlines();
            }
        }, 50);
    });

    // クリック時（選択解除時）に下線を削除
    document.addEventListener('click', function(e) {
        // 下線付き要素内をクリックした場合は削除しない
        if (!e.target.closest('.selection-underline')) {
            const selection = window.getSelection();
            if (!selection || selection.toString().trim() === '') {
                removeUnderlines();
            }
        }
    });

    // 選択が変更されたときに下線を更新
    document.addEventListener('selectionchange', function() {
        if (selectionTimeout) {
            clearTimeout(selectionTimeout);
        }
        
        selectionTimeout = setTimeout(() => {
            const selection = window.getSelection();
            if (!selection || selection.toString().trim() === '' || selection.rangeCount === 0) {
                removeUnderlines();
            }
        }, 100);
    });

    // ======== トップに戻るボタン ========
    // ボタン要素を作成
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top-btn';
    scrollToTopBtn.setAttribute('aria-label', 'ページトップに戻る');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    // スクロール位置に応じてボタンの表示/非表示を切り替え
    function toggleScrollToTopButton() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }

    // スクロールイベントリスナー
    window.addEventListener('scroll', toggleScrollToTopButton);

    // 初期状態を確認
    toggleScrollToTopButton();

    // クリックでトップにスクロール
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});