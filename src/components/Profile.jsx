import React, { Component } from "react";
import * as profileService from "../services/profileService";

class Profile extends Component {
  state = {
    user: {
      name: "",
      email: "",
      age: "",
      birthday: "",
      balance: ""
    }
  };

  async componentDidMount() {
    const { data: user } = await profileService.getUserInfo();
    console.log(user);
    this.setState({ user });
  }

  render() {
    const { name, email, age, birthday, balance } = this.state.user;

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
                <div className="col-md-2">Name</div>
                <div className="col-md-4">{name}</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Email</div>
                <div className="col-md-4">{email}</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Age</div>
                <div className="col-md-4">{age}</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Birthday</div>
                <div className="col-md-4">{birthday}</div>
              </div>

              <div className="row mt-3">
                <div className="col-md-2">Balance</div>
                <div className="col-md-4">{balance}$</div>
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
