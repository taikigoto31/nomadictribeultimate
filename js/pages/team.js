document.addEventListener("DOMContentLoaded", function() {
    // 選手データをカテゴリ別に振り分けるコンテナを取得
    const handlerGrid = document.getElementById("handler-grid");
    const deepGrid = document.getElementById("deep-grid");
    const staffGrid = document.getElementById("staff-grid");
    const sortTabs = document.querySelectorAll(".team-sort-tab");
    const sortContent = document.getElementById("team-sort-content");
    const positionSections = document.querySelectorAll("[data-position-section]");
    const positionNav = document.querySelector(".team-nav-list");

    if (typeof playersData === "undefined" || !handlerGrid || !deepGrid || !staffGrid) {
        console.error("playersData が見つからないか、グリッドコンテナがありません。");
        console.log("playersData の型:", typeof playersData);
        console.log("handlerGrid:", handlerGrid);
        console.log("deepGrid:", deepGrid);
        console.log("staffGrid:", staffGrid);
        return;
    }

    const groupedPlayers = groupPlayersByPosition(playersData);
    const UNIVERSITY_SCORE = {
        "千葉大学": 57.5,
        "中央大学": 57.5,
        "日本体育大学": 42.5,
        "明治大学": 62.5,
        "慶應義塾大学": 67.5,
        "国際基督教大学": 65.0,
        "上智大学": 67.0,
        "筑波大学": 60.0,
        "秋田大学": 47.5,
        "同志社大学": 60.0,
        "早稲田大学": 67.5,
        "Deakin University": 54.0,
        "関西学院大学": 55.0
    };

    renderAllGroups();

    if (sortTabs.length > 0) {
        sortTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                setActiveTab(tab.dataset.sort || "position");
            });
        });
    }

    function renderAllGroups() {
        const sortKey = getActiveSortKey();
        if (sortKey === "position") {
            togglePositionSections(true);
            if (sortContent) {
                sortContent.innerHTML = "";
            }
            renderGroup("HANDLER", handlerGrid, "number");
            renderGroup("DEEP", deepGrid, "number");
            renderGroup("STAFF", staffGrid, "number");
            return;
        }

        togglePositionSections(false);
        if (!sortContent) return;

        if (sortKey === "number") {
            renderFlatList(sortContent, sortPlayers(getAllPlayers(), "number"));
        } else if (sortKey === "birth") {
            renderGroupedList(sortContent, groupByBirthYear(getAllPlayers()), "");
        } else if (sortKey === "university") {
            renderGroupedList(sortContent, groupByUniversity(getAllPlayers()), "");
        }
    }

    function getActiveSortKey() {
        const active = document.querySelector(".team-sort-tab.is-active");
        return active ? active.dataset.sort : "position";
    }

    function setActiveTab(sortKey) {
        sortTabs.forEach(tab => {
            const isActive = tab.dataset.sort === sortKey;
            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-selected", isActive ? "true" : "false");
        });
        renderAllGroups();
    }

    function togglePositionSections(show) {
        positionSections.forEach(section => {
            section.style.display = show ? "" : "none";
        });
        if (positionNav) {
            positionNav.style.display = show ? "" : "none";
        }
    }

    function renderGroup(position, container, sortKey) {
        if (!container) return;
        container.innerHTML = "";

        const players = groupedPlayers[position] || [];
        const effectiveSortKey = position === "STAFF" && sortKey === "number" ? "id" : sortKey;
        const sortedPlayers = sortPlayers(players, effectiveSortKey);

        sortedPlayers.forEach(player => {
            container.insertAdjacentHTML("beforeend", createPlayerCard(player));
        });
    }

    function renderFlatList(container, players) {
        container.innerHTML = `
            <div class="team-sort-grid">
                ${players.map(player => createPlayerCard(player)).join("")}
            </div>
        `;
    }

    function renderGroupedList(container, groups, label) {
        const groupHtml = groups.map(group => {
            const title = group.title
                ? (label ? `${label} ${group.title}` : `${group.title}`)
                : (label ? `${label} 未設定` : "未設定");
            const cards = group.items.map(player => createPlayerCard(player)).join("");
            return `
                <div class="team-sort-group">
                    <h4 class="team-sort-title">${title}</h4>
                    <div class="team-sort-grid">${cards}</div>
                </div>
            `;
        }).join("");
        container.innerHTML = groupHtml;
    }

    function createPlayerCard(player) {
        const isBirthday = isBirthdayToday(player);
        const birthdayClass = isBirthday ? " is-birthday" : "";
        const birthdayBadge = isBirthday ? '<span class="birthday-badge">HAPPY BIRTHDAY</span>' : "";
        return `
            <a href="player.html?id=${player.id}" class="player-card-link${birthdayClass}">
                <div class="player-card">
                    <div class="player-image">
                        <img src="${player.playerImage}" 
                             alt="${player.name}" 
                             loading="lazy"
                             onerror="handlePlayerImageError(this);">
                    </div>
                    <div class="player-info">
                        ${birthdayBadge}
                        <span class="player-number">${player.number ? "#" + player.number : ""}</span>
                        <span class="player-position">${player.role || ""}</span>
                        <span class="player-name">${player.name}</span>
                    </div>
                </div>
            </a>
        `;
    }

    window.handlePlayerImageError = function(img) {
        const current = img.getAttribute("src") || "";
        if (!img.dataset.fallbackTried) {
            const fallback = swapImageExtension(current);
            if (fallback && fallback !== current) {
                img.dataset.fallbackTried = "true";
                img.src = fallback;
                return;
            }
        }
        const link = img.closest(".player-card-link");
        if (link) {
            link.remove();
        }
    };

    function swapImageExtension(path) {
        if (!path) return "";
        if (path.toLowerCase().endsWith(".jpg")) {
            return path.slice(0, -4) + ".png";
        }
        if (path.toLowerCase().endsWith(".png")) {
            return path.slice(0, -4) + ".jpg";
        }
        return path;
    }

    function groupPlayersByPosition(players) {
        const grouped = {
            HANDLER: [],
            DEEP: [],
            STAFF: []
        };

        players.forEach(player => {
            if (!player.playerImage || (typeof player.playerImage === "string" && player.playerImage.trim() === "")) {
                return;
            }
            if (grouped[player.position]) {
                grouped[player.position].push(player);
            }
        });

        return grouped;
    }

    function getAllPlayers() {
        return playersData.filter(player => {
            return player.playerImage && String(player.playerImage).trim() !== "";
        });
    }

    function groupByBirthYear(players) {
        const map = new Map();
        players.forEach(player => {
            const year = extractBirthYear(player.bio);
            const key = year ? String(year) : "";
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(player);
        });
        const entries = Array.from(map.entries()).sort((a, b) => compareNullableNumber(parseNullableNumber(a[0]), parseNullableNumber(b[0])));
        return entries.map(([title, items]) => ({
            title,
            items: sortPlayers(items, "number")
        }));
    }

    function groupByUniversity(players) {
        const map = new Map();
        players.forEach(player => {
            const uni = extractUniversity(player.bio);
            const key = uni || "";
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(player);
        });
        const entries = Array.from(map.entries()).sort((a, b) => {
            if (!a[0] && !b[0]) return 0;
            if (!a[0]) return 1;
            if (!b[0]) return -1;
            const aScore = getUniversityScore(a[0]);
            const bScore = getUniversityScore(b[0]);
            if (aScore !== bScore) return bScore - aScore;
            return a[0].localeCompare(b[0], "ja");
        });
        return entries.map(([title, items]) => ({
            title,
            items: sortPlayers(items, "number")
        }));
    }

    function getUniversityScore(name) {
        if (!name) return -1;
        const score = UNIVERSITY_SCORE[name];
        return Number.isFinite(score) ? score : -1;
    }

    function sortPlayers(players, sortKey) {
        const list = [...players];
        list.sort((a, b) => {
            switch (sortKey) {
                case "birth":
                    return compareBirthYear(a, b) || compareName(a, b);
                case "university":
                    return compareUniversity(a, b) || compareName(a, b);
                case "id":
                    return compareId(a, b) || compareName(a, b);
                case "number":
                default:
                    return compareNumberWithStaff(a, b) || compareName(a, b);
            }
        });
        return list;
    }

    function compareNumber(a, b) {
        const aNum = parseNullableNumber(a.number);
        const bNum = parseNullableNumber(b.number);
        return compareNullableNumber(aNum, bNum);
    }

    function compareNumberWithStaff(a, b) {
        const aIsStaff = a.position === "STAFF";
        const bIsStaff = b.position === "STAFF";
        if (aIsStaff && bIsStaff) {
            return compareId(a, b);
        }
        return compareNumber(a, b);
    }

    function compareBirthYear(a, b) {
        const aYear = extractBirthYear(a.bio);
        const bYear = extractBirthYear(b.bio);
        return compareNullableNumber(aYear, bYear);
    }

    function compareUniversity(a, b) {
        const aUni = extractUniversity(a.bio);
        const bUni = extractUniversity(b.bio);
        if (!aUni && !bUni) return 0;
        if (!aUni) return 1;
        if (!bUni) return -1;
        return aUni.localeCompare(bUni, "ja");
    }

    function compareId(a, b) {
        const aId = parseNullableNumber(a.id);
        const bId = parseNullableNumber(b.id);
        return compareNullableNumber(aId, bId);
    }

    function compareName(a, b) {
        return (a.name || "").localeCompare(b.name || "", "ja");
    }

    function parseNullableNumber(value) {
        const num = parseInt(value, 10);
        return Number.isFinite(num) ? num : null;
    }

    function compareNullableNumber(aNum, bNum) {
        if (aNum === null && bNum === null) return 0;
        if (aNum === null) return 1;
        if (bNum === null) return -1;
        return aNum - bNum;
    }

    function extractBirthdate(bioText) {
        const match = bioText.match(/生年月日：(\d{4})\/(\d{2})\/(\d{2})/);
        if (!match) return null;
        const month = parseInt(match[2], 10);
        const day = parseInt(match[3], 10);
        if (Number.isNaN(month) || Number.isNaN(day)) return null;
        return { month, day };
    }

    function extractBirthYear(bioText) {
        if (!bioText) return null;
        const match = bioText.match(/生年月日：(\d{4})\/\d{2}\/\d{2}/);
        if (!match) return null;
        const year = parseInt(match[1], 10);
        return Number.isFinite(year) ? year : null;
    }

    function extractUniversity(bioText) {
        if (!bioText) return "";
        const match = bioText.match(/出身大学：([^　/]+)/);
        return match ? match[1].trim() : "";
    }

    function isBirthdayToday(player) {
        const birthdate = extractBirthdate(player && player.bio ? player.bio : "");
        if (!birthdate) return false;
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        return birthdate.month === month && birthdate.day === day;
    }
});