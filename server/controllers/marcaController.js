const boom = require("boom");
const Marca = require("../models/Marca")

exports.getMarcas = async req => {
    try {
        const marcas = await Marca.find()
        return marcas
    } catch (err) {
        throw boom.boomify(err)
    }
}
