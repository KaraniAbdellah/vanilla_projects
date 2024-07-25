// Start From Getting Elements

var email = document.querySelector(".email");
var username = document.querySelector(".username");
var phone = document.querySelector(".phone");
var password = document.querySelector(".password");
var password_check = document.querySelector(".password_check");
var submit = document.querySelector(".submit");
var main_content = document.querySelector(".content");




let Regexs = {
    email: /^[a-zA-Z]+\d?@[a-z]+\.com$/,
    username: /^([a-zA-Z0-9]){3,}$/,
    phone: /^\+\d{7,15}$/,
    password: /^.{8,}$/i,
    password_check: /^.{8,}$/,
};



let inputs = document.querySelectorAll("input");
console.log(inputs);

submit.addEventListener("click", function(event) {
    // stop the reload event
    event.preventDefault();
    // confirmation inputs
    let classes = ["username", "email", "phone", "password", "password_check"];
    let messages_englich = ["must contain chracters and number", "ex: adam283@gmail.com", 
        "start with + and then more then 7 digits", "must contain chracters[lower and upper], numbers",
        "the same password",
    ];
    let messages_arabic = [
        "يجب أن يحتوي على أحرف وأرقام",
        "مثال: adam283@gmail.com",
        "ابدأ بـ + ثم أكثر من 7 أرقام",
        "يجب أن يحتوي على أحرف [صغيرة وكبيرة]، وأرقام",
        "كلمة المرور نفسها"
    ];
    
    for (let i = 0; i < classes.length; i++) {
        let ele = document.querySelector(`.${classes[i]}`);
        if (ele.classList.contains(classes[i])) {
            /// checking the regex
            let check = true;
            if (ele.value.match(Regexs[ele.className] && ele.value) != "") {
                ele.parentElement.classList.remove("normal", "error");
                ele.parentElement.classList.add("valide");
            } else {
                ele.parentElement.classList.remove("valide", "normal");
                ele.parentElement.classList.add("error");
                check = false;
            }
            // generate a message depend to the page language
            let message_ele = document.querySelector(`p.msg_${classes[i]}`);
            if (main_content.classList.contains("englich")) {
                if (check) {
                    message_ele.innerHTML = "good";
                    message_ele.style.color = "green";
                } else {
                    message_ele.innerHTML = messages_englich[i];
                    message_ele.style.color = "red";
                }
            } else {
                if (check) {
                    message_ele.innerHTML = "good";
                    message_ele.style.color = "green";
                } else {
                    message_ele.innerHTML = messages_arabic[i];
                    message_ele.style.color = "red";
                }
            }
        }
    }
});






// next task is 
/**
 * find a method fot password_check
 * popup when I click to the submit
 * edit colors --> make it prefect 
 * watch the video
 */


