const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise(
      "../../02-Built-in_Modules/content/first.txt"
    );
    const second = await readFilePromise(
      "../../02-Built-in_Modules/content/subfolder/test.txt"
    );
    await writeFilePromise(
      "./writtenFiles/result-mind-grenade.txt",
      `THIS IS AWESOME:\n${first}\n${second}`
    );
  } catch (error) {
    console.log(error);
  }
};
start();
