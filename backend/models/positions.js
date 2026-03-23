// const { model } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const Position = mongoose.model("Position", PositionsSchema);

module.exports = { Position }