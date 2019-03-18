import { Component } from "react";
import * as loginService from "../services/loginService";

class Logout extends Component {
  componentDidMount() {
    loginService.logout();

    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
