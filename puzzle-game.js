const imageUrl = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de';
const rows = 3;
const cols = 3;
const pieceSize = 100; // Size of each piece
const puzzleContainer = document.getElementById('puzzle-container');
const nextGameButton = document.getElementById('next-game');

function createPuzzle() {
    let pieces = [];
    for (let i = 0; i < rows * cols; i++) {
        pieces.push(i);
    }

    // Shuffle pieces
    pieces = pieces.sort(() => Math.random() - 0.5);

    pieces.forEach((piece, index) => {
        const x = (piece % cols) * pieceSize;
        const y = Math.floor(piece / cols) * pieceSize;
        const pieceElement = document.createElement('div');
        pieceElement.className = 'puzzle-piece';
        pieceElement.style.backgroundImage = `url(${imageUrl})`;
        pieceElement.style.backgroundPosition = `-${x}px -${y}px`;
        pieceElement.style.left = `${(index % cols) * pieceSize}px`;
        pieceElement.style.top = `${Math.floor(index / cols) * pieceSize}px`;
        pieceElement.draggable = true;
        pieceElement.dataset.index = index;

        pieceElement.addEventListener('dragstart', dragStart);
        pieceElement.addEventListener('dragover', dragOver);
        pieceElement.addEventListener('drop', drop);

        puzzleContainer.appendChild(pieceElement);
    });

    // Create empty slots
    for (let i = 0; i < rows * cols; i++) {
        const emptySlot = document.createElement('div');
        emptySlot.className = 'puzzle-piece';
        emptySlot.style.backgroundColor = '#eee';
        emptySlot.style.left = `${(i % cols) * pieceSize}px`;
        emptySlot.style.top = `${Math.floor(i / cols) * pieceSize}px`;
        emptySlot.dataset.index = i;
        emptySlot.addEventListener('dragover', dragOver);
        emptySlot.addEventListener('drop', drop);
        puzzleContainer.appendChild(emptySlot);
    }
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData('text/plain');
    const draggedElement = document.querySelector(`.puzzle-piece[data-index="${draggedIndex}"]`);
    const targetIndex = e.target.dataset.index;
    
    if (targetIndex !== undefined) {
        e.target.style.backgroundImage = draggedElement.style.backgroundImage;
        e.target.style.backgroundPosition = draggedElement.style.backgroundPosition;
        draggedElement.style.backgroundImage = '';
        draggedElement.style.backgroundPosition = '';
        draggedElement.dataset.index = targetIndex;
        e.target.dataset.index = draggedIndex;
        
        checkCompletion();
    }
}

function checkCompletion() {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let correct = true;

    pieces.forEach(piece => {
        const pieceIndex = parseInt(piece.dataset.index);
        const left = parseInt(piece.style.left) / pieceSize;
        const top = parseInt(piece.style.top) / pieceSize;
        const correctIndex = top * cols + left;

        if (pieceIndex !== correctIndex) {
            correct = false;
        }
    });

    if (correct) {
        nextGameButton.style.display = 'block';
    }
}

function skipGame() {
    window.location.href = 'word-scramble.html';
}

window.onload = createPuzzle;
