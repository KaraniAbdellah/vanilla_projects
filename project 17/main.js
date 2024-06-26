// Getting The Varibles
const cells = document.querySelectorAll(".cell");
const reset_btn = document.querySelector(".reset");
const current_turn = document.querySelector(".current-trun");
const player1_score1 = document.querySelector(".player1 .number");
const player2_score2 = document.querySelector(".player2 .number");
const draws = document.querySelector(".draws .number");
const overlay = document.querySelector(".content");
const toogle = document.querySelector(".toogle");
const toogle_winner = document.querySelector(".toogle .winner");
const close_btn = document.querySelector(".close");
var turn = true;
var usedCells = [];
var emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var ties = 0;
var computer_player = true;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Define The Type For Player1 --> X and Player2 --> O
let player1 = {
    symbol: "<i class = 'fa fa-close'></i>",
    played: [],
    score: 0,
}

let player2 = {
    symbol: "<i class='fa-sharp fa-regular fa-circle'></i>",
    played: [],
    score: 0,
}

// Reset The Turn Player To "X"
checkTurn(turn);

setInterval(computer, 3000);


// Loop Thought The Element
for (let i = 0; i < 9; i++) {
    cells[i].addEventListener("click", function(ele) {
        if (!usedCells.includes(i)) {
            if (turn) {
                    addSymbol(player1, i); turn = false;
                    player1.played.push(i);
                    usedCells.push(i);
                    checkWin(player1);
                    checkTurn(turn);
                } else {
                    
                    addSymbol(player2, i); turn = true;
                    player2.played.push(i);
                    usedCells.push(i);
                    checkWin(player2);
                    checkTurn(turn);
            }
        }
    });
}

// Symbol
function addSymbol(player, i) {
    cells[i].innerHTML = player.symbol;
}

// Check The Winner
function checkWin(player) {
    var check = winCombos.some(function(combo) {
        if (combo.every((ele) => player.played.includes(ele))) {
            player.score++;
            showScore();
            const message = player.symbol;
            setTimeout(showmMessage, 300, message);
        }
    });
    if (!check && usedCells.length == 9) {
        ties++;
        showScore();
        const message = "No Winner";
        setTimeout(showmMessage, 300, message);
    }
}

// Reset All Element
function reset() {
    cells.forEach(ele => ele.innerHTML = "");
    usedCells = [];
    player1.played = [];
    player2.played = [];
    turn = true;
    ties = 0;
    checkTurn(turn);
    overlay.classList.remove("shadow");
    toogle.style.display = "none";
}

// check the turn
function checkTurn(trun) {
    if (trun) current_turn.innerHTML = player1.symbol;
    else current_turn.innerHTML = player2.symbol;
}

// Show The Score
function showScore() {
    player1_score1.innerHTML = player1.score;
    player2_score2.innerHTML = player2.score;
    draws.innerHTML = ties; 
}

// Show The Message 
function showmMessage(message) {
    overlay.classList.add("shadow");
    toogle.style.display = "flex";
    toogle_winner.innerHTML = message;
}

// reset button
reset_btn.addEventListener("click", function() {
    reset();
});



// close icon
close_btn.addEventListener("click", function() {
    reset();
});




































// // Getting The Varibales
// const celles = document.querySelectorAll(".cell");
// const current_turn = document.querySelector(".turn .current-trun");
// const reset_btn = document.querySelector(".reset");
// const x_symbol = document.querySelector(".x");
// const o_symbol = document.querySelector(".o");
// const player1 = document.querySelector(".player1 span");
// const player2 = document.querySelector(".player2 span");
// const draws = document.querySelector(".draws span");
// const toolge = document.querySelector(".toogle");
// const mark = document.querySelector(".toogle .mark");
// const winner = document.querySelector(".winner");
// const content = document.querySelector(".content");
// var i = 0;

// // Set The Winner And Loser Results
// if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2") && sessionStorage.getItem("draws")) {
//     player1.textContent = sessionStorage.getItem("player1");
//     player2.textContent = sessionStorage.getItem("player2");
//     draws.textContent = sessionStorage.getItem("draws");
// }


// // Reset Function
// function reset() {
//     celles.forEach(function(ele) {
//         ele.textContent = "";
//         ele.classList.remove("pick");
//     });
//     // Change i value
//     i = 0;
//     // Change The Color Of "O" and "X"
//     o_symbol.style.color = "black";
//     x_symbol.style.color = "white";
//     // remove "shadow" class from content
//     content.classList.remove("shadow");
// }

// // Check If The All Box Full Of [X || O]
// function check_all_ele_full() {
//     var check = true; // Supose is Full
//     celles.forEach(function(ele) {
//         if (!ele.classList.contains("pick")) { check = false; return check; };
//     });
//     return check;
// }

// // Check The Winner
// function checkWinner(matrix) {
//     // Check rows
//     for (let i = 0; i < 3; i++) {
//         if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== '-') {
//             return matrix[i][0];
//         }
//     }

//     // Check columns
//     for (let j = 0; j < 3; j++) {
//         if (matrix[0][j] === matrix[1][j] && matrix[1][j] === matrix[2][j] && matrix[0][j] !== '-') {
//             return matrix[0][j];
//         }
//     }

//     // Check diagonals
//     if ((matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[1][1] !== '-') ||
//         (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[1][1] !== '-')) {
//         return matrix[1][1];
//     }
    
//     // No winner
//     return '-';
// }


// // Check The Winner --> X : Player1, O : Player2
// function is_there_a_winner() {
//     // Make Matrix That Contain Just "X" and "O"
//     var matrix = [], count = 1, temp = [];
//     celles.forEach(function(ele) {
//         temp[count - 1] = ele.textContent;
//         if (count == 3) { matrix.push(temp); count = 0; temp = []; }
//         count++;
//         console.log(matrix);
//     });
//     console.log(matrix);
//     // Check The Winner and Set The Winner textcontent
//     var check = checkWinner(matrix);
//     return check;
// }

// // Fucntion
// function set_result(check) {
//     winner.textContent = check;
//     if (check == "X") {
//         player1.textContent = Number(player1.textContent) + 1;
//         window.sessionStorage.setItem("player1", player1.textContent);
//     }
//     if (check == "0") {
//         player2.textContent = Number(player2.textContent) + 1;
//         window.sessionStorage.setItem("player2", player2.textContent);
        
//     }
//     if (!(check == "X" && check == "0")) {
//         if (check_all_ele_full()) {
//             draws.textContent = Number(draws.textContent) + 1;
//             window.sessionStorage.setItem("draws", draws.textContent);
//         }
//     }
// }

// // The Winner is : ....
// function winner_is() {
//     var check = is_there_a_winner();
//     var condition = (check == "X" || check == "0");
//     if (condition) {
//         toolge.style.display = "flex";
//         content.classList.add("shadow");
//         set_result(check);
//     }
//     if(check_all_ele_full() && (condition)) {
//         toolge.style.display = "flex";
//         content.classList.add("shadow");
//         set_result(check);
//     }
//     if (!condition && check_all_ele_full()) {
//         toolge.style.display = "flex";
//         content.classList.add("shadow");
//         check = "NO WINNER";
//         set_result(check);
//     }
//     // Set The Player1 and Player2
// }

// // Load The Page
// window.addEventListener("DOMContentLoaded", reset);


// // Change X To 0 and 0 To X
// celles.forEach(function(ele) {
//     ele.addEventListener("click", function(e) {
//         // Check The Target Element + add "pick" class
//         if (!(e.target.classList.contains("pick")) && e.target.classList.contains("cell")) {
//             if (i % 2 == 0) {
//                 // Change To "X"
//                 e.target.textContent = "X";
//                 e.target.classList.add("pick");
//                 // Change The Content
//                 current_turn.textContent = "0";
//                 // Change The Color Of "O" and "X"
//                 o_symbol.style.color = "white";
//                 x_symbol.style.color = "black";
//                 winner_is();
//             }
//             else {
//                 // Change To "0"
//                 e.target.textContent = "0";
//                 e.target.classList.add("pick");
//                 // Change The Content
//                 current_turn.textContent = "X";
//                 // Change The Color Of "O" and "X"
//                 o_symbol.style.color = "black";
//                 x_symbol.style.color = "white";
//                 winner_is();
//             }
//             i++;
//         }
//     });
// });



// // Reset The Elements
// reset_btn.addEventListener("click", reset);

// // Mark And Reset
// mark.addEventListener("click", function() {
//     toolge.style.display = "none";
//     reset();
// });



