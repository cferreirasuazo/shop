const boom = require('boom')
const Articulo = require("./models/Articulo")
const Categoria = require("./models/Categoria")
const Marca = require("./models/Marca")

exports.getArticulos = async(req,reply) => {

    try{

      const articulos = await Articulo.find({})
      .select("nombre descripcion precio -_id")
      .populate('marca','nombre')
      .populate("categoria","nombre")

      return articulos

    }catch(err){
       throw boom.boomify(err)
    }
  }
  
exports.addArticulo = async(req,reply) =>{
    try{
        console.log("---addArticulo---")
        const Articulo = new Articulo(req.body)
        const newArticulo= await Articulo.save()
        return newArticulo
        
    }catch(err){
        throw boom.boomify(err)
    }
}

exports.updateArticulo = async req => {
  try{
    const id = req.params === undefined ? req.id : req.params.id
    const updateData = req.params === undefined ? req : req.params
    const update = await Articulo.findByIdAndUpdate(id,updateData,{new:true})
    return update
  }catch(err){
    throw boom.boomify(err)
  }
}

exports.deleteArticulo = async req =>{
  try{
    const id = req.params === undefined ? req.id : req.params.id
    const car = await Articulo.findByIdAndRemove(id)
    return car
  }catch(err){
    throw boom.boomify(err)
  }
}




