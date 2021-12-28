const os = require("os");

//Information about the current user
const user = os.userInfo();
console.log(user);

//Pc Up time
console.log(`The system uptime is ${os.uptime / 60} mins.`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
