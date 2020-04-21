const boom = require('boom')
const Cliente = require("../models/Cliente")
const Order = require("../models/Order")
const ClienteArticulo = require("../models/ClienteArticulo")
var bcrypt = require('bcryptjs');
var config = require("../config");
var jwt = require("jsonwebtoken");
var parseCliente = require("../utils/parseCliente");

exports.clienteArticulos = (req, res) => {
    console.log(req.body.cliente.correo)
    try {

        Cliente.findOne({
            correo: req.body.cliente.correo
        }, async (err, cliente) => {
            console.log(cliente)
            if (err) return res.status(500).send("Task failed Successfully");
            if (!cliente) return res.status(404).send("Cliente no esta registrado");
            var token = jwt.sign({
                id: cliente._id
            }, config.secret, {
                expiresIn: "24h"
            })

            var secCliente = parseCliente(cliente)

            var passwordValid = bcrypt.compareSync(req.body.cliente.password, cliente.password)
            //If password is valid, returns all the information including client and articles
            if (passwordValid) {
                const articulos = await ClienteArticulo.find({
                        clienteID: cliente._id
                    })
                    .select("articulo cantidad")
                    .populate("articulo", "nombre descripcion precio")
                    .catch((err) => (console.log("ERROR")))
                console.log(articulos)
                res.status(200).send({
                    cliente: secCliente,
                    articulos: articulos
                })
            } else {
                return res.status(500).send("Invalid Password, try again")
            }

        })

    } catch (err) {
        res.status(500).send(err)
    }
}


exports.updateCliente = async (req,res) => {
    console.log(req)
    try{
            Cliente.findOneAndUpdate({"correo":req.body.request.correo},req.body.request,{new:true},(err,cliente)=>{
                    if(cliente){
                        res.code(200).send({
                            status:"OK",
                            update: parseCliente(cliente)
                        })
                    }else{
                        return res.code(404).send({
                            status:404,
                            message:"client-not-found"
                        })
                    }
            })
    }catch(err){
        console.log(err)
    }
}



exports.getClientes = async req => {
    try {
        const clientes = await Cliente.find()
        console.log(clientes)
        return clientes
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.addToClienteArticulo = async (req,res) => {
        var {cantidad,articuloId} = req.body.request;
        var {correo} = req.body.request;
        console.log(req.body.request)
        
        try{
            Cliente.findOne({correo:correo},async (err,cliente) =>{
                var {_id} = cliente
                var request = new ClienteArticulo({
                    clienteID:_id,
                    articulo:articuloId,
                    cantidad:cantidad
                })
                
                try{ 
                    var success = await request.save();
                    console.log(success)
                    var populate = await ClienteArticulo.findById(success._id)
                    .select("articulo cantidad")
                    .populate("articulo", "nombre descripcion precio")
                  //  console.log(articulo)
                    if(populate){
                        res.code(200).send(populate)
                    }
                }catch(err){
                    res.code(500).send("error saving article")
                }


            })

        }catch(err){
            res.code(500).send({
                status:500,
                message:"error during request"
            })
        }
}



exports.getArticulos = async (req) => {
    try {
        const articulos = await ClienteArticulo.find({
            clienteID: req.id
        }, (err, obj) => {
            console.log(obj)
        })

    } catch (err) {
        boom.boomify(err);
    }
}