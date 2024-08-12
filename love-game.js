function handleYes() {
    const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
    if (skipCount > 1) {
        alert("You skipped too many games! You can't select your reward.");
    } else {
        window.location.href = 'rewards.html';
    }
}

function handleNo() {
    alert('Please try again!');
    // The button can move around here if needed
}

function handleSkip() {
    const skipCount = parseInt(localStorage.getItem('skipCount')) || 0;
    localStorage.setItem('skipCount', skipCount + 1);
    window.location.href = 'rewards.html';
}
