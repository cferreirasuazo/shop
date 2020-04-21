const mongoose = require("mongoose");


const marcaSchema = new mongoose.Schema({
    nombre: String
})


module.exports = mongoose.model("Marca", marcaSchema)