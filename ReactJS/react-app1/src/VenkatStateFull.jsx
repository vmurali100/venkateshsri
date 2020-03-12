import React, { Component } from "react";

export default class VenkatStateFull extends Component {
  constructor(props) {
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

  render() {
    const { myName, person, users } = this.state;
    return (
      <div>
        <h2>{myName}</h2>
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
        </ul>
      </div>
    );
  }
}
