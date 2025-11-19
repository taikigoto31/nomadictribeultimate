// 共通フッターの読み込み
document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
    <footer class="footer">
        <div class="footer-container wrapper">
            <div class="footer-column">
                <h3>試合</h3>
                <ul>
                    <li><a href="schedule.html">試合スケジュール</a></li>
                </ul>
                <h3>ニュース</h3>
                <ul>
                    <li><a href="news.html">お知らせ一覧</a></li>
                </ul>
                <h3>クラブ概要</h3>
                <ul>
                    <li><a href="club.html">クラブ概要</a></li>
                </ul>
                <h3>チーム情報</h3>
                <ul>
                    <li><a href="team.html">選手/スタッフ</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>パートナー</h3>
                <ul>
                    <li><a href="partner.html">パートナー企業紹介</a></li>
                </ul>
                <h3>ユース</h3>
                <ul>
                    <li><a href="youth.html">ユース</a></li>
                </ul>
                <h3>問い合わせ</h3>
                <ul>
                    <li><a href="contact.html">問い合わせ</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-branding wrapper">
            <div class="footer-logo">
                <img src="images/NomadicTribeLogo.png" alt="Nomadic Tribe Ultimate ロゴ">
            </div>
            <div class="footer-brand-text">
                <h2>NOMADIC TRIBE ULTIMATE</h2>
                <p>Official Website</p>
            </div>
        </div>
        <div class="copyright wrapper">
            <p>&copy; Nomadic Tribe Ultimate. All Rights Reserved.</p>
        </div>
    </footer>
        `;
    }
});
