document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    const imageUrl = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de';
    const puzzleSize = 4; // 4x4 puzzle
    const totalPieces = puzzleSize * puzzleSize - 1; // One piece will be empty
    let pieces = [];
    let emptyIndex = totalPieces; // Last piece is empty

    function createPuzzle() {
        puzzleContainer.innerHTML = '';
        pieces = [];

        for (let i = 0; i < totalPieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imageUrl})`;

            const x = (i % puzzleSize) * 100;
            const y = Math.floor(i / puzzleSize) * 100;
            piece.style.backgroundPosition = `-${x}px -${y}px`;
            piece.dataset.index = i;

            piece.setAttribute('draggable', 'true');
            piece.addEventListener('dragstart', dragStart);
            piece.addEventListener('dragend', dragEnd);

            pieces.push(piece);
            puzzleContainer.appendChild(piece);
        }

        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'puzzle-piece empty';
        puzzleContainer.appendChild(emptyDiv);

        shufflePuzzle();
    }

    function shufflePuzzle() {
        const shuffledIndexes = [...Array(totalPieces).keys()].sort(() => Math.random() - 0.5);
        pieces.forEach((piece, i) => {
            piece.dataset.index = shuffledIndexes[i];
            piece.style.order = shuffledIndexes[i];
        });
    }

    function dragStart(event) {
        event.target.classList.add('dragging');
        event.dataTransfer.setData('text/plain', event.target.dataset.index);
    }

    function dragEnd(event) {
        event.target.classList.remove('dragging');
    }

    puzzleContainer.addEventListener('dragover', event => {
        event.preventDefault();
        const draggingPiece = document.querySelector('.dragging');
        const target = event.target;
        
        if (target && target.classList.contains('empty')) {
            const emptyOrder = parseInt(target.style.order, 10);
            const draggingOrder = parseInt(draggingPiece.style.order, 10);
            
            if (isValidMove(emptyOrder, draggingOrder)) {
                swapPieces(draggingPiece, target);
            }
        }
    });

    function swapPieces(draggingPiece, emptyPiece) {
        const tempOrder = draggingPiece.style.order;
        draggingPiece.style.order = emptyPiece.style.order;
        emptyPiece.style.order = tempOrder;

        if (isPuzzleSolved()) {
            document.getElementById('next-game-button').style.display = 'block';
        }
    }

    function isValidMove(emptyOrder, draggingOrder) {
        const diff = Math.abs(emptyOrder - draggingOrder);
        return diff === 1 || diff === puzzleSize;
    }

    function isPuzzleSolved() {
        return pieces.every(piece => parseInt(piece.dataset.index, 10) === parseInt(piece.style.order, 10));
    }

    createPuzzle();
});
