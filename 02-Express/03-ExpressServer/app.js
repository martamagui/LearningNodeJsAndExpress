const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("User hit the resource");
  response.status(200).send("Home Page");
});
app.get("/about", (request, response) => {
  console.log("User hit the resource");
  response.status(200).send("about");
});
//Este método se lleva todos los métodos get y post si no se encuentra
app.all("*", (equest, response) => {
  console.log("User hit the resource");
  response.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
/*
    app.get
    app.post
    app.put
    app.delete
    app.all
    app.use
    app.listen
*/
