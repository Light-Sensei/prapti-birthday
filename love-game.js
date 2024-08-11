document.addEventListener('DOMContentLoaded', () => {
    let skipped = false;

    function handleYes() {
        document.getElementById('next-game-button').style.display = 'block';
    }

    function handleNo() {
        // No button functionality - Optional
    }

    function handleSkip() {
        skipped = true;
        localStorage.setItem('skipCount', (parseInt(localStorage.getItem('skipCount')) || 0) + 1);
        localStorage.setItem('canSelectReward', 'false');
        window.location.href = 'rewards.html';
    }

    window.handleYes = handleYes;
    window.handleNo = handleNo;
    window.handleSkip = handleSkip;
});
