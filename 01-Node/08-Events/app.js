const EventEmitter = require("events");
const customEmitter = new EventEmitter();

//on- Escucha, emit- lo envía
customEmitter.on("response", (name, id) => {
  console.log(`Data recieved: ${name}, ${id}`);
});
/*
    Puede haber varios eventos los cuales se llamen igual.
    El orden importa. Se ejecutarán todos los "on"escritos antes del emit. 
*/
customEmitter.on("response", () => {
  console.log(`other console.log. BLALBALBLABLA`);
});

customEmitter.emit("response", "MartaMagui", 12314435234);
