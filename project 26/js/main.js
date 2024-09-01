// Start Custom The navBar
const close = document.querySelector(".close");
const nav_bar = document.querySelector(".nav-bar");
const navigations = document.querySelector(".navigations");
const portfolio = document.querySelector(".portfolio");

nav_bar.addEventListener("click", function() {
    navigations.classList.toggle("show");
    close.classList.toggle("show");
});

close.addEventListener("click", function() {
    navigations.classList.remove("show");
    close.classList.remove("show");
});


// Start Login 
let url_value = localStorage.getItem("link");
let new_url = `https://api.github.com/users/${url_value}`;
console.log(new_url);



// Start Main Info
const full_name = document.querySelector(".name");
const bio = document.querySelector(".bio");
const github_link = document.querySelector(".links .github");
const avatar = document.querySelector(".avatar");
const title = document.querySelector(".title");
let nbr_repos = 0;
let location_value = "SomeWhere In This World";

let Data = new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", new_url);
    myRequest.send();
    myRequest.onload = function() {
        if (myRequest.status == 200 && myRequest.readyState == 4) {
            resolve(myRequest.response);
        } else reject(new Error("Can Not Found You Data"));
    }
});

function setPortfolio(msg) {
    portfolio.innerHTML = `
    <p class=error>${msg}</p>
    <a href="../html/login.html">back to login</a>
`;
}

Data.then((resolveValue) => {

    let bio_msg = "An IT professional with expertise in network administration,\
    cybersecurity, and technical support. Actively contributes to GitHub, sharing\
    scripts and tools for system management and security.";

    let object_data = JSON.parse(resolveValue);
    console.log(object_data.name);
    title.textContent = (object_data.name) ? object_data.name : "John Deo";
    full_name.textContent = (object_data.name) ? object_data.name : "John Deo";
    bio.textContent = (object_data.bio) ? object_data.bio : bio_msg;
    avatar.src = (object_data.avatar_url) ? object_data.avatar_url : "https://robohash.org/mail@ashallendesign.co.uk";
    avatar.href = (object_data.blog) ? object_data.blog : "https://github.com/KaraniAbdellah?tab=repositories";

    nbr_repos = object_data.public_repos;
    location_value = object_data.location;

}).catch((rejectValue) => {
    setPortfolio(rejectValue);
});


// Start With Projects
const boxes = document.querySelector(".boxes");
const watchers = document.querySelector(".nbr_watchers");
const repo_name = document.querySelector(".repo_name");
const clone_url = document.querySelector(".clone_url");
const ssh_url = document.querySelector(".ssh_url");
const location_name = document.querySelector(".location_name");


fetch(`"https://api.github.com/users/KaraniAbdellah"`).then((resolve) => {
    let Data = resolve.json();
    return Data;
}).then((Data) => {

    for (let i = 0; i < nbr_repos; i++) {
        let ele_box = document.createElement("div");
        ele_box.className = "box";
        ele_box.innerHTML = `
            <div class="watchers">
                <i class="fa-solid fa-eye"></i>
                <span class="nbr_watchers">${Data[i].watchers_count}</span>
            </div>
            <div class="repo">
                <a href="${Data[i].clone_url}" class="repo_name">${Data[i].name}</a>
            </div>
            <div class="used">
                <button class="clone_url" url="${Data[i].clone_url}">HTTPS</button>
                <button class="ssh_url" url="${Data[i].ssh_url}">SSH</button>
            </div>
        `;
        boxes.appendChild(ele_box);
    }

    location_name.textContent = `Living In ${location_value}`;

}).catch((reject) => {
    setPortfolio(reject);
});



function setCopiedValue(ele, value) {
    ele.textContent ="Copied";
    setTimeout(() => {
        ele.textContent = value;
    }, 1000);
}

boxes.addEventListener("click", function(e) {
    let url = e.target.getAttribute("url");
    if (e.target.classList.contains("clone_url")) {
        navigator.clipboard.writeText(url);
        setCopiedValue(e.target, "HTTPS");
    }
    if (e.target.classList.contains("ssh_url")) {
        navigator.clipboard.writeText(url);
        setCopiedValue(e.target, "SSH");
    }
});








