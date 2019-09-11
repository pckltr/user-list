import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  render() {
    const { data, model } = this.props;
    return (
      <tr>
        {model.map((item, index) => {
            if (item === "picture") {
                return <td key={index}><img src={data[item]} alt={data.lastName} /></td>
            } else {
                return <td key={index}>{data[item]}</td>
            }
        })}
      </tr>
    );
  }
}
