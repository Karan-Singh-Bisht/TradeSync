const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  net: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  isLoss: {
    type: Boolean,
    required: true,
  },
});

const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
