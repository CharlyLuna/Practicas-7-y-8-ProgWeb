var express = require("express");
var app = express();
var studentRouter = require("./routes/student.js");
var homeRouter = require("./routes/home.js");

//Especificamos a nuestra app que su template engine será ejs
app.set("view engine", "ejs");
//Con esto creamos el directorio virtual para el contenido estatico que estara en la carpeta de public
app.use("/assets", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); // Especificamos a express que se parsearan datos dentro del body
app.use(studentRouter);
app.use(homeRouter);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("escuchando en el puerto 3000");
}); // Ponemos al server a esuchar en el puerto que seleccionamos
