import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/nav.css";

class nav extends Component {
  render() {
    return (
      <div class="test">
        <Button variant="primary" active={false}>
          About Me
        </Button>{" "}
        <Button variant="primary" class="techBubble">Experience</Button>{" "}
        <Button variant="primary">Side Projects</Button>{" "}
      </div>
    );
  }
}

export default nav;
