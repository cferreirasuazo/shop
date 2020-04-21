// const boom = require("boom")
// const Articulo = require("../models/Articulo");
// const Categoria = require("../models/Categoria");

exports.getArticles = async req => {
    try {
        const articulos = await Articulo.find()
        return articulos;
    } catch (err) {
        throw boom.boomify(err)
    }
}


exports.getArticleById = async (req,res) =>{
    try{
                
        var categoria = req.params.id;
        var categorias = await Categoria.findOne({nombre:categoria})
        var articulosArr = await Articulo.find({categoria:categorias._id}).populate("categoria marca")
        res.code(200).send(articulosArr);
        return articulosArr
        

    }catch(err){
        throw new Error(err.message)
    }
}

