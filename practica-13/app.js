var express = require("express");
var app = express();

//*Especificamos a nuestra app que su template engine será ejs
app.set("view engine", "ejs");
var port = process.env.PORT || 3000; // seteamos el puerto que usara el servidor
//Con esto creamos el directorio virtual para el contenido estatico que estara en la carpeta de public
app.use("/assets", express.static(__dirname + "/public"));
// Mediante esta funcion podemos ver lo que sucede cuando accedemos a alguna de las rutas
app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url); // En este caso hacemos que nos mande por consola la ruta a la que estamos accediendo en el navegador
  next();
});
// Creamos nuestra ruta raiz que tendra de respuesta un Hello world
app.get("/", function (req, res) {
  res.render("index"); //*utilizamos render ya que ya especificamos que vamos a usar ejs para renderizar el contenido de la pagina
});

app.listen(port); // Ponemos al server a esuchar en el puerto que seleccionamos

// Segunda ruta que se llamara api, regresara un JSON simulando que es la resp de una API
app.get("/api", function (req, res) {
  res.json({ firstname: "Carlos", lastname: "Luna" });
}); // Basicamente nos regresara el contenido del json en crudo al entrar a esa ruta

//Tercera ruta en la que probamos insertando un parametro
// En el nombre de la ruta gracias a los ":" podemos indicar el parametro, en este caso le pusimos id (/:id)

//*Modificamos este metodo para enviar un numero y en el ejs comprobar si es par o impar y devolver una lista desordenada
app.get("/person/:numero", function (req, res) {
  res.render("person", { NUMERO: req.params.numero }); //*le pasamos el parametro puesto en la direccion hacia el archivo de person.ejs
  //* Si el numero que enviamos es par saldra en la lista "es par" la cantidad de veces que equivale el numero multiplicado por 2
  // * si no solo saldra "es impar" la cantidad de veces que sea el numero que mandamos
});
// Al final lo que escribamos en nuestro navegador despues de /person/ sera lo que defina lo que se muestre en el html
