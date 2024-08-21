document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "https://i.pinimg.com/736x/24/35/13/243513e3b53e6661a8aa0508cf56b906.jpg",
        "https://i.pinimg.com/736x/44/1f/fe/441ffec6fbe3635229182dd6f7cd98c6.jpg",
        "https://i.pinimg.com/736x/ff/fa/55/fffa552ebd817d26cef6bd2083e4f28b.jpg"
    ];
    let currentImage = 0;

    function showNextImage() {
        if (currentImage < images.length) {
            const img = document.createElement('img');
            img.src = images[currentImage];
            img.className = 'fade-image';
            img.style.display = 'block';
            document.getElementById('image-sequence').appendChild(img);

            setTimeout(() => {
                img.style.opacity = 0;
                setTimeout(() => {
                    img.remove();
                    currentImage++;
                    showNextImage();
                }, 1000); // Fade-out duration
            }, 3000); // Display duration
        } else {
            document.getElementById('lights-button').style.display = 'block';
        }
    }

    showNextImage();
});

function switchOnLights() {
    document.body.className = "background-image"; // Change background
    document.getElementById('lights-button').style.display = 'none';
    document.getElementById('birthday-message').classList.remove('hidden');
}

function startGame() {
    window.location.href = 'puzzle.html'; // Redirect to puzzle.html
}
