import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import ProductDetails from "./components/ProductDeatils";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Checkout from "./components/common/Checkout";
import Thanks from "./components/common/Thanks";
import Dashboard from "./components/Dashboard";
import ProductForm from "./components/common/ProductForm";
import * as loginService from "./services/loginService";
import * as cartService from "./services/cartService";

class App extends Component {
  state = {
    number: 0,
    total: 0,
    cart: []
  };

  componentDidMount() {
    const cart = cartService.getCartsFromStorage() || [];
    const user = loginService.getCurrentUser();
    this.setState({
      user,
      cart,
      number: cart.length,
      total: this.calculateTotal()
    });
  }

  handleAddToCard = product => {
    const newCart = [...this.state.cart, product];
    cartService.setCartsToStorage(newCart);

    this.setState({
      cart: newCart,
      number: newCart.length,
      total: this.calculateTotal()
    });
  };

  handleIncrement = product => {
    const cart = [...this.state.cart];
    const index = this.state.cart.indexOf(product);
    product.quantity += 1;

    cart[index] = product;
    cartService.setCartsToStorage(cart);

    this.setState({ cart, total: this.calculateTotal() });
  };

  handleDecrement = product => {
    const cart = [...this.state.cart];
    const index = this.state.cart.indexOf(product);
    if (product.quantity <= 1) return;
    product.quantity -= 1;

    cart[index] = product;
    cartService.setCartsToStorage(cart);

    this.setState({ cart, total: this.calculateTotal() });
  };

  handleRemove = product => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(product);
    cart.splice(index, 1);

    cartService.setCartsToStorage(cart);

    this.setState({ cart, number: cart.length, total: this.calculateTotal() });
  };

  calculateTotal = () => {
    let sum = 0;
    const cart = cartService.getCartsFromStorage() || [];

    cart.forEach(item => {
      sum += item.quantity * item.price;
    });

    return sum;
  };

  render() {
    const { user, number } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} number={number} />

        <Switch>
          <Route path="/products/edit/:id" component={ProductForm} />
          <Route path="/products/new" component={ProductForm} />
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
          <Route
            path="/profile"
            render={props => <Profile {...props} user={user} />}
          />
          <Route
            path="/cart"
            render={props => (
              <Cart
                {...props}
                cart={this.state.cart}
                total={this.state.total}
                onHandleIncrement={this.handleIncrement}
                onHandleDecrement={this.handleDecrement}
                onHandleRemove={this.handleRemove}
              />
            )}
          />
          <Route
            path="/checkout"
            render={props => <Checkout {...props} total={this.state.total} />}
          />
          <Route path="/thanks" component={Thanks} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
