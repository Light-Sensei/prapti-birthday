document.addEventListener('DOMContentLoaded', () => {
    const imageSrc = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de'; // Update with your image URL
    const rows = 4;
    const cols = 4;
    let emptyX = 3;
    let emptyY = 3;

    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    puzzleContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    // Create the puzzle pieces
    let pieces = [];
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (x === 3 && y === 3) continue; // Leave the last piece as empty

            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imageSrc})`;
            piece.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
            piece.style.backgroundPosition = `${(x / (cols - 1)) * 100}% ${(y / (rows - 1)) * 100}%`;
            piece.dataset.x = x;
            piece.dataset.y = y;
            pieces.push(piece);
            puzzleContainer.appendChild(piece);

            piece.addEventListener('click', () => {
                movePiece(x, y);
            });
        }
    }

    // Shuffle the puzzle pieces (simple shuffle)
    pieces.forEach(piece => {
        const randomIndex = Math.floor(Math.random() * pieces.length);
        puzzleContainer.appendChild(pieces[randomIndex]);
    });

    function movePiece(x, y) {
        const dx = Math.abs(x - emptyX);
        const dy = Math.abs(y - emptyY);

        if (dx + dy === 1) {
            const piece = document.querySelector(`.puzzle-piece[data-x="${x}"][data-y="${y}"]`);
            piece.style.gridColumnStart = emptyX + 1;
            piece.style.gridRowStart = emptyY + 1;

            // Swap coordinates
            piece.dataset.x = emptyX;
            piece.dataset.y = emptyY;

            emptyX = x;
            emptyY = y;

            checkWinCondition();
        }
    }

    function checkWinCondition() {
        const pieces = document.querySelectorAll('.puzzle-piece');
        let correct = true;
        pieces.forEach(piece => {
            const x = parseInt(piece.dataset.x);
            const y = parseInt(piece.dataset.y);
            const index = y * cols + x;
            const correctX = index % cols;
            const correctY = Math.floor(index / cols);
            if (x !== correctX || y !== correctY) {
                correct = false;
            }
        });

        if (correct) {
            document.getElementById('next-game-button').style.display = 'block';
        }
    }

    function handleSkip() {
        const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
        localStorage.setItem('skipCount', skipCount + 1);
        window.location.href = 'math-game.html';
    }

    window.handleSkip = handleSkip;
});
