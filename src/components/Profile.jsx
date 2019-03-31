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
    },
    edit: false,
    errors: {}
  };

  async componentDidMount() {
    const { data: profile } = await profileService.getUserInfo();
    this.setState({ profile });
  }

  submitEditChange = async () => {
    try {
      const { name, email, age, birthday } = this.state.profile.user;
      await profileService.updateUser({
        name,
        email,
        age,
        birthday
      });

      this.setState({ edit: false, errors: {} });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  handleEditInfo = () => {
    const edit = !this.state.edit;
    this.setState({ edit });
  };

  handleEditChange = e => {
    const profile = { ...this.state.profile };
    profile.user[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ profile });
  };

  render() {
    const { user, orders } = this.state.profile;

    return (
      <div id="profile" className="py-4">
        <div className="container">
          <h2 className="mb-3">My Profile</h2>
          {user.isAdmin && (
            <Link to="/dashboard" className="btn btn-success mb-2 mr-2">
              Dashboard
            </Link>
          )}

          <button className="btn btn-info mb-2" onClick={this.handleEditInfo}>
            Edit User Info
          </button>

          <button
            className={
              !this.state.edit
                ? "btn btn-primary mb-2 ml-2 disabled"
                : "btn btn-primary mb-2 ml-2"
            }
            // className="btn btn-primary mb-2 ml-2 disabled"
            onClick={this.submitEditChange}
          >
            Update User Info
          </button>

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
              <ProfileAbout
                user={user}
                edit={this.state.edit}
                handleChange={this.handleEditChange}
                errors={this.state.errors}
              />
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
