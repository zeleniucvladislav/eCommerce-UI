import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "../routes";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}
