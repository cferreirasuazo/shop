const mongoose = require("mongoose");

const clienteArticuloSchema = new mongoose.Schema({
    clienteID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    },
    articulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Articulo"
    },
    cantidad: Number
})

module.exports = mongoose.model("clienteArticulo", clienteArticuloSchema)