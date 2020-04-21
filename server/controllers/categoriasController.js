const boom = require("boom")
const Categoria = require("../models/Categoria")

exports.getCategorias = async req => {
    try {
        const categorias = await Categoria.find()
        return categorias;
    } catch (err) {
        boom.boomify(err)
    }
}