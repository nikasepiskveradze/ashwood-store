import _ from "lodash";
import express from "express";
import { Product, validate } from "../models/product";
import { Category } from "../models/category";
import multer from "multer";
import auth from "../middleware/auth";
import admin from "../middleware/admin";

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

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send(product);
});

router.post("/", auth, admin, upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById({ _id: req.body.category });
  if (!category) return res.status(400).send("Invalid Category");

  const product = new Product({
    title: req.body.title,
    short: req.body.short,
    long: req.body.long,
    category: {
      _id: category._id,
      name: category.name
    },
    price: req.body.price
  });
  try {
    if (req.file.path) product.image = req.file.path;
  } catch (ex) {}

  await product.save();
  res.status(200).send(product);
});

router.put("/:id", auth, admin, upload.single("image"), async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById({ _id: req.body.category });
  if (!category) return res.status(400).send("Invalid Category");

  const product = await Product.findById(req.params.id);
  product.title = req.body.title;
  product.short = req.body.short;
  product.long = req.body.long;
  product.image = product.image;
  product.category = {
    _id: category._id,
    name: category.name
  };
  product.price = req.body.price;

  try {
    if (req.file.path) product.image = req.file.path;
  } catch (ex) {}

  await product.save();
  res.status(200).send(product);
});

router.delete("/:id", auth, admin, async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  res.status(200).send(product);
});

export default router;
