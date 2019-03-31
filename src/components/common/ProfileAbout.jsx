import React, { Component } from "react";

class ProfileAbout extends Component {
  render() {
    const { user, edit, handleChange, errors } = this.props;
    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-md-2">Name</div>
          {edit ? (
            <div className="col-md-4">
              <input
                name="name"
                type="text"
                value={user.name}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-4">{user.name}</div>
          )}
        </div>

        <div className="row mt-3">
          <div className="col-md-2">Email</div>

          {edit ? (
            <React.Fragment>
              <div className="col-md-4 ml-0">
                <input
                  name="email"
                  type="text"
                  value={user.email}
                  className="form-control"
                  onChange={handleChange}
                />

                {errors.email && (
                  <div className="alert alert-danger mt-2">{errors.email}</div>
                )}
              </div>
            </React.Fragment>
          ) : (
            <div className="col-md-4">{user.email}</div>
          )}
        </div>

        <div className="row mt-3">
          <div className="col-md-2">Age</div>
          {edit ? (
            <div className="col-md-4">
              <input
                name="age"
                type="text"
                value={user.age}
                className=" form-control"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-4">{user.age}</div>
          )}
        </div>

        <div className="row mt-3">
          <div className="col-md-2">Birthday</div>
          {edit ? (
            <div className="col-md-4">
              <input
                name="birthday"
                type="date"
                value={user.birthday}
                className="form-control"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-4">{user.birthday}</div>
          )}
        </div>

        <div className="row mt-3">
          <div className="col-md-2">Balance</div>
          <div className="col-md-4">{user.balance}$</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileAbout;
