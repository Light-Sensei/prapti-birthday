document.addEventListener('DOMContentLoaded', () => {
    const skipButton = document.getElementById('skip-button');
    let skipped = false;

    function handleYes() {
        document.getElementById('next-game-button').style.display = 'block';
    }

    function handleNo() {
        const noButton = document.getElementById('no-button');
        const yesButton = document.getElementById('yes-button');

        // Randomly shift the no button's position and increase the yes button's size
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

    // Ensure the skip logic is correctly handled
    if (skipped) {
        localStorage.setItem('canSelectReward', 'false');
    }

    window.handleYes = handleYes;
    window.handleNo = handleNo;
    window.handleSkip = handleSkip;
});
