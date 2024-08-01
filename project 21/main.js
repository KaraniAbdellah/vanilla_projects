// Start Getting Elements
var submit = document.querySelector(".submit");
var main_content = document.querySelector(".content");
let inputs = document.querySelectorAll("form input");
let divs_input = document.querySelectorAll("form div.input");
let popup = document.querySelector(".popup");
let icons = document.querySelector(".icons");
let confimation_code = document.querySelector(".text input");
let btn_continue = document.querySelector("button.continue");


// Define A Regular Experssions
let Regexs = {
    email: /^[a-zA-Z]+(\.[a-z,A-Z]+)*\d*\@[a-z]+\.[a-z]+$/,
    username: /^[a-z]{3,}\d+$/,
    phone: /^\+\d{7,15}$/,
    password: /^.{8,}$/,
    password_check: /^.{8,}$/,
};


// submit and starting checking and changing
submit.addEventListener("click", function(event) {
    // stop the reload event
    event.preventDefault();
    // confirmation inputs
    let classes = ["username", "email", "phone", "password", "password_check"];
    let messages_english = [
        "Must contain more than three characters and numbers, e.g., adam234.",
        "Example: adam283@gmail.com.",
        "Should start with + followed by more than 7 digits.",
        "Must contain both uppercase and lowercase letters, as well as numbers.",
        "Must match the previously entered password."
    ];
    let messages_arabic = [
        "يجب أن يحتوي على أكثر من ثلاثة أحرف وأرقام، مثل: adam234.",
        "مثال: adam283@gmail.com.",
        "يجب أن يبدأ بـ + ثم أكثر من 7 أرقام.",
        "يجب أن يحتوي على أحرف كبيرة وصغيرة وأرقام.",
        "يجب أن تتطابق مع كلمة المرور المدخلة سابقًا."
    ];
    
    // check the input without checking password_check
    for (let i = 0; i < classes.length; i++) {
        let ele = document.querySelector(`.${classes[i]}`);
        if (ele.classList.contains(classes[i])) {
            // checking the inputs
            let check = check_input(ele);
            // generate a message depend to the page language
            let message_ele = document.querySelector(`p.msg_${classes[i]}`);
            if (main_content.classList.contains("englich")) {
                generate_message(messages_english[i], check, message_ele);
            } else {
                generate_message(messages_arabic[i], check, message_ele);
            }
        }
    }
    // check if all input valid
    let check_all_inputs = [...divs_input].every(function(ele) {
        return ele.classList.contains("valid");
    });
    if (check_all_inputs) {
        popup.classList.toggle("hidden");
        main_content.classList.toggle("overlay");
    }
});


// for test thee regex with inputs
function check_input(ele) {
    let condition;
    if (ele.classList.contains("password_check")) {
        let password = document.querySelector(".password");
        condition = (password.value == ele.value && ele.value != "");
    } else {
        condition = (ele.value.match(Regexs[ele.className]) && ele.value != "");
    }
    if (condition) {
        ele.parentElement.classList.remove("normal", "error");
        ele.parentElement.classList.add("valid");
    } else {
        ele.parentElement.classList.remove("valid", "normal");
        ele.parentElement.classList.add("error");
        return false;
    }
    return true;
}


// generate a message
function generate_message(message, check, message_ele) {
    if (check) {
        if (main_content.classList.contains("arabic")) message_ele.innerHTML = "جيد";
        else message_ele.innerHTML = "valid";
        message_ele.style.color = "green";
    } else {
        message_ele.innerHTML = message;
        message_ele.style.color = "red";
    }
}


// click to the icons
icons.addEventListener("click", function() {
        popup.classList.toggle("hidden");
        main_content.classList.toggle("overlay");
});

// continue Button
btn_continue.addEventListener("click", function() {
    if (confimation_code.value == "") {
        alert("Invalid Input");
    } else {
        popup.classList.toggle("hidden");
        main_content.classList.toggle("overlay"); 
    }
});













