import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const { user, quantity } = this.props;
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3">
        <div className="container">
          <Link to="/" className="navbar-brand mr-5">
            ASHWOOD
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="collapseNavbar"
          >
            <ul className="navbar-nav">
              <NavLink to="/" className="nav-item nav-link">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-item nav-link">
                Products
              </NavLink>
              <NavLink to="/about" className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-item nav-link">
                Contact Us
              </NavLink>
            </ul>

            <ul className="navbar-nav">
              <NavLink to="/cart" className="nav-item nav-link">
                <i className="fa fa-shopping-cart">
                  {" "}
                  <span className="badge badge-light counter">{quantity}</span>
                </i>
              </NavLink>

              {!user && (
                <React.Fragment>
                  <NavLink to="/login" className="nav-item nav-link">
                    Login
                  </NavLink>

                  <NavLink to="/register" className="nav-item nav-link">
                    Register
                  </NavLink>
                </React.Fragment>
              )}

              {user && (
                <React.Fragment>
                  <NavLink to="/profile" className="nav-item nav-link">
                    Profile
                  </NavLink>

                  <NavLink to="/logout" className="nav-item nav-link">
                    Log Out
                  </NavLink>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
