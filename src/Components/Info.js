import React, { Component } from "react";
import "../Styles/Info.css";
import github from "../Assets/social media/github.png";
import resume from "../Assets/social media/resume.png";
import Resume from "../Assets/Patel_Aryan_Aug_22.pdf";
import goto from "../Assets/random/internet.png";
import mail from "../Assets/social media/mail.png";
import link from "../Assets/social media/link.png";
import experience from "../Assets/experience.json";
import project from "../Assets/project.json";

class nav extends Component {
  render() {
    return (
      <div class="middle" id="about">
        <div class="another">
          <div class="infoTitle">Hello there</div>

          <div class="infoPara">
            <p class="inside diff">
              I am a second year
              <strong style={{ color: "rgb(233, 69, 96)" }}>
                {" "}
                computer science{" "}
              </strong>
              student studying at University of Toronto currently
              <strong style={{ color: "rgb(233, 69, 96)" }}>
                {" "}
                specializing{" "}
              </strong>
              in the Software Engineering stream and{" "}
              <strong style={{ color: "rgb(233, 69, 96)" }}>
                {" "}
                majoring{" "}
              </strong>{" "}
              in Statistics.
              <br></br>
              <br></br>
              GPA:
              <strong style={{ color: "rgb(233, 69, 96)" }}> 3.79</strong>
              /4.00
              <br></br>
              <br></br>I am a self-driven enthusiastic person who is always
              looking for challenging opportunities to test and apply my
              knowledge.
              <br></br>
              <br></br>
              Please feel free to get in touch with me! I do not bite{" "}
              <strong style={{ color: "rgb(233, 69, 96)" }}> :D </strong>
            </p>

            <div class="social">
              <a
                href="https://github.com/AryPat?tab=repositories"
                target="__blank"
              >
                <img src={github} alt="logo" width="40rem" class="space" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryanpatel/"
                target="__blank"
              >
                <img src={link} alt="logo" width="35rem" class="space" />
              </a>

              <a
                href="mailto:aryan.patel@mail.utoronto.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mail} alt="logo" width="40rem" class="space" />
              </a>
              <a href={Resume} target="__blank">
                <img
                  src={resume}
                  alt="logo"
                  width="40rem"
                  id="space"
                  style={{ padding: "0.5rem" }}
                />
              </a>
            </div>
          </div>

          <div class="infoTitle" id="Experience">
            Experience
          </div>

          {
            experience.map((exp) =>
            {
              return <div class="infoPara">
                <p class="inside">
                  <div class="infoSocial">
                    <span class="infoSubTitle">{exp.Title}</span>
                    {exp.website && 
                      <a href={exp.website} target="__blank">
                        <img
                          src={goto}
                          alt="logo"
                          width="35rem"
                          class="translateLogo"
                        />
                      </a>}
                  </div>
                  
                  <span id="white">{exp.SubTitle}</span>
                  <ul class="infoBullet">
                    {exp.BulletPoints.map((point) => {
                      return <li>{point}</li>;
                    })}
                  </ul>
                </p>
              </div>;

            })
          }

          <div class="infoTitle" id="Projects">
            Projects
          </div>

          {
            project.map((pro) => {
              return <div class="infoPara">
              <p class="inside">
                <div class="infoSocial">
                  <div class="infoSocialRow">
                    <span class="infoSubTitle up">{pro.Title}</span>
                    <span id="white">
                      {pro.SubTitle}
                    </span>
                  </div>

                  
                  <div class="infoSocialMultiple">
                  {pro.Website !== null && <a href={pro.Website} target="__blank">
                      <img
                        src={goto}
                        alt="logo"
                        width="35rem"
                        class="translateLogo"
                      />
                    </a>}
                    <a
                      href={pro.Github}
                      target="__blank"
                      class="github"
                    >
                      <img
                        src={github}
                        alt="logo"
                        width="40rem"
                        class="translateLogo"
                      />
                    </a>
                  
                    
                  </div>
                </div>

                <ul class="infoBullet up">
                  {
                    pro.BulletPoints.map((points) => {
                      return <li>{points}</li>;
                    })
                  }
                </ul>
                
                <div class="tech">
                  {pro.Tech.map((tech) => {return  <div class="techBubble">{tech}</div>;})}
                </div>
              </p>
            </div>;
            })
          }
        </div>
      </div>
    );
  }
}

export default nav;
