import React, { Component } from "react";
import Create from "./Create";
import Read from "./Read";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: { fname: "", lname: "" },
      users: [],
      isEdit: false,
      index: null
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

  handleDelete = i => {
    let users = this.state.users;
    users.splice(i, 1);
    this.setState({ users });
  };

  updateUser = () => {
    console.log("update User Called");
    let users = this.state.users;
    users[this.state.index] = this.state.person;
    this.setState({ users }, () => {
      this.clearForm();
      localStorage.setItem("users", JSON.stringify(this.state.users));
      this.setState({ isEdit: false });
    });
  };
  handleEdit = (user, i) => {
    let person = Object.assign({}, user);
    this.setState({ person, isEdit: true, index: i });
  };
  clearForm = () => {
    let person = { fname: "", lname: "" };
    this.setState({ person });
  };
  componentDidMount() {
    console.log("Our Componnet is ready Now");
    let users = JSON.parse(localStorage.getItem("users"));
    if (users !== null) {
      this.setState({ users });
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to CRUD Application</h2>
        <Create
          user={this.state.person}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isEdit={this.state.isEdit}
          updateUser={this.updateUser}
        />
        <Read
          users={this.state.users}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
