// // do some thing


// Profile
// var url = "https://api.github.com/users/KaraniAbdellah";
// var myRequest = new XMLHttpRequest();
// myRequest.open("GET", url);
// myRequest.send();
// myRequest.onload = function() {
//     if (myRequest.status == 200 && myRequest.readyState == 4) {
//         let Data = JSON.parse(myRequest.responseText);
//         // bio
//         console.log(Data.location);
//         console.log(Data.name);
//         console.log(Data.public_repos);
//         console.log(Data.bio);
//         console.log(Data.blog);
//         console.log(Data.avatar_url);
//         // // projects
//         // url = url + '/repos';
//         // console.log(Data[0].name);
//         // console.log(Data[0].clone_url);
//         // console.log(Data[0].visibility);
//         // console.log(Data[0].watchers_count);
//         // console.log(Data[0].ssh_url);
//         // console.log(Data[0].clone_url);
//         // console.log(Data[0]);
//     }
// }


// projects
var repos_url = "https://api.github.com/users/KaraniAbdellah/repos";
var myRequest2 = new XMLHttpRequest();
myRequest2.open("GET", repos_url);
myRequest2.send();
myRequest2.onload = function() {
    if (myRequest2.status == 200 && myRequest2.readyState == 4) {
        let Data = JSON.parse(myRequest2.responseText);
        // projects
        console.log(Data[0].name);
        console.log(Data[0].clone_url);
        console.log(Data[0].ssh_url);
        // console.log(Data[0].visibility);
        console.log(Data[0].watchers_count);
        console.log(Data[0]);
    }
}





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










