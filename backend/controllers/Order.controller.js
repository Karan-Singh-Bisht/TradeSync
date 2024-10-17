const order = require("../models/orderModel");
const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const holdings = require("../models/holdingModel");

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
});

module.exports.sellOrder = asyncHandler(async (req, res) => {
  const { name, qty, price } = req.body;

  let sellOrder = await holdings.findOne({ name });

  if (!sellOrder) {
    throw new apiError(404, "Order Not Found");
  }

  if (sellOrder.qty < qty) {
    throw new apiError(400, "Insufficient stock quantity");
  }

  const updatedQty = sellOrder.qty - qty;

  await holdings.findOneAndDelete(
    { name },
    {
      qty: updatedQty,
      price,
      mode: "SELL",
    }
  );

  res.status(200).json({ message: "Order Sold Successfully!" });
});
