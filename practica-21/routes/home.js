let express = require("express");
let router = express.Router(); // * Agregamos la instancia Router de express que se va a encargar de manejar todas las rutas que pongamos en el archivo

router.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});
//ruta raiz que tendra de respuesta un Hello world
router.get("/", function (req, res) {
  res.send(
    `<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
          <body><h1>Hello world</h1></body></html>`
  );
});

router.get("/main", (req, res) => {
  res.render("main");
});

module.exports = router;
