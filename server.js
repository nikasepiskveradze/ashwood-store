import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import users from "./server/routes/users";
import login from "./server/routes/login";
import products from "./server/routes/products";
import category from "./server/routes/category";

const app = express();

mongoose
  .connect("mongodb://localhost/ashwood", {
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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening http://localhost:${port}`));
