// Start Custom The navBar
const close = document.querySelector(".close");
const nav_bar = document.querySelector(".nav-bar");
const navigations = document.querySelector(".navigations");

nav_bar.addEventListener("click", function() {
    navigations.classList.toggle("show");
    close.classList.toggle("show");
});


close.addEventListener("click", function() {
    navigations.classList.remove("show");
    close.classList.remove("show");
})



// Start Main Info
const full_name = document.querySelector(".name");
const bio = document.querySelector(".bio");
const github_link = document.querySelector(".links .github");
const avatar = document.querySelector(".avatar");
const title = document.querySelector(".title");


let Data = new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://api.github.com/users/KaraniAbdellah");
    myRequest.send();
    myRequest.onload = function() {
        if (myRequest.status == 200 && myRequest.readyState == 4) {
            resolve(myRequest.response);
        } else reject(new Error("Can Not Get The Data"));
    }
});

function setValues(ele, data, msg) {
    if (data) {
        ele = data;
    } else ele = msg;
}

Data.then((resolveValue) => {

    let bio_msg = "An IT professional with expertise in network administration,\
    cybersecurity, and technical support. Actively contributes to GitHub, sharing\
    scripts and tools for system management and security.";

    let object_data = JSON.parse(resolveValue);
    setValues(title.textContent, object_data.name, "John Deo");
    setValues(full_name.textContent, object_data.name, "John Deo");
    setValues(bio.textContent, object_data.bio, bio_msg);
    setValues(avatar.src, object_data.avatar_url, "https://robohash.org/mail@ashallendesign.co.uk");
    setValues( github_link.href, object_data.blog, "https://github.com/KaraniAbdellah?tab=repositories");
}).catch((rejectValue) => {
    // create a pop_up
    console.log(rejectValue);
});


// Start With Projects
const boxes = document.querySelector(".boxes");
fetch("https://api.github.com/users/KaraniAbdellah/repos").then((resolve) => {
    let Data = resolve.json();
    return Data;
}).then((Data) => {
    console.log(Data[0].watchers_count);
    console.log(Data[0].name);
    console.log(Data[0].clone_url);
    console.log(Data[0].ssh_url);
}).catch((reject) => {
    console.log(reject);
})







// Main Info
/*
    title.textContent = Data.name;
    full_name.textContent = Data.name;
    bio.textContent = Data.bio;
    avatar.src = Data.avatar_url;
    github_link.href = Data.blog;
*/
// Project
/*
console.log(Data[0].watchers_count);
console.log(Data[0].clone_url);
console.log(Data[0].ssh_url);
console.log(Data[0].name);
    console.log(Data[0]);
*/



