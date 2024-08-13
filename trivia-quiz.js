const questions = [
    {question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4"},
    {question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris"}
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
