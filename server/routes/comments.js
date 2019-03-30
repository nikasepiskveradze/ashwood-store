import express from "express";
import auth from "../middleware/auth";
import { Comment } from "../models/comment";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const comment = new Comment({
    productId: req.body.productId,
    name: req.user.name,
    comment: req.body.comment
  });

  await comment.save();

  res.status(200).send(comment);
});

export default router;
