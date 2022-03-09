//var Emitter = require("./emitter");
// * Utilizamos ahora el event emitter propio de node js
var Emitter = require("events");
// * Agregamos el export de nuestro archivo config
// * Este contendra los nombres de los eventos para no tener que escribirlos aqui
var config = require("./config");

var emtr = new Emitter();

// Agregamos varias funciones dentro del mismo atributo que se llamara greet,
// cada funcion hace algo diferente pero se encontraran guardadas en el mismo array
//* En este caso en vez de poner "greet" utilizaremos los nombres ya establecidos en nuestro archivo configuracion
//* De esta forma podemos utilizar el atributo y asi no habra errores de dedo al escribir el nombre que tendra el evento
emtr.on(config.events.GREET, () => {
  console.log("Somewhere, someone said hello");
});

emtr.on(config.events.GREET, () => {
  console.log("A greeting ocurred!");
});

console.log("Hello");
//Se van a ejecutar las dos funciones que estan puestas para greet;
// Usamos la funcion miembro emit para poder ejecutar las funciones que se encuentren en el atributo greet
emtr.emit("greet");
// * Como vemos este emitter funciona basicamente igual al que habiamos realizado en la anterior practica

// Agregamos un nuevo atributo jump con su debida funcion
// * Con nuestro archivo config ya no tenemos que poner el nombre como tal del evento, nos estariamos
// * refiriendo al atributo que tiene el nombre de ese evento
emtr.on(config.events.JUMP, () => {
  console.log("someone jumped");
});

// Aqui mostramos el contenido del Emitter, lo cual nos mostrara sus atributos y lo que contienen
//* Con esto vemos un poco la estructura que tiene este emmiter la cual es parecida
//* a la que habiamos hecho con nuestro emmiter hecho a mano
console.log(emtr);

console.log("jump");
// Accedemos al atributo jump y ejecutamos la funcion que contiene
// * Como vemos sigue funcionando al haber usado el archivo de config
// * Y para modificar los nombres de los eventos ahora solo se hara desde el archivo de config
emtr.emit("jump");
// * El emmiter de node funcionara igual que el que habiamos hecho ya que tambien tiene su lista de eventos
//* y se le pueden aplicar los metodos que usamos de .on y .emit
