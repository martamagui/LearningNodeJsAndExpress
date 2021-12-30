const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);
  const url = request.url;
  if (url === "/") {
    //Generalmente indica el tipo de información qeu está recibiendo
    //100 - Respuesta provisional
    //200 - Respuesta aceptada correctamente
    //300 - Es necesaria
    //400 - Not found
    response.writeHead(200, { "content-type": "text/html" });
    //pasa el body
    response.write("<h1>Home</h1>");
    //Obligatorio para que se envíen los datos
  } else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>About</h1>");
  } else {
    response.writeHead(400, { "content-type": "text/html" });
    response.write("<h1>404 NotFound</h1>");
  }
  response.end();
});
server.listen(5000);
