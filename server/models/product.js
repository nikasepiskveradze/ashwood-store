import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  },
  long: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model("Product", productSchema);

export { Product };
