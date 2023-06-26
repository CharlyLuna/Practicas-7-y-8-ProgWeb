const { Schema, model } = require("mongoose");
//* Creamos este modelo donde estaran guardados los datos de la persona para enviarlos a la BD
const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = model("Person", PersonSchema); //* Lo importamos para usarlo en server.js
