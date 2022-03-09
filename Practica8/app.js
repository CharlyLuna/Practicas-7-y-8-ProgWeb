// Hacemos el import del paquete que instalamos (http)
var http = require("http");

// Creamos un "server" al cual podemos acceder desde nuestro navegador con localhost
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(1337, "127.0.0.1"); // Va a estar esperando a que entremos a la pagina y nos dara la respuesta

// Al hacer correr esto en node se quedara a la espera hasta que entremos a localhost:1337
// Ya en el navegador y dentro de esa pagina podemos ver la respuesta que es el Hello world
// Y en la seccion de headers sale en el de respuesta exactamente lo que pusimos de content type y
//  la direccion que pusimos ademas del codigo de estado(200) junto con el metodo de la solicitud
