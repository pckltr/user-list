import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  render() {
    const {
      userId,
      login,
      password,
      title,
      firstName,
      lastName,
      gender,
      email,
      picture,
      address
    } = this.props.userData;
    return (
      <tr>
        <td>{userId}</td>
        <td className="full-name">
          <img src={picture} alt="" /> {lastName} {firstName}
        </td>
        <td>{title}</td>
        <td>{login}</td>
        <td>{password}</td>
        <td>{gender}</td>
        <td>{email}</td>
        <td>{address}</td>
      </tr>
    );
  }
}
