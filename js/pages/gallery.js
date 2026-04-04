// ============================================
// フォトギャラリーページ
//
// 大会名・日付・URLは scheduleData から自動取得します。
// gallery-data.js の tournament フィールドを scheduleData の tournament と一致させてください。
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    const tournamentGrid  = document.getElementById("gallery-tournament-grid");
    const lightbox        = document.getElementById("lightbox");
    const lightboxImg     = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxCounter = document.getElementById("lightbox-counter");
    const lightboxClose   = document.getElementById("lightbox-close");
    const lightboxPrev    = document.getElementById("lightbox-prev");
    const lightboxNext    = document.getElementById("lightbox-next");

    let currentPhotos = [];
    let currentIndex  = 0;
    let currentFolder = "";

    // ----------------------------------------
    // scheduleData から大会の最初のエントリを取得
    // ----------------------------------------
    function lookupTournament(tournamentName) {
        if (typeof scheduleData === "undefined") return null;

        for (const year of Object.keys(scheduleData)) {
            const months = scheduleData[year];
            for (const month of Object.keys(months)) {
                const entries = months[month];
                if (!Array.isArray(entries)) continue;
                const found = entries.find(e => e.tournament === tournamentName);
                if (found) return { year, entry: found };
            }
        }
        return null;
    }

    // "02.14" → "2026.02.14" のような表示用日付文字列を生成
    function formatDate(year, dateStr) {
        return year + "." + dateStr;
    }

    // ----------------------------------------
    // 大会カード一覧
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

        galleryData.forEach(function (item) {
            const meta    = lookupTournament(item.tournament);
            const name    = item.tournament;
            const date    = meta ? formatDate(meta.year, meta.entry.date) : "";
            const count   = Array.isArray(item.photos) ? item.photos.length : 0;

            const coverSrc = item.cover
                ? "images/gallery/" + item.folder + "/" + item.cover
                : null;

            const coverHTML = coverSrc
                ? `<img class="tournament-card-cover" src="${coverSrc}" alt="${name} カバー写真" loading="lazy">`
                : `<div class="tournament-card-cover-placeholder"><i class="fas fa-image"></i></div>`;

            const card = document.createElement("div");
            card.className = "tournament-card";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", name + " の写真を見る");

            card.innerHTML = `
                <div class="tournament-card-thumb">
                    ${coverHTML}
                    <div class="tournament-card-overlay">
                        <p class="tournament-card-name">${name}</p>
                        <div class="tournament-card-meta">
                            ${date ? `<span><i class="fas fa-calendar-alt"></i> ${date}</span>` : ""}
                            <span><i class="fas fa-images"></i> ${count}枚</span>
                        </div>
                    </div>
                </div>`;

            card.addEventListener("click", function () { openTournament(item, name); });
            card.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") openTournament(item, name);
            });

            tournamentGrid.appendChild(card);
        });
    }

    // ----------------------------------------
    // 写真グリッド（大会内）
    // ----------------------------------------
    function openTournament(item, name) {
        tournamentGrid.innerHTML = "";

        const header = document.createElement("div");
        header.className = "gallery-photos-header";
        header.innerHTML = `
            <button class="gallery-photos-back" id="gallery-back">
                <i class="fas fa-arrow-left"></i> 一覧に戻る
            </button>
            <h3 class="gallery-photos-title">${name}</h3>`;
        tournamentGrid.appendChild(header);

        document.getElementById("gallery-back").addEventListener("click", renderTournaments);

        if (!Array.isArray(item.photos) || item.photos.length === 0) {
            const empty = document.createElement("div");
            empty.className = "gallery-empty";
            empty.innerHTML = `<i class="fas fa-images"></i><p>写真はまだありません。</p>`;
            tournamentGrid.appendChild(empty);
            return;
        }

        const grid = document.createElement("div");
        grid.className = "gallery-photo-grid";

        item.photos.forEach(function (photo, index) {
            const cell = document.createElement("div");
            cell.className = "gallery-photo-item";
            const src = "images/gallery/" + item.folder + "/" + photo.file;
            cell.innerHTML = `<img src="${src}" alt="${photo.caption || name + " " + (index + 1)}" loading="lazy">`;
            cell.addEventListener("click", function () {
                openLightbox(item.photos, index, item.folder);
            });
            grid.appendChild(cell);
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

    function updateLightbox() {
        const photo = currentPhotos[currentIndex];
        const src   = "images/gallery/" + currentFolder + "/" + photo.file;
        lightboxImg.src              = src;
        lightboxImg.alt              = photo.caption || "";
        lightboxCaption.textContent  = photo.caption || "";
        lightboxCounter.textContent  = (currentIndex + 1) + " / " + currentPhotos.length;
        lightboxPrev.style.display   = currentPhotos.length <= 1 ? "none" : "";
        lightboxNext.style.display   = currentPhotos.length <= 1 ? "none" : "";
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
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft")  showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape")     closeLightbox();
    });

    // ----------------------------------------
    // 起動（URLパラメータ ?tournament=xxx で直接開く）
    // ----------------------------------------
    const urlParams = new URLSearchParams(window.location.search);
    const tournamentParam = urlParams.get("tournament");

    if (tournamentParam && Array.isArray(galleryData)) {
        const target = galleryData.find(item => item.tournament === tournamentParam);
        if (target) {
            openTournament(target, target.tournament);
        } else {
            renderTournaments();
        }
    } else {
        renderTournaments();
    }
});
