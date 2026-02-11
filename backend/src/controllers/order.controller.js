const Order = require("../models/Order.model");

exports.placeOrder = async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    items: req.body.items,
    totalPrice: req.body.totalPrice
  });

  res.status(201).json(order);
};
