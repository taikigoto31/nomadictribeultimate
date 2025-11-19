// 共通のhead要素を設定（DOMContentLoadedより前に実行）
(function() {
    // ファビコンを追加（まだ追加されていない場合）
    if (!document.querySelector("link[rel='icon']")) {
        const favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        favicon.href = "images/NomadicTribeLogo.png";
        document.head.appendChild(favicon);
        
        // Apple Touch Icon用
        const appleTouchIcon = document.createElement("link");
        appleTouchIcon.rel = "apple-touch-icon";
        appleTouchIcon.href = "images/NomadicTribeLogo.png";
        document.head.appendChild(appleTouchIcon);
    }

    // URLから.htmlを削除（即座に実行）
    (function removeHtmlFromUrl() {
        if (window.location.pathname.endsWith('.html')) {
            const newPath = window.location.pathname.replace(/\.html$/, '');
            const newUrl = newPath + (window.location.search || '') + (window.location.hash || '');
            window.history.replaceState({}, '', newUrl);
        }
    })();
})();

// URLから.htmlを削除し、リンクを処理
document.addEventListener("DOMContentLoaded", function() {
    // URLから.htmlを削除（再確認）
    function removeHtmlFromUrl() {
        if (window.location.pathname.endsWith('.html')) {
            const newPath = window.location.pathname.replace(/\.html$/, '');
            const newUrl = newPath + (window.location.search || '') + (window.location.hash || '');
            window.history.replaceState({}, '', newUrl);
        }
    }

    removeHtmlFromUrl();
    
    // window.onload時にも再確認（動的に生成されるリンクに対応）
    window.addEventListener('load', function() {
        removeHtmlFromUrl();
    });

    // すべての内部リンクを処理（.htmlなしで表示）
    function updateLinks() {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            
            // 外部リンク、アンカー、特殊プロトコルは除外
            if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
                return;
            }
            
            // .htmlで終わるリンクのみ処理
            if (href.endsWith('.html')) {
                // クリックイベントを追加（既に追加されていない場合）
                if (!link.dataset.linkProcessed) {
                    link.dataset.linkProcessed = 'true';
                    const originalHref = href;
                    const newHref = href.replace(/\.html$/, '');
                    
                    // href属性を.htmlなしに変更（ブラウザのURLバーに表示される）
                    link.setAttribute('href', newHref);
                    
                    // 元のHTMLファイルパスをdata属性に保存
                    link.setAttribute('data-original-href', originalHref);
                    
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        // 実際のファイルパスは.html付きで遷移
                        const originalHref = this.getAttribute('data-original-href') || this.href + '.html';
                        
                        // 相対パスを解決
                        const linkElement = document.createElement('a');
                        linkElement.href = originalHref;
                        
                        window.location.href = linkElement.href;
                    });
                }
            }
        });
    }

    // 初回実行
    updateLinks();
    
    // DOM変更を監視して新しく追加されたリンクも更新
    const observer = new MutationObserver(function(mutations) {
        let shouldUpdate = false;
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.tagName === 'A' || (node.querySelector && node.querySelector('a'))) {
                            shouldUpdate = true;
                        }
                    }
                });
            }
        });
        if (shouldUpdate) {
            updateLinks();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

