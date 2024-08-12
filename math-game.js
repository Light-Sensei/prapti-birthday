document.addEventListener('DOMContentLoaded', () => {
    const mathQuestionsContainer = document.getElementById('math-questions-container');

    const questions = [
        { question: '5 + 3', answer: 8 },
        { question: '10 - 4', answer: 6 },
        { question: '7 * 2', answer: 14 },
        { question: '9 / 3', answer: 3 },
    ];

    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question';

        const label = document.createElement('label');
        label.textContent = q.question + ' = ';
        div.appendChild(label);

        const input = document.createElement('input');
        input.type = 'number';
        input.id = 'answer-' + index;
        div.appendChild(input);

        mathQuestionsContainer.appendChild(div);
    });

    function checkAnswers() {
        let allCorrect = true;
        questions.forEach((q, index) => {
            const userAnswer = parseInt(document.getElementById('answer-' + index).value);
            if (userAnswer !== q.answer) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            document.getElementById('next-game-button').style.display = 'block';
        } else {
            alert('Some answers are incorrect. Please try again.');
        }
    }

    function handleSkip() {
        const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
        localStorage.setItem('skipCount', skipCount + 1);
        window.location.href = 'love-game.html';
    }

    document.getElementById('next-game-button').addEventListener('click', checkAnswers);
    window.handleSkip = handleSkip;
});
