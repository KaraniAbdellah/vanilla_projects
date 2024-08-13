
const input_time = document.querySelector(".alarm .inputs .input_time");
const set_alarms = document.querySelector(".set_alarms");
const btn_add_alarm = document.querySelector(".alarm .inputs .btn");


function create_alarm(time) {
    let box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
       <p class=text>${time}</p>
       <div class=custom>
            <p class=active>
                <span class=circle></span>
            </p>
            <i class="fa-solid fa-trash"></i>
       </div>
    `;
    set_alarms.appendChild(box);
}


btn_add_alarm.addEventListener("click", function() {
    create_alarm(input_time.value);
})


