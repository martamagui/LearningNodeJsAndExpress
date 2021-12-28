const { readFile } = require("fs");

console.log("Started first task");

//Comprueba la ruta del archivo
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed first task");
});
console.log("Starting next task");
