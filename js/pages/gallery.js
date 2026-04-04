// ============================================
// フォトギャラリーページ
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const tournamentGrid = document.getElementById("gallery-tournament-grid");
    const lightbox        = document.getElementById("lightbox");
    const lightboxImg     = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxCounter = document.getElementById("lightbox-counter");
    const lightboxClose   = document.getElementById("lightbox-close");
    const lightboxPrev    = document.getElementById("lightbox-prev");
    const lightboxNext    = document.getElementById("lightbox-next");

    // ライトボックス状態
    let currentPhotos = [];
    let currentIndex  = 0;

    // ----------------------------------------
    // 初期表示：大会カード一覧
    // ----------------------------------------
    function renderTournaments() {
        tournamentGrid.innerHTML = "";

        if (!Array.isArray(galleryData) || galleryData.length === 0) {
            tournamentGrid.innerHTML = `
                <div class="gallery-empty">
                    <i class="fas fa-images"></i>
                    <p>現在、写真はありません。</p>
                </div>`;
            return;
        }

        galleryData.forEach(function (tournament) {
            const card = document.createElement("div");
            card.className = "tournament-card";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", tournament.name + " の写真を見る");

            const coverSrc = tournament.cover
                ? "images/gallery/" + tournament.folder + "/" + tournament.cover
                : null;

            const coverHTML = coverSrc
                ? `<img class="tournament-card-cover" src="${coverSrc}" alt="${tournament.name} カバー写真" loading="lazy">`
                : `<div class="tournament-card-cover-placeholder"><i class="fas fa-image"></i></div>`;

            const count = Array.isArray(tournament.photos) ? tournament.photos.length : 0;

            card.innerHTML = `
                ${coverHTML}
                <div class="tournament-card-body">
                    <p class="tournament-card-name">${tournament.name}</p>
                    <div class="tournament-card-meta">
                        <span>${tournament.date}</span>
                        <span>&middot;</span>
                        <span>${count}枚</span>
                    </div>
                </div>`;

            card.addEventListener("click", function () {
                openTournament(tournament);
            });
            card.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") openTournament(tournament);
            });

            tournamentGrid.appendChild(card);
        });
    }

    // ----------------------------------------
    // 大会内の写真グリッド表示
    // ----------------------------------------
    function openTournament(tournament) {
        tournamentGrid.innerHTML = "";

        // 戻るボタン＋タイトル
        const header = document.createElement("div");
        header.className = "gallery-photos-header";
        header.innerHTML = `
            <button class="gallery-photos-back" id="gallery-back">
                <i class="fas fa-arrow-left"></i> 一覧に戻る
            </button>
            <h3 class="gallery-photos-title">${tournament.name}</h3>`;
        tournamentGrid.appendChild(header);

        document.getElementById("gallery-back").addEventListener("click", renderTournaments);

        // 写真グリッド
        if (!Array.isArray(tournament.photos) || tournament.photos.length === 0) {
            const empty = document.createElement("div");
            empty.className = "gallery-empty";
            empty.innerHTML = `<i class="fas fa-images"></i><p>写真はまだありません。</p>`;
            tournamentGrid.appendChild(empty);
            return;
        }

        const grid = document.createElement("div");
        grid.className = "gallery-photo-grid";

        tournament.photos.forEach(function (photo, index) {
            const item = document.createElement("div");
            item.className = "gallery-photo-item";

            const src = "images/gallery/" + tournament.folder + "/" + photo.file;
            item.innerHTML = `<img src="${src}" alt="${photo.caption || tournament.name + " " + (index + 1)}" loading="lazy">`;

            item.addEventListener("click", function () {
                openLightbox(tournament.photos, index, tournament.folder);
            });

            grid.appendChild(item);
        });

        tournamentGrid.appendChild(grid);
    }

    // ----------------------------------------
    // ライトボックス
    // ----------------------------------------
    function openLightbox(photos, index, folder) {
        currentPhotos = photos;
        currentIndex  = index;
        currentFolder = folder;
        updateLightbox();
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    let currentFolder = "";

    function updateLightbox() {
        const photo = currentPhotos[currentIndex];
        const src   = "images/gallery/" + currentFolder + "/" + photo.file;
        lightboxImg.src        = src;
        lightboxImg.alt        = photo.caption || "";
        lightboxCaption.textContent = photo.caption || "";
        lightboxCounter.textContent = (currentIndex + 1) + " / " + currentPhotos.length;

        lightboxPrev.style.display = currentPhotos.length <= 1 ? "none" : "";
        lightboxNext.style.display = currentPhotos.length <= 1 ? "none" : "";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
        updateLightbox();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % currentPhotos.length;
        updateLightbox();
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", showPrev);
    lightboxNext.addEventListener("click", showNext);

    // 背景クリックで閉じる
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    // キーボード操作
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft")  showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape")     closeLightbox();
    });

    // ----------------------------------------
    // 起動
    // ----------------------------------------
    renderTournaments();
});
