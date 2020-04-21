const Cliente = require("../models/Cliente")
const Order = require("../models/Order")
const ClienteArticulo = require("../models/ClienteArticulo");
const boom = require("boom")
const OrdenArticulo = require("../models/ordenArticulo");
const asyncHandler = require("../utils/asyncHandler")

//Order status code
const orderStatus = Object.freeze({
    CREATED: 0,
    READY: 1,
    SENT: 2,
    DELIVERED: 3,
    RETURNED: 4,
    CANCELLED: 5
})

exports.addOrden = async (req,res) => {
    console.log(req.body.correo)
    try{
        //Catch results of async operation of getting client by email
        var [client,errClient] = await asyncHandler(Cliente.findOne({correo:req.body.email}).select("_id"))
        //Returns message that client doesn't exist
        if (!client) throw new Error("404_CLIENT_NOT_FOUND")
        //returns message that something wrong happened
        if (errClient) throw new Error(errClient)

        //Catch results of async operation of getting articles by client
        var [clienteArticulos, errClienteArticulos] = await asyncHandler(ClienteArticulo.find({clienteID:client._id}).select("cantidad articulo"))

        if(errClienteArticulos) throw new Error("404_ARTICLES_NOT_FOUND")
        if(clienteArticulos.length > 0){
            var order = {
                createDate: new Date(),
                deliveryDate: new Date(),
                orderStatus: orderStatus.CREATED,
                clientId: client._id,
                articles: clienteArticulos
            }    
            //Creates a new order
            var newOrder = new Order(order)
            var success = await newOrder.save()
            if(success){
                
                //Executes async delete operations for deleting articles by client        
                Promise.all(clienteArticulos.map(async (element)=>{
                    console.log(element)
                    var success = await ClienteArticulo.findByIdAndDelete(element)
                    if(success){
                        console.log("SUCCESS_DELETE")
                    }
                })).catch((err)=>{
                    throw new Error(err)
                })
                
                //After it creates the order, returns a message of success
                res.code(200).send({
                    status:200,
                    message:"order_created",
                    success:true
                })
            
            }else{
                //If not, returns that failed
                res.code(500).send({
                    status:400,
                    message:"successfuly_failed",
                    success:false
                })
            }
            
        }else{
            //Returns message that client hasn't article
            throw new Error("Client Doesn't have articles")
        }
    }catch(err){
        //Catches any error that ocurres
        res.code(500).send(err)
    }
}


exports.getOrders = async (req) => {
    try {

        var orders = await Order.find({
            clienteId: req.id_cliente
        })
        return orders

    } catch (err) {
        console.log("ERROR ON GET ORDEN")
        throw new Error(err.message)
    }
}

exports.cancelarOrden = async (req) => {
    try {
        var ordenActualizar = await Order.findByIdAndUpdate(req, {
            "ordenEstado": ordenEstados.CANCELADA
        }, {
            new: true
        })
        console.log(ordenActualizar)
    } catch (err) {
        console.log(err)
    }
}
