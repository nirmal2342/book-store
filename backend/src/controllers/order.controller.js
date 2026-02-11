const Order = require("../models/Order.model");
const Cart = require("../models/Cart.model");
const Book = require("../models/Book.model");

// Place Order
exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.book");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let totalPrice = 0;

    cart.items.forEach(item => {
      totalPrice += item.book.price * item.quantity;
    });

    const order = await Order.create({
      user: req.user._id,
      orderItems: cart.items.map(item => ({
        book: item.book._id,
        quantity: item.quantity
      })),
      totalPrice
    });

    // Clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Order History
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("orderItems.book");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Order (Track Status)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("orderItems.book");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel Order
exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    if (order.status !== "Pending") {
      return res.status(400).json({ message: "Order cannot be cancelled" });
    }

    order.status = "Cancelled";
    await order.save();

    res.json({ message: "Order cancelled successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
