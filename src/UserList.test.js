import React from 'react';
import { shallow } from 'enzyme';
import UserList from './UserList';

const users = [{
  userId: 0,
  login: "fosterabigail",
  password: "cheng",
  title: "mrs",
  firstName: "foster",
  lastName: "abigail",
  gender: "female",
  email: "abigail.foster60@example.com",
  picture: "https://randomuser.me/api/portraits/women/10.jpg",
  address: "1851 saddle dr anna 69319"
},{
  userId: 1,
  login: "fosterabigail",
  password: "cheng",
  title: "mrs",
  firstName: "foster",
  lastName: "abigail",
  gender: "female",
  email: "abigail.foster60@example.com",
  picture: "https://randomuser.me/api/portraits/women/10.jpg",
  address: "1851 saddle dr anna 69319"
}];
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

it('renders without crashing', () => {
  shallow(<UserList data={users} model={model} title={"User List"} className={"user-list"} />);
});