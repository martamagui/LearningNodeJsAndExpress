const express = require("express");
//Middle ware para Morgan
const morgan = require("morgan");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.get("/items", [morgan("tiny"), logger, authorize], (req, res) => {
  res.send("items");
});

//Se pueden usar varios middlewares
app.use([morgan("tiny"), logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
