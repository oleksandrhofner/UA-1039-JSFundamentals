// Task 1

// const http = require("http");
// const os = require("os");
// http.createServer(function(request,response) {
//     response.setHeader("Content-Type", "text/html");
//     response.write(`<p>User name: ${os.userInfo().username}</p>`);
//     response.write(`<p>OS type: ${os.platform}</p>`);
//     response.write(`<p>System work time: ${os.uptime}</p>`);
//     response.write(`<p>Current work directory: ${__dirname}</p>`);
//     response.write(`<p>server file: ${__filename}</p>`);
//     response.end();
// }).listen(5000);

// Task 2

// const days = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday","Sunday"]
// const date_ob = new Date;
// const year = date_ob.getFullYear();
// const month = date_ob.getMonth()+1;
// const date = date_ob.getDate();
// const hours = date_ob.getHours();
// const minutes = date_ob.getMinutes();
// const seconds = date_ob.getSeconds();
// const day = days[date_ob.getDay()-1];

// const {welcomeUser} = require("./personalModule");

// const http = require("http");

// http.createServer(function(request, response) {
    
//     response.setHeader("Content-Type", "text/html");
//     response.write(`<p>Date: ${day} ${year}-${month}-${date} ${hours}:${minutes}:${seconds}</p>`);
//     response.write(`<p>${welcomeUser()}</p>`);
// }).listen(8000);