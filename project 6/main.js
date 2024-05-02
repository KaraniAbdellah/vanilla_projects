// Start Model 
const model_btn = document.querySelector(".model-btn");
var model_overlay = document.querySelector(".model-overlay");
var closeModel = document.querySelector(".close-btn");
var myPage = document.querySelector(".page");
model_btn.addEventListener("click", function() {
    model_overlay.classList.add("show");
    myPage.classList.add("show");
});
closeModel.addEventListener("click", function() {
    model_overlay.classList.remove("show");
    myPage.classList.remove("show");
});

