// You Task Is
/**
 * Custom A Lot Of Things
 * Modifier The Players [Player1 --> x] && [Player2 --> 0]
 * Use The Local Storage For The Result Of The Players
 * Custom The Matrix Conditions
 */




// Getting The Varibales
var x_symbol = document.querySelector(".x");
var o_symbol = document.querySelector(".o");
var role_must_play= document.querySelector(".role .must_play");
var reset_btn = document.querySelector(".reset");
var boxes = document.querySelectorAll(".box");
var player1 = document.querySelector(".player1 span");
var player2 = document.querySelector(".player2 span");
var draws = document.querySelector(".draws span");
var toolge = document.querySelector(".toogle");
var mark = document.querySelector(".toogle .mark");
var winner = document.querySelector(".winner");
var content = document.querySelector(".content");
var i = 0;

// Set The Winner And Loser Results
if (localStorage.getItem("player1") && localStorage.getItem("player2") && localStorage.getItem("draws")) {
    player1.textContent = localStorage.getItem("player1");
    player2.textContent = localStorage.getItem("player2");
    draws.textContent = localStorage.getItem("draws");
}


// Reset Function
function reset() {
    boxes.forEach(function(ele) {
        ele.textContent = "";
        ele.classList.remove("pick");
    });
    // Change i value
    i = 0;
    // Change The Color Of "O" and "X"
    o_symbol.style.color = "white";
    x_symbol.style.color = "black";
    // remove "shadow" class from content
    content.classList.remove("shadow");
}

// Check If The All Box Full Of [X || O]
function check_all_ele_full() {
    var check = true; // Supose is Full
    boxes.forEach(function(ele) {
        if (!ele.classList.contains("pick")) { check = false; return check; }; 
    });
    return check;
}

// Check The Winner --> X : Player1, O : Player2 
function is_there_a_winner() {
    // Make Matrix That Contain Just "X" and "O"
    var matrix = [], count = 1, temp = [];
    boxes.forEach(function(ele) {
        temp[count - 1] = ele.textContent;
        if (count == 3) { matrix.push(temp); count = 0; temp = []; }
        count++;
    });
    // Check The Winner and Set The Winner textcontent
    var check = false;
    if (matrix[0][0] == "X" && matrix[0][1] == "X" && matrix[0][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[1][0] == "X" && matrix[1][1] == "X" && matrix[1][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[2][0] == "X" && matrix[2][1] == "X" && matrix[2][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][0] == "X" && matrix[1][1] == "X" && matrix[2][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][0] == "X" && matrix[0][1] == "X" && matrix[0][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][0] == "X" && matrix[1][0] == "X" && matrix[2][0] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][1] == "X" && matrix[1][1] == "X" && matrix[2][1] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][2] == "X" && matrix[1][2] == "X" && matrix[2][2] == "X") {check = true; winner.textContent = "X"}
    else if (matrix[0][2] == "X" && matrix[1][1] == "X" && matrix[2][0] == "X") {check = true; winner.textContent = "X";}

    else if (matrix[0][0] == "0" && matrix[0][1] == "0" && matrix[0][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[1][0] == "0" && matrix[1][1] == "0" && matrix[1][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[2][0] == "0" && matrix[2][1] == "0" && matrix[2][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][0] == "0" && matrix[1][1] == "0" && matrix[2][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][0] == "0" && matrix[0][1] == "0" && matrix[0][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][0] == "0" && matrix[1][0] == "0" && matrix[2][0] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][1] == "0" && matrix[1][1] == "0" && matrix[2][1] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][2] == "0" && matrix[1][2] == "0" && matrix[2][2] == "0") {check = true; winner.textContent = "0"}
    else if (matrix[0][2] == "0" && matrix[1][1] == "0" && matrix[2][0] == "0") {check = true; winner.textContent = "X";}

    else { check = false; winner.textContent = "NO ONE WINNER"; }
    // Set The Player1 and Player2
    if (winner.textContent == "X") {
        player1.textContent = Number(player1.textContent) + 1;
        window.localStorage.setItem("player1", player1.textContent);
    }
    if (winner.textContent == "0") {
        player2.textContent = Number(player2.textContent) + 1;
        window.localStorage.setItem("player2", player2.textContent);
        
    } 
    if (winner.textContent != "0" && winner.textContent != "X") {
        if (check_all_ele_full()) draws.textContent = Number(draws.textContent) + 1;
        window.localStorage.setItem("draws", draws.textContent);
    }
    return check;
}

// The Winner is : ....
function winner_is() {
    if (is_there_a_winner()) {
        toolge.style.display = "flex";
        content.classList.add("shadow");
    }
    if(check_all_ele_full()) {
        toolge.style.display = "flex";
        content.classList.add("shadow");
    }
}

// Load The Page
window.addEventListener("DOMContentLoaded", reset);


// Change X To 0 and 0 To X
boxes.forEach(function(ele) {
    ele.addEventListener("click", function(e) {
        // Check The Target Element + add "pick" class
        if (!(e.target.classList.contains("pick")) && e.target.classList.contains("box")) {
            if (i % 2 == 0) {
                // Change To "X"
                e.target.textContent = "X";
                e.target.classList.add("pick");
                // Change The Content
                role_must_play.textContent = "0";
                role_must_play.style.color = "white";
                // Change The Color Of "O" and "X"
                o_symbol.style.color = "white";
                x_symbol.style.color = "black";
                winner_is();
            }
            else {
                // Change To "0"
                e.target.textContent = "0";
                e.target.classList.add("pick");
                // Change The Content
                role_must_play.textContent = "X";
                role_must_play.style.color = "white";
                // Change The Color Of "O" and "X"
                o_symbol.style.color = "black";
                x_symbol.style.color = "white";
                winner_is();
            }
            i++;
        }
    });
});



// Reset The Elements
reset_btn.addEventListener("click", reset);

// Mark And Reset
mark.addEventListener("click", function() {
    toolge.style.display = "none";
    reset();
})



