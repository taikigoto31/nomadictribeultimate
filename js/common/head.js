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
            
            // .htmlを含むリンクを処理（クエリパラメータも考慮）
            const htmlMatch = href.match(/^([^?#]+)\.html(\?[^#]*)?(#.*)?$/);
            if (htmlMatch) {
                // クリックイベントを追加（既に追加されていない場合）
                if (!link.dataset.linkProcessed) {
                    link.dataset.linkProcessed = 'true';
                    const originalHref = href;
                    // .htmlを削除（クエリパラメータとハッシュは保持）
                    const newHref = htmlMatch[1] + (htmlMatch[2] || '') + (htmlMatch[3] || '');
                    
                    // href属性を.htmlなしに変更（ブラウザのURLバーに表示される）
                    link.setAttribute('href', newHref);
                    
                    // 元のHTMLファイルパスをdata属性に保存
                    link.setAttribute('data-original-href', originalHref);
                    
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        // 実際のファイルパスは.html付きで遷移
                        const originalHref = this.getAttribute('data-original-href');
                        if (originalHref) {
                            window.location.href = originalHref;
                        } else {
                            // フォールバック：現在のhrefに.htmlを追加
                            const currentHref = this.getAttribute('href');
                            const parts = currentHref.split('?');
                            const path = parts[0];
                            const query = parts[1] ? '?' + parts[1] : '';
                            const hash = this.hash || '';
                            window.location.href = path + '.html' + query + hash;
                        }
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

