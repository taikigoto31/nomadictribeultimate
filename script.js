document.addEventListener("DOMContentLoaded", function() {

    // ======== ハンバーガーメニュー ========
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links"); // .nav-links は <ul>

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active"); // <ul> に .active をトグルする
        });
    }

    // ======== ヒーロー画像ギャラリー ========

    // 1. 表示する画像リストを定義 (4枚)
    const galleryImages = [
        "images/top1.jpg",   // 1枚目
        "images/top2.jpg",  // 2枚目
        "images/top3.jpg", // 3枚目
        "images/top4.jpg"         // 4枚目
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
            thumbnailsContainer.querySelectorAll('img').forEach((thumb, idx) => {
                if (idx === selectedIndex) {
                    thumb.classList.add("active-thumb");
                } else {
                    thumb.classList.remove("active-thumb");
                }
            });
        }

        // 5. サムネイルを自動生成してコンテナに追加
        galleryImages.forEach((src, index) => {
            const thumb = document.createElement("img");
            thumb.src = src;
            thumb.alt = `Thumbnail ${index + 1}`;
            thumbnailsContainer.appendChild(thumb);
        });

        // 6. 初期画像を設定 (0番目の画像で初期化)
        let currentIndex = 0;
        mainImage.src = galleryImages[0];
        prevImage.src = galleryImages[(0 - 1 + numImages) % numImages];
        nextImage.src = galleryImages[(0 + 1) % numImages];
        thumbnailsContainer.querySelectorAll('img')[0].classList.add("active-thumb");

        // 7. 自動で画像を切り替える機能（8秒ごと）
        let autoSlideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % numImages;
            updateImages(currentIndex);
        }, 8000); // 8000ミリ秒 = 8秒

        // 8. サムネイルクリック時に自動切り替えをリセット
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

});