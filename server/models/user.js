import mongoose from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, "password");

  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(4)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  };

  return Joi.validate(user, schema);
}

export { User, validateUser as validate };
