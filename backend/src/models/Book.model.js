const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    price: Number,
    rating: {
      type: Number,
      default: 0
    },
    stock: Number,
    description: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);