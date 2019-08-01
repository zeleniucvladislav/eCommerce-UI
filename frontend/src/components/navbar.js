import React, { Component } from "react";
import NavBarLogo from "../../static/assets/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
    console.log(this.state.search);
  }

  render() {
    return (
      <div className="navbar-wrapper-fixed">
        <div className="navbar-wrapper">
          <div className="navbar-wrapper__left">
            <img src={NavBarLogo} />
          </div>
          <div className="navbar-wrapper__right">
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.updateSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}
