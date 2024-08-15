// Getting Constances & Variables
const input_time = document.querySelector(".alarm .inputs .input_time");
const set_alarms = document.querySelector(".set_alarms");
const btn_add_alarm = document.querySelector(".alarm .inputs .btn");


// Class Alarm
class Alarm {
    constructor(id, time, toggle) {
        this.id = id;
        this.time = time;
        this.toggle = toggle;
    }
    
    AddAlarm() {
        Alarm.CreateAlarm(this.id, this.time, this.toggle);
    }

    static CreateAlarm(id, time, toggle) {
        if (!time) {
            alert("Invalid Time");
            return;
        }
        // create box
        let box = document.createElement("div");
        box.className = "box";
        box.dataset.id = id;
        let is_active = toggle ? "active" : "";
        box.innerHTML = `
           <p class=text>${time}</p>
           <div class=custom>
                <p class=toggle>
                    <span class='circle ${is_active}'></span>
                </p>
                <i class="delete fa-solid fa-trash"></i>
           </div>
        `;
        set_alarms.appendChild(box);
    }

    AddToLocalStorage() {
        // store the data at Local Storage
        if(this.time) {
            const allDates = JSON.parse(localStorage.getItem("Dates")) ?? [];
            allDates.push({id: this.id, time: this.time, toggle: false});
            localStorage.setItem("Dates", JSON.stringify(allDates));
        }
    }

    static showAllData() {
        const allDates = JSON.parse(localStorage.getItem("Dates")) ?? [];
        // default time
        allDates.unshift({id: 1111, time: "08:30"}); // add at begin of array
        allDates.forEach(element => {
            Alarm.CreateAlarm(element.id, element.time, element.toggle);
        });
    }

}

// Show All Alarms
Alarm.showAllData();

// Add Alarm
btn_add_alarm.addEventListener("click", function() {
    let new_id = Math.floor(Math.random() * 10000);
    let new_alarm = new Alarm(new_id, input_time.value, false);
    new_alarm.AddAlarm();
    new_alarm.AddToLocalStorage();
});

// Delete Alaram And Show Toggle
set_alarms.addEventListener("click", function(e) {
    if (e.target.classList.contains("circle")) {
        // Edit From Local Storage
        EditAlarm(e.target);
        // Edit From HTML
        let circle_ele = e.target; // firstElementChild
        circle_ele.classList.toggle("active");
    }
    if (e.target.classList.contains("delete")) {
        // Remove Alarm From LocalStorage
        RemoveAlarm(e.target);
        // Remove Alarm From HTML
        let parentEle = e.target.parentElement.parentElement;
        parentEle.remove();
    }
});


// Edit Alarm
function EditAlarm(ele) {
    const Dates = JSON.parse(localStorage.getItem("Dates")) ?? [];
    let id = ele.parentElement.parentElement.parentElement.dataset.id;
    Dates.forEach(ele => ele.id == id ? ele.toggle = !ele.toggle: '');
    localStorage.setItem("Dates", JSON.stringify(Dates));
}

// Remove Alarm 
function RemoveAlarm(ele) {
    let parentEle = ele.parentElement.parentElement;
    let to_delete = parentEle.dataset.id;
    let allDates = JSON.parse(localStorage.getItem("Dates"));
    allDates = allDates.filter(ele => ele.id != to_delete);
    localStorage.setItem("Dates", JSON.stringify(allDates));
}



