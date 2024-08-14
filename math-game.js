document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('math-questions-container');
    const numQuestions = 10;

    function generateMathQuestions() {
        for (let i = 0; i < numQuestions; i++) {
            const questionElement = document.createElement('p');
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);
            questionElement.textContent = `Question ${i + 1}: What is ${num1} + ${num2}?`;

            const answerInput = document.createElement('input');
            answerInput.type = 'number';
            answerInput.id = `answer-${i}`;
            answerInput.dataset.correctAnswer = num1 + num2;  // Store the correct answer in a data attribute

            questionsContainer.appendChild(questionElement);
            questionsContainer.appendChild(answerInput);
        }

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.onclick = handleSubmit;
        questionsContainer.appendChild(submitButton);
    }

    function handleSubmit() {
        let allCorrect = true;

        for (let i = 0; i < numQuestions; i++) {
            const input = document.getElementById(`answer-${i}`);
            const correctAnswer = parseInt(input.dataset.correctAnswer, 10);

            if (parseInt(input.value, 10) !== correctAnswer) {
                allCorrect = false;
                break;
            }
        }

        if (allCorrect) {
            document.getElementById('next-game-button').style.display = 'block';
        } else {
            alert('Incorrect answer, please try again!');
        }
    }

    generateMathQuestions();
});
