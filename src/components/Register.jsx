import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "../services/userService";
import * as loginService from "../services/loginService";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      age: "",
      birthday: "",
      balance: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    age: Joi.number()
      .required()
      .label("Age"),
    birthday: Joi.string()
      .required()
      .label("Birthday"),
    balance: Joi.number()
      .required()
      .label("Balance")
  };

  doSubmit = async () => {
    try {
      const respone = await userService.register(this.state.data);
      loginService.loginWithJwt(respone.headers["x-auth-token"]);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="register-form py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto">
              <h2>Registration</h2>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Passwowrd", "password")}
                {this.renderInput("age", "Age", "number")}
                {this.renderInput("birthday", "Birth", "date")}
                {this.renderInput("balance", "Balance", "number")}
                {this.renderButton("Register")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
