import React, { Component } from "react";
import styled from "styled-components";
import "../Styles/Info.css";
import github from "../Assets/social media/github.png";
import resume from "../Assets/social media/resume.png";
import Resume from "../Assets/Patel_Aryan_Aug_22.pdf";
import goto from "../Assets/random/internet.png";
import mail from "../Assets/social media/mail.png";
import link from "../Assets/social media/link.png";
import experience from "../Assets/experience.json";
import project from "../Assets/project.json";


const Heading = styled.div`
  font-size: 2rem;
  color: #FFC175;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: rgb(233, 69, 96);
`;

const SubTitle = styled.div`
  color:rgb(204, 214, 246);
  font-size: 1rem;
  padding-top: 0.2rem;
`;

const Tech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  height: auto;
`;



class nav extends Component {
  render() {
    return (
      <div class="container">
        <div class="container-body">
          <Heading>Hello there</Heading>

          <div class="container-info">
            <p  style={{ color: "rgb(204, 214, 246)", "padding-left": "1rem" }}>
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

          <Heading>
            Experience
          </Heading>

          {
            experience.map((exp) =>
            {
              return <div class="container-info">
                <p class="container-info-inside">
                  <div class="container-headings">
                  <div class="infoSocialRow">
                  <Title>{exp.Title}</Title>
                  <SubTitle>{exp.SubTitle}</SubTitle>
                    </div>
                    
                    {exp.website && 
                      <a href={exp.website} target="__blank" style={{ "padding-right": "1rem" }}>
                        <img
                          src={goto}
                          alt="logo"
                          width="35rem"
                 
                        />
                      </a>}
                  </div>
                  
                  
                  <ul style={{ "width": "85%" }}>
                    {exp.BulletPoints.map((point) => {
                      return <li>{point}</li>;
                    })}
                  </ul>
                </p>
              </div>;

            })
          }

          <Heading>Projects</Heading>

          {
            project.map((pro) => {
              return <div class="container-info">
              <p class="container-info-inside">
                <div class="container-headings">
                  <div class="infoSocialRow">
                    <Title>{pro.Title}</Title>
                    <SubTitle>
                      {pro.SubTitle}
                    </SubTitle>
                  </div>

                  
                  <div class="infoSocialMultiple">
                  {pro.Website !== null && <a href={pro.Website} target="__blank">
                      <img
                        src={goto}
                        alt="logo"
                        width="35rem"
       
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
             
                      />
                    </a>
                  
                    
                  </div>
                </div>

                <ul>
                  {
                    pro.BulletPoints.map((points) => {
                      return <li>{points}</li>;
                    })
                  }
                </ul>
                
                <Tech>
                  {pro.Tech.map((tech) => {return  <div class="techBubble">{tech}</div>;})}
                </Tech>
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
