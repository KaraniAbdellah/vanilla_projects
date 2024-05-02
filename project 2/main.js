var btns = document.querySelectorAll(".btn");
var myPar = document.getElementById("counter");
var count = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function(event) {
        // const classes = event.currentTarget.classList;
        // const classes = btn.classList;
        if (btn.classList.contains("add")) count++;
        else if (btn.classList.contains("remove")) count--;
        else count = 0;

        if (count < 0) myPar.style.color = "red";
        else if (count > 0) myPar.style.color = "green";
        else myPar.style.color = "#0075ff";
        myPar.textContent = count;
    });
});

