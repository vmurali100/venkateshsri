import React, { Component } from "react";
import Murali from "./Murali";

export default class VenkatStateFull extends Component {
  constructor(props) {
    console.log("Constructor Triggers");
    super(props);

    this.state = {
      myName: "Murali Krishna",
      person: {
        fname: "Venkat",
        lname: "M"
      },
      users: ["Ravi", "Kiran", "Sam", "Ram", "Guru"]
    };
  }

  componentDidMount() {
    console.log("Component Did Mount Triggers");
  }

  sayHello = () => {
    console.log("sayHello is called");
  };

  render() {
    console.log("Render Triggers");
    const { myName, person, users } = this.state;
    return (
      <div>
        {/* <h2>{myName}</h2>
        <ul>
          <li>{person.fname}</li>
          <li>{person.lname}</li>
        </ul>
        <hr />
        <h4>User Names </h4>

        <ul>
          {users.map(user => {
            return <li>{user}</li>;
          })}
        </ul> */}
        <p>{this.state.myName}</p>
        <button onClick={this.sayHello}>Click</button>
        {/* <Murali myName={this.state.myName} />
        <Murali myName="Ram Krishna" /> */}
      </div>
    );
  }
}
