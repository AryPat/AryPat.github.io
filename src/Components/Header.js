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
        <link rel="stylesheet" href="https://use.typekit.net/uno6gnr.css"></link>
        <div class="title">
          <div class="insideTitle">
            <div class="small down">Hi, I am </div>
            <div class="big">
              <span class="big" style={{ color: 'rgb(233, 69, 96)' }}>ARYAN </span> PATEL
            </div>
            <div class="small upp">Could you help me find my <span style={{ color: '#45e961' }}>gems</span>? </div>
          </div>

        </div>
        {/* <img class="title" src={headerLogo} alt="headerLogo" /> */}
      </center>
    );
  }
}

export default Header;
