// Get The Element From Html
const li_btns = document.querySelectorAll("ul li");


// update from local storage
if (localStorage.getItem("objectTime")) {
    let ele_class = localStorage.getItem("objectTime");
    let ele = document.querySelector(`li.${ele_class}`);
    if (ele) ShowElement(ele);
    else ShowElement(li_btns[0]); // Fallback to the first item
}


// Show or Hidden Element
li_btns.forEach(ele => {
    ele.addEventListener("click", function(e) {
        if (!ele.classList.contains("active")) {
            localStorage.setItem("objectTime", `${ele.className}`);
            ShowElement(ele);
        }
    });
});


// For Add & Remove Classes [ active, hidden ]
function ShowElement(ele) {
    li_btns.forEach(item => {
        item.classList.remove("active");
        const div = document.querySelector(`div.${item.className}`);
        div.classList.add("hidden");
    });
    const targetDiv =  document.querySelector(`div.${ele.className}`);
    if (targetDiv) targetDiv.classList.remove("hidden"); // error handling
    ele.classList.add("active");
}


