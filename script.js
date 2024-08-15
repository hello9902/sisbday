let currentIndex = 0;

function openCard() {
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.letter').style.transform = 'translateY(0)';
    setTimeout(() => {
        document.querySelector('.envelope').style.display = 'none';
        document.querySelector('.full-letter').style.display = 'block';
        startImageCarousel();
    }, 500); // Delay to allow the envelope opening animation to complete
}

function startImageCarousel() {
    const images = document.querySelectorAll('.image-frame img');
    images[currentIndex].classList.add('active');

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 2000); // Change image every 2 seconds
}
