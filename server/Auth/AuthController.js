var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var Cliente = require("../models/Cliente");
var parseCliente = require("../utils/parseCliente");

exports.register = async (req, res) => {

    //Check if email exist 
    
    var emailExist = await Cliente.findOne({correo: req.body.cliente.correo}) ? true : false
    if(!emailExist){
            //Creates an encrypted password
    var hashedPassword = bcrypt.hashSync(req.body.cliente.password, 8);
    var newCliente = new Cliente({
        nombre: req.body.cliente.nombre,
        apellido: req.body.cliente.apellido,
        usuario: req.body.cliente.usuario,
        correo: req.body.cliente.correo,
        password: hashedPassword
    })

    try {
        var success = await newCliente.save((err, cliente) => {
            console.log(cliente) 
            //Sends an status of error if something bad happens
            if (err) return res.code(500).send("There was a problem registrying the cliente")
            //Creates a JWT, It allows the user to make request to the API
            var token = jwt.sign({
                id: cliente._id
            }, config.secret, {
                //Expires in the asigned time
                expiresIn: 86400
            })

            res.code(201).send({
                auth: true,
                token: token,
                info:parseCliente(cliente)
            })

        })

        return success
    } catch (err) {
        throw new Error(err.message)
    }        
    }else{
        res.code(200).send({
            code: 200,
            message:"client-already-exist",
            data:null
        })
    }

}




//https://stackoverflow.com/questions/30089604/jwt-whats-a-good-secret-key-and-how-to-store-it-in-an-node-js-express-app#30090120