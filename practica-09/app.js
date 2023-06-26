const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world, this is the root route");
});

app.listen(3000);
app.get("/uno", (req, res) => {
  res.send("Hello from route One");
});
// * Mediante el app.get podemos añadir mas rutas a nuestro servidor, dentro de ese get ponemos por ejemplo la respuesta
// * que queremos que se de cuando se quiera acceder a esa ruta en particular;
app.get("/test", (req, res) => {
  // Route handler
  // !Dentro de la respuesta se puede poner html para que sea visualizable de mejor manera en la pantalla para el usuario
  res.send(
    `
    <h1>Test</h1>
    <div>
    <p>This is a test!</p>
    <button type="button">Nothing happens if u click me</button>
    </div>
    `
  );
});
