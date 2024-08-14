let skipCount = 0; // Tracks the number of skips

function handleSkip() {
    skipCount++;
    
    // Save the skipCount in localStorage to persist it across different games/pages
    localStorage.setItem('skipCount', skipCount);

    // Redirect to the next game or to the reward page if all games are skipped
    redirectToNextGame();
}

function redirectToNextGame() {
    const currentUrl = window.location.pathname;
    
    // Adjust the logic here to determine the next game
    if (currentUrl.includes('puzzle')) {
        window.location.href = 'word-scramble.html';
    } else if (currentUrl.includes('word-scramble')) {
        window.location.href = 'balloon-pop.html';
    } else if (currentUrl.includes('balloon-pop')) {
        window.location.href = 'trivia-quiz.html';
    } else if (currentUrl.includes('trivia-quiz')) {
        window.location.href = 'math-game.html';
    } else if (currentUrl.includes('math-game')) {
        window.location.href = 'love-game.html';
    } else if (currentUrl.includes('love-game')) {
        window.location.href = 'message.html';
    } else if (currentUrl.includes('message')) {
        window.location.href = 'rewards.html';
    }
}

function checkSkipCount() {
    // Get the skipCount from localStorage
    skipCount = parseInt(localStorage.getItem('skipCount')) || 0;

    // You can handle specific conditions based on skipCount here if needed
    // For example, you can disable the rewards button if skipCount is too high.
    if (skipCount > 1 && window.location.pathname.includes('rewards.html')) {
        alert('oi complete all the games to get it LMFAO');
        // Disable or hide reward selection options if needed
    }
}

// Call this function on each page to enforce the skip logic
document.addEventListener('DOMContentLoaded', checkSkipCount);
