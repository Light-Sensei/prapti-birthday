const imgUrl = 'https://i.scdn.co/image/ab67616d0000b27364e7a260933998d297e0a1de';
const rows = 3;
const cols = 3;
const pieceSize = 100; // Size of each piece

let pieces = [];
let board = document.getElementById('puzzle-board');
let solved = false;

function initPuzzle() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.backgroundImage = `url(${imgUrl})`;
            piece.style.backgroundPosition = `-${c * pieceSize}px -${r * pieceSize}px`;
            piece.style.top = `${r * pieceSize}px`;
            piece.style.left = `${c * pieceSize}px`;
            piece.draggable = true;
            piece.dataset.position = `${r},${c}`;
            piece.addEventListener('dragstart', dragStart);
            piece.addEventListener('dragover', dragOver);
            piece.addEventListener('drop', drop);
            pieces.push(piece);
            board.appendChild(piece);
        }
    }
    board.style.width = `${cols * pieceSize}px`;
    board.style.height = `${rows * pieceSize}px`;
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.position);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const fromPosition = e.dataTransfer.getData('text/plain').split(',').map(Number);
    const toPosition = e.target.dataset.position.split(',').map(Number);

    if (fromPosition.join(',') === toPosition.join(',')) return;

    const fromPiece = pieces.find(p => p.dataset.position === fromPosition.join(','));
    const toPiece = pieces.find(p => p.dataset.position === toPosition.join(','));

    if (toPiece) {
        const tempStyle = fromPiece.style.cssText;
        fromPiece.style.cssText = toPiece.style.cssText;
        toPiece.style.cssText = tempStyle;

        if (isSolved()) {
            document.getElementById('next-game').style.display = 'block';
            solved = true;
        }
    }
}

function isSolved() {
    return pieces.every(piece => {
        const [r, c] = piece.dataset.position.split(',').map(Number);
        const top = parseInt(piece.style.top);
        const left = parseInt(piece.style.left);
        return top === r * pieceSize && left === c * pieceSize;
    });
}

function skipGame() {
    // Redirect to the next game directly if skipped
    window.location.href = 'word-scramble.html';
}

window.onload = initPuzzle;
