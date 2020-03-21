import React, { Component } from "react";

export default class Murali extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hello from Murali</h2>
        <p>{this.props.myName}</p>
        {/* <p>{this.props.person.fname}</p> */}
      </div>
    );
  }
}
