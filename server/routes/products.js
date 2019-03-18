import _ from "lodash";
import express from "express";
import { Product, validate } from "../models/product";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = new Product(
    _.pick(req.body, ["title", "short", "long", "image", "price"])
  );

  await product.save();
  res.status(200).send(product);
});

export default router;
