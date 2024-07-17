// Getting The Varibles
let curry = document.querySelector(".curry");
let result = document.querySelector("input.result");

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
const pop_up = document.querySelector(".pop-up");
const download_btn = document.querySelector(".download");
const copy_btn = document.querySelector(".copy");

// This Arr For Store The Operations && Used To Generate A File
let calculationHistory = [];

result.focus();

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
    // result input
    result.classList.remove(toRemove1, toRemove2);
    result.classList.add(toAdd);
    // Download Button
    download_btn.classList.add(toAdd);
    download_btn.classList.remove(toRemove1, toRemove2);
    // Copy Icon
    copy_btn.classList.add(toAdd);
    copy_btn.classList.remove(toRemove1, toRemove2);
}

// Fuction For Evualate An Expression
function evaluateExpression(expression) {
    try {
        calculationHistory.push(expression);
        return math.evaluate(expression);
    } catch {
        // Show The Pop-Up
        pop_up.classList.add("error");
        setTimeout(function() {
            pop_up.classList.remove("error");
        }, 1000);
        result.focus();
        return false;
    }
}


circle.forEach(function(ele) {
    ele.addEventListener("click", function() {
        if (ele.classList.contains("circle2")) {
            result.focus();
            ele.classList.add("theme2");
            change_theme("theme2", "theme1", "theme3");
        } 
        else if (ele.classList.contains("circle3")) {
            ele.classList.add("theme3");
            result.focus();
            change_theme("theme3", "theme1", "theme2");
        } else {
            result.focus();
            ele.classList.add("theme1");
            change_theme("theme1", "theme2", "theme3");
        }
    });
});

// Start With Calculation
items.forEach(function(ele) {
    ele.addEventListener("click", function() {
        if (ele.textContent == "RESET") {
            result.value = "";
            result.focus();
            calculationHistory = [];
        }
        else if (ele.textContent == "DEL") {
            let arr = [...result.value];
            arr.pop();
            result.value = arr.join("");
        } else if (ele.textContent == "=") {
            let operation_result = evaluateExpression(result.value);
            if (!isNaN(operation_result)) {
                result.value = evaluateExpression(result.value);
                calculationHistory.push(` = ${result.value}`);
            }
        } else {
            result.value += ele.textContent;
        }
    });
});

// For Click To The Enter From KeyBoard [Equal == Enter From Keyboard]
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        let result_operation = evaluateExpression(result.value);
        if (!isNaN(result_operation)) { 
            result.value = result_operation;
            calculationHistory.push(` = ${result.value} \n\n============\n`);
        }
    }
});

// Function To Create A File And DownLoad It
function generateHistoryFile() {
    const blob = new Blob([calculationHistory.join('\n')]);
    console.log(blob);
    const url = URL.createObjectURL(blob);
    console.log(url);  
    const a = document.createElement('a');
    console.log(a);
    a.href = url;
    a.download = 'calculation_history.txt';
    console.log(a);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Button To Download A The File
download_btn.addEventListener("click", generateHistoryFile);

// Copy Button
copy_btn.addEventListener("click", function() {
    result.select();
    navigator.clipboard.writeText(result.value);
    copy_btn.innerHTML = "<i class='fa-solid fa-check'></i>";
    setTimeout(function() {
        copy_btn.innerHTML = '<i class="fa-solid fa-copy">';
    }, 700);
});

// video about project 


