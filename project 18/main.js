// The Project Will Be Generate A Password And Copy The Password That Generated

// Getting Varibles
const input = document.querySelector(".generate-inputs input");
const copy = document.querySelector(".generate-inputs button");
const generate = document.querySelector(".generate-pass button");
const message = document.querySelector(".message");
const copiedMessage = document.querySelector(".message .copied");
const range = document.querySelector(".rangeNumber");
const numberofRange = document.querySelector(".number");

// Generate In Document
window.addEventListener("DOMContentLoaded", function() {
    input.value = window.localStorage.getItem("password");
});


// Range Number
range.addEventListener("input", function() {
    numberofRange.textContent = range.value;
});


// Generate Password
function generate_password() {
    let array = [];
    let lenght = range.value;
    for (let i = 0; i < lenght; i++) {
        let randomNumber = Math.floor(Math.random() * 128) + 33; // generate character between 33 and 128
        if (randomNumber > 128) randomNumber -= 33;
        array.push(randomNumber);
    }
    input.value = String.fromCharCode(...array);
    // Store In Local Storage
    window.localStorage.setItem("password", input.value);
}


// Generate Button
generate.addEventListener("click", generate_password);


// Copy Button
copy.addEventListener("click", function() {
    if (input.value == "") {
        copiedMessage.textContent = "Empty Input";
    } else {
        copiedMessage.textContent = "Copied";
        navigator.clipboard.writeText(input.value);
    }
    message.classList.add("copied");
    setTimeout(function() {
        message.classList.remove("copied");
    }, 1000);
});



