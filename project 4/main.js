let myNavBar = document.querySelector(".navBar");
let myBtn = document.querySelector(".btn-change");
myBtn.addEventListener("click", function() {
    // if (myNavBar.classList.contains("hovered")) {
    //     myNavBar.classList.remove("hovered");
    //     myBtn.classList.remove("rotate");
    // } else {
    //     myNavBar.classList.add("hovered");
    //     myBtn.classList.add("rotate");
    // }
    myNavBar.classList.toggle("hovered");
    myBtn.classList.toggle("rotate");
});
