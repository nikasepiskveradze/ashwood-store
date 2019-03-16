import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
