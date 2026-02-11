const Cart = require("../models/Cart.model");
const Book = require("../models/Book.model");

// Add to Cart
exports.addToCart = async (req, res) => {
  try {
    const { bookId, quantity } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [{ book: bookId, quantity }]
      });
    } else {
      const itemIndex = cart.items.findIndex(
        item => item.book.toString() === bookId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ book: bookId, quantity });
      }

      await cart.save();
    }

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get User Cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate("items.book");

    if (!cart) {
      return res.json({ items: [] });
    }

    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update Quantity
exports.updateCartItem = async (req, res) => {
  try {
    const { bookId, quantity } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      item => item.book.toString() === bookId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not in cart" });
    }

    item.quantity = quantity;
    await cart.save();

    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Remove Item
exports.removeCartItem = async (req, res) => {
  try {
    const { bookId } = req.body;

    const cart = await Cart.findOne({ user: req.user._id });

    cart.items = cart.items.filter(
      item => item.book.toString() !== bookId
    );

    await cart.save();

    res.json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Clear Cart
exports.clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
