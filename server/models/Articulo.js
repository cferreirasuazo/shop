const mongoose = require("mongoose")

const articuloSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria"
    },
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Marca"
    }
})

module.exports = mongoose.model('Articulo', articuloSchema)