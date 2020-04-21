const Categoria = require("../models/Categoria");


exports.getCategorias = async (req, res) => {
    try{
        const Categorias = await Categoria.find()
        return Categorias
    }catch(err){
        throw new Error(err.message)
    }
}
