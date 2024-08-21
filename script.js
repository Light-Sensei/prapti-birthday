document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fade-image');
    const lightsButton = document.getElementById('lights-button');
    const birthdayMessage = document.getElementById('birthday-message');
    const mainBody = document.getElementById('main-body');

    let currentIndex = 0;

    function showNextImage() {
        if (currentIndex < images.length) {
            images[currentIndex].style.display = 'block';
            images[currentIndex].style.opacity = '1';

            setTimeout(() => {
                images[currentIndex].style.opacity = '0';
                setTimeout(() => {
                    images[currentIndex].style.display = 'none';
                    currentIndex++;
                    showNextImage();
                }, 1000); // Ensure image fades out before hiding
            }, 3000); // Display each image for 3 seconds
        } else {
            lightsButton.style.display = 'block';
        }
    }

    showNextImage();
});

function switchOnLights() {
    document.getElementById('main-body').className = 'background-original'; // Apply the original background
    document.getElementById('lights-button').style.display = 'none';
    document.getElementById('birthday-message').style.display = 'block';
}
