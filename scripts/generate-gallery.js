// ============================================
// ギャラリーデータ自動生成スクリプト
//
// 使い方：
//   node scripts/generate-gallery.js
//
// やること：
//   1. js/data/gallery/gallery-config.json を読む（大会名・フォルダの対応表）
//   2. images/gallery/{folder}/ の画像ファイルを自動スキャン
//   3. js/data/gallery/gallery-data.js を自動生成
//
// 新しい大会を追加するときは gallery-config.json にエントリを追加して
// このスクリプトを実行するだけでOK。
// ============================================

const fs   = require("fs");
const path = require("path");

const ROOT        = path.resolve(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, "js/data/gallery/gallery-config.json");
const OUTPUT_PATH = path.join(ROOT, "js/data/gallery/gallery-data.js");
const IMAGES_DIR  = path.join(ROOT, "images/gallery");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function getImageFiles(folderPath) {
    if (!fs.existsSync(folderPath)) return [];
    return fs.readdirSync(folderPath)
        .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
        .sort();
}

function main() {
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));

    const entries = config.map(item => {
        const folderPath = path.join(IMAGES_DIR, item.folder);
        const files      = getImageFiles(folderPath);
        const cover      = item.cover || (files.length > 0 ? files[0] : "");

        const photosLines = files
            .map(f => `        { file: "${f}", caption: "" }`)
            .join(",\n");

        return `    {
        tournament: "${item.tournament}",
        folder: "${item.folder}",
        cover: "${cover}",
        photos: [
${photosLines}
        ]
    }`;
    });

    const output = `// ============================================
// フォトギャラリー データ
// ※ このファイルは scripts/generate-gallery.js で自動生成されます。
//   直接編集せず、スクリプトを実行してください。
//
// 新しい大会の追加：
//   1. js/data/gallery/gallery-config.json にエントリを追加
//   2. images/gallery/{folder}/ に写真を入れる
//   3. node scripts/generate-gallery.js を実行
// ============================================

const galleryData = [
${entries.join(",\n")}
];
`;

    fs.writeFileSync(OUTPUT_PATH, output, "utf-8");
    console.log("✓ gallery-data.js を生成しました");
    config.forEach((item, i) => {
        const files = getImageFiles(path.join(IMAGES_DIR, item.folder));
        console.log(`  - ${item.tournament}（${files.length}枚）`);
    });
}

main();
