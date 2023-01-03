const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: false,
      trim: true,
    },
    count: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
