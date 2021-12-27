const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/test.txt", "utf-8");

writeFileSync(
  "./content/readingResult.txt",
  `There you are, the result:\n\n ${first}\n ${second}`,
  { flag: "a" }
);
