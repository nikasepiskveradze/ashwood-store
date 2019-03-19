import _ from "lodash";
import express from "express";
import { Product, validate } from "../models/product";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

router.post("/", upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = new Product({
    title: req.body.title,
    short: req.body.short,
    long: req.body.long,
    image: req.file.path,
    price: req.body.price
  });

  await product.save();
  res.status(200).send(product);
});

export default router;
