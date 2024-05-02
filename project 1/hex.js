const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const mySpan = document.querySelector(".color");

btn.onclick = function() {
    mySpan.textContent = "#";
    let randomNumber;
    for (i = 0; i < 6; i++) {
        randomNumber = Math.floor(Math.random() * hex.length);
        mySpan.textContent += hex[randomNumber];
    }
    document.body.style.backgroundColor = mySpan.textContent;
}

