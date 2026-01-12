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
    const mainLink = document.getElementById("heroMainLink");
    const prevImage = document.getElementById("prevHeroImage");
    const prevLink = document.getElementById("heroPrevLink");
    const nextImage = document.getElementById("nextHeroImage");
    const nextLink = document.getElementById("heroNextLink");
    const thumbnailsContainer = document.getElementById("heroThumbnails");
    const sliderContainer = document.querySelector(".hero-slider-container");

    // メインリンクが取得できているか確認
    if (!mainLink) {
        console.error('heroMainLink要素が見つかりません');
    }

    // 3. ギャラリーがページに存在する場合のみ実行
    if (mainImage && mainLink && prevImage && prevLink && nextImage && nextLink && thumbnailsContainer && sliderContainer && numImages > 0) {
        
        // 4. リンクマップの定義
        // index 0: All Japan (news id=3)
        // index 1: AOUC2025  (news id=2)
        // index 2: WUCC2026ページ
        const linkMap = {
            0: "news-detail.html?id=3",
            1: "news-detail.html?id=2",
            2: "wucc.html"
        };

        // 5. 変数の宣言（スコープを適切に管理）
        let currentIndex = 0;
        let autoSlideInterval = null;

        // 6. リンクを設定する関数
        function setLink(linkElement, index) {
            if (!linkElement) {
                console.warn('リンク要素が見つかりません');
                return;
            }
            const targetHref = linkMap[index];
            if (targetHref) {
                // href属性を確実に設定（setAttributeも使用）
                linkElement.setAttribute("href", targetHref);
                linkElement.href = targetHref;
                linkElement.style.pointerEvents = "auto";
                linkElement.setAttribute("aria-disabled", "false");
                // デバッグ用（本番環境では削除可能）
                if (linkElement === mainLink) {
                    console.log(`メインリンクを更新: index=${index}, href=${targetHref}`);
                }
            } else {
                linkElement.removeAttribute("href");
                linkElement.style.pointerEvents = "none";
                linkElement.setAttribute("aria-disabled", "true");
            }
        }

        // 7. すべてのリンクを更新する関数
        function setAllLinks(selectedIndex) {
            // メインリンクを現在表示されている画像に対応するリンクに設定
            if (mainLink) {
                setLink(mainLink, selectedIndex);
            }
            // 前の画像のリンク（selectedIndex - 1）
            const prevIndex = (selectedIndex - 1 + numImages) % numImages;
            if (prevLink) {
                setLink(prevLink, prevIndex);
            }
            // 次の画像のリンク（selectedIndex + 1）
            const nextIndex = (selectedIndex + 1) % numImages;
            if (nextLink) {
                setLink(nextLink, nextIndex);
            }
        }

        // 8. 画像を更新する関数
        function updateImages(selectedIndex) {
            // currentIndexを更新（画像とリンクの同期を保つ）
            currentIndex = selectedIndex;
            
            // (A) メイン画像を設定
            if (mainImage) {
                mainImage.src = galleryImages[selectedIndex];
            }

            // (B) 前の画像を設定 (インデックスが-1になったら最後の画像へループ)
            const prevIndex = (selectedIndex - 1 + numImages) % numImages;
            if (prevImage) {
                prevImage.src = galleryImages[prevIndex];
            }

            // (C) 次の画像を設定 (インデックスが配列長を超えたら最初の画像へループ)
            const nextIndex = (selectedIndex + 1) % numImages;
            if (nextImage) {
                nextImage.src = galleryImages[nextIndex];
            }

            // (D) すべてのリンクを更新（画像が切り替わるたびにリンクも更新）
            // 画像の更新後にリンクを更新することで、確実に同期させる
            setAllLinks(selectedIndex);

            // (E) サムネイルのアクティブクラスを更新
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

        // 9. 自動スライドを開始する関数
        function startAutoSlide() {
            // 既存のタイマーをクリア
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
            autoSlideInterval = setInterval(function() {
                currentIndex = (currentIndex + 1) % numImages;
                updateImages(currentIndex);
            }, 3000); 
        }

        // 10. 初期化関数
        function initializeGallery() {
            // 既存のタイマーをクリア
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
            
            // 初期画像を設定 (0番目の画像で初期化)
            currentIndex = 0;
            updateImages(currentIndex);
            
            // 自動スライドを開始
            startAutoSlide();
        }

        // 11. サムネイルを自動生成してコンテナに追加（初回のみ）
        if (thumbnailsContainer && thumbnailsContainer.children.length === 0) {
            galleryImages.forEach((src, index) => {
                const thumb = document.createElement("img");
                thumb.src = src;
                thumb.alt = `Thumbnail ${index + 1}`;
                thumbnailsContainer.appendChild(thumb);
            });
        }

        // 12. 左右の画像をクリックした時はリンクに遷移（画像切り替えはしない）
        // 左右の画像は既にリンクが設定されているので、そのまま遷移する
        // 特別な処理は不要

        // 13. サムネイルクリック/タップ時に押した画像を真ん中に表示
        function setupThumbnailEvents() {
            if (!thumbnailsContainer) return;
            
            // 既存のイベントリスナーを削除（重複防止）
            const thumbs = thumbnailsContainer.querySelectorAll('img');
            thumbs.forEach((thumb) => {
                const newThumb = thumb.cloneNode(true);
                thumb.parentNode.replaceChild(newThumb, thumb);
            });
            
            // 新しい要素にイベントリスナーを追加
            const updatedThumbs = thumbnailsContainer.querySelectorAll('img');
            updatedThumbs.forEach((thumb, index) => {
                // クリックとタッチの両方に対応
                const handleThumbSelect = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // 同じ画像をクリックした場合は何もしない
                    if (index === currentIndex) {
                        return;
                    }
                    
                    // 押した画像を真ん中に表示
                    currentIndex = index;
                    updateImages(currentIndex);
                    
                    // 自動スライドをリセット
                    startAutoSlide();
                };
                thumb.addEventListener("click", handleThumbSelect);
                thumb.addEventListener("touchend", handleThumbSelect, { passive: false });
            });
        }
        
        // サムネイルイベントを設定
        setupThumbnailEvents();

        // 14. 初期化を実行
        initializeGallery();

        // 9. モバイルでのスワイプ機能
        const centerImageContainer = document.querySelector('.hero-center-image-container');
        if (centerImageContainer) {
            let touchStartX = 0;
            let touchStartY = 0;
            let touchEndX = 0;
            let touchEndY = 0;
            let isSwiping = false;
            let touchStartTime = 0;

            centerImageContainer.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
                touchStartTime = Date.now();
                isSwiping = false;
            }, { passive: true });

            centerImageContainer.addEventListener('touchmove', function(e) {
                isSwiping = true;
            }, { passive: true });

            centerImageContainer.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                const touchDuration = Date.now() - touchStartTime;
                const swipeThreshold = 50; // スワイプ判定の最小距離（px）
                const tapThreshold = 10; // タップ判定の最大距離（px）
                const tapDuration = 300; // タップ判定の最大時間（ms）

                // タップ判定（スワイプでない場合、リンクをクリック）
                if (!isSwiping && 
                    Math.abs(touchEndX - touchStartX) < tapThreshold && 
                    Math.abs(touchEndY - touchStartY) < tapThreshold &&
                    touchDuration < tapDuration) {
                    // リンクのクリックイベントを発火
                    if (mainLink && mainLink.href && mainLink.href !== '#') {
                        window.location.href = mainLink.href;
                        return;
                    }
                }

                // スワイプ判定
                if (!isSwiping) return;
                
                const horizontalSwipe = Math.abs(touchEndX - touchStartX);
                const verticalSwipe = Math.abs(touchEndY - touchStartY);

                // 横方向のスワイプのみ処理（縦方向のスクロールと区別）
                if (horizontalSwipe > verticalSwipe && horizontalSwipe > swipeThreshold) {
                    // 左にスワイプ（次の画像）
                    if (touchStartX - touchEndX > swipeThreshold) {
                        currentIndex = (currentIndex + 1) % numImages;
                        updateImages(currentIndex);
                        startAutoSlide();
                    }
                    // 右にスワイプ（前の画像）
                    else if (touchEndX - touchStartX > swipeThreshold) {
                        currentIndex = (currentIndex - 1 + numImages) % numImages;
                        updateImages(currentIndex);
                        startAutoSlide();
                    }
                }
            }, { passive: true });
        }

        // 15. ブラウザの戻るボタンで戻った時も初期化を実行
        window.addEventListener('pageshow', function(event) {
            // ページがキャッシュから復元された時（戻るボタンで戻った時）
            if (event.persisted) {
                // 少し遅延させてから初期化（DOMが完全に復元されるのを待つ）
                setTimeout(function() {
                    initializeGallery();
                }, 100);
            }
        });
        
        // 16. ページ読み込み完了時にもリンクを確実に設定
        window.addEventListener('load', function() {
            // 念のため、リンクを再設定
            if (mainLink && mainImage) {
                // 現在のインデックスを取得してリンクを再設定
                const currentImgSrc = mainImage.src;
                const currentIndexFromSrc = galleryImages.findIndex(src => {
                    const fileName = src.split('/').pop();
                    return currentImgSrc.includes(fileName);
                });
                if (currentIndexFromSrc >= 0) {
                    // currentIndexも更新
                    currentIndex = currentIndexFromSrc;
                    setAllLinks(currentIndexFromSrc);
                    console.log(`ページ読み込み完了: リンクを再設定 index=${currentIndexFromSrc}`);
                } else {
                    // 見つからない場合は初期化
                    console.log('画像が見つからないため初期化を実行');
                    initializeGallery();
                }
            }
        });
        
        // 17. メインリンクのクリックイベントを監視（デバッグ用）
        if (mainLink) {
            mainLink.addEventListener('click', function(e) {
                console.log(`メインリンククリック: currentIndex=${currentIndex}, href=${this.href}`);
            });
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