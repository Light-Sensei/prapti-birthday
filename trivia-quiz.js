const questions = [
    {
        question: "what's my fav sniper",
        options: ["tundra", "locus", "dlq", "hdr"],
        correct: "locus"
    },
    {
        question: "who loves you the most",
        options: ["roito", "niam", "naim", "nayeem"],
        correct: "naim"
    },
    {
        question: "what was the first game we played together?",
        options: ["BGMI", "CODM", "PUBG", "Fortnite"],
        correct: "CODM"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    const question = questions[currentQuestionIndex];
    
    questionElement.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        optionsElement.appendChild(button);
    });
}

function handleAnswer(selected) {
    const question = questions[currentQuestionIndex];
    if (selected === question.correct) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            document.getElementById('next-game').style.display = 'block';
        }
    } else {
        alert("L get rekt");
    }
}

window.onload = loadQuestion;
