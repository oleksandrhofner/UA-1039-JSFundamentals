async function server() {
  const url = "./text.txt";
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
