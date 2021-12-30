const path = require("path");
const express = require("express");
const app = express();

//Hace que todos los elementos estáticos sean recogidos,
//no hay que ir cogiendo el css, js, fotos, hyml uno por uno
app.use(express.static("./public"));

app.get("/", (request, response) => {
  response.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (equest, response) => {
  console.log("User hit the resource");
  response.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
