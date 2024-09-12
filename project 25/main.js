const result_ele = document.querySelector(".result");
const search_btn = document.querySelector("button.search_btn");
const input = document.querySelector("input");


const main_info = document.querySelector("div.main_info");
const read_more = document.querySelector(".read_more");
const table_data = document.querySelector("table tbody");
const thead_table = document.querySelector("thead");
const fetch_ele = document.querySelector("p.fetch");

search_btn.addEventListener("click", async function() {
    if (input.value) {
        setEles();
        let word_searched = input.value;
        try {
            if (word_searched) {
                let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word_searched}`;
                let myPromise = fetch(apiUrl);
                await myPromise.then((result) => {
                    return result.json();
                }).then((Data) => {
                    console.log(Data, "Here");
                    if (!Data.message && Data) {
                        setTimeout(() => {
                            getResult(Data, word_searched);
                        }, 1000);
                    } else message(Data.message);
                }).catch((msg) => {
                    message(msg);
                });
            } 
        } catch (error) {
            message(error);
        }
    } else input.focus();

});


function setEles() {
    fetch_ele.textContent = "Fetching the data...";
    fetch_ele.classList.remove("hidden");
    main_info.innerHTML = "";
    read_more.innerHTML = "";
    table_data.innerHTML = "";
    thead_table.innerHTML = "";
}

function message(msg) {
    fetch_ele.textContent = msg;
}

function autoPlay(audio_link) {
    const audio_name = new Audio(audio_link);
    audio_name.play();
}

function getResult(Data, word_searched) {
    let audio_link;
    console.log(Data[0].phonetics);
    if (Data[0].phonetics.length) {
        audio_link = Data[0].phonetics[0].audio;
    } else {
        audio_link = "https://api.dictionaryapi.dev/media/pronunciations/en/nothing-us.mp3";
    }
    
    let source_url = Data[0].sourceUrls;

    // get the meaning and examples
    let meaning = [];
    let example = [];
    for (let j = 0; j < Data[0].meanings.length; j++) {
        if (Data[0].meanings[j].definitions) {
            for (let i = 0; i < Data[0].meanings[j].definitions.length; i++) {
                let meaning_text = Data[0].meanings[j].definitions[i].definition;
                let example_text = Data[0].meanings[j].definitions[i].example;
                if (meaning_text && example_text) {
                    let status = Data[0].meanings[j].partOfSpeech;
                    meaning.push({[status]: meaning_text});
                    example.push({[status]: example_text});
                    break;
                }
            }
        }
    }

    // check if word exit in dictionary or no
    if (meaning && example) {
        // set main info
        main_info.innerHTML = `
            <p>${word_searched}</p>
            <a class="audio" href='#' onclick="autoPlay('${audio_link}')">
                <i class="fa fa-volume-up"></i>
            </a>
        `;
        // set meaning and examples

        thead_table.innerHTML = `
        <tr>
            <th>Status</th>
            <th>Meaning</th>
            <th>Example</th>
        </tr>
        `;
        for (let i = 0; i < meaning.length; i++) {
            let new_tr = document.createElement("tr");
            console.log(Object.keys(meaning[i])[0]);
            let td1 = document.createElement("td"); td1.textContent = Object.keys(meaning[i])[0];
            let td2 = document.createElement("td"); td2.textContent = meaning[i][Object.keys(meaning[i])[0]];
            let td3 = document.createElement("td"); td3.textContent = example[i][Object.keys(example[i])[0]];
            new_tr.appendChild(td1); new_tr.appendChild(td2); new_tr.appendChild(td3);
            table_data.appendChild(new_tr);
        }
        // set the read more
        
        read_more.innerHTML = `
            <i class="fa-solid fa-right-long"></i>
            <a href='${source_url}' target='__blank'>read more</a>
        `;
    

    } 
    else message("Sorry, Can Not Found This Word");

    fetch_ele.classList.add("hidden");

}
