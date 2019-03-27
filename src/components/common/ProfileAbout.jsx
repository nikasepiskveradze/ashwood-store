import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { name, email, age, birthday, balance } = this.props.user;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ProfileAbout;
