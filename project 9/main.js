var play_pause = document.querySelector(".play-pause");
var myVideo = document.querySelector(".travel");
var preloader= document.querySelector(".preloader");

window.addEventListener("load", function() {
    setTimeout(function() {
        preloader.classList.add("hide-preloader");
    }, 1000);
});

play_pause.addEventListener("click", function() {
    if (play_pause.classList.contains("play")) myVideo.pause()
    else myVideo.play();
    play_pause.classList.toggle("play");
});





