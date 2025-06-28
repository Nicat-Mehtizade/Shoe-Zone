const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    vendor: { type: String, required: true, trim: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    color: [
      {
        type: String,
      },
    ],
    size: [
      {
        type: String,
        required: true,
      },
    ],
    material: [
      {
        type: String,
      },
    ],
    stock: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    availability: { type: Boolean, default: false },
    bannerImage: { type: String, required: true, trim: true },
    images: [{ type: String, required: true, trim: true }],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    discount: { type: Number, default: 0 },
    category: { type: String, enum: ["sneakers", "boots", "sandals", "formal", "casual", "sports"], required: true },
    gender: { type: String, enum: ["male", "female", "unisex"], required: true },
    numReviews: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
