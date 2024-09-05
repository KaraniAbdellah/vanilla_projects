const select_from = document.querySelector(".from select.currencies");
const select_to = document.querySelector(".to select.currencies");
const exchange_btn = document.querySelector("button.exchange");
const amount = document.querySelector("input.amount");
const result_text = document.querySelector(".result");
const exchange_icon = document.querySelector(".icon");

select_from.value = "SHP";
select_to.value = "SHP";

document.addEventListener("DOMContentLoaded", function() {
    myImagePromise = fetch("https://restcountries.com/v3.1/all");
    myImagePromise.then((result) => {
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
});



exchange_btn.addEventListener("click", convert);


exchange_icon.addEventListener("click", function() {
    console.log(select_to.value);
   let temp = select_to.value;
   select_to.value = select_from.value;
   select_from.value = temp;
   convert();
});

function convert() {
    let myPromise = fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=879f9e38d5014cc5b117dd961805f0a5");
    myPromise.then((result) => {
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



// why in icons we generate flags

