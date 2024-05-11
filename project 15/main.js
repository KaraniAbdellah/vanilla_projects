// dO THE LOCAL STORAGE 

// start getting variables
var submit_edit = document.querySelector(".submit_edit");
var add_task = document.querySelector(".add_task");
var alert = document.querySelector(".alert");
var tasks = document.querySelector(".tasks");
var clear_btn = document.querySelector(".clear_btn");

var elements = [];
// localStorage.setItem('myArray', JSON.stringify([1, 2, 3, 4, 5]));
// event.target.matches(".submit_edit");

var elements_local = localStorage.getItem('myArray', JSON.stringify(elements));
if (elements_local) {
    elements_local = JSON.parse(elements_local);
    elements_local.forEach(text => create_ele(text));
    console.log(elements);
}



// Create Element
function create_ele(text) {
    var task = document.createElement("div");
    var span = document.createElement("span");
    var icons = document.createElement("div");
    var icon1 = document.createElement("i");
    var icon2 = document.createElement("i");
    // Classes
    task.className = "task_add";
    span.className = "title";
    icons .className = "icons";
    icon1.className = "fa-solid fa-pen-to-square edit-icon";
    icon2.className = "fa-solid fa-trash remove-icon";
    // Styling && Text Content
    task.style.cssText = "padding: 10px; border-radius: 5px; background-color: #eee; margin-bottom: 10px;\
    display: flex; justify-content: space-between;";
    span.style.cssText = "font-size: 18px;";
    icons.style.cssText = "text-align: right; cursor: pointer;";
    icon1.style.cssText = "color: green; cursor: pointer;";
    icon2.style.cssText = "color: red; margin-left: 20px;";
    span.textContent = text;
    // Add Child
    task.appendChild(span);
    task.appendChild(icons);
    icons.appendChild(icon1);
    icons.appendChild(icon2);
    tasks.appendChild(task);
    elements.push(span.textContent);
    localStorage.setItem('myArray', JSON.stringify(elements));
    // Add Button For Remove All
    clear_btn.classList.add("show");
}


function alert_ele(message, class1, class2) {
    alert.textContent = message;
    alert.classList.add(class1);
    alert.classList.add(class2);
    setInterval(function() {
        alert.classList.remove(class2);
        alert.classList.remove(class1);
    }, 2000);
}


// Submit Button
submit_edit.addEventListener("click", function(e){
    e.preventDefault();
    if (!add_task.value) {
        alert_ele("Please Enter A Value", "show", "red");
        // submit_edit.value = "Submit"; 
    }
    if (submit_edit.value == "Submit" && add_task.value) {
        // Create Element
        create_ele(add_task.value);
        // Some Others Changes That Happen
        add_task.value = "";
        alert_ele("Item Add To The List", "show", "green");
    }
    if (submit_edit.value == "Edit" && add_task.value) {
        const must_edit = document.querySelector(".must_edit");
        must_edit.textContent = add_task.value;
        add_task.value = "";
        must_edit.classList.remove("must_edit");
        submit_edit.value = "Submit";
        alert_ele("Value Changed", "show", "green");
    }
});


// Edit Element
document.addEventListener("click", function(event) {
    if (event.target.matches(".edit-icon")) {
        const matches_task_edit = event.target.parentElement.parentElement.firstChild;
        // Some Changes
        event.target.parentElement.parentElement.firstChild.classList.add("must_edit");
        add_task.value = matches_task_edit.textContent;
        submit_edit.value = "Edit";
    }
});

// Remove Element
document.addEventListener("click", function(event) {
    if (event.target.matches(".remove-icon")) {
        const matches_task_remove = event.target.parentElement.parentElement;
        matches_task_remove.remove();
        alert_ele("Item Removed", "red", "show");
        // Some Changes About Remove Button Of Clear List
        const tasks_eles = document.querySelectorAll(".tasks div");
        if(tasks_eles.length == 0) clear_btn.classList.remove("show");
    }
});


// Remove All Element
clear_btn.addEventListener("click", function() {
    const tasks_eles = document.querySelectorAll(".tasks div");
    tasks_eles.forEach(element => element.remove());
    clear_btn.classList.remove("show");
    alert_ele("Empty List", "show", "red");
});









