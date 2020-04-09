import React, { Component } from "react";

export default class CreateComp extends Component {
  render() {
    const { fname, lname, email, city } = this.props.user;
    const { handleChange } = this.props;
    return (
      <div className="container ">
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={fname}
              name="fname"
              onChange={e => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lname}
              name="lname"
              onChange={e => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              name="email"
              onChange={e => {
                handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              name="city"
              onChange={e => {
                handleChange(e);
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
