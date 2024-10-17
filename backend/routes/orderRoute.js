const express = require("express");
const router = express.Router();
const {
  createNewOrder,
  sellOrder,
} = require("../controllers/Order.controller");

router.post("/newOrder", createNewOrder);
router.post("/sellOrder", sellOrder);

module.exports = router;
