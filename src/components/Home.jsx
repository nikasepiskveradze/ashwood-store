import React, { Component } from "react";
import Showcase from "./Showcase";
import Section from "./Section";
import Featured from "./Featured";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Showcase />
        <Section />
        <Featured />
      </React.Fragment>
    );
  }
}

export default Home;
