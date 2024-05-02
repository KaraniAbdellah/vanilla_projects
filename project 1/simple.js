const btn = document.getElementById("btn");
const mySpan = document.querySelector(".color");

btn.onclick = function() {
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255);
    mySpan.textContent = "rgb("+randomNumber1+", "+randomNumber2+", "+randomNumber3+")";
    document.body.style.backgroundColor = mySpan.textContent;
}
