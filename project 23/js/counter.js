// Getting The Variables
const hours = document.querySelector(".text_counter .hours");
const minutes = document.querySelector(".text_counter .minutes");
const seconds = document.querySelector(".text_counter .seconds");
const stop_btn = document.querySelector(".stop");
const start_btn = document.querySelector(".start");

let handler;
start_btn.addEventListener("click", function() {
    handler = setInterval(() => {
        Counter();
    }, 1000);
});


stop_btn.addEventListener("click", function() {
    clearInterval(handler);
});


function format(unit) {
    return unit < 10 ? `0${+unit}` : +unit;
}

function Counter() {
    let sec = +seconds.textContent + 1;
    if (sec >= 60) {
        sec = 0;
        let min = +minutes.textContent + 1;
        if (min >= 60) {
            min = 0;
            let hr = +hours.textContent + 1;
            hours.textContent = format(hr);
        }
        minutes.textContent = format(min);
    }
    seconds.textContent = format(sec);
}


