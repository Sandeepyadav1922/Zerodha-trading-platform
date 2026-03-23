// const { model } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

const Order = mongoose.model("Order", OrdersSchema);

module.exports = { Order };