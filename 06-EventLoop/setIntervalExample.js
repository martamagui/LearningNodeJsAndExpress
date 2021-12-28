setInterval(() => {
  console.log("hello world");
}, 2000);
//Esto se ejecutará primeramente ya que setInterval es asíncrono
console.log("It will run 1st");
// El proceso seguirá vivo hasta que se presione CTRL+C
// o se de un error
