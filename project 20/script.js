// Getting The Varibles


const calc_app = document.querySelector(".calc-app");
const switch_theme = document.querySelector(".switch");
const circle = document.querySelectorAll(".circle");



circle.forEach(function(ele) {
    ele.addEventListener("click", function() {
        if (ele.classList.contains("circle2")) {
            circle.forEach((ele) => ele.classList.remove("theme1", "theme3"));
            ele.classList.add("theme2");
            // background color
            calc_app.classList.remove("theme1", "theme3");
            calc_app.classList.add("theme2");
            // screen color
        } else if (ele.classList.contains("circle3")) {
            circle.forEach((ele) => ele.classList.remove("theme1", "theme2"));
            ele.classList.add("theme3");
            // Changes For Other Colors Fir Theme3
        } else {
            circle.forEach((ele) => ele.classList.remove("theme2", "theme3"));
            ele.classList.add("theme1");
            // Changes For Other Colors Fir Theme1
        }
    });
});
;





