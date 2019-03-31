import _ from "lodash";
import express from "express";
import bcrypt from "bcrypt";
import { User, validate } from "../models/user";
import { Order } from "../models/order";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  let userOrder = await Order.find({ userId: req.user._id }).select(
    "cart -_id"
  );

  userOrder = _.flattenDeep(userOrder.map(item => item.cart));

  const userDetails = {
    user: { ...user._doc },
    orders: [...userOrder]
  };

  res.status(200).send(userDetails);
});

router.put("/me", auth, async (req, res) => {
  const ownUser = await User.findOne({
    _id: req.user._id,
    email: req.body.email
  });

  let user;
  if (!ownUser) {
    user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User this email already registered");
  }

  user = await User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      birthday: req.body.birthday
    },
    { new: true }
  );

  res.status(200).send(user);
});

router.put("/checkout", auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      balance: req.body.balance
    },
    { new: true }
  );

  res.status(200).send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User(
    _.pick(req.body, [
      "name",
      "email",
      "password",
      "age",
      "birthday",
      "balance"
    ])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
