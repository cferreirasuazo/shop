//REMOVE THIS MODULE


/*
En este controller:

Podre agregar los articulos que el cliente elija

podre actualizar {cantidad, tamano, color}
*/

const boom = require("boom");
const Cliente = require("../models/Cliente");

exports.addCarrito = async (req) => {
    try {
        const Carrito = new Carrito(req.body);
        const newCarrito = await Carrito.save();
        return newCarrito;
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.agregarArticulo = async (req) => {
    try {

    } catch (err) {
        throw boom.boomify(err)
    }
}
