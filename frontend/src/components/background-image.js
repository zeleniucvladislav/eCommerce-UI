import React, { Component } from "react";

import BackgroundImageLogo from "../../static/assets/background.png";
var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: `url(${BackgroundImageLogo})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

export default class BackgroundImage extends Component {
  render() {
    return (
      <div className="background-wrapper" style={sectionStyle}>
        <div className="background-wrapper__text">
          <span className="background-wrapper__text-bold">
            NikePlus
            <br />
            Membership
          </span>
          <br />
          <span className="background-wrapper__text-normal">
            Everything you
            <br />
            need to win.
          </span>
          <div className="background-button">
            <button>Join NikePlus</button>
          </div>
        </div>
      </div>
    );
  }
}
