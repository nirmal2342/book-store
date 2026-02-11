const express = require("express");
const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart
} = require("../controllers/cart.controller");

const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.put("/", protect, updateCartItem);
router.delete("/", protect, removeCartItem);
router.delete("/clear", protect, clearCart);

module.exports = router;
