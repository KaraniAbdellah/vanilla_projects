const toggle = document.querySelector(".mode .toggle");
const circle = document.querySelector(".mode .toggle .circle");
const content_page = document.querySelector(".content-page");
const title = document.querySelector(".header .text h3");
const overview = document.querySelector("section.overview h3");
const up_icon = document.querySelectorAll(".up");
const down_icon = document.querySelectorAll(".down");
const nbr_followers = document.querySelectorAll(".nbr-followers");
const state_today = document.querySelectorAll(".state-today .message");
const boxes = document.querySelectorAll(".box");


// Custom The Local Storage
if (window.localStorage.getItem("theme") == "dark") {
    changeTheme();
}


// Custom Dark/Ligth Mode
toggle.addEventListener("click", function() {
    changeTheme();
    if (toggle.classList.contains("dark")) {
        window.localStorage.setItem("theme", "dark");
    } else window.localStorage.setItem("theme", "light");
});


// Function That Change The Theme
function changeTheme() {
    toggle.classList.toggle("dark");
    circle.classList.toggle("dark");
    content_page.classList.toggle("dark");
    title.classList.toggle("dark");
    overview.classList.toggle("dark");
    nbr_followers.forEach(ele => ele.classList.toggle("dark"));
    state_today.forEach(ele => ele.classList.toggle("dark"));
    boxes.forEach(ele => ele.classList.toggle("dark"));
}


// Custom State Number 
up_icon.forEach(element => {
    element.nextElementSibling.style.color = "green";
});
down_icon.forEach(element => {
    element.nextElementSibling.style.color = "red";
});








