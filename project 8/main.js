// For Idea You Need The Items In HTML File
function idea_1() {
    const status_foods = document.querySelectorAll(".food");
    const plans_boxes = document.querySelectorAll(".box");
    function display_show_class() {
        plans_boxes.forEach(function(box) {
            box.classList.add("show");
        });
    }
    function remove_show_class() {
        plans_boxes.forEach(function(box) {
            box.classList.remove("show");
        });    
    }
    function display_n_items(start, end) {
        for (var i = start; i < end; i++) {
            plans_boxes[i].classList.add("show");
        }
    }
    window.addEventListener("DOMContentLoaded", () => display_show_class());
    status_foods.forEach(function(ele) {
        ele.addEventListener("click", function() {
            remove_show_class();
            if (ele.classList.contains("breakfast")) display_n_items(0, 3);
            if (ele.classList.contains("lunch")) display_n_items(3, 6);
            if (ele.classList.contains("shakes")) display_n_items(6, 9);
            if (ele.classList.contains("dinner")) display_n_items(9, 10);
            if (ele.classList.contains("all")) display_show_class();
        });
    });    
}

// For This Idea You Do Not The Items
function idea_2() {
    var foods = document.querySelector(".foods"); // get Mean Class
    var src_images = ["item-1.jpeg", "item-2.jpeg", "item-10.jpeg", "item-4.jpeg",
    "item-5.jpeg", "item-6.jpeg", "item-7.jpeg",
    "item-8.jpeg", "item-9.jpeg","item-10.jpeg"];
    function makeItem(image) {
        return `
            <div class="image">
                <img src="images/${image}" alt="No Image">
            </div>
            <div class="desc">
                <div class="name_price">
                    <h3>Name</h3>
                    <p>200$</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, doloremque.</p>
            </div>
            `;
    }
    function add_item(image) {
        var item = document.createElement("div");
        item.className = "box";
        item.innerHTML =  makeItem(image);
        foods.appendChild(item);
    }
    for (var i = 0; i < 10; i++) {
        add_item(src_images[i]);
    }
    const boxes = document.querySelectorAll(".box"); // Getting All Boxes
    const status_food = document.querySelectorAll(".food"); // Getting Status [breakfast, ..., dinner]
    function display_show_class() {
        boxes.forEach(function(box) {
            box.classList.add("show");
        });
    }
    function remove_show_class() {
        boxes.forEach(function(box) {
            box.classList.remove("show");
        });    
    }
    function display_n_items(start, end) {
        for (var i = start; i < end; i++) {
            boxes[i].classList.add("show");
        }
    }
    window.addEventListener("DOMContentLoaded", () => display_show_class());
    status_food.forEach(function(ele) {
        ele.addEventListener("click", function() {
            remove_show_class();
            if (ele.classList.contains("breakfast")) display_n_items(0, 3);
            if (ele.classList.contains("lunch")) display_n_items(3, 6);
            if (ele.classList.contains("shakes")) display_n_items(6, 9);
            if (ele.classList.contains("dinner")) display_n_items(9, 10);
            if (ele.classList.contains("all")) display_show_class();
        });
    });
}

idea_2();

