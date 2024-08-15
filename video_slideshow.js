const videos = [
    'bro video (1) (1).mp4',
    // Add more videos here if needed
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('video-slideshow');

function showNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', () => {
    setTimeout(showNextVideo, 2000); // Wait 2 seconds before showing the next video
});

videoElement.loop = true;  // Enable looping for the video
videoElement.muted = false; // Ensure audio is not muted
videoElement.src = videos[currentVideoIndex];
videoElement.play();
