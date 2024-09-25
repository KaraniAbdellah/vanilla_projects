

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function() {
    const element5 = document.querySelector(".card5");
    const rect = element5.getBoundingClientRect();
    // console.log(rect.top + rect.height, this.window.scrollY);
    if (rect.top >= 0 && rect.top + rect.height <= window.scrollY) { // innerHeight == scrollY
        element5.style.backgroundColor = 'yellow'; // Change color when in view
        element5.classList.add("animation");
    }
});





