const http = require("http");

const server = http.createServer((request, response) => {
  console.log("User hit the server");
  response.end("<h1>Home</h1>");
});
server.listen(5000);
