import React, { Component } from "react";
import Footer from "./Footer";
import sepiskver from "../images/sepiskver.jpg";
import keti from "../images/keti.jpg";
import tamar from "../images/tamar.jpg";
import cloth from "../images/cloth.jpg";

const white_ball = {
  background: "white",
  width: "90px",
  height: "90px",
  marginTop: "-205px",
  marginLeft: "210px",
  position: "absolute"
};

const teamPictures = {
  width: "120px",
  height: "120px",
  margin: "30px auto",
  display: "block",
  background: "white"
};

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container-fluid w-75 mb-5 mt-5 pt-5">
          <div class="row mb-5">
            <div class="col-sm-12 col-md-7 col-lg-6 mb-5">
              <img src={cloth} class="img-fluid" />
            </div>
            <div class="col-sm-12 col-md-5 col-lg-6 mb-5">
              <h2 class="mb-3">How We Started</h2>
              <div class="d-block text-muted font-weight-lighter">
                Our story began in 2009 from university, set up the company
                while working at the same time on a social web startup and for
                clients. From the beginning we were passionate about both making
                software and the effects great products have on people.
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div
                class="container-fluid"
                style={{ height: "2px", width: "60px", background: "#394163" }}
              />
              <h4 class="text-center mt-3 mb-3">The Team</h4>
            </div>

            <div class="col-sm-12 col-md-4 pb-5 container">
              <img
                class="rounded-circle img-fluid team-pictures"
                style={teamPictures}
                src={sepiskver}
              />
              <h5 class="text-center font-weight-light">Nika Sepiskveradze</h5>
              <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Back-End Developer
              </h6>
              <br />
              <span class="d-block text-center text-muted font-weight-lighter mb-3">
                Very talented and exprienced Back-End Developer, whose goal is
                to improve his knowledge everyday.
              </span>
            </div>
            <div class="col-sm-12 col-md-4 pb-5 container">
              <img
                class="rounded-circle img-fluid"
                style={teamPictures}
                src={keti}
              />
              <h5 class="text-center font-weight-light">Ketevan Natobaidze</h5>
              <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Front-End Developer
              </h6>
              <br />
              <span class="d-block text-center text-muted font-weight-lighter mb-3 ">
                Exprienced, Developer whose dedication is very high and the
                knowledge is remarkable.
              </span>
            </div>
            <div class="col-sm-12 col-md-4 pb-5 container">
              <img
                class="rounded-circle img-fluid team-pictures"
                style={teamPictures}
                src={tamar}
              />
              <h5 class="text-center font-weight-light">
                Tamar Menteshashvili
              </h5>
              <h6 class="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Fron-End Developer
              </h6>
              <br />
              <span class="d-block text-center text-muted font-weight-lighter mb-3">
                Talented, Front-End Developer with huge amount of energy and
                passion for programming.
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
