const order = require("../models/orderModel");
const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");

module.exports.createNewOrder = asyncHandler(async (req, res) => {
  let newOrder = new order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  if (!newOrder) {
    throw new apiError(500, "Internal Server Error");
  }
  newOrder.save();
  res.send("Order Saved!");
});
