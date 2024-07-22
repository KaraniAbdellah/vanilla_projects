// Start From Getting Elements

let username = document.querySelector(".username");
let phone = document.querySelector(".phone");
let password = document.querySelector(".password");
let password_check = document.querySelector(".password_check");
let submit = document.querySelector(".submit");



// submit.addEventListener("click", function(event) {
    // preventDefault();
    // username
    username.addEventListener("input", function() {
        let RegexUsername1 = /([^a-z,A-Z]|\s)/gi; // must be false
        let RegexUsername2 = /\b[a-z,A-Z]{3,20}\b/gi; // must be true
        let value = username.value;
        // start changes
        let parentEle = username.parentElement; 
        if (!RegexUsername1.test(value) && RegexUsername2.test(value)) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
    });
    // phone
    phone.addEventListener("input", function() {
        let RegexUsername1 = /[a-z,A-Z,\s][^\+]/gi; // must be false
        let RegexUsername2 = /\+\d{7,15}/gi; // must be true
        console.log(phone.value.match(RegexUsername1));
        console.log(phone.value.match(RegexUsername2));
        let value = phone.value;
        // start changes
        let parentEle = phone.parentElement; 
        if (!RegexUsername1.test(value) && RegexUsername2.test(value)) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
    });
    // password 
    console.log(password.value);
    // password check
    console.log(password_check.value);
// })





