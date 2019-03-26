import mongoose from "mongoose";
import Joi from "joi";
import { categorySchema } from "./category";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5
    },
    short: {
      type: String,
      required: true,
      minlength: 5
    },
    long: {
      type: String,
      required: true,
      minlength: 5
    },
    image: {
      type: String,
      default: "uploads/unknown.jpg"
    },
    category: {
      type: categorySchema,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    price: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = {
    title: Joi.string()
      .min(5)
      .required(),
    short: Joi.string()
      .min(5)
      .required(),
    long: Joi.string()
      .min(5)
      .required(),
    category: Joi.string().required(),
    price: Joi.string().required()
  };

  return Joi.validate(product, schema);
}

export { Product, validateProduct as validate };
