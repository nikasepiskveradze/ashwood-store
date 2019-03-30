import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  comment: {
    type: String
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export { Comment };
