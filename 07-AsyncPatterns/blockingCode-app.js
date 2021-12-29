const http = require("http");
const server = http.createServer((request, result) => {
  if (request.url === "/") {
    result.end("Home Page");
  } else if (request.url === "/about") {
    /*
      Código que bloqueará esta request
      a todos los usuarios que traten de acceder a ello mientras
      otro siga ejecutando el loop
      */
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    result.end("About Page");
  }
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000...");
});
