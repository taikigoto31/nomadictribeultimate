// 選手データの統合ファイル
// ポジションごとに分かれたファイルを読み込んで統合します
// 各ポジションのデータは以下のファイルで管理されています：
// - js/data/players-handler.js (HANDLER)
// - js/data/players-deep.js (DEEP)
// - js/data/players-staff.js (STAFF)

// 統合された選手データ（既存のコードとの互換性のため）
// 注意: このファイルを読み込む前に、上記3つのファイルを読み込む必要があります
// HandlerとDeepのIDは背番号（number）に合わせています
// StaffのIDは1-3のままです

const playersData = [];

// HANDLER: IDは背番号（number）に合わせている
if (typeof handlerPlayers !== 'undefined') {
    playersData.push(...handlerPlayers);
}

// DEEP: IDは背番号（number）に合わせている
if (typeof deepPlayers !== 'undefined') {
    playersData.push(...deepPlayers);
}

// STAFF: ID 1-3 → 1000-1002に調整（オフセット +999、Handler/Deepと重複しないように）
if (typeof staffPlayers !== 'undefined') {
    const adjustedStaffPlayers = staffPlayers.map(player => ({
        ...player,
        id: player.id + 999 // 1→1000, 2→1001, 3→1002
    }));
    playersData.push(...adjustedStaffPlayers);
}
