// const { model } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const Holding = mongoose.model("Holding", HoldingsSchema);

module.exports = { Holding };