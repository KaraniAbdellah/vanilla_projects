// Getting The Variables
const boxes = document.querySelectorAll(".box");
const refrech = document.querySelector(".refrech");
const div_boxes = document.querySelector(".boxes");


// Generator for Generate RGB Color
function *generateRGB() {
    while (1) {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        yield `rgb(${red}, ${green}, ${blue})`;
    }
}
let generator_color = generateRGB();

// Generate Color
function generate_color() {
    boxes.forEach(element => {
        const box_color = element.firstElementChild;
        const box_color_name = box_color.nextElementSibling.firstElementChild;
        // Random Color
        let rgb_color = generator_color.next().value;
        box_color.style.backgroundColor = rgb_color;
        box_color_name.textContent = rgb_color;
    });
}


document.addEventListener("DOMContentLoaded", generate_color);

refrech.addEventListener("click", generate_color);


div_boxes.addEventListener("click", function(e) {
    if (e.target.classList.contains("text")) {
        let ele = e.target;
        let rgb_color = ele.textContent;
        navigator.clipboard.writeText(rgb_color);
        ele.textContent = "Copied";
        setTimeout(function() {
            ele.textContent = rgb_color;
        }, 1000);
    }
});





