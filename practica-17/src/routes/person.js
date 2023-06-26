let express = require("express");
let router = express.Router(); // * Agregamos la instancia Router de express que se va a encargar de manejar todas las rutas que pongamos en el archivo
//*Añadimos esta ruta que solo mandara un mensaje
router.get("/person", (req, res) => {
  res.send("Se ha solicitado el listado de personas");
});

module.exports = router;
