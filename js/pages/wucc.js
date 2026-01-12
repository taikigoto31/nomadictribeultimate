// ============================================
// WUCCページ：カウントダウン機能
// ============================================

document.addEventListener("DOMContentLoaded", function() {
    // カウントダウンターゲット日時: 2026年8月15日（土）00:00:00
    const targetDate = new Date('2026-08-15T00:00:00');
    
    // カウントダウン表示要素
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    /**
     * カウントダウンを更新
     */
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;
        
        // 時間切れの場合
        if (timeDifference <= 0) {
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            return;
        }
        
        // 残り時間を計算
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // 表示を更新
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // 初回表示
    updateCountdown();
    
    // 1秒ごとに更新
    setInterval(updateCountdown, 1000);
});

