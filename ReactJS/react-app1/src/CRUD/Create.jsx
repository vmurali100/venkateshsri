import React, { Component } from "react";

export default class Create extends Component {
  render() {
    const { fname, lname } = this.props.user;
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            value={fname}
            name="fname"
            onChange={e => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="lname">Last Name : </label>
          <input
            type="text"
            value={lname}
            name="lname"
            onChange={e => {
              handleChange(e);
            }}
          />
          <br />
          {!this.props.isEdit && (
            <button type="button" onClick={handleSubmit}>
              Create User
            </button>
          )}
          {this.props.isEdit && (
            <button onClick={this.props.updateUser} type="button">
              Update User
            </button>
          )}
        </form>
      </div>
    );
  }
}
