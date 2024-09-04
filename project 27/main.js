

function convert() {
    
    const from_input = document.querySelector(".from");
    const to_input = document.querySelector(".to");
    const span_result = document.querySelector("span.result");
    const amount = document.querySelector("input.amount");
    const submit_btn = document.querySelector(".submit");
    
    
    
    submit_btn.addEventListener("click", function() {
        let myPromise = fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=879f9e38d5014cc5b117dd961805f0a5");
        console.log(myPromise);
        
        myPromise.then((Data) => {
            let result = Data.json();
            return result;
        }).then((currencies) => {
            console.log(currencies);
            if (from_input.value && to_input.value) {
                console.log(amount.value,  currencies.rates[to_input.value]);
                let result = Number(amount.value * currencies.rates[to_input.value]);
                console.log(result);
                span_result.textContent = result;
            }
            console.log(currencies.rates[from_input.value]);
            console.log(currencies.rates[to_input.value]);
        });
    });

}



