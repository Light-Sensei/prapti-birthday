document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fade-image');
    const lightsButton = document.getElementById('lights-button');
    const birthdayMessage = document.getElementById('birthday-message');

    let currentIndex = 0;

    function showNextImage() {
        if (currentIndex < images.length) {
            images[currentIndex].style.opacity = '1';

            setTimeout(() => {
                images[currentIndex].style.opacity = '0';
                currentIndex++;
                if (currentIndex < images.length) {
                    setTimeout(showNextImage, 2000);
                } else {
                    lightsButton.style.display = 'block';
                }
            }, 3000);
        }
    }

    showNextImage();
});

function switchOnLights() {
    document.body.className = 'background-original';
    document.getElementById('lights-button').style.display = 'none';
    document.getElementById('birthday-message').style.display = 'block';
}
