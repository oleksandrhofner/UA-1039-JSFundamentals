// Task 1
async function server() {
  const url = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(url);
  if (response.ok) {
    let btn = document.querySelector(".btn");
    btn.addEventListener("click", function(){
        let date = new Date();
        let btn = document.querySelector(".btn");
        btn.innerHTML = `Your vote is accepted: ${date}`;
    });
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
server();
