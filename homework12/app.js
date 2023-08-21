const http = require("http");

http.createServer(function(request,response) {
    response.setHeader("Content-Type", "text/html");
    response.write("<p>Hello world</p>");
    response.end();
}).listen(5000);