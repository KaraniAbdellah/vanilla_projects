var play_pause = document.querySelector(".play-pause");
var myVideo = document.querySelector(".travel");



play_pause.addEventListener("click", function() {
    if (play_pause.classList.contains("play")) myVideo.pause()
    else myVideo.play();
    play_pause.classList.toggle("play");
});





