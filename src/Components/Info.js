import React, { Component } from "react";
import styled from "styled-components";
import "../Styles/Info.css";
import github from "../Assets/social media/github.png";
import resume from "../Assets/social media/resume.png";
import Resume from "../Assets/Patel_Aryan_Resume.pdf";
import goto from "../Assets/random/internet.png";
import mail from "../Assets/social media/mail.png";
import link from "../Assets/social media/link.png";
import experience from "../Assets/experience.json";
import project from "../Assets/project.json";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";


const Heading = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.headingColor};
  padding-bottom: 1rem;
  transition: all 2s ease;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: ${props => props.theme.titleColor};
  transition: all 2s ease;
`;

const SubTitle = styled.div`
  color:${props => props.theme.subTitleColor};
  font-size: 1rem;
  padding-top: 0.2rem;
  transition: all 2s ease;
`;

const Tech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 2rem);
  height: auto;
  transition: all 2s ease;
`;


const TechBubble = styled.div`
  font-size: 0.8rem;
  background: ${props => props.theme.techBoxColor};
  color: ${props => props.theme.techBoxText};
  padding: 0.75rem;
  border-radius: 1rem;
  margin: 0.2rem;
  width: max-content;
  transition: all 2s ease;
`;


const Info = styled.div`
  color: ${props => props.theme.textBody};
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  background-color:${props => props.theme.boxColor};
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 2s ease;
`;


class nav extends Component {
  
  render() {
   

    return (
      <div class="container">
        <div class="container-body">

          <Heading id="about">Hello there</Heading>

          <Info>
            <p  style={{ "padding-left": "1rem" }}>
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
          </Info>

          <Heading id="Experience" >
            Experience
          </Heading>

          {
            experience.map((exp) =>
            {
              return <Info>
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
              </Info>;

            })
          }

          <Heading id="Projects">Projects</Heading>

          {
            project.map((pro) => {
              return <Info>
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
                  {pro.Tech.map((tech) => {return  <TechBubble class="techBubble">{tech}</TechBubble>;})}
                </Tech>
              </p>
            </Info>;
            })
          }
        </div>
      </div>
    );
  }
}

export default nav;
