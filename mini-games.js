document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const puzzleSize = 3; // 3x3 puzzle

    // Generate and display puzzle
    function createPuzzle() {
        const imageUrl = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de'; // Use the new image URL
        const pieces = [];

        for (let i = 0; i < puzzleSize * puzzleSize; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imageUrl})`;
            piece.style.backgroundPosition = `-${(i % puzzleSize) * 100}px -${Math.floor(i / puzzleSize) * 100}px`;
            piece.dataset.position = i;
            pieces.push(piece);
        }

        // Shuffle pieces
        pieces.sort(() => Math.random() - 0.5);
        pieces.forEach(piece => puzzleContainer.appendChild(piece));
    }

    window.shufflePuzzle = function() {
        puzzleContainer.innerHTML = '';
        createPuzzle();
    };

    createPuzzle(); // Initialize the puzzle

    // Math Question Script
    const mathProblem = document.getElementById('math-problem');
    const mathFeedback = document.getElementById('math-feedback');

    function generateMathQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = Math.random() > 0.5 ? '+' : '-';
        mathProblem.textContent = `${num1} ${operator} ${num2} = ?`;
        mathProblem.dataset.answer = operator === '+' ? num1 + num2 : num1 - num2;
    }

    generateMathQuestion();

    window.checkMathAnswer = function() {
        const answer = parseInt(document.getElementById('math-answer').value, 10);
        if (answer === parseInt(mathProblem.dataset.answer, 10)) {
            mathFeedback.textContent = 'Correct!';
        } else {
            mathFeedback.textContent = 'Incorrect, try again.';
        }
    };

    // Love Question Script
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    window.handleNoClick = function() {
        noButton.style.position = 'relative';
        noButton.style.left = `${Math.random() * 50}px`;
        noButton.style.top = `${Math.random() * 50}px`;
        yesButton.style.transform = 'scale(1.5)';
    };

    window.handleYesClick = function() {
        alert('Thank you for loving me!');
    };
});
