let score = 0;
let gameInterval;
const gameArea = document.getElementById('game-area');

function startGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    gameInterval = setInterval(createBalloon, 1000);
}

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    balloon.style.bottom = 0;
    balloon.onclick = () => {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
        balloon.remove();
        if (score >= 10) {
            clearInterval(gameInterval);
            document.getElementById('next-game').style.display = 'block';
        }
    };
    gameArea.appendChild(balloon);
    animateBalloon(balloon);
}

function animateBalloon(balloon) {
    let bottom = 0;
    const moveBalloon = setInterval(() => {
        bottom += 2;
        balloon.style.bottom = bottom + 'px';
        if (bottom > window.innerHeight) {
            balloon.remove();
            clearInterval(moveBalloon);
        }
    }, 20);
}
