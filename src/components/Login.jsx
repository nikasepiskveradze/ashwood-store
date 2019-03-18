import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as loginService from "../services/loginService";

class Login extends Form {
  state = { data: { email: "", password: "" }, errors: {} };

  schema = {
    email: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await loginService.login(data.email, data.password);

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
      <div className="login-form py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto">
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}

                {this.renderButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
