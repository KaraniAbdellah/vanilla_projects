// Traversing The DOM
var questions = document.querySelectorAll(".question");
questions.forEach(function(question) {
    const btn = question.querySelector(".showPlus");
    btn.addEventListener("click" , function(e) {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
                // item.firstElementChild.lastElementChild.firstElementChild.classList.remove("minus");
                item.querySelector(".icon").classList.remove("minus");
            }
        });
        btn.firstElementChild.classList.toggle("minus");
        question.classList.toggle("show-text");
    });
});




