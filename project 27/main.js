const select_from = document.querySelector(".from select.currencies");
const select_to = document.querySelector(".to select.currencies");
const exchange_btn = document.querySelector("button.exchange");
const amount = document.querySelector("input.amount");
const result_text = document.querySelector(".result");
const exchange_icon = document.querySelector(".icon");


document.addEventListener("DOMContentLoaded", function() {
    getFlags();
});



exchange_btn.addEventListener("click", async function() {
    await convert(); // ensure that convet function complete
    await  setLocalStorage(); // ensure that setLocalStorage function complete
});


exchange_icon.addEventListener("click", async function() {
   let temp = select_to.value;
   select_to.value = select_from.value;
   select_from.value = temp;
   await convert(); // ensure that convet function complete
   await setLocalStorage(); // ensure that setLocalStorage function complete
});


async function convert() {
    let myPromise = fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=879f9e38d5014cc5b117dd961805f0a5");
    await myPromise.then((result) => {
        return result.json();
    }).then((Data) => {
        let amount_value = amount.value;
        let currency_to_value = Data.rates[select_to.value];
        let result = (amount_value * currency_to_value).toFixed(4);
        
        result_text.innerHTML = "Getting Exchange Info...";
        setTimeout(() => {
            result_text.innerHTML = `${amount_value} ${select_from.value} = ${result} ${select_to.value}`;
        }, 1000);
    });
}


async function getFlags() {
    // Get Country Flags Using An API
    myImagePromise = fetch("https://restcountries.com/v3.1/all");
    await myImagePromise.then((result) => {
        return result.json();
    }).then((Data) => {
        // console.log(Data);
        Data.forEach(element => {
            if (element.currencies) {
                let abvertion = (Object.keys(element.currencies)[0]);
                let option_ele = document.createElement("option");
                option_ele.value = abvertion;
                option_ele.innerHTML = `${element.flag} ${abvertion}`;
                select_from.appendChild(option_ele);
                let option_ele_colne = option_ele.cloneNode(true);
                select_to.appendChild(option_ele_colne);
            }
        });
    });
    // Get Values From Local Storage
    if (localStorage.getItem("select_from_value") && localStorage.getItem("select_to_value") && localStorage.getItem("result")) {
        select_from.value = localStorage.getItem("select_from_value");
        select_to.value = localStorage.getItem("select_to_value");
        result_text.textContent = localStorage.getItem("result");
        console.log(select_from.value, select_to.value);
        console.log(localStorage.getItem("select_from_value"), localStorage.getItem("select_to_value"));
    }
}


function setLocalStorage() {
    setTimeout(() => {
        localStorage.setItem("select_from_value", select_from.value);
        localStorage.setItem("select_to_value", select_to.value);
        localStorage.setItem("result", result_text.textContent);
    }, 1000);
}





