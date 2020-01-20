import React, { Component } from "react";
import "./style.css";
import logo from "./setting.PNG";

const logo_svg = require("../../logo.svg");

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="logo">
          <img src={logo_svg} />
        </span>
        <h1>Test Blog</h1>
        <p>Time is given to us, we earn it by giving it.</p>
      </div>
    );
  }
}

export default Header;
