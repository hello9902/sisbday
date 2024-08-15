const images = [
    'IMG-20210117-WA0091.jpg',
    '10.jpg',
    '2021.4.jpg',
    '8.jpg',
    '2022.2.jpg',    
    'IMG_20211202_193752.jpg',
    'IMG_20220514_103032.jpg' ,
    '7.jpg'


];
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideshow-image').src = images[currentIndex];
}

setInterval(showNextImage, 2000); // Change image every 2 seconds
