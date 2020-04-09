import React, { Component } from "react";
import axios from "axios";
import ReadComp from "./ReadComp";
import CreateComp from "./CreateComp";

export default class MainComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      user: {
        fname: "",
        lname: "",
        email: "",
        city: ""
      }
    };
  }

  handleDelete = user => {
    axios.delete("http://localhost:3000/users/" + user.id).then(res => {
      this.getLastestUser();
    });
  };

  handleChange = e => {
    let user = Object.assign({}, this.state.user);
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    this.setState({ user });
    console.log(user);
  };

  handleSubmit = () => {
    axios.post("http://localhost:3000/users", this.state.user).then(res => {
      this.getLastestUser();
      this.clearForm();
    });
  };
  render() {
    return (
      <div>
        <h1>CRUD APP With AXIOS</h1>
        <br />
        <CreateComp
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ReadComp users={this.state.users} deleteUser={this.handleDelete} />
      </div>
    );
  }
  //
  componentDidMount() {
    this.getLastestUser();
  }

  getLastestUser = () => {
    axios.get("http://localhost:3000/users").then(res => {
      this.setState({ users: res["data"] });
    });
  };

  clearForm() {
    let user = {
      fname: "",
      lname: "",
      email: "",
      city: ""
    };
    this.setState({ user });
  }
}
