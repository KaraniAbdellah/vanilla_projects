
const date_text = document.querySelector(".date h2");

function updateDate() {
    let dateNow = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    let text = `${months[dateNow.getMonth()]} ${dateNow.getDate()} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
    date_text.innerHTML = text;
}
setInterval(updateDate, 1000);






