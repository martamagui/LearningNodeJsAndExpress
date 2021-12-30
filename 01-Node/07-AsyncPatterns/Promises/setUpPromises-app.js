const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

/* getText("../02-Built-in_Modules/content/first")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

const start = async () => {
  //Espera a que la Promise se resulva
  try {
    const first = await getText("../../02-Built-in_Modules/content/first.txt");
    const second = await getText(
      "../../02-Built-in_Modules/content/subfolder/test.txt"
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
