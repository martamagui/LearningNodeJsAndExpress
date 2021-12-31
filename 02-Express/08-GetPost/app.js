const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let { people } = require("../data");
//const peopleRouter = require("./routes/pepople");
const peopleRouter = require("./routes2/people");

const auth = require("./routes/auth");

//static assets
app.use(express.static("./methods-public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/people", peopleRouter);
app.use("/login", auth);

//Recoge la info del formulario de index.html

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
