document.addEventListener('DOMContentLoaded', () => {
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
        const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
        localStorage.setItem('skipCount', skipCount + 1);
        window.location.href = 'rewards.html';
    }

    window.handleYes = handleYes;
    window.handleNo = handleNo;
    window.handleSkip = handleSkip;
});
