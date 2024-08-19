// Getting The Variables
const boxes = document.querySelectorAll(".box");
const refrech = document.querySelector(".refrech");
const div_boxes = document.querySelector(".boxes");

refrech.addEventListener("click", function() {
    boxes.forEach(element => {
        const box_color = element.firstElementChild;
        const box_color_name = box_color.nextElementSibling;
        // Random Color
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        box_color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        box_color_name.textContent = `rgb(${red}, ${green}, ${blue})`;
    });
});

div_boxes.addEventListener("click", function(e) {
    if (e.target.classList.contains("color_name")) {
        console.log(e.target);
    }
})



