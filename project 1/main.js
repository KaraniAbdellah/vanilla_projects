const colors = ["green", "red", "rgb(122, 133, 200)", "#f15025", "orange"];
const btn = document.getElementById("btn");
const mySpan = document.querySelector(".color");

btn.onclick = function() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    mySpan.textContent = colors[randomNumber];
}