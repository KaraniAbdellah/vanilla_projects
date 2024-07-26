// Start Getting Elements
var submit = document.querySelector(".submit");
var main_content = document.querySelector(".content");
let inputs = document.querySelectorAll("input");



// Define A Regular Experssions
let Regexs = {
    email: /^[a-zA-Z]+\d?\@[a-z]+\.com$/,
    username: /^([a-zA-Z0-9]){3,}$/,
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
    let messages_englich = [
        "must contain characters and number",
        "ex: adam283@gmail.com", 
        "start with + and then more then 7 digits",
        "must contain chracters[lower and upper], numbers",
        "the same password",
    ];
    let messages_arabic = [
        "يجب أن يحتوي على أحرف وأرقام",
        "مثال: adam283@gmail.com",
        "ابدأ بـ + ثم أكثر من 7 أرقام",
        "يجب أن يحتوي على أحرف [صغيرة وكبيرة]، وأرقام",
        "كلمة المرور نفسها"
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
                generate_message(messages_englich[i], check, message_ele);
            } else {
                generate_message(messages_arabic[i], check, message_ele);
            }
        }
    }

});


// for test thee regex with inputs
function check_input(ele) {
    if (ele.value.match(Regexs[ele.className]) && ele.value != "") {
        ele.parentElement.classList.remove("normal", "error");
        ele.parentElement.classList.add("valide");
    } else {
        ele.parentElement.classList.remove("valide", "normal");
        ele.parentElement.classList.add("error");
        return false;
    }
    return true;
}


// generate a message
function generate_message(message, check, message_ele) {
    if (check) {
        message_ele.innerHTML = "good";
        message_ele.style.color = "green";
    } else {
        message_ele.innerHTML = message;
        message_ele.style.color = "red";
    }
}



// next task is 
/**
 * find a method fot password_check
 * popup when I click to the submit
 * edit colors --> make it prefect 
 * watch the video
*/






