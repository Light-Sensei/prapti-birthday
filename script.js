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
        }, 2000);
    }, 10500); // After 3 more seconds
});

function switchOnLights() {
    document.body.className = 'background-image';
    document.getElementById('lights-button').style.display = 'none';
    document.getElementById('birthday-message').style.display = 'block';
}
