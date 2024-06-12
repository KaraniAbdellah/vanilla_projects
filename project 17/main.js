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
if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2") && sessionStorage.getItem("draws")) {
    player1.textContent = sessionStorage.getItem("player1");
    player2.textContent = sessionStorage.getItem("player2");
    draws.textContent = sessionStorage.getItem("draws");
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
    var check;
    for (var i = 0; i < 8; i++) {
        check = true;
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                
            }
        }
        if (check == true) console.log("There Is A Winner\n");
    }
    if (check_all_ele_full() && !check) console.log("There is No Winner\n"); 
    // Set The Player1 and Player2
    if (winner.textContent == "X") {
        player1.textContent = Number(player1.textContent) + 1;
        window.sessionStorage.setItem("player1", player1.textContent);
    }
    if (winner.textContent == "0") {
        player2.textContent = Number(player2.textContent) + 1;
        window.sessionStorage.setItem("player2", player2.textContent);
        
    } 
    if (winner.textContent != "0" && winner.textContent != "X") {
        if (check_all_ele_full()) draws.textContent = Number(draws.textContent) + 1;
        window.sessionStorage.setItem("draws", draws.textContent);
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



