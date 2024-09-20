const btn_again = document.querySelector(".again");
const question = document.querySelector(".question");
const input_number = document.querySelector(".number");
const btn_submit = document.querySelector(".btn_submit");
const page = document.querySelector(".page");

const msg = document.querySelector(".msg");
const score = document.querySelector(".score .number");
const heigh_score = document.querySelector(".heigh_score .number");

const next_btn= document.querySelector(".next_btn");
const next_game_box = document.querySelector(".next_game");
const heigh_score_gloal = document.querySelector(".heigh_score .goal");
const next_number = document.querySelector(".next_number");
const message_winner = document.querySelector(".message_winner");



if (!localStorage.getItem("next_number")) {
    localStorage.setItem("next_number", 20);
}
if (!localStorage.getItem("heigh_score_gloal")) {
    localStorage.setItem("heigh_score_gloal", 5);
}
if (!localStorage.getItem("score")) {
    localStorage.setItem("score", 20);
}
if (!localStorage.getItem("heigh_score")) {
    localStorage.setItem("heigh_score", 0);
}


let randomNumber = Math.floor(Math.random() * localStorage.getItem("next_number")) + 1;
console.log(randomNumber);


// Reload The Page
document.addEventListener("DOMContentLoaded", function() {
    heigh_score.textContent = localStorage.getItem("heigh_score");
    score.textContent = localStorage.getItem("score");
    heigh_score_gloal.textContent = localStorage.getItem("heigh_score_gloal");
    next_number.textContent = localStorage.getItem("next_number");
});



btn_submit.addEventListener("click", function() {
   if (input_number.value) {
        // Player Lose The Game
        if (+score.textContent == 0) {
            msg.innerHTML = "😞 You lose";
            page.classList.add("error");
        }
        // Player Win The Round Not The Game
        else if (input_number.value == randomNumber) {
            SetForWinner();
        } 
        // Player Guess a Number To Low
        else if (input_number.value < randomNumber) {
            WrongGuessing("⬇️ Too Low");
        } 
        // Player Guess a Number To Hight
        else if (input_number.value > randomNumber) {
            WrongGuessing("⬆️ Too High");
        } else;
   } else input_number.focus();
});

btn_again.addEventListener("click", setToDefault);

next_btn.addEventListener("click", function() {
    message_winner.textContent = "You Are The Winner";
    page.classList.remove("win");
    next_game_box.classList.add("hidden");
    // changes for next game
    heigh_score_gloal.textContent = +localStorage.getItem("heigh_score_gloal") + 1;
    next_number.textContent = +localStorage.getItem("next_number") + 5;
    localStorage.setItem("heigh_score", 0);
    localStorage.setItem("score", 20);
    localStorage.setItem("heigh_score_gloal", heigh_score_gloal.textContent);
    localStorage.setItem("next_number", next_number.textContent);
});



function setToDefault() {
    page.classList.remove("error", "success");
    question.textContent = "?";
    input_number.value = "";
    msg.innerHTML = `Start Guessing <br> ...`;
    score.textContent = 20;
    heigh_score.textContent = "0";
    // change score and height score in local storage
    localStorage.setItem("score", 20);
    localStorage.setItem("heigh_score", 0);
}


function WrongGuessing(text) {
    msg.innerHTML = text;
    score.textContent = Number(score.textContent) - 1;
    localStorage.setItem("score", score.textContent);
    page.classList.remove("error", "success");
}

function SetForWinner() {
    msg.innerHTML = "🎉 You win";
    page.classList.add("success");
    // increment the heigh score and generate new randomNumber
    heigh_score.textContent = Number(heigh_score.textContent) + 1;
    localStorage.setItem("heigh_score", heigh_score.textContent);
    question.textContent = randomNumber;
    randomNumber = Math.floor(Math.random() * localStorage.getItem("next_number")) + 1;
    console.log(randomNumber);
    // Set Eles To Default For Generate New Number
    setTimeout(() => {
        page.classList.remove("error", "success");
        msg.innerHTML = `Start Guessing <br> ...`;
        question.textContent = "?";
    }, 2000);

    // Player Win The Game
    if (heigh_score.textContent == heigh_score_gloal.textContent) {
        // The Goat Of The Game
        if (localStorage.getItem("score") == 20) {
            GoatGame();
        }
        else NextGame();
        setToDefault();
    }
    
}


function NextGame() {
    page.classList.add("win");
    next_game_box.classList.remove("hidden");
}


function GoatGame() {
    NextGame();
    message_winner.textContent = "You Are Goat Of The Game";
}


