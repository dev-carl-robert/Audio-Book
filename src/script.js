let titleOfChapter = document.getElementById("chapter");
const Author = document.getElementById("author");
const backButton = document.getElementById("back");
const playButton = document.getElementById("play");
const skipButton = document.getElementById("skip");
const chapterAudio = document.getElementById("audio");

const numberOfChapter = 10
let playing = 0;
let currentChapter = 1;

function playOrPause () {
    if (playing == 0){
        playing = 1
        chapterAudio.play()
        
        playButton.classList.remove('bi-play-fill');
        playButton.classList.add('bi-pause-fill');


    } else {
        chapterAudio.pause();
        playing = 0
        playButton.classList.add('bi-play-fill');
        playButton.classList.remove('bi-pause-fill');
    }
}
function titleFile () {
    titleOfChapter.innerText = "Capítulo" + currentChapter
}
function nextFile() {
    if (currentChapter === numberOfChapter){
        currentChapter = 1;
    } else {
        currentChapter = currentChapter +1
    }

    chapterAudio.src = "./src/audio/" + currentChapter + ".mp3"
    chapterAudio.play();
    playing = 1;
    titleFile();
}
function backFile() {
    if (currentChapter === 1){
        currentChapter = numberOfChapter
    } else {
        currentChapter = currentChapter -1
    }
    chapterAudio.src = "./src/audio/" + currentChapter + ".mp3"
    chapterAudio.play();
    playing = 1;
    titleFile();
}


playButton.addEventListener("click", playOrPause);
skipButton.addEventListener("click", nextFile);
backButton.addEventListener("click", backFile);