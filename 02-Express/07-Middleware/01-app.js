const express = require("express");
const app = express();
const logger = require("./logger");
//req=> middleware =>res

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

//Se puede no añadir manualmente usando app.use(logger)
app.use(logger);
//Se aplica a /nanana y /use
app.get("/nanana", (req, res) => {
  res.send("Nanana");
});

app.get("/use", (req, res) => {
  res.send("Use Middleware");
});
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
