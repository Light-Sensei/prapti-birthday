document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const imageUrl = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de'; // The image for the puzzle
    const puzzleSize = 3; // 3x3 puzzle
    const totalPieces = puzzleSize * puzzleSize;
    let pieces = [];

    function createPuzzle() {
        puzzleContainer.innerHTML = ''; // Clear the container
        pieces = [];

        // Create puzzle pieces
        for (let i = 0; i < totalPieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imageUrl})`;

            const x = (i % puzzleSize) * 100;
            const y = Math.floor(i / puzzleSize) * 100;
            piece.style.backgroundPosition = `-${x}px -${y}px`;
            piece.dataset.index = i;

            piece.addEventListener('click', () => movePiece(i));

            pieces.push(piece);
            puzzleContainer.appendChild(piece);
        }

        shufflePuzzle();
    }

    function shufflePuzzle() {
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i].dataset.index, pieces[j].dataset.index] = [pieces[j].dataset.index, pieces[i].dataset.index];
            [pieces[i].style.order, pieces[j].style.order] = [pieces[j].style.order, pieces[i].style.order];
        }
    }

    function movePiece(index) {
        const emptyPieceIndex = pieces.findIndex(piece => !piece.style.order);
        if (Math.abs(index - emptyPieceIndex) === 1 || Math.abs(index - emptyPieceIndex) === puzzleSize) {
            [pieces[index].dataset.index, pieces[emptyPieceIndex].dataset.index] = [pieces[emptyPieceIndex].dataset.index, pieces[index].dataset.index];
            [pieces[index].style.order, pieces[emptyPieceIndex].style.order] = [pieces[emptyPieceIndex].style.order, pieces[index].style.order];
        }
    }

    createPuzzle();
});
