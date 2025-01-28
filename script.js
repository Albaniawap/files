let audio = new Audio();
let isPlaying = false;

function playStation(url) {
    if (isPlaying) {
        audio.pause();
    }
    audio.src = url;
    audio.play();
    isPlaying = true;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function stopRadio() {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
}
