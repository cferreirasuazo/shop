const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    correo: String,
    usuario: String,
    password: String,
    fechaRegistro: Date,

})


module.exports = mongoose.model("Cliente", clienteSchema)