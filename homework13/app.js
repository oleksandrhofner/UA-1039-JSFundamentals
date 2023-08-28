// Task 1
// async function server() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   let response = await fetch(url);
//   if (response.ok) {
//     let btn = document.querySelector(".btn");
//     btn.addEventListener("click", function(){
//         let date = new Date();
//         let btn = document.querySelector(".btn");
//         btn.innerHTML = `Your vote is accepted: ${date}`;
//     });
//   } else {
//     alert("HTTP-Error: " + response.status);
//   }
// }
// server();

// Task 2

// async function downloadBook() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   let response = await fetch(url);
//   if (response.ok) {
//     let json = await response.json();
//     let btn = document.querySelector(".btn");
//     btn.addEventListener("click", function () {
//       let unorderedList = document.createElement("ul");
//       for (const item of json) {
//         let list = document.createElement("li");
//         list.textContent = item.title;
//         unorderedList.appendChild(list);
//       }
//       document.body.appendChild(unorderedList);
//     });
//   }
// }
// downloadBook();
