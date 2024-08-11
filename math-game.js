document.addEventListener('DOMContentLoaded', () => {
    const mathQuestionsContainer = document.getElementById('math-questions-container');
    let correctAnswers = 0;

    const questions = [
        { question: "2 + 2 =", answer: 4 },
        { question: "5 * 3 =", answer: 15 },
        { question: "10 / 2 =", answer: 5 },
        { question: "8 - 4 =", answer: 4 },
        { question: "9 + 1 =", answer: 10 },
        { question: "7 * 2 =", answer: 14 },
        { question: "12 / 3 =", answer: 4 },
        { question: "6 - 3 =", answer: 3 },
        { question: "4 + 6 =", answer: 10 },
        { question: "10 * 1 =", answer: 10 }
    ];

    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${q.question}</p><input type="number" id="answer-${index}"><br>`;
        mathQuestionsContainer.appendChild(div);
    });

    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit Answers";
    submitButton.addEventListener('click', () => {
        correctAnswers = 0;
        questions.forEach((q, index) => {
            const answer = document.getElementById(`answer-${index}`).value;
            if (parseInt(answer) === q.answer) {
                correctAnswers++;
            }
        });

        if (correctAnswers === 10) {
            document.getElementById('next-game-button').style.display = 'block';
        } else {
            alert("You need to get all answers correct!");
        }
    });
    mathQuestionsContainer.appendChild(submitButton);
});
