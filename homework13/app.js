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

// Task 3

// async function randomUser() {
//   const url = "https://randomuser.me/api/";
//   const response = await fetch(url);

//   if (response.ok) {
//     const json = await response.json();
//     const btn = document.querySelector(".btn");
//     const unorderedList = document.createElement("ul");
//     let user = json.results[0];
//     btn.addEventListener("click", function() {
        
//       let nameItem = document.createElement("li");
//       nameItem.textContent = `Name: ${user.name.first} ${user.name.last}`;

//       let genderItem = document.createElement("li");
//       genderItem.textContent = `Gender: ${user.gender}`;

//       let locationItem = document.createElement("li");
//       locationItem.textContent = `Location: ${user.location.city}, ${user.location.country}`;

//       let loginItem = document.createElement("li");
//       loginItem.textContent = `Login: ${user.login.username}`;

//       let emailItem = document.createElement("li");
//       emailItem.textContent = `Email: ${user.email}`;

//       unorderedList.appendChild(nameItem);
//       unorderedList.appendChild(genderItem);
//       unorderedList.appendChild(locationItem);
//       unorderedList.appendChild(loginItem);
//       unorderedList.appendChild(emailItem);
//       document.body.appendChild(unorderedList);
//     });
//   }
// }

// randomUser();
