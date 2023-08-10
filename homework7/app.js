// const w3schools = window.open("https://www.w3schools.com","_blank","width=200,height=200");
// Task 1.1

// const alert1 = alert(w3schools);

// Task 1.2

// const alert2 = setTimeout(function(){
//     alert(w3schools.resizeTo(500,500));
// },2000);

// Task 1.3

// const alert3 = setTimeout(function () {
//   w3schools.moveTo(200, 2000);
// }, 2000);

// Task 1.4

// const alert4 = setTimeout(function () {
//   w3schools.close();
// }, 2000);

// Task 2

// const btn = document.querySelector("#btn");
// const textParagraph = document.querySelector("#text");

// btn.addEventListener("click", changeCSS);

// function changeCSS() {
//   textParagraph.style.color = "orange";
//   textParagraph.style.fontSize = "20px";
//   textParagraph.style.fontFamily = "Comic Sans MS";
// }

// Task 3

// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const link = document.querySelector('#link');
// const body = document.querySelector('body')
// btn1.addEventListener("click", function(){
//     body.style.backgroundColor = 'blue';
// });
// btn2.addEventListener("dblclick", function() {
//     body.style.backgroundColor = 'pink';
// });
// btn3.addEventListener("mousedown", function(){
//     body.style.backgroundColor = 'brown';
// });
// btn3.addEventListener("mouseup", function(){
//     body.style.backgroundColor = 'white';
// });
// link.addEventListener("mouseover", function() {
//     body.style.backgroundColor = 'yellow';
// });

// Task 4

// const select = document.querySelector('#names');
// const btn = document.querySelector('#btn');    
// select.addEventListener("click", function(select) {
//     for (const item of select) {
//         item.remove();
//     }
// })

// Task 5

// const btn = document.querySelector('#btn');
// const text = document.querySelector('#text');
// const htmlPage = document.querySelector('html');
// htmlPage.addEventListener('click', function() {
//     text.textContent += 'Mouse is not on me!\n'; 
// });
// btn.addEventListener('mouseover', function() {
//     text.textContent += 'Mouse on me!\n'; 
// });
// btn.addEventListener('click', function(){
//     text.textContent += 'I was Pressed!\n';
// });

// Task 6

// const widthSize = document.querySelector('#text-width');
// const heightSize = document.querySelector('#text-height');
// setInterval(function(){
//     widthSize.textContent = window.innerWidth;
//     heightSize.textContent = window.innerHeight;
// },100);