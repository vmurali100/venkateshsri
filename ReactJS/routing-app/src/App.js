import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Pricing from "./Components/Pricing";
import Features from "./Components/Features";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features">
                <a className="nav-link" href="#">
                  Features
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="pricing">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/pricing" component={Pricing} />
        <Route path="/features" component={Features} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
