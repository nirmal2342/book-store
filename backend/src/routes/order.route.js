const express = require("express");
const {
  placeOrder,
  getMyOrders,
  getOrderById,
  cancelOrder
} = require("../controllers/order.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", protect, placeOrder);
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/cancel", protect, cancelOrder);

module.exports = router;
