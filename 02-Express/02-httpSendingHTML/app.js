const http = require("http");
const { readFileSync } = require("fs");
//Lee html

/* const homePage = readFileSync("./index.html"); */
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  const url = request.url;
  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homePage);
  } else if (url === "/styles.css") {
    response.writeHead(200, { "content-type": "text/css" });
    response.write(homeStyles);
  } else if (url === "/logo.svg") {
    response.writeHead(200, { "content-type": "image/svg+xml" });
    response.write(homeImage);
  } else if (url === "/browser-app.js") {
    response.writeHead(200, { "content-type": "text/javascript" });
    response.write(homeLogic);
  } else {
    response.writeHead(400, { "content-type": "text/html" });
    response.write("<h1>404 NotFound</h1>");
  }
  response.end();
});
server.listen(5000);
