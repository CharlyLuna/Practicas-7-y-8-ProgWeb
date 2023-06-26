var express = require("express");
var app = express();

var port = process.env.PORT || 3000; // seteamos el puerto que usara el servidor

// Creamos nuestra ruta raiz que tendra de respuesta un Hello world
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello world</h1></body></html>");
});

app.listen(port); // Ponemos al server a esuchar en el puerto que seleccionamos

// Segunda ruta que se llamara api, regresara un JSON simulando que es la resp de una API
app.get("/api", function (req, res) {
  res.json({ firstname: "Carlos", lastname: "Luna" });
}); // Basicamente nos regresara el contenido del json en crudo al entrar a esa ruta

//Tercera ruta en la que probamos insertando un parametro
// En el nombre de la ruta gracias a los ":" podemos indicar el parametro, en este caso le pusimos id (/:id)
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Person:" +
      req.params.id +
      "</h1></body></html>"
  ); // Con el req.params.id agarramos el parametro que se haya puesto en la ruta
});
// Al final lo que escribamos en nuestro navegador despues de /person/ sera lo que se muestre en el html
// pues es el parametro que nosotros indicamos que habria
