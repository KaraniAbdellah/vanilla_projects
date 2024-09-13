const input_data = document.querySelector("input");
const button_dwn = document.querySelector("button");
const error_ele = document.querySelector(".error");

button_dwn.addEventListener("click", function() {
    if (input_data.value) {
        try {
            fetch(input_data.value)
            .then((reponse) => {
                if (!reponse.ok) showError();
                return reponse.blob();
            }).then((blob) => {
                download(blob);
            }).catch((msg) => {
                showError();
            });
        } catch (error) {
            showError();
        }

    } else input_data.focus();
});


function download(blob) {
    const myUrl = URL.createObjectURL(blob);
    const aTag = document.createElement("a");
    aTag.href = myUrl;
    aTag.download = blob.type.replace("/", ".");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}



function showError() {
    error_ele.classList.remove("hidden");
    setTimeout(() => {
        error_ele.classList.add("hidden");
    }, 2000);
}


