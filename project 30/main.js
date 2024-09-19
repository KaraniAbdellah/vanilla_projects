const btn_again = document.querySelector(".again");
const question = document.querySelector(".question");
const input_number = document.querySelector(".number");
const btn_submit = document.querySelector(".btn_submit");
const page = document.querySelector(".page");

const msg = document.querySelector(".msg");
const score = document.querySelector(".score .number");
const heigh_score = document.querySelector(".heigh_score .number");

const next_game = document.querySelector(".next_game");
const heigh_score_gloal = document.querySelector(".heigh_score .goal");
const next_number = document.querySelector(".next_number");



if (!localStorage.getItem("next_number")) {
    localStorage.setItem("next_number", 20);
}
if (!localStorage.getItem("heigh_score_gloal")) {
    localStorage.setItem("heigh_score_gloal", 5);
}
let randomNumber = Math.floor(Math.random() * localStorage.getItem("next_number")) + 1;
console.log(randomNumber);


// Reload The Page
document.addEventListener("DOMContentLoaded", function() {
    let new_heigh_score = localStorage.getItem("heigh_score");
    let new_score = localStorage.getItem("score");
    heigh_score.textContent = new_heigh_score ? new_heigh_score: 0;
    score.textContent = new_score ? new_score: 20;
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
        else {
            WrongGuessing("⬆️ Too High");
        }
   } else input_number.focus();
});


btn_again.addEventListener("click", setToDefault);


next_game.addEventListener("click", function() {
    page.classList.remove("win");
    next_game.classList.add("hidden");
    score.textContent = 20;
    heigh_score.textContent = 0;
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
    heigh_score.textContent = "0"; // must this value store in local storage
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
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    // Set Eles To Default For Generate Now Number
    setTimeout(() => {
        page.classList.remove("error", "success");
        msg.innerHTML = `Start Guessing <br> ...`;
        question.textContent = "?";
    }, 2000);

    // Player Win The Game
    if (heigh_score.textContent == heigh_score_gloal.textContent) {
        setToDefault();
        console.log("You Win The Game");
        NextGame();
    }
}


function NextGame() {
    page.classList.add("win");
    next_game.classList.remove("hidden");
}


