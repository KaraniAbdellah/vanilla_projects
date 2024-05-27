// Getting The Variables
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var images = document.querySelectorAll(".slide");
var count = 1;

window.addEventListener("DOMContentLoaded", function() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.cssText = `left:${i}00%;`;
        images[i].style.cssText = `transform: translateX(${i}00%);`;
    }
    images.forEach(ele => ele.style.cssText = `transform: translateX(-100%);`); 
});


 
function next_set(count) {
    images[count].style.cssText = `transform: translateX(0);`;
    images[count - 1].style.cssText = `transform: translateX(-100%);`; 
}
function prev_set(count) {
    images[count - 1].style.cssText = `transform: translateX(0);`;
    images[count].style.cssText = `transform: translateX(-100%);`;  
}

// check something
next.addEventListener("click", function() {
    // Start Fix The Show And Hidden Elements
    next_set(count);
    // Start Fix Counter
    prev.classList.remove("hidden");
    count++;
    if (count == images.length) next.classList.add("hidden");
});
prev.addEventListener("click", function() {
    count--;
    // Start Fix The Show And Hidden Elements
    prev_set(count);
    // Start Fix Counter
    if (count != images.length) next.classList.remove("hidden");
    if (count == 1) prev.classList.add("hidden");
});










