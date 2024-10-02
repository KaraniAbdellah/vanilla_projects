const boxes = document.querySelector(".boxes");
const projects_names = ["color fliper", "counter", "our reviews", "coding addict",
    "sidebar", "model", "General Questions", "our menu", "video play", "scrool",
    "tabs", "countdown", "add task", "generate paragraph", "grocery bud", "gallery",
    "tic tac toe", "gernerate password", "simple webSite", "calculator app", "form validation",
    "crud project", "alarm", "palette generator", "Dictionary App", "generate portfolio", 
    "currency convertor", "file downloader", "toast notifications", "guess number game",
];

// there is 30 projects
for (let i = 0; i < 30; i++) {
    let newBox = document.createElement("box");
    newBox.innerHTML = `
        <img src="images/project${i + 1}.png" alt="">
        <a class="name" href="project ${i + 1}/index.html">${projects_names[i]}</a>
    `;
    newBox.className = "box";
    boxes.appendChild(newBox);
}











