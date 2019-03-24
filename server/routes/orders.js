import express from "express";
import { Order } from "../models/order";

import auth from "../middleware/auth";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const order = new Order({
    userId: req.user._id,
    customer: req.body.customer,
    cart: req.body.cart
  });

  await order.save();

  res.status(200).send(order);
});

export default router;
