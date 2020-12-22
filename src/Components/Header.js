import React, { Component } from "react";
import "../Styles/Header.css";
import headerLogo from "../Assets/title.png";

class Header extends Component {
  render() {
    return (
      <center class="center">
        <iframe
          class="contact"
          src="https://my.spline.design/edited-ce0cb7cb20f6113e3c6d017cba7a3481/"
          frameborder="0"
        ></iframe>
        <img class="title" src={headerLogo} alt="headerLogo" />
      </center>
    );
  }
}

export default Header;
