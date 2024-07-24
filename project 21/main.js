// Start From Getting Elements

var username = document.querySelector(".username");
var phone = document.querySelector(".phone");
var password = document.querySelector(".password");
var password_check = document.querySelector(".password_check");
var submit = document.querySelector(".submit");
var main_content = document.querySelector(".content");



if (main_content.classList.contains("englich")) {
    // change this code with object that contain regexs and check for each input
    // one regex for each input
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        // username
        var RegexUsername1 = /([^a-z,A-Z]|\s)/gi; // must be false
        var RegexUsername2 = /\b[a-z,A-Z]{3,20}\b/gi; // must be true
        var value = username.value;
        // start changes
        var parentEle = username.parentElement; 
        if (!RegexUsername1.test(value) && RegexUsername2.test(value)) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
        // phone
        var RegexUsername1 = /[a-z,A-Z,\s][^\+]/gi; // must be false
        var RegexUsername2 = /\+\d{7,15}/gi; // must be true
        var value = phone.value;
        // start changes
        var parentEle = phone.parentElement; 
        if (!RegexUsername1.test(value) && RegexUsername2.test(value)) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
        // password 
        var RegexUsername1 = /\s/gi; // must be false
        var RegexUsername2 = /[\d\w]{8,}/gi; // must be true
        var value = password.value;
        // start changes
        var parentEle = password.parentElement; 
        if (!RegexUsername1.test(value) && RegexUsername2.test(value)) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
        // password check
        var parentEle = password_check.parentElement; 
        if (password.value == password_check.value && password.value) {
            parentEle.classList.remove("error", "normal");
            parentEle.classList.add("valide");
        } else {
            parentEle.classList.remove("valide", "normal");
            parentEle.classList.add("error");
        }
    });
}

else {
    submit.addEventListener("click", function(event) {
        event.preventDefault();
        // must edit also the input for arabic version
    });
}



// next task is 
/**
 * find another method to represent the regex
 * edit the arbic version
 * popup when I click to the submit
 * edit colors --> make it prefect 
 * watch the video
 */


