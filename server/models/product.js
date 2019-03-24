import mongoose from "mongoose";
import Joi from "joi";
import { categorySchema } from "./category";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 25
    },
    short: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 30
    },
    long: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 500
    },
    image: {
      type: String
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
      type: Number,
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
      .max(25)
      .required(),
    short: Joi.string()
      .min(10)
      .max(30)
      .required(),
    long: Joi.string()
      .min(15)
      .max(500)
      .required(),
    image: Joi.string(),
    category: Joi.objectId().required(),
    price: Joi.number().required()
  };

  return Joi.validate(product, schema);
}

export { Product, validateProduct as validate };
