const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let count = 0;

slides[count].classList.add("show");
prevBtn.classList.add("hidden");

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("show");
        slide.style.transform = (index === count) ? "translateX(0)" : (index < count) ? "translateX(-100%)" : "translateX(100%)";
    });
    prevBtn.classList.toggle("hidden", count === 0);
    nextBtn.classList.toggle("hidden", count === slides.length - 1);
}
nextBtn.addEventListener("click", function() {
    count++;
    updateSlides();
});
prevBtn.addEventListener("click", function() {
    count--;
    updateSlides();
});



/*
// Getting The Variables
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slides = document.querySelectorAll(".slide");
let count = 1;
 
function next_set(count) {
    slides[count].classList.add("show");
    slides[count - 1].classList.remove("show");
}
function prev_set(count) {
    slides[count - 1].classList.add("show");
    slides[count].classList.remove("show"); 
}

nextBtn.addEventListener("click", function() {
    next_set(count);
    prevBtn.classList.remove("hidden");
    count++;
    if (count == slides.length) nextBtn.classList.add("hidden");
});
prevBtn.addEventListener("click", function() {
    count--;
    prev_set(count);
    if (count != slides.length) nextBtn.classList.remove("hidden");
    if (count == 1) prevBtn.classList.add("hidden");
});
*/






