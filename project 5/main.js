var btn = document.querySelector(".click");
var aside = document.querySelector("aside");
var content = document.querySelector(".content");
var closeSide = document.querySelector(".close");

btn.addEventListener("click", function() {
    aside.classList.toggle("show");
});
content.addEventListener("click", function() {
    aside.classList.remove("show");
});
closeSide.addEventListener("click", function() {
    aside.classList.remove("show");
});

