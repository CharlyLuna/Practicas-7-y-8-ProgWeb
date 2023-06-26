let express = require("express");
let app = express();
//* Importamos el objeto router del archivo de person.js
let personRouter = require("./routes/person.js");

app.set("view engine", "ejs");
//* Al usar el router estamos basicamente importando las rutas que hay en el archivo de person.js
app.use(personRouter);
app.use("/assets", express.static(__dirname + "/public"));

//* Añadimos la opcion para que el puerto pueda ser otro dependiendo de la configuracion que se tenga o si no que use el 3000 por defecto
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("escuchando en el puerto 3000");
});
