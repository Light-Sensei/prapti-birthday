document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    function handleNoClick() {
        const randX = Math.floor(Math.random() * 300) + 'px';
        const randY = Math.floor(Math.random() * 300) + 'px';
        noButton.style.position = 'absolute';
        noButton.style.left = randX;
        noButton.style.top = randY;
    }

    function handleYesClick() {
        alert("Yay! You love me!");
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        const goToRewardsButton = document.createElement('button');
        goToRewardsButton.innerText = "Go to Rewards";
        goToRewardsButton.className = 'purple-button';
        goToRewardsButton.onclick = () => location.href = 'rewards.html';
        document.querySelector('.content-container').appendChild(goToRewardsButton);
    }

    noButton.addEventListener('click', handleNoClick);
    yesButton.addEventListener('click', handleYesClick);
});
