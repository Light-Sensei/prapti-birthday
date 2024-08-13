const questions = [
    {question: "who loves u the most?", options: ["naim", "nayeem", "niam"], answer: "naim"},
    {question: "whos the best sniper??", options: ["7 RoitoTT", "GyattBotRoito", "me"], answer: "GyattBotRoito"}
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`).join('')}
    `;
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('next-game').style.display = 'block';
        }
    } else {
        alert("Incorrect! Try again.");
    }
}

function skipGame() {
    // Redirect to the next game directly if skipped
    window.location.href = 'maths-questions.html';
}

window.onload = loadQuestion;
