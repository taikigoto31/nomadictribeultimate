// 共通ヘッダーの読み込み（即座に実行してレイアウトシフトを防ぐ）
(function() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
    <header class="header">
        <div class="header-top">
            <div class="header-top-left">
                <!-- ロゴをトップページへのリンクにする -->
                <a href="index.html" class="logo-link">
                    <div class="logo">
                        <img src="images/NomadicTribeLogo.png" alt="Nomadic Tribe Ultimate ロゴ">
                    </div>
                    <div class="site-branding">
                        <h1 class="site-title">Nomadic Tribe Ultimate</h1>
                        <p class="site-description">Official Website</p>
                    </div>
                </a>
            </div>
            <div class="header-top-right">
                <a href="https://www.instagram.com/nomadictribe_ultimate/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="fab fa-instagram"></i></a>
            </div>
            
            <button class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav class="header-bottom">
            <ul class="nav-links">
                <li><a href="schedule.html">試合情報</a></li>
                <li><a href="wucc.html">WUCC2026</a></li>
                <li><a href="news.html">ニュース</a></li>
                <li><a href="club.html">クラブ概要</a></li>
                <li><a href="team.html">チーム情報</a></li>
                <li><a href="partner.html">パートナー</a></li>
                <li><a href="youth.html">ユース</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
        `;
        
        // ヘッダーが挿入された後、ハンバーガーメニューのイベントリスナーを設定
        setupHamburgerMenu();
        
        // ヘッダーが読み込まれたことを示すクラスを追加
        headerPlaceholder.classList.add('header-loaded');
    }
    
    // ハンバーガーメニューの設定（既存のヘッダーにも対応）
    function setupHamburgerMenu() {
        const hamburger = document.querySelector(".hamburger-menu");
        const navLinks = document.querySelector(".nav-links");
        
        if (hamburger && navLinks) {
            // 既に設定済みの場合はスキップ（data属性で管理）
            if (hamburger.dataset.menuSetup === 'true') {
                return;
            }
            
            // クリックイベントとタッチイベントの両方に対応
            const handleMenuToggle = (e) => {
                e.preventDefault();
                e.stopPropagation();
                navLinks.classList.toggle("active");
            };
            
            hamburger.addEventListener("click", handleMenuToggle);
            hamburger.addEventListener("touchend", handleMenuToggle);
            
            // 設定済みフラグを設定
            hamburger.dataset.menuSetup = 'true';
            
            // メニュー外をクリックしたときに閉じる（1回のみ設定）
            if (!document.hamburgerMenuClickListenerAdded) {
                document.addEventListener("click", function(e) {
                    if (hamburger && navLinks) {
                        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                            navLinks.classList.remove("active");
                        }
                    }
                });
                document.hamburgerMenuClickListenerAdded = true;
            }
        }
    }
    
    // 既存のヘッダーがある場合も設定（header.jsが後で読み込まれた場合など）
    if (document.querySelector(".hamburger-menu")) {
        setupHamburgerMenu();
    }
})();

// DOMContentLoadedでも実行（念のため）
document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder && !headerPlaceholder.classList.contains('header-loaded')) {
        // まだ読み込まれていない場合のみ再実行
        const headerHTML = `
    <header class="header">
        <div class="header-top">
            <div class="header-top-left">
                <a href="index.html" class="logo-link">
                    <div class="logo">
                        <img src="images/NomadicTribeLogo.png" alt="Nomadic Tribe Ultimate ロゴ">
                    </div>
                    <div class="site-branding">
                        <h1 class="site-title">Nomadic Tribe Ultimate</h1>
                        <p class="site-description">Official Website</p>
                    </div>
                </a>
            </div>
            <div class="header-top-right">
                <a href="https://www.instagram.com/nomadictribe_ultimate/" target="_blank" rel="noopener noreferrer" class="social-icon"><i class="fab fa-instagram"></i></a>
            </div>
            
            <button class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav class="header-bottom">
            <ul class="nav-links">
                <li><a href="schedule.html">試合情報</a></li>
                <li><a href="wucc.html">WUCC2026</a></li>
                <li><a href="news.html">ニュース</a></li>
                <li><a href="club.html">クラブ概要</a></li>
                <li><a href="team.html">チーム情報</a></li>
                <li><a href="partner.html">パートナー</a></li>
                <li><a href="youth.html">ユース</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
        `;
        headerPlaceholder.innerHTML = headerHTML;
        setupHamburgerMenu();
        headerPlaceholder.classList.add('header-loaded');
    }
});
