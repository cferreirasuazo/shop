const mongoose = require("mongoose")


const categoriaSchema = new mongoose.Schema({
    nombre: String
})

module.exports = mongoose.model("Categoria", categoriaSchema)