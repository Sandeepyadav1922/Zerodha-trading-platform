const { Holding } = require("../models/holdings");
const { Position } = require("../models/positions");
const { Order } = require("../models/orders");
const { ExpressError } = require("../utils/ExpressError");

module.exports.allHoldings = async(req, res) => {
    let allHoldings = await Holding.find({});
    if(!allHoldings) {
        throw new ExpressError(404, "Holdings Not Found");
    }
    res.status(200).json(allHoldings);
};

module.exports.allPositions = async(req, res) => {
    let allPositions = await Position.find({});
    if(!allPositions) {
        throw new ExpressError(404, "Positions Not Found");
    }
    res.status(200).json(allPositions);
};

module.exports.allOrders = async(req, res) => {
    let allOrders = await Order.find({});
    if(!allOrders) {
        throw new ExpressError(404, "Positions Not Found");
    }
    res.status(200).json(allOrders);
};

module.exports.newOrder = async (req, res) => {
    const {name, qty, price, mode} = req.body;

    let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    });
    // console.log(req.body.name);
    newOrder.save();
    res.status(200).json(newOrder);
};