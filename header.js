// 共通ヘッダーの読み込み
document.addEventListener("DOMContentLoaded", function() {
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
        const hamburger = document.querySelector(".hamburger-menu");
        const navLinks = document.querySelector(".nav-links");
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });
        }
    }
});
