const boom = require("boom")
const Articulo = require("../models/Articulo");
const Categoria = require("../models/Categoria");
const ClienteArticulo = require("../models/ClienteArticulo");
const asyncHandler = require("../utils/asyncHandler");

exports.deleteArticle = async (req,res) => {
    try{
        console.log("BODY",req.body)
        var article = await ClienteArticulo.findOneAndRemove({_id: req.body.id});
        console.log("Article",article)
        if(article){
            res.code(200).send(article._id)
        }else{
            res.code(404).send("NOT_FOUND")
        }
    
    }catch(err){
        res.code(404).send("NOT FOUND")
    }
}


exports.getArticles = async req => {
    try {
        var articulos = await Articulo.find()
        return articulos;
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getSingleArticle = async({params},res) => {
    try{
        var [article, errArticle] = await asyncHandler(Articulo.findById(params.id))
        if (errArticle) res.code(500).send("article_not_Found")
        res.code(200).send(article)
    }catch(err){
        res.code(500).send(err)

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
