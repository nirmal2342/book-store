const express = require("express");

const authRoutes = require("./src/routes/auth.routes");
const bookRoutes = require("./src/routes/book.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

module.exports = app;
