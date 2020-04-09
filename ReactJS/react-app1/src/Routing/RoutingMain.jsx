import React, { Component } from "react";
import { Route } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
export default class RoutingMain extends Component {
  render() {
    return (
      <div>
        <h2>Welcome To Routing Main</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <Route path="" component={Home} exact />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
      </div>
    );
  }
}
