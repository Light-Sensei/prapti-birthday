let skippedGames = 0; // Tracks the number of games skipped

// Function to handle skipping a game
function handleSkip() {
    skippedGames += 1;

    // Check if more than one game has been skipped
    if (skippedGames > 1) {
        alert('You have skipped more than one game. You cannot select a reward.');
        window.location.href = 'home.html'; // Redirect to the home page or any page you prefer
    } else {
        // Proceed to the next game based on the current page
        const currentPage = document.title.toLowerCase().replace(/ /g, '-'); // e.g., 'puzzle-game'
        switch (currentPage) {
            case 'puzzle-game':
                window.location.href = 'word-scramble.html';
                break;
            case 'word-scramble':
                window.location.href = 'balloon-pop.html';
                break;
            case 'balloon-pop':
                window.location.href = 'trivia-quiz.html';
                break;
            case 'trivia-quiz':
                window.location.href = 'math-game.html';
                break;
            case 'maths-questions':
                window.location.href = 'love-game.html';
                break;
            case 'love-game':
                window.location.href = 'message.html';
                break;
            default:
                window.location.href = 'home.html'; // Fallback to home if currentPage doesn't match
        }
    }
}
