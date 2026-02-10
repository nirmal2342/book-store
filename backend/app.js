const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(3000, () => console.log("Server started"));
