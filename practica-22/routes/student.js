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

//* Agregamos un metodo para eliminar a un estudiante de la BD
router.get("/deleteStudent/:id", function (req, res) {
  //*Usamos esta funcion ya establecida para poder ubicar el id del objeto de la BD y eliminarlo
  Person.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    //* Redirigimos a la pantalla de la tabla para que se vea visualmente el cambio que se hizo
    res.redirect("/students");
  });
});

//* Añadimos la ruta que se encargara de renderizar la pagina donde se modificaran los datos para la actualizacion del objeto
router.get("/findById/:id", function (req, res) {
  Person.findById(req.params.id, function (err, student) {
    if (err) return next(err);
    res.render("studentUpdate", { student });
  });
});

//* Se hace uso del metodo post para actualizar el objeto con los datos modificados y mandarlo a la BD
router.post("/updateStudent", function (req, res) {
  Person.findByIdAndUpdate(
    req.body.objID,
    //* Enviamos el objeto con los datos modificados a la BD
    {
      firstName: req.body.fname,
      lastName: req.body.lname,
      age: req.body.age,
      blood: req.body.blood,
      nss: req.body.nss,
    },
    function (err, post) {
      if (err) return next(err);
      //* Redirigimos a la pagina para ver los cambios
      res.redirect("/students");
    }
  );
});

module.exports = router;
