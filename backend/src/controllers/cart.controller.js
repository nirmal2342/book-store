const Cart = require("../models/Cart.model");

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
};
