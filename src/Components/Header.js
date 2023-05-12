import React, { Component } from "react";
import "../Styles/Header.css";
import headerLogo from "../Assets/title.png";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.titleColor};
    color: ${(props) => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    position: absolute;
    top: 245px;
    right: 15px;
    font-size: 18px;
    z-index: 2;
  }
    transition: all .5s ease;
`;

class Header extends Component {
  render() {
    function changeTheme(props) {
      props.theme == "light"
        ? props.setTheme("dark")
        : props.setTheme("light");
    }

    const icon =
      this.props.theme === "light" ? (
        <HiMoon size={40} />
      ) : (
        <CgSun size={40} />
      );

    URL = (props) => {
      return props.theme == "dark"
        ? "https://my.spline.design/edited-ce0cb7cb20f6113e3c6d017cba7a3481/"
        : "https://my.spline.design/editedcopy-8b737870c23cf57d7444cb8531f94764/";
    };

    return (
      <center class="center">
        <Toggle onClick={() => changeTheme(this.props)}>{icon}</Toggle>
        <iframe class="contact" src={URL(this.props)} frameborder="0"></iframe>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/uno6gnr.css"
        ></link>
        <div class="title">
          <div class="insideTitle">
            <div class="small down">Hi, I am </div>
            <div class="big">
              <span class="big" style={{ color: "rgb(233, 69, 96)" }}>
                ARYAN{" "}
              </span>{" "}
              PATEL
            </div>
          </div>
        </div>
        {/* <img class="title" src={headerLogo} alt="headerLogo" /> */}
      </center>
    );
  }
}

export default Header;
