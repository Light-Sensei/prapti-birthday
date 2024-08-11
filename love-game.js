document.addEventListener('DOMContentLoaded', () => {
    let skipped = false;

    function handleYes() {
        document.getElementById('next-game-button').style.display = 'block';
    }

    function handleNo() {
        const noButton = document.getElementById('no-button');
        const yesButton = document.getElementById('yes-button');

        noButton.style.position = 'relative';
        noButton.style.top = `${Math.random() * 10}px`;
        noButton.style.left = `${Math.random() * 10}px`;

        yesButton.style.fontSize = '1.5rem';
    }

    function handleSkip() {
        skipped = true;
        let skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
        skipCount++;
        localStorage.setItem('skipCount', skipCount);

        if (skipCount > 1) {
            localStorage.setItem('canSelectReward', 'false');
        }

        window.location.href = 'rewards.html';
    }

    function goToNextGame() {
        const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;

        if (skipCount > 1) {
            localStorage.setItem('canSelectReward', 'false');
        }

        window.location.href = 'rewards.html';
    }

    window.handleYes = handleYes;
    window.handleNo = handleNo;
    window.handleSkip = handleSkip;
    window.goToNextGame = goToNextGame;
});
