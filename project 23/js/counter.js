// Getting The Variables
const text_counter = document.querySelector(".text_counter");
const stop_btn = document.querySelector(".stop");
const start_btn = document.querySelector(".start");

let millsconds = 1;
let minutes = 0;
let hours = 0;
start_btn.addEventListener("click", function() {
    if (millsconds < 10 || minutes < 10)  text_counter.textContent = `${hours}:0${minutes}:0${millsconds}`;
    else text_counter.textContent = `${hours}:${minutes}:${millsconds}`;
    millsconds++;

    if (millsconds >= 59) {
        millsconds = 0; minutes = 1;
    }

    if (minutes >= 59) {
        millsconds = 0; minutes = 0; hours++;
    }


    console.log(text_counter.textContent);
})






