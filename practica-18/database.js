var mongoose = require("mongoose");
require("dotenv").config();
//* Aqui ponemos la configuracion de nuestra BD utilizando mongoose
(async () => {
  try {
    //* Con el connect nos conectamos a la BD y usando el link que nos proporciona Mongodb Atlas
    const db = await mongoose.connect(
      "mongodb+srv://charlyluna:1311@testdb.acrgo.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
