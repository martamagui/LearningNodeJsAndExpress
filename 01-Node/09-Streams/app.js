/*
STREAMS
- Writable
- Readable
- Duplex
- Transform
*/
const { createReadStream } = require("fs");
const stream = createReadStream("../02-Built-in_Modules/content/big.txt", {
  encoding: "utf-8",
  highWaterMark: 90000,
});
//default 64kb
/*
    last buffer remainder
    highWaterMark: controla el tamaño

*/

// Usando events
stream.on("data", (result) => {
  console.log(result);
});
