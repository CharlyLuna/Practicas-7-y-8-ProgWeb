let express = require("express");
let router = express.Router(); // * Agregamos la instancia Router de express que se va a encargar de manejar todas las rutas que pongamos en el archivo
var Person = require("../models/person");
require("../database");

// Agregamos el get de la vista estudiante para que podamos ver el formulario donde esta el boton para hacer la operacion post
router.get("/student", (req, res) => {
  res.render("index");
});

// *Agregamos este get para devolver un json con todos los estudiantes que se agregaron a la BD
router.get("/students", function (req, res, next) {
  Person.find(function (err, persons) {
    if (err) return next(err);
    res.json(persons);
  });
});

// Agregamos la ruta /student pues la que va a contestar al post del formulario
router.post("/student", async (req, res) => {
  //* Obtenemos del body los parametros de fname y lname
  const { fname, lname, age, blood } = req.body;
  // * Utilizamos el modelo person para crear una nueva persona con los datos que se mandaron por el body
  var newPerson = new Person({
    firstName: fname,
    lastName: lname,
    age: age,
    blood: blood,
  });
  console.log("se mandó a la BD:" + newPerson);
  //* Mandamos el objeto a la BD
  await newPerson.save();
  //Devolvemos los valores que pusimos en el formulario mediante el objeto body que nos proporciona express
  res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
}); // Con req.body podemos acceder a los valores que se esten pasando por el body con la notacion del punto

// gregamos este metodo que va a mostrar en consola lo que contiene el body (El cual es un objeto)
router.post("/personjson", express.json({ type: "*/*" }), (req, res) => {
  //Gracias a que en el archivo ejs hacemos el parseo primero hacia string ahora aqui lo podemos convertir de nuevo a contenido json
  console.log("El objeto contiene:", req.body);
  console.log("Nombre:", req.body.firstname);
  console.log("Apellido:", req.body.lastname);
  //Ahora simplemente en el body lo que sacamos sera un objeto con sus debidas keys especificadas en el archivo index.ejs
});

module.exports = router;
