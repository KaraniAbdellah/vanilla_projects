const btn_name = document.querySelectorAll("button");

btn_name.forEach(element => {
    element.addEventListener("click", function(e) {
        console.log(e.target.className);
        const div_ele = document.querySelector(`div.${e.target.className}`);
        console.log(div_ele);
        div_ele.classList.add("show");
        setTimeout(() => {
            div_ele.classList.remove("show");
        }, 2000);
    });
});

const close_icons = document.querySelectorAll(".close");
close_icons.forEach(element => {
    element.addEventListener("click", function() {
        const div_ele = element.parentElement;
        div_ele.classList.remove("show");
    });
});








