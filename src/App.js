import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";

export default class App extends Component {
  state = {
    hasError: false,
    hasData: false,
    data: []
  };

  fetchData = () => {
    const url = "https://hr.oat.taocloud.org/v1/users?limit=20&offset=0";
    fetch(url)
      .then(res => res.json())
      .then(res => this.getUserDetails(res))
      .catch(() => this.setState({ hasError: true }));
  };

  getUserDetails = data => {
    const fetchArray = [];
    data.forEach(user => {
      fetchArray.push(
        fetch(`https://hr.oat.taocloud.org/v1/user/${user.userId}`)
      );
    });
    Promise.all(fetchArray)
      .then(values =>
        values.forEach(res =>
          res
            .json()
            .then(res => this.setState({ data: [...this.state.data, res] }))
            .catch(() => this.setState({ hasError: true }))
        )
      )
      .then(() => this.setState({ hasData: true }));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { data, hasData, hasError } = this.state;
    const model = [
        "userId",
        "picture",
        "lastName",
        "firstName",
        "login",
        "password",
        "title",
        "gender",
        "email",
        "address"
    ];
    return hasError ? (
      <div className="status">Error loading data!</div>
    ) : hasData ? (
      <UserList data={data} model={model} title={"User List"} className={"user-list"} />
    ) : (
      <div className="status">Loading users...</div>
    );
  }
}
