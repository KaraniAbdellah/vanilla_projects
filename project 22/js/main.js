// Start Getting Variables
const name_input = document.querySelector("form input.name");
const email_input = document.querySelector("form input.email");
const mobile_input = document.querySelector("form input.mobile");
const submit_input = document.querySelector("form input.submit");
const tbody = document.querySelector("table tbody");
console.log(tbody);

const node = `
<tr>
    <td>Abdellah</td>
    <td>Abdellah@gmail.com</td>
    <td>+212607848253</td>
    <td><button class="delete">delete</button><button class="edit">edit</button></td>
</tr>
`;

function createNode() {
    let new_tr = document.createElement("tr");
    let new_td1 = document.createElement("td");
    new_td1.textContent = name_input.value;
    let new_td2 = document.createElement("td");
    new_td2.textContent = email_input.value;
    let new_td3 = document.createElement("td");
    new_td3.textContent = mobile_input.value;
    let new_td4 = document.createElement("td");
    new_td4.textContent = "BUtton";
    new_tr.appendChild(new_td1);
    new_tr.appendChild(new_td2);
    new_tr.appendChild(new_td3);
    new_tr.appendChild(new_td4);
    tbody.appendChild(new_tr);
}
submit_input.addEventListener("click", function(e) {
    e.preventDefault();
    createNode();
});



