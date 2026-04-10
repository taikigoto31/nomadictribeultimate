// ======== 共通ページヒーロー ========
// <div id="page-hero-placeholder" data-title="TITLE" data-subtitle="サブタイトル" data-bg="images/header/xxx.jpg"></div>
// の要素を見つけてヒーローセクションを挿入する

(function () {
    // Bebas Neue / Montserrat がなければ注入
    if (!document.querySelector('link[href*="Bebas+Neue"]')) {
        const preconnect1 = document.createElement('link');
        preconnect1.rel = 'preconnect';
        preconnect1.href = 'https://fonts.googleapis.com';
        document.head.appendChild(preconnect1);

        const preconnect2 = document.createElement('link');
        preconnect2.rel = 'preconnect';
        preconnect2.href = 'https://fonts.gstatic.com';
        preconnect2.crossOrigin = '';
        document.head.appendChild(preconnect2);

        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;700&display=swap';
        document.head.appendChild(fontLink);
    }

    const placeholder = document.getElementById('page-hero-placeholder');
    if (!placeholder) return;

    const title    = placeholder.dataset.title    || '';
    const subtitle = placeholder.dataset.subtitle || '';
    const bg       = placeholder.dataset.bg       || '';

    const bgStyle = bg ? ` style="background-image: url('${bg}')"` : '';

    const heroHTML = `<div class="page-hero"${bgStyle}><h2 class="page-hero-title">${title}</h2><p class="page-hero-subtitle">${subtitle}</p></div>`;
    placeholder.outerHTML = heroHTML;
})();
