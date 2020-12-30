import React, { Component } from "react";
import "../Styles/Info.css";
import github from '../Assets/social media/github.png';
import resume from '../Assets/social media/resume.png';
import mail from '../Assets/social media/mail.png';
import link from '../Assets/social media/link.png';

class nav extends Component {
  render() {
    return (
      <div class="middle">
          <div class="another">
              <div class="infoTitle">Hello there.</div>
            
              <div class="infoPara"> 
                <p class="inside">
                 I am a second year computer science student studying at University of Toronto
                 currently Specializing in Software Engineering
                 stream and Majoring in Statistics. 
                 <br></br>                  
                 <br></br>
                 My Current GPA: 3.83/4.00

                 <br></br>                  
                 <br></br>

                 I am a Self-driven enthusiastic person who is always looking for challenging opportunities to test and apply my knowledge. 
                 <br></br>                  
                 <br></br>
                 Please feel free to get in touch with me! I do not bite :D
                 </p>
                 <div class="social"> 
                 <a href="https://github.com/AryPat?tab=repositories">
                 <img src={github} alt="logo" width="50rem" class="space" />
                 </a>
                 <a href="https://www.linkedin.com/in/aryanpatel/">
                 <img src={link} alt="logo" width="40rem" class="space" />
                 </a>
          
                 <a href="https://theuselessweb.com/">
                 <img src={mail} alt="logo" width="50rem" class="space" />
                 </a>
                 <a href="https://theuselessweb.com/">
                 <img src={resume} alt="logo" width="45rem" id="space" />
                 </a>
                 </div>
              </div>

          </div>
      </div>
    );
  }
}

export default nav;
