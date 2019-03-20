import React, { Component } from "react";
import Showcase from "./Showcase";
import Section from "./Section";
import Featured from "./Featured";
import * as productService from "../services/productSevice";

class Home extends Component {
  state = {
    featured: []
  };

  async componentDidMount() {
    const { data: products } = await productService.getAllProducts();
    const newest = products
      .filter(p => p.createdAt)
      .reverse()
      .slice(0, 6);

    this.setState({ featured: newest });
  }

  render() {
    return (
      <React.Fragment>
        <Showcase />
        <Section />
        <Featured featured={this.state.featured} />
      </React.Fragment>
    );
  }
}

export default Home;
