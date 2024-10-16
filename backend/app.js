if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const bodyParser = require("body-parser");
const cors = require("cors");

const express = require("express");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require("./config/db");
db();

const Holdings = require("./models/holdingModel");
const Position = require("./models/positionModel");

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holdings.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPosition = await Position.find({});
  res.json(allPosition);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
