document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "https://i.pinimg.com/736x/24/35/13/243513e3b53e6661a8aa0508cf56b906.jpg",
        "https://i.pinimg.com/736x/44/1f/fe/441ffec6fbe3635229182dd6f7cd98c6.jpg",
        "https://i.pinimg.com/736x/ff/fa/55/fffa552ebd817d26cef6bd2083e4f28b.jpg"
    ];
    let currentImage = 0;

    function showNextImage() {
        if (currentImage < images.length) {
            const img = document.getElementById(`image${currentImage + 1}`);
            img.src = images[currentImage];
            img.style.display = 'block';

            setTimeout(() => {
                img.style.opacity = 0;
                setTimeout(() => {
                    img.style.display = 'none';
                    img.style.opacity = 1;
                    currentImage++;
                    showNextImage();
                }, 1000); // Fade-out duration
            }, 3000); // Display duration
        } else {
            document.getElementById('lights-button').classList.remove('hidden');
        }
    }

    showNextImage();
});

function switchOnLights() {
    document.getElementById('main-body').classList.remove('background-black');
    document.getElementById('main-body').classList.add('background-image');
    document.getElementById('lights-button').classList.add('hidden');
    document.getElementById('birthday-message').classList.remove('hidden');
}

function startGame() {
    window.location.href = 'puzzle-game.html'; // Redirect to the first game page
}
