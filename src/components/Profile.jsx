import React, { Component } from "react";
import BoughtItems from "./common/BoughtItems";
import ProfileAbout from "./common/ProfileAbout";
import { Link } from "react-router-dom";
import * as profileService from "../services/profileService";

class Profile extends Component {
  state = {
    profile: {
      user: {
        name: "",
        email: "",
        age: "",
        birthday: "",
        balance: ""
      },
      orders: []
    }
  };

  async componentDidMount() {
    const { data: profile } = await profileService.getUserInfo();
    console.log(profile);
    this.setState({ profile });
  }

  render() {
    const { user, orders } = this.state.profile;
    const { user: currentUser } = this.props;

    return (
      <div id="profile" className="py-4">
        <div className="container">
          <h2 className="mb-3">My Profile</h2>
          {currentUser.isAdmin && (
            <Link to="/dashboard" className="btn btn-success mb-2">
              Admin Panel
            </Link>
          )}

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
              <ProfileAbout user={user} />
            </div>

            <div id="bought" className="tab-pane fade">
              {orders.length === 0 ? (
                <h2 className="mt-2">No Items Bought</h2>
              ) : (
                <BoughtItems orders={orders} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
