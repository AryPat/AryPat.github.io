import React, { Component } from "react";
import { FaGithub, FaLinkedin,   } from 'react-icons/fa';
import "../App.css";
import "../Styles/About.css";

class About extends Component {
  render() {
    return (
      <div class="center">
        <div class="about center">
          <p class="text top"> Thrid Year student @ <strong style={{color: '#e94560'}}> University of Toronto</strong>. Specializing in <strong style={{color: '#e94560'}}>Computer Science</strong> Software Engineering Stream. </p>
          <strong class="text">Feel free to get in contact via</strong>
          <div class="linked">
          <FaGithub />
          <FaLinkedin />

        </div>
        </div>
        
      </div>
    );
  }
}

export default About;
