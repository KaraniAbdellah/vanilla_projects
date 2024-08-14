// Getting Constances & Variables
const input_time = document.querySelector(".alarm .inputs .input_time");
const set_alarms = document.querySelector(".set_alarms");
const btn_add_alarm = document.querySelector(".alarm .inputs .btn");





// Get The Alarms From Local Storage
document.addEventListener("DOMContentLoaded", function() {
    const allDates = JSON.parse(localStorage.getItem("Dates")) ?? [];
    // default time
    allDates.unshift({id: 1111, time: "08:30"}); // add at begin of array
    allDates.forEach(element => {
        create_alarm(element.time, element.id);
    });
});



// Function Create Item
function create_alarm(time, id) {
    if (!time) {
        alert("Invalid Time");
        return;
    }
    // create box
    let box = document.createElement("div");
    box.className = "box";
    box.dataset.id = id;
    box.innerHTML = `
       <p class=text>${time}</p>
       <div class=custom>
            <p class=toogle>
                <span class=circle></span>
            </p>
            <i class="delete fa-solid fa-trash"></i>
       </div>
    `;
    set_alarms.appendChild(box);
}



// Add Item
btn_add_alarm.addEventListener("click", function() {
    let id = Math.floor(Math.random() * 10000);
    create_alarm(input_time.value, id);
    // add to local storage
    if (input_time.value) {
        let allDates = JSON.parse(localStorage.getItem("Dates")) ?? [];
        allDates.push({id: id, time: input_time.value});
        localStorage.setItem("Dates", JSON.stringify(allDates));
    }
});



// Delete Alaram And Show Toggle
set_alarms.addEventListener("click", function(e) {
    if (e.target.classList.contains("circle")) {
        let circle_ele = e.target; // firstElementChild
        circle_ele.classList.toggle("active");
    }
    if (e.target.classList.contains("delete")) {
        // Remove Alarm From HTML
        let parentEle = e.target.parentElement.parentElement;
        parentEle.remove();
        // Remove Alarm From LocalStorage
        let to_delete = parentEle.dataset.id;
        let allDates = JSON.parse(localStorage.getItem("Dates"));
        console.log(allDates);
        allDates = allDates.filter(ele => ele.id != to_delete);
        localStorage.setItem("Dates", JSON.stringify(allDates));
        console.log(allDates);
    }
});




// cutsom the sbagite code
// simulate a functions







