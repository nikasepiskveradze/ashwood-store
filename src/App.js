import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ProductDetails from "./components/ProductDeatils";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import * as loginService from "./services/loginService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = loginService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />

        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
