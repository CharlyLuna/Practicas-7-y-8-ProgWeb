let express = require("express");
let router = express.Router(); // * Agregamos la instancia Router de express que se va a encargar de manejar todas las rutas que pongamos en el archivo
var Person = require("../models/person");
require("../database");

// Agregamos el get de la vista estudiante para que podamos ver el formulario donde esta el boton para hacer la operacion post
router.get("/student", (req, res) => {
  res.render("student");
});

// *Agregamos este get para devolver un json con todos los estudiantes que se agregaron a la BD
router.get("/students", function (req, res, next) {
  Person.find(function (err, students) {
    if (err) return next(err);
    res.render("studentsIndex", { students });
    //*Ahora mostraremos una pagina donde estara formateado los datos de los estudiantes en una tabla
  });
});

// Agregamos la ruta /student pues la que va a contestar al post del formulario
router.post("/addStudent", async (req, res) => {
  //* Obtenemos del body los parametros de fname y lname
  const { fname, lname, age, blood, nss } = req.body;
  // * Utilizamos el modelo person para crear una nueva persona con los datos que se mandaron por el body
  var newStudent = new Person({
    firstName: fname,
    lastName: lname,
    age: age,
    blood: blood,
    nss: nss,
  });
  console.log("se mandó a la BD:" + newStudent);
  //* Mandamos el objeto a la BD
  await newStudent.save();
  //Devolvemos los valores que pusimos en el formulario mediante el objeto body que nos proporciona express
  res.send(`Se agregó el estudiante: ${req.body.fname} ${req.body.lname}`);
}); // Con req.body podemos acceder a los valores que se esten pasando por el body con la notacion del punto

module.exports = router;
