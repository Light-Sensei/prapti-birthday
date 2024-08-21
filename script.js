document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const lightsButton = document.getElementById('lights-button');
    const birthdayMessage = document.getElementById('birthday-message');

    // Sequence of images
    setTimeout(() => {
        image1.style.opacity = '1';
    }, 500); // Delay before first image appears

    setTimeout(() => {
        image1.style.opacity = '0';
        image2.style.display = 'block';
        setTimeout(() => {
            image2.style.opacity = '1';
        }, 500);
    }, 3500); // After 3 seconds

    setTimeout(() => {
        image2.style.opacity = '0';
        image3.style.display = 'block';
        setTimeout(() => {
            image3.style.opacity = '1';
        }, 500);
    }, 7000); // After 3 more seconds

    setTimeout(() => {
        image3.style.opacity = '0';
        setTimeout(() => {
            lightsButton.style.display = 'block';
        }, 2000); // Delay before "Switch on the Lights" button appears
    }, 10500); // After 3 more seconds
});

function switchOnLights() {
    const birthdayMessage = document.getElementById('birthday-message');
    const lightsButton = document.getElementById('lights-button');
    
    lightsButton.style.display = 'none'; // Hide the button
    birthdayMessage.classList.remove('hidden'); // Show the birthday message
    
    setTimeout(() => {
        document.querySelector('.birthday-text').style.opacity = '1';
    }, 500); // Delay before the "Happy Birthday" text appears
}
