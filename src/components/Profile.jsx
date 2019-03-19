import React, { Component } from "react";
import * as profileService from "../services/profileService";
import About from "./About";

class Profile extends Component {
  state = {};

  async componentDidMount() {
    const { data: user } = await profileService.getUserInfo();

    console.log(user);
  }

  render() {
    return (
      <div id="profile" className="py-4 bg-light">
        <div className="container">
          <h2 className="mb-3">My Profile</h2>

          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#about" data-toggle="tab">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#bought" data-toggle="tab">
                Bought Items
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="about" className="tab-pane fade show active">
              <div className="row mt-3">
                <div className="col-md-2">Name, Lastname</div>
                <div className="col-md-4">Nika Sepiskveradze</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Email</div>
                <div className="col-md-4">sebiskver@gmail.com</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Age</div>
                <div className="col-md-4">21</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Birthday</div>
                <div className="col-md-4">1997/12/21</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Balance</div>
                <div className="col-md-4">100$</div>
              </div>
            </div>

            <div id="bought" className="tab-pane fade">
              No Items Bought
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
