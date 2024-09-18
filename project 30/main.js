const btn_again = document.querySelector(".again");
const question = document.querySelector(".question");
const input_number = document.querySelector(".number");
const btn_submit = document.querySelector(".btn_submit");
const page = document.querySelector(".page");

const msg = document.querySelector(".msg");
const score = document.querySelector(".score .number");
const heigh_score = document.querySelector(".heigh_score .number");

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);


btn_submit.addEventListener("click", function() {
   if (input_number.value) {
        if (score.textContent == 0) {
            msg.innerHTML = "😞 You lose";
            page.classList.add("error");
        }
        if (input_number.value == randomNumber) {
            msg.innerHTML = "🎉 You win";
            page.classList.add("success");
            // increment the heigh score and generate new randomNumber
            heigh_score.textContent = Number(heigh_score.textContent) + 1;
            randomNumber = Math.floor(Math.random() * 20) + 1;
            question.textContent = randomNumber;
        } else if (input_number.value < randomNumber) {
            msg.innerHTML = "⬇️ Too low";
            score.textContent = Number(score.textContent) - 1;
        } else {
            msg.innerHTML = "⬆️ Too high";
            score.textContent = Number(score.textContent) - 1;
        }
   } else input_number.focus();
});



btn_again.addEventListener("click", function() {
    page.classList.remove("error", "success");
    question.textContent = "?";
    input_number.value = 0;
});



