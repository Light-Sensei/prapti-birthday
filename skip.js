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
            case 'puzzle-game.html':
                window.location.href = 'word-scramble.html';
                break;
            case 'word-scramble.html':
                window.location.href = 'trivia-quiz.html';
            case 'trivia-quiz.html'
                window.location.href = 'balloon-pop.html';
            case 'balloon-pop.html':
                window.location.href = 'math-game.html';
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
