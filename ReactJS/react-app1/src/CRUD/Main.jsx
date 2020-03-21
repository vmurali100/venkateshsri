import React, { Component } from "react";
import Create from "./Create";
import Read from "./Read";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: { fname: "", lname: "" },
      users: []
    };
  }

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let person = this.state.person;
    person[name] = value;
    this.setState({ person });
  };
  handleSubmit = () => {
    let users = this.state.users;
    let user = Object.assign({}, this.state.person);
    users.push(user);
    this.setState({ users }, () => {
      this.clearForm();
      localStorage.setItem("users", JSON.stringify(users));
    });
  };

  clearForm = () => {
    let person = { fname: "", lname: "" };
    this.setState({ person });
  };
  componentDidMount() {
    console.log("Our Componnet is ready Now");
    let users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    this.setState({ users });
  }
  render() {
    return (
      <div>
        <h2>Welcome to CRUD Application</h2>
        <Create
          user={this.state.person}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Read users={this.state.users} />
      </div>
    );
  }
}
