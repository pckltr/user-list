import React, { Component } from "react";
import "./UserList.css";
import User from "./User";

export default class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="user-list">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>user</th>
              <th>title</th>
              <th>user name</th>
              <th>password</th>
              <th>gender</th>
              <th>email</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={index} userData={user} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
