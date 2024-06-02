// Getting The Varibales
var x_symbol = document.querySelector(".x");
var o_symbol = document.querySelector(".o");
var role_must_play = document.querySelector(".role .must_play");
var reset_btn = document.querySelector(".reset");
var boxes = document.querySelectorAll(".box");
var player1 = document.querySelector(".player1 span");
var player2 = document.querySelector(".player2 span");
var draws = document.querySelector(".draws span");
var i = 0;


// Reset Function
function reset() {
    boxes.forEach(function(ele) {
        ele.textContent = "";
        ele.classList.remove("pick");
    });
}

// Load The Page
window.addEventListener("DOMContentLoaded", reset);

// Check If The All Box Fullt Of [X, O]
var check = boxes.every(function(ele) {
    // return ele.classList.contains("pick");
});
console.log(check);



boxes.forEach(function(ele) {
    ele.addEventListener("click", function(e) {
        // Check The Target Element + add "pick" class
        if (!(e.target.classList.contains("pick")) && e.target.classList.contains("box")) {
            if (i % 2 == 0 ) {
                // Change To "X"
                e.target.textContent = "X";
                e.target.classList.add("pick");
                // Change The Content
                role_must_play.textContent = "X";
            }
            else {
                // Change To "0"
                e.target.textContent = "0";
                e.target.classList.add("pick");
                // Change The Content
                role_must_play.textContent = "0";
            }
            i++;
        }
    });
})



// Reset The Elements
reset_btn.addEventListener("click", reset);


