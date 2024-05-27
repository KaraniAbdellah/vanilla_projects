// Getting The Variables
var slide_container = document.querySelector("slide-conatiner");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var slide_img = document.querySelector(".slide img");
var myCounter = document.querySelector(".counter");
var images = document.querySelectorAll(".slide");
var count = 1;

for (var i = 0; i < images.length; i++) {
    images[i].style.cssText = `left:${i}00%;`;
    images[i].style.cssText = `transform: translateX(${i}00%);`;
}

function show(count) {
    images[count].style.cssText = `left:${-count}%;`;
    images[count].style.cssText = `transform: translateX(-${-count}%);`;
}
 


// check something
next.addEventListener("click", function() {
    console.log(images[count]);
    // Start Fix The Show And Hidden Elements
    show(count);
    // Start Fix Counter
    myCounter.textContent = count + 1;
    prev.classList.remove("hidden");
    count++;
    if (count == images.length) next.classList.add("hidden");
});
prev.addEventListener("click", function() {
    count--;
    console.log(images[count - 1]);
    myCounter.textContent = count;
    if (count != images.length) next.classList.remove("hidden");
    if (count == 1) prev.classList.add("hidden");
});










