// Getting The Variables
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var slide_img = document.querySelector(".slide img");
var myCounter = document.querySelector(".counter");
var images = ["images/img-1.jpeg", "images/img-2.jpeg", "images/img-3.jpeg", "images/img-4.jpeg"];
var count = 1;



// check something
next.addEventListener("click", function() {
    slide_img.src = images[count];
    myCounter.textContent = count + 1;
    prev.classList.remove("hidden");
    count++;
    if (count == images.length) next.classList.add("hidden");
});
prev.addEventListener("click", function() {
    count--;
    slide_img.src = images[count - 1];
    myCounter.textContent = count;
    if (count != images.length) next.classList.remove("hidden");
    if (count == 1) prev.classList.add("hidden");
});










