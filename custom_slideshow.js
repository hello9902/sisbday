const customImages = [
    '2023.1.jpg',
    'IMG-20160818-WA0017.jpg',
    'WhatsApp Image 2024-08-15 at 10.16.43 PM (1).jpeg',
    'IMG-20221217-WA0039.jpg',
    '14.jpg',
    'IMG-20160818-WA0017.jpg',
    'IMG_20220605_121350.jpg',
    'IMG_20220514_103032.jpg',
    '2.jpg',
    '31.jpg'
];
let customCurrentIndex = 0;

function showNextCustomImage() {
    customCurrentIndex = (customCurrentIndex + 1) % customImages.length;
    document.getElementById('custom-slideshow-image').src = customImages[customCurrentIndex];
}

setInterval(showNextCustomImage, 2000); // Change image every 2 seconds
