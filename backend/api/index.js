const express = require("express");
const serverless = require("serverless-http");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const connectDB = require("../src/config/db");

const authRoutes = require("../src/routes/auth.route");
const bookRoutes = require("../src/routes/book.route");
const userRoutes = require("../src/routes/user.route");
const cartRoutes = require("../src/routes/cart.route");
const orderRoutes = require("../src/routes/order.route");
const reviewRoutes = require("../src/routes/review.route");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../src/config/swagger");

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Export as serverless function
module.exports = serverless(app);
