let links_container = document.querySelector(".links-container");
let links = document.querySelector(".links");
let liLinks = document.querySelectorAll(".links li");
let navIcon = document.querySelector(".navIcon");

/* ******* Hide The Nav bar If Click Link ********/
liLinks.forEach(function(ele) {
    ele.addEventListener("click", function() {
        links_container.classList.remove("down");
        links.classList.remove("down");
        links_container.style.height = 0;
        navIcon.className = "fas fa-bars navIcon";
        navIcon.style.color = "black";
    });
});

navIcon.addEventListener("click", function() {
    // Set The Height + Add down Class
    links_container.classList.toggle("down");
    links.classList.toggle("down");
    const heightCont = links_container.getBoundingClientRect().height;
    const heightLinks = links.getBoundingClientRect().height;
    if (heightCont == 0) {
        links_container.style.height = `${heightLinks}px`;
        navIcon.className = "fa-solid fa-xmark navIcon";
        navIcon.style.color = "red";
    } else {
        links_container.style.height = 0;
        navIcon.className = "fas fa-bars navIcon";
        navIcon.style.color = "black";
    }
});


/*  ******* Set Date For Giveaway ******* */
let months = ["January", "February", "March", "April", "May", "Jun",
"Juliet", "August", "September", "October", "December"];
let days = ["Monday", "Thursday", "Wednesday", "Tuesday",
"Friday", "Sunday", "Saturday"];

let end_giv = document.querySelector(".end_giv");
// Get The Current Date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();
// Set The Future Date
let future_date = new Date(tempYear + 2, tempMonth, tempDay, 11, 20);
const year = future_date.getFullYear();
const hours = future_date.getHours();
const minutes = future_date.getMinutes();
const month_name = months[future_date.getMonth() - 1];
const day_name = days[future_date.getDay()];
// Tuesday, 30 April 2024 11:30am
end_giv.textContent = `${day_name}, ${future_date.getMonth()} \
${month_name} ${year} ${hours}:${minutes}am`;



// Start Count Down
const items = document.querySelectorAll(".main-time li .time-value");
const itemEle = document.querySelector(".main-time");

function getRemainingDay() {
    const current_date_mil = new Date().getTime();
    const future_date_mil = future_date.getTime();
    // Time In Mill Seconds
    const oneDay = 24 * 3600 * 1000;
    const oneHour = 3600 * 100;
    const oneMinute = 60 * 1000;
    // Calculate All Values
    const t = (future_date_mil - current_date_mil)
    const days = Math.floor((t / oneDay));
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);
    // Put Values To The Elements
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) return `0${item}`;
        return item;
    }
    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countdown);
        itemEle.innerHTML = "<h4 class='expired'>Sorry, this giveaway has expired</h4>";
    }
}
// Cal The Function Every 1 Second
var countdown = setInterval(getRemainingDay, 1000);
getRemainingDay();



/* ******* Update Footer ******* */
let footer_copyright = document.querySelector("footer .date");
footer_copyright.textContent = new Date().getFullYear();





