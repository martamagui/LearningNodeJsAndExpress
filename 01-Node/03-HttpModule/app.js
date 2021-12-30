const http = require("http");
const server = http.createServer((request, res) => {
  if (request.url === "/") {
    res.end("Welcome to our homepage.");
  }
  console.log(request);
  if (request.url === "/about") {
    res.end("About page.");
  }
  res.end("Ups, We couldn't find the page you're looking for.");
});
server.listen(5000);
