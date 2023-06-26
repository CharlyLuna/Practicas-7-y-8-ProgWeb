var express = require("express");
var app = express();

//*Especificamos a nuestra app que su template engine será ejs
app.set("view engine", "ejs");
var port = process.env.PORT || 3000; // seteamos el puerto que usara el servidor
//Con esto creamos el directorio virtual para el contenido estatico que estara en la carpeta de public
app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});
//ruta raiz que tendra de respuesta un Hello world
app.get("/", function (req, res) {
  res.render("index"); //utilizamos render ya que ya especificamos que vamos a usar ejs para renderizar el contenido de la pagina
});

// Esta ruta recibira el parametro del id y la querystring
app.get("/person/:id", function (req, res) {
  //* el parametro usando req.params y la querystring con req.query para que express parsee el valor de este
  res.render("person", {
    ID: req.params.id,
    Message: req.query.message,
    Times: req.query.times,
  }); //* especificamos que se va a mandar el parametro y la querystring
  //*Con esto mandamos lo que se ponga despues de los ":" y lo que haya despues de "?" al archivo ejs
});
//*Podremos acceder a estos parametros desde el archivo ejs escribiendo sus nombre como los tenemos puestos aqui: ID y Qstr
//*Nota: EN EL NAVEGADOR SE DEVE PONER ? ANTES DE PASAR LA QUERYSTRING PARA QUE LO RECONOZCA Y ESTA SE DEBE LLAMAR COMO AQUI INDICAMOS OSEA qstr

app.listen(port); // Ponemos al server a esuchar en el puerto que seleccionamos
