const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    createdDate: Date,
    deliveryDate: Date,
    orderStatus: Number,
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    },
    address: String,
    articles: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model("Order", orderSchema)