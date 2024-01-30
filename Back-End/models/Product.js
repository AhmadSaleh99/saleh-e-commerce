const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: "string", required: true, unique: true },
    description: { type: "string", required: true, unique: true },
    img: { type: "string", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
