// Getting The Varibles

let curry = document.querySelector(".curry");
let result = document.querySelector(".result");

const calc_app = document.querySelector(".calc-app");
const display_screen = document.querySelector(".display");

const circle = document.querySelectorAll(".circle");
const title = document.querySelector(".title");
const theme_word = document.querySelector(".toggle > p");
const numbers = document.querySelector(".numbers");
const switch_theme = document.querySelector(".switch");

const keyboard = document.querySelector(".keyboard");

const delete_btn = document.querySelector(".delete");
const reset_btn = document.querySelector(".reset");
const equal_btn = document.querySelector(".equal");

const items = document.querySelectorAll(".item");

// fucntion for changes the theme classes
function change_theme(toAdd, toRemove1, toRemove2) {
    circle.forEach((ele) => ele.classList.remove(toRemove1, toRemove2));
    // background color
    calc_app.classList.remove(toRemove1, toRemove2);
    calc_app.classList.add(toAdd);
    // screen color
    display_screen.classList.remove(toRemove1, toRemove2);
    display_screen.classList.add(toAdd);
    // title && switch_theme && numbers && theme_word
    title.classList.remove(toRemove1, toRemove2);
    title.classList.add(toAdd);
    theme_word.classList.remove(toRemove1, toRemove2);
    theme_word.classList.add(toAdd)
    switch_theme.classList.remove(toRemove1, toRemove2);
    switch_theme.classList.add(toAdd)
    numbers.classList.remove(toRemove1, toRemove2);
    numbers.classList.add(toAdd);
    // keyboard
    keyboard.classList.remove(toRemove1, toRemove2);
    keyboard.classList.add(toAdd);
    // delete btn && equal btn && reset btn
    delete_btn.classList.remove(toRemove1, toRemove2);
    delete_btn.classList.add(toAdd);
    reset_btn.classList.remove(toRemove1, toRemove2);
    reset_btn.classList.add(toAdd);
    equal_btn.classList.remove(toRemove1, toRemove2);
    equal_btn.classList.add(toAdd);
    // reset items
    items.forEach(function(ele) {
        ele.classList.add(toAdd);
        ele.classList.remove(toRemove1, toRemove2);
    });
}

circle.forEach(function(ele) {
    ele.addEventListener("click", function() {
        if (ele.classList.contains("circle2")) {
            ele.classList.add("theme2");
            result.classList.add("theme2");
            curry.classList.add("theme2");
            change_theme("theme2", "theme1", "theme3");
        } 
        else if (ele.classList.contains("circle3")) {
            ele.classList.add("theme3");
            result.classList.remove("theme2");
            curry.classList.remove("theme2");
            change_theme("theme3", "theme1", "theme2");
        } else {
            result.classList.remove("theme2");
            curry.classList.remove("theme2");
            ele.classList.add("theme1");
            change_theme("theme1", "theme2", "theme3");
        }
    });
});

// Start With Calculation

let matrix_number = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
];


items.forEach(function(ele) {
    ele.addEventListener("click", function() {
        if (ele.textContent == "RESET") {
            result.textContent = 0;
            operation = [];
        }
        else if (ele.textContent == "DEL") {
            
        } else if (ele.textContent == "=") {
            result.textContent = eval(result.textContent); 
        } else {
            result.textContent = result.textContent + ele.textContent;
        }
    });
});






