import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import users from "./server/routes/users";

const app = express();

mongoose
  .connect("mongodb://localhost/ashwood", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Failed to Connect MongoDB"));

app.use(express.json());
app.use(cors());

app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening http://localhost:${port}`));
