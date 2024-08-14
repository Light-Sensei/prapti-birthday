const words = [
    {scrambled: "LEURPP", correct: "PURPLE"},
    {scrambled: "MKTC", correct: "TMKC"},
    {scrambled: "MODC", correct: "CODM"}
];

let currentWordIndex = 0;

function loadScrambledWord() {
    document.getElementById('scrambled-word').innerText = words[currentWordIndex].scrambled;
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toUpperCase();
    if (userAnswer === words[currentWordIndex].correct) {
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            loadScrambledWord();
            document.getElementById('user-answer').value = '';
        } else {
            document.getElementById('next-game').style.display = 'block';
        }
    } else {
        alert("L again get rekt");
    }
}

function skipGame() {
    // Redirect to the next game directly if skipped
    window.location.href = 'balloon-pop.html';
}

window.onload = loadScrambledWord;
