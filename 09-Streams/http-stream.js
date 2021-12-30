const http = require("http");
const fs = require("fs");
http.createServer(function (request, result) {
  /*   const text = fs.readFileSync(
    "../02-Built-in_Modules/content/big.txt",
    "utf-8"
  );
  result.end(); */

  //Manda el archivo en varios paquetes en vez de todo en uno, mejorando el tiepo de respuesta
  const fileStream = fs.createReadStream(
    "../02-Built-in_Modules/content/big.txt",
    "utf-8"
  );
  fileStream.on("open", () => {
    fileStream.pipe();
  });
  fileStream.on("error", (error) => {
    result.end(error);
  });
});
