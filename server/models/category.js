import mongoose from "mongoose";
import Joi from "joi";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = {
    name: Joi.string().required()
  };

  return Joi.validate(category, schema);
}

export { Category, validateCategory as validate, categorySchema };
