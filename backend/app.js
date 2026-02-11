const express = require("express");

const authRoutes = require("./src/routes/auth.route");
const bookRoutes = require("./src/routes/book.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

module.exports = app;