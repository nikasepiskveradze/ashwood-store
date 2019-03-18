import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer id="footer-section" className="text-center">
          <div className="container">
            <div className="row upper-footer">
              <div className="col-md-4 pb-4">
                <h6>LOCATION</h6>
                <p className="text-secondary w-50 m-auto">
                  2313 Melcrose Place Beverly Hills, CA 90012
                </p>
              </div>
              <div className="col-md-4 pb-4">
                <h6 className="">SHARE WITH LOVE</h6>
                <a href="/">
                  <span className="fa fa-facebook" />
                </a>
                <a href="/">
                  <span className="fa fa-google" />
                </a>
                <a href="/">
                  <span className="fa fa-instagram" />
                </a>
              </div>
              <div className="col-md-4 pb-4">
                <h6>Ashwood University</h6>
                <p className="text-secondary m-auto">
                  Ashwood University's online shop, choose your university
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div className="below-footer py-3 text-center">
          <p className="text-muted">
            Copyright &copy; 2019. All Right Reserved
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
