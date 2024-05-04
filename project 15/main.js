// start getting variables
var submit = document.querySelector(".submit");
var add_task = document.querySelector(".add_task");
var alert = document.querySelector(".alert");
var tasks = document.querySelector(".tasks");
var clear_btn = document.querySelector(".clear_btn");
// Create Element
function create_ele() {
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
    span.textContent = add_task.value;
    // Add Child
    task.appendChild(span);
    task.appendChild(icons);
    icons.appendChild(icon1);
    icons.appendChild(icon2);
    tasks.appendChild(task);
}

// Submit Button
document.addEventListener("click", function(event) {
    if (event.target.matches(".submit")) {
        event.preventDefault();
        create_ele();
        // After Create Element
        add_task.value = "";
        alert.textContent = "Item Add To The List";
        alert.style.cssText = "background-color: green;\
        width: 100%; height: 20px; border-radius: 5px;";
        clear_btn.classList.add("show");
    }
});

// Start Modification
var edit_icon = document.querySelector(".edit-icon");
var remove_icon = document.querySelector(".remove-icon");

document.addEventListener("click", function(event) {
    if (event.target.matches(".edit-icon")) {
        add_task.value = document.querySelector(".title").textContent;
        submit.value = "Edit";
        submit.className = "edit";
    }
    event.target.parentElement.parentElement.firstChild.classList.add("must_edit");
});

document.addEventListener("click", function(event) {
    if (event.target.matches(".edit")) {
        event.preventDefault();
        document.querySelector(".must_edit").textContent = add_task.value;
        add_task.value = "";
        alert.textContent = "Valued Changed";
        submit.value = "Submit";
        submit.className = "submit";
        document.querySelector(".must_edit").classList.remove("must_edit");
    }
});

// Remove Icon
document.addEventListener("click", function(event) {
    if (event.target.matches(".remove-icon")) {
        event.target.parentElement.parentElement.remove();
        alert.textContent = "Item Removed";
        alert.style.cssText = "background-color: red;";
    }
});

// Clear List Of Task
clear_btn.addEventListener("click", function() {
    document.querySelectorAll(".tasks div").forEach(element => {
        element.remove();
    });
    alert.textContent = "Remove All Item";
    clear_btn.classList.remove("show");
});





