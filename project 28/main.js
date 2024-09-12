const input_data = document.querySelector("input");
const button_dwn = document.querySelector("button");

button_dwn.addEventListener("click", function() {
    if (input_data.value) {
         
        fetch(input_data.value, {mode: 'no-cros'})
        .then((reponse) => {
            return reponse.blob();
        }).then((blob) => {
            console.log(blob.type.replace("/", "."));
            const myUrl = URL.createObjectURL(blob);
            const aTag = document.createElement("a");
            aTag.href = myUrl;
            aTag.download = blob.type.replace("/", ".");
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            // 
        }).catch((msg) => {
            console.log(msg);
        });

    } else input_data.focus();
})



