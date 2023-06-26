function Emitter() {
  this.events = {};
}

// La damos a Emitter dos metodos, on y emit
// Esto nos sirve para poner un evento y darle funcionalidad
Emitter.prototype.on = function (type, listener) {
  // Comprobamos si hay algo en el atributo "type" y si no hay nada le asignamos un array vacio
  this.events[type] = this.events[type] || [];
  // Usamos ese atributo que sera una array para añadirle una funcion
  this.events[type].push(listener);
};

//Aqui se saca el metodo "tal" y se ejecuta su funcionalidad
Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    // Accedemos al array que contiene el atributo que indicamos en "type" y ejecutamos las funciones que contiene
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter;
