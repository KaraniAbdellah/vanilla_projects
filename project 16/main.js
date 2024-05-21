// Getting The Variables
var slide_container = document.querySelector(".slide-container");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var images = ["images/img-1.jpeg", "images/img-2.jpeg", "images/img-3.jpeg", "images/img-4.jpeg"];

function createSlide (src_img) {
    var slide = document.createElement("div");
    var image = document.createElement("img");
    slide.classList.add("slide");
    image.src = src_img;
    slide.appendChild(image);
    slide_container.appendChild(slide);
}

createSlide(images[0]);






