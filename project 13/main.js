var input = document.querySelector(".input");
var add = document.querySelector(".add");
var tasks = document.querySelector(".tasks");
var remove_all = document.querySelector(".remove_all");
var array = [];

input.focus();



// ************* Update Tasks *************
if (JSON.parse(localStorage.getItem("tasks"))) {
    array = JSON.parse(localStorage.getItem("tasks"));
    array.forEach(element => createEle(element.title, element.id));
}

// ************* Create Element *************
function createEle(text, idEle) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    var deleteBtn = document.createElement("button");
    // Start Classes
    deleteBtn.className = "deleteTask";
    p.className = "taskName";
    div.className = "task";
    div.id = idEle;
    // Start Content
    p.innerHTML = text;
    deleteBtn.textContent = "Delete";
    // Start Styling
    div.style.cssText = "border-radius: 5px; margin-bottom: 15px; \
    padding: 12px; display: flex;\ background-color: white; justify-content: space-between;\
    align-items: center;";
    p.style.cssText = "width: 70%;  font-size: 18px; margin-right: 10px;";
    deleteBtn.style.cssText = "font-size: 17px; border-radius: 6px; border: 0; \
    padding: 6px; cursor:pointer; background-color: red; color: white";
    // Append Child
    div.appendChild(p);
    div.appendChild(deleteBtn);
    tasks.appendChild(div);
}


// ************* Set Item To Local Storage *************
add.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value) {
        const idEle = Math.floor(Math.random() * 10000);
        createEle(input.value, idEle);
        array.push({id: idEle, title: input.value});
        localStorage.setItem("tasks", JSON.stringify(array));
        input.value = "";
    }
});

// ************* Delete Element From LocalStorage & Tasks *************
tasks.addEventListener("click", function(e) {
    if (e.target.classList.contains("deleteTask")) {
        // Delete Element
        const id_of_ele = e.target.parentNode.id;
        var updatedArray  = array.filter( (ele) => ele.id != id_of_ele);
        e.target.parentNode.remove();
        // Set The Local Storage + Array
        localStorage.setItem("tasks", JSON.stringify(updatedArray));
        array = updatedArray;
    }
});

// Remove All Element
remove_all.addEventListener("click", function() {
    // const taskElement = document.querySelectorAll(".tasks div");
    // taskElement.forEach(ele => ele.removeChild());
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }
    array = [];
    localStorage.setItem("tasks", JSON.stringify(array));
});

// localStorage.setItem("tasks", JSON.stringify(array));
// console.log(JSON.parse(localStorage.getItem("tasks"))[0]);





