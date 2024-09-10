const result_ele = document.querySelector(".result");
const search_btn = document.querySelector("button.search_btn");

let myPromise = fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=9560cefb-377a-4957-b43d-e289488f7b23");
myPromise.then((result) => {
    return result.json();
}).then((Data) => {
    console.log(Data);
});

result_ele.innerHTML = "Result Here";






