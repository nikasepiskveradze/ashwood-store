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
  state = {
    number: 0,
    cart: []
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const user = loginService.getCurrentUser();
    this.setState({ user, cart, number: cart.length });
  }

  handleAddToCard = product => {
    const newCart = [...this.state.cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    this.setState({ cart: newCart, number: newCart.length });
  };

  render() {
    const { user, number } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} number={number} />

        <Switch>
          <Route
            path="/products/:id"
            render={props => (
              <ProductDetails {...props} onClick={this.handleAddToCard} />
            )}
          />
          <Route
            path="/products"
            render={props => (
              <Products {...props} onClick={this.handleAddToCard} />
            )}
          />
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
