import express from "express";
import mongoose from "mongoose";
import Joi from "joi";
Joi.objectId = require("joi-objectid")(Joi);
import cors from "cors";
import "express-async-errors";

import users from "./server/routes/users";
import login from "./server/routes/login";
import products from "./server/routes/products";
import category from "./server/routes/category";
import orders from "./server/routes/orders";
import comments from "./server/routes/comments";

const app = express();

const attlasian =
  "mongodb+srv://ashwood:ashwooduniversity@ashwood-q15s9.mongodb.net/test?retryWrites=true";
const url = "mongodb://localhost/ashwood";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Failed to Connect MongoDB"));

app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", users);
app.use("/api/login", login);
app.use("/api/category", category);
app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/comments", comments);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening http://localhost:${port}`));
