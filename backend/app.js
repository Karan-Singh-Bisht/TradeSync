if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: [
    'http://localhost:5173', // Your local frontend URL
    'https://trade-sync-ten.vercel.app/'
  ],
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
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
  try {
    let allHoldings = await Holdings.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPosition = await Position.find({});
    res.json(allPosition);
  } catch (err) {
    console.log(err);
  }
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
