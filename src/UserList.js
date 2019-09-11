import React, { Component } from "react";
import "./UserList.css";
import User from "./User";

export default class UserList extends Component {
  render() {
    const { data, title, model, className } = this.props;
    return (
      <div className={className}>
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
                {model.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <User key={index} data={item} model={model}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
