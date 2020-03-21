import React, { Component } from "react";

export default class Read extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>First Name </th>
              <th>Last Name </th>
              <th>Edit </th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
