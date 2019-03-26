import React, { Component } from "react";
import Footer from "./Footer";
import sepiskver from "../images/sepiskver.jpg";
import keti from "../images/keti.jpg";
import tamar from "../images/tamar.jpg";
import cloth from "../images/cloth.jpg";

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
        <div className="container-fluid w-75 mb-5 mt-5 pt-5">
          <div className="row mb-5">
            <div className="col-sm-12 col-md-7 col-lg-6 mb-5">
              <img src={cloth} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-6 mb-5">
              <h2 className="mb-3">How We Started</h2>
              <div className="d-block text-muted font-weight-lighter">
                Our story began in 2009 from university, set up the company
                while working at the same time on a social web startup and for
                clients. From the beginning we were passionate about both making
                software and the effects great products have on people.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div
                className="container-fluid"
                style={{ height: "2px", width: "60px", background: "#394163" }}
              />
              <h4 className="text-center mt-3 mb-3">The Team</h4>
            </div>

            <div className="col-sm-12 col-md-4 pb-5 container">
              <img
                className="rounded-circle img-fluid team-pictures"
                style={teamPictures}
                src={sepiskver}
                alt=""
              />
              <h5 className="text-center font-weight-light">
                Nika Sepiskveradze
              </h5>
              <h6 className="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Back-End Developer
              </h6>
              <br />
              <span className="d-block text-center text-muted font-weight-lighter mb-3">
                Very talented and exprienced Back-End Developer, whose goal is
                to improve his knowledge everyday.
              </span>
            </div>
            <div className="col-sm-12 col-md-4 pb-5 container">
              <img
                className="rounded-circle img-fluid"
                style={teamPictures}
                src={keti}
                alt=""
              />
              <h5 className="text-center font-weight-light">
                Ketevan Natobaidze
              </h5>
              <h6 className="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Front-End Developer
              </h6>
              <br />
              <span className="d-block text-center text-muted font-weight-lighter mb-3 ">
                Exprienced, Developer whose dedication is very high and the
                knowledge is remarkable.
              </span>
            </div>
            <div className="col-sm-12 col-md-4 pb-5 container">
              <img
                className="rounded-circle img-fluid team-pictures"
                style={teamPictures}
                src={tamar}
                alt=""
              />
              <h5 className="text-center font-weight-light">
                Tamar Menteshashvili
              </h5>
              <h6 className="d-block text-center font-weigh-light text-uppercase text-muted font-weight-lighter">
                Fron-End Developer
              </h6>
              <br />
              <span className="d-block text-center text-muted font-weight-lighter mb-3">
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
