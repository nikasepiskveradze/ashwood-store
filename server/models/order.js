import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  customer: {
    type: Object
  },
  cart: {
    type: Object
  }
});

const Order = mongoose.model("Order", orderSchema);

export { Order };
