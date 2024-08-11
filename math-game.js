document.addEventListener('DOMContentLoaded', () => {
    const questionsContainer = document.getElementById('math-questions-container');
    const numQuestions = 10;
    let currentQuestion = 0;

    function generateMathQuestions() {
        for (let i = 0; i < numQuestions; i++) {
            const questionElement = document.createElement('p');
            questionElement.textContent = `Question ${i + 1}: What is ${Math.floor(Math.random() * 10)} + ${Math.floor(Math.random() * 10)}?`;
            const answerInput = document.createElement('input');
            answerInput.type = 'number';
            answerInput.id = `answer-${i}`;
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
            const questionText = document.querySelector(`#math-questions-container p:nth-child(${i * 2 + 1})`).textContent;
            const [_, a, b] = questionText.match(/What is (\d+) \+ (\d+)\?/);
            if (parseInt(input.value, 10) !== (parseInt(a, 10) + parseInt(b, 10))) {
                allCorrect = false;
                break;
            }
        }
        if (allCorrect) {
            document.getElementById('next-game-button').style.display = 'block';
        } else {
            alert('Some answers are incorrect. Please try again.');
        }
    }

    generateMathQuestions();
});
