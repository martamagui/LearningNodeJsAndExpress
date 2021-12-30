const names = require("./names");
const sayHi = require("./utils");
console.log(names);

sayHi("Lucas");
sayHi(names.name.peter);
sayHi(names.name.alicia);
sayHi(names.namesArray[0]);
