import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/nav.css";
import { Link } from "react-scroll";

class nav extends Component {
  render() {
    return (
      <div class="test">
        <Link

          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          <Button variant="primary" active={false}>
            About Me
        </Button>{" "}
        </Link>

        <Link
          activeClass="active"
          to="Experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ><Button variant="primary" class="techBubble">Experience</Button>{" "}</Link>


        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        > <Button variant="primary">Projects</Button>{" "}</Link>




      </div>
    );
  }
}

export default nav;
