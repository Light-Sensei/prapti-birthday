const words = [
    {scrambled: "LOVEPURP", correct: "PURPLE"},
    {scrambled: "MIBG", correct: "BGMI"},
    {scrambled: "NEITEND", correct: "NITEND"}
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
        alert("Incorrect! Try again.");
    }
}

window.onload = loadScrambledWord;
