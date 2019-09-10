import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App.js", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders error status", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ hasError: true });
    expect(wrapper.contains("Error loading data!")).toBe(true);
  });

  it("renders loading status", () => {
    const wrapper = mount(<App />);
    expect(wrapper.contains("Loading users...")).toBe(true);
  });
});
