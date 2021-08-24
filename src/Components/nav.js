import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../Styles/nav.css";
import { Link } from "react-scroll";
import styled from "styled-components";

const Add = styled(Button)`
  background-color:${props => props.theme.optionBoxColor};
  border: none;
  color:${props => props.theme.optionTextColor};
  font-size: 1.2rem;


  padding: 0.75rem;
  border-radius: 0.7rem;
  margin: 0.2rem;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.optionHoverColor};
  }
  `;

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
          <Add variant="primary" active={false}>
            About Me
        </Add>{" "}
        </Link>

        <Link
          activeClass="active"
          to="Experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ><Add variant="primary">Experience</Add>{" "}</Link>


        <Link
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        > <Add variant="primary">Projects</Add>{" "}</Link>




      </div>
    );
  }
}

export default nav;
