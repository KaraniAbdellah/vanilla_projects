// Generate a Content

const li_btns = document.querySelectorAll("ul li");
const divs = document.querySelectorAll(".clock > div");



li_btns.forEach(ele => {
    ele.addEventListener("click", function(e) {
        if (!ele.classList.contains("active")) {
            let div_item = document.querySelector(`div.${ele.className}`);
            showItem(div_item);
            addRemoveActive(ele);
        }
    });
});



function addRemoveActive(ele) {
    li_btns.forEach(item => {
        item.classList.remove("active");
    });
    ele.classList.add("active");
}


function showItem(ele) {
    divs.forEach(item => {
        item.classList.add("hidden");
    });
    ele.classList.remove("hidden");
}


// we need local storage and improve the code in this file main.js

