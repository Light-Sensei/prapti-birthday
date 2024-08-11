document.addEventListener('DOMContentLoaded', () => {
    let skipCount = parseInt(localStorage.getItem('skipCount')) || 0;

    function handleSkip() {
        skipCount++;
        localStorage.setItem('skipCount', skipCount);

        if (skipCount > 1) {
            localStorage.setItem('canSelectReward', 'false');
        }

        goToNextGame();
    }

    function goToNextGame() {
        const currentPage = window.location.pathname.split('/').pop();

        switch (currentPage) {
            case 'puzzle.html':
                window.location.href = 'math-game.html';
                break;
            case 'math-game.html':
                window.location.href = 'love-game.html';
                break;
            case 'love-game.html':
                window.location.href = 'rewards.html';
                break;
            default:
                window.location.href = 'index.html';
        }
    }

    function checkSkipStatus() {
        if (skipCount > 1) {
            localStorage.setItem('canSelectReward', 'false');
        }
    }

    checkSkipStatus();

    window.handleSkip = handleSkip;
});
