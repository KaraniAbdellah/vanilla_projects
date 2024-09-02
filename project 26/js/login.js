// Start Login Page
const github_url = document.querySelector("input.url");
console.log(github_url);

github_url.addEventListener("input", function() {
    localStorage.setItem("link", github_url.value);
});

github_url.value = "";

