const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    items: Array,
    totalPrice: Number,
    status: {
      type: String,
      enum: ["placed", "shipped", "delivered", "cancelled"],
      default: "placed"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
