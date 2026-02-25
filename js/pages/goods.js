// ============================================
// グッズページの初期化処理
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    const goodsGrid = document.getElementById("goods-grid");
    const modal = document.getElementById("goods-modal");
    const modalMainImage = document.getElementById("goods-modal-main-image");
    const modalThumbs = document.getElementById("goods-modal-thumbs");
    const modalTitle = document.getElementById("goods-modal-title");
    const modalPrice = document.getElementById("goods-modal-price");
    const modalDescription = document.getElementById("goods-modal-description");
    const modalSize = document.getElementById("goods-modal-size");
    const modalOrder = document.getElementById("goods-modal-order");

    const PLACEHOLDER_IMAGE = (typeof CONSTANTS !== "undefined" && CONSTANTS.PLACEHOLDER_IMAGE_MAIN)
        ? CONSTANTS.PLACEHOLDER_IMAGE_MAIN
        : "https://placehold.co/800x600/cccccc/666666?text=No+Image";

    const GOODS_ENABLED = false;

    const goodsReady = typeof window !== "undefined" && window.goodsDataReady
        ? window.goodsDataReady
        : Promise.resolve();

    goodsReady.then(() => {
        if (!isDataAvailable("goodsData")) {
            console.error("グッズデータが見つかりません");
            return;
        }
        if (goodsGrid) {
            if (GOODS_ENABLED) {
                renderGoodsList(window.goodsData, goodsGrid);
            } else {
                renderComingSoon(goodsGrid);
            }
        }
    });

    if (modal) {
        setupModalClose(modal);
    }

    function renderGoodsList(goods, container) {
        container.innerHTML = "";
        goods.forEach(item => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "goods-card";
            card.setAttribute("data-goods-id", item.id);
            card.innerHTML = `
                <div class="goods-card-image">
                    <img src="${item.images[0] || PLACEHOLDER_IMAGE}" alt="${item.name}" onerror="this.src='${PLACEHOLDER_IMAGE}'; this.onerror=null;">
                </div>
                <div class="goods-card-body">
                    <h4 class="goods-card-title">${item.name}</h4>
                    <p class="goods-card-price">${item.price}</p>
                </div>
            `;
            card.addEventListener("click", function() {
                openModal(item);
            });
            container.appendChild(card);
        });
    }

    function renderComingSoon(container) {
        container.innerHTML = `
            <div class="goods-coming-soon">
                <p class="goods-coming-title">COMING SOON</p>
                <p class="goods-coming-text">現在準備中です。</p>
            </div>
        `;
    }


    function openModal(item) {
        if (!modal) return;

        modalTitle.textContent = item.name || "";
        modalPrice.textContent = item.price || "";
        modalDescription.innerHTML = formatDescription(item.description);
        modalOrder.href = item.orderUrl && item.orderUrl.trim() !== "" ? item.orderUrl : "#";

        renderGallery(item.images || []);
        renderSizeChart(item.sizeChart);

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    }

    function renderGallery(images) {
        const imageList = images.length > 0 ? images : [PLACEHOLDER_IMAGE];
        modalMainImage.src = imageList[0];
        modalMainImage.alt = modalTitle.textContent || "";

        modalThumbs.innerHTML = "";
        imageList.forEach((src, index) => {
            const thumb = document.createElement("button");
            thumb.type = "button";
            thumb.className = "goods-thumb";
            if (index === 0) {
                thumb.classList.add("is-active");
            }
            thumb.innerHTML = `<img src="${src}" alt="${modalTitle.textContent} サムネイル ${index + 1}" onerror="this.src='${PLACEHOLDER_IMAGE}'; this.onerror=null;">`;
            thumb.addEventListener("click", function() {
                modalMainImage.src = src || PLACEHOLDER_IMAGE;
                modalThumbs.querySelectorAll(".goods-thumb").forEach(btn => btn.classList.remove("is-active"));
                thumb.classList.add("is-active");
            });
            modalThumbs.appendChild(thumb);
        });
    }

    function formatDescription(text) {
        const normalized = Array.isArray(text) ? text : String(text || "").split("\n");
        const escapedLines = normalized.map(line => {
            return String(line)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        });

        const blocks = [];
        let listItems = [];

        const flushList = () => {
            if (listItems.length > 0) {
                blocks.push(`<ul class="goods-desc-list">${listItems.join("")}</ul>`);
                listItems = [];
            }
        };

        escapedLines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed) {
                flushList();
                return;
            }

            if (trimmed.startsWith("・")) {
                listItems.push(`<li>${trimmed.slice(1).trim()}</li>`);
                return;
            }

            if (/^⚠️/.test(trimmed)) {
                flushList();
                blocks.push(`<p class="goods-desc-attention">${trimmed}</p>`);
                return;
            }

            if (/^[^a-zA-Z0-9].+$/u.test(trimmed) && !trimmed.includes("：") && trimmed.length <= 20) {
                flushList();
                blocks.push(`<p class="goods-desc-heading">${trimmed}</p>`);
                return;
            }

            flushList();
            blocks.push(`<p>${trimmed}</p>`);
        });

        flushList();
        return blocks.join("");
    }

    function renderSizeChart(chart) {
        if (!chart) {
            modalSize.innerHTML = "";
            return;
        }
        const headerCells = chart.headers.map(text => `<th>${text}</th>`).join("");
        const bodyRows = chart.rows.map(row => {
            const cells = row.map(cell => `<td>${cell}</td>`).join("");
            return `<tr>${cells}</tr>`;
        }).join("");
        modalSize.innerHTML = `
            <div class="size-chart">
                <p class="size-chart-title">${chart.title} サイズ表</p>
                <table>
                    <thead><tr>${headerCells}</tr></thead>
                    <tbody>${bodyRows}</tbody>
                </table>
            </div>
        `;
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    function setupModalClose(modalElement) {
        modalElement.querySelectorAll("[data-modal-close]").forEach(el => {
            el.addEventListener("click", closeModal);
        });
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape" && modalElement.classList.contains("is-open")) {
                closeModal();
            }
        });
    }
});
