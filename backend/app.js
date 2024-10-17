if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    credentials: true, // Allow credentials like cookies to be sent with requests
  })
);
app.use(bodyParser.json());

const db = require("./config/db");
db();

const Holdings = require("./models/holdingModel");
const Position = require("./models/positionModel");
const Order = require("./models/orderModel");

const orderRoute = require("./routes/orderRoute");
const authRoute = require("./routes/authRoute");

app.use("/", orderRoute);
app.use("/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdings.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPosition = await Position.find({});
  res.json(allPosition);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await Order.find({});
  res.json(allOrders);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
