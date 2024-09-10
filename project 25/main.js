const result_ele = document.querySelector(".result");
const search_btn = document.querySelector("button.search_btn");
const input = document.querySelector("input");

search_btn.addEventListener("click", function() {
    let word_searched = input.value;
    if (word_searched) {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word_searched}`;
        let myPromise = fetch(apiUrl);
        myPromise.then((result) => {
            return result.json();
        }).then((Data) => {
            console.log(Data);
            let audio_link = Data[0].phonetics[0].audio;
            console.log(audio_link);
            let source_url = Data[0].sourceUrls;

            let meaning = Data[0].meanings[0].definitions[0].definition;
            let example = Data[0].meanings[0].definitions[0].example;
            let status = Data[0].meanings[0].partOfSpeech;

            // result here
            result_ele.innerHTML = `
                <div class=main_info>
                    <div class=info>
                        <p class="word">Word : ${word_searched}</p>
                        <p class="status">${status}</p>
                    </div>
                    <a class="audio" href=${audio_link}>voice</a>
                </div>
                <div class=desc>
                    <p class="Meaning"><span>Meaning: </span>${meaning}</p>
                    <p class="Example"><span>Example: </span>${example}</p>
                </div>
                <div class=read_more>
                    <i class="fa-solid fa-right-long"></i>
                    <a href='${source_url}'>read more</a>
                </div>
            `;
        });

    }
});


// https://api.dictionaryapi.dev/api/v2/entries/en/hello



