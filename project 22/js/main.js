// Start Getting Variables
const name_input = document.querySelector("form input.name");
const email_input = document.querySelector("form input.email");
const mobile_input = document.querySelector("form input.mobile");
const submit_input = document.querySelector("form input.submit");
const tbody = document.querySelector("table tbody");
const page_content = document.querySelector(".page_content");
let edited_ele;
let eles = [];
let index;



// Create Eles From Local Storage
if (JSON.parse(localStorage.getItem('eles'))) {
    let eles = JSON.parse(localStorage.getItem('eles'));
    for (let i = 0; i < eles.length; i++) {
        createNode(eles[i][0], eles[i][1], eles[i][2]);
    }
}


// create new row in table
function createNode(name, email, mobile) {
    let new_tr = document.createElement("tr");
    let tds = [];
    let content = [name, email, mobile];
    for (let i = 0; i < 4; i++) {
        tds[i] = document.createElement("td");
        if (i == 3) {
            let btn1 = document.createElement("button"); btn1.className = "delete";
            let btn2 = document.createElement("button"); btn2.className = "edit";
            // generate button value depend in page
            generateValue(btn1, btn2); 
            tds[3].appendChild(btn1); tds[i].appendChild(btn2);
        }
        else tds[i].textContent = content[i];
        new_tr.appendChild(tds[i]);
        tbody.appendChild(new_tr);
    }
    // add content to local storage
    eles.push(content);
    localStorage.setItem('eles', JSON.stringify(eles));
}


// when clicking to submit button
submit_input.addEventListener("click", function(e) {
    e.preventDefault();
    // edit node
    if (submit_input.classList.contains("for_edit")) {
        let tr_edited = edited_ele;
        let new_content = [name_input.value, email_input.value, mobile_input.value];
        let tds = [tr_edited.children[0], tr_edited.children[1], tr_edited.children[2]];
        // edit values
        for (let i = 0; i < tds.length; i++) {
            tds[i].textContent = new_content[i];
        }
        submit_input.classList.remove("for_edit");
        tr_edited.classList.remove("edited");
        setInputs();
        // edit at local storage
        eles[index][0] = new_content[0];
        eles[index][1] = new_content[1];
        eles[index][2] = new_content[2];
        localStorage.setItem('eles', JSON.stringify(eles));
    }
    // add node
    else {
        if (name_input.value && email_input.value && mobile_input.value) {
            createNode(name_input.value , email_input.value, mobile_input.value);
            setInputs();
        }
    }
});


// delete element
tbody.addEventListener("click", function(e) {
    let button_btn = e.target;
    // delete element
    if (button_btn.classList.contains("delete")) {
        let parentEle = button_btn.parentElement.parentElement;
        setInputs();
        // get position of element deleted
        let children_ele = parentEle.parentElement.children;
        for (let i = 0; i < children_ele.length; i++) {
            if (children_ele[i] == parentEle) {
                index = i; break;
            }
        }
        // delete from local storage
        let eles = JSON.parse(localStorage.getItem('eles'));
        eles.splice(index, 1);
        localStorage.setItem('eles', JSON.stringify(eles));
        parentEle.remove();
    }
    // edit data
    if (button_btn.classList.contains("edit")) {
        let parentEle = button_btn.parentElement.parentElement;
        parentEle.classList.add("edited");
        name_input.value = parentEle.children[0].textContent;
        email_input.value = parentEle.children[1].textContent;
        mobile_input.value = parentEle.children[2].textContent;
        // add class to submit button
        submit_input.classList.add("for_edit");
        edited_ele = parentEle;
        // get position of element must edited
        let children_ele = parentEle.parentElement.children;
        for (let i = 0; i < children_ele.length; i++) {
            if (children_ele[i] == parentEle) {
                index = i; break;
            }
        }
    }
});


// set input as default 
function setInputs() {
    name_input.value = email_input.value = mobile_input.value = "";
}


// generate button value depending in wich page we are
function generateValue(btn1, btn2) {
    if (page_content.classList.contains("french")) {
        btn1.textContent = "supprimer";
        btn2.textContent = "modifier";
    } else if (page_content.classList.contains("englich")) {
        btn1.textContent = "delete";
        btn2.textContent = "edit";
    } else if (page_content.classList.contains("arabic")) {
        btn1.textContent = "حذف";
        btn2.textContent = "تعديل";
    }
}



// local storage
// let myArray = [1, 2, 3, 4, 5];
// localStorage.setItem('myArray', JSON.stringify(myArray));
// let newArray = JSON.parse(localStorage.getItem('myArray'));



