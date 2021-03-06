import React, { Component } from "react";
import "../Styles/Info.css";
import github from "../Assets/social media/github.png";
import resume from "../Assets/social media/resume.png";
import AryanPatel_Updated_Jan2021 from "../Assets/AryanPatel_Updated_Jan2021.pdf";
import goto from "../Assets/random/internet.png";
import mail from "../Assets/social media/mail.png";
import link from "../Assets/social media/link.png";

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
              <a href={AryanPatel_Updated_Jan2021} target="__blank">
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

          <div class="infoTitle addSpace2" id="Experience">
            Experience
          </div>

          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <span class="infoSubTitle">
                  {" "}
                  Cloud Software Developer (Incoming){" "}
                </span>
              </div>
              <span id="white">Royal Bank of Canada, May 2021 - Aug 2021</span>
              <ul class="infoBullet"></ul>
            </p>
          </div>
          <br></br>
          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <span class="infoSubTitle">
                  {" "}
                  The Association of Mathematical and Computer Science Students{" "}
                </span>
                <a href="https://www.amacss.org/" target="__blank">
                  <img
                    src={goto}
                    alt="logo"
                    width="35rem"
                    class="translateLogo"
                  />
                </a>
              </div>
              <span id="white">
                University of Toronto, September 2020 - Present
              </span>
              <ul class="infoBullet">
                <li>
                  Academic Representative for MATA31 (Calculus I) Fall 2020
                </li>
                <li>
                  Holding Weekly Office hours for students to assist with
                  academic concerns and issues
                </li>
                <li>
                  Assisting with planning and executing{" "}
                  <span>
                    {" "}
                    <a
                      target="__blank"
                      href="https://www.youtube.com/watch?v=bFNTCCG0ox8&feature=youtu.be&ab_channel=SamyakMehta"
                      style={{ color: "rgba(255, 255, 255, 0.671)" }}
                    >
                      seminar
                    </a>
                  </span>{" "}
                  for midterm and final preperation and effective learning
                  strategies
                </li>
                <li>
                  Communicating among other team members and instructors to plan
                  out crucial learning concepts
                </li>
              </ul>
            </p>
          </div>

          <br></br>

          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <span class="infoSubTitle">
                  {" "}
                  Associate Staff, The Canadian National Exhibition{" "}
                </span>
              </div>
              <span id="white">July 2019 - August 2019</span>

              <ul class="infoBullet">
                <li>
                  Held in-door activies for children to play and past time with
                </li>
                <li>
                  Provided clear instruction to children and adults with
                  standard protocols to prevent accidents and mishaps
                </li>
                <li>Followed the practice of WHMIS</li>
              </ul>
            </p>
          </div>

          <br></br>

          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <span class="infoSubTitle"> Teaching Assistant</span>
              </div>
              <span id="white">Woburn CI, December 2018 - April 2019</span>
              <ul class="infoBullet">
                <li>
                  Prepared and organized one of my own lesson to present to the
                  class
                </li>
                <li>
                  Improved the average class grade by 10% by communicating
                  concepts using clear and concise instructional strategies
                </li>
                <li>
                  Ensured all students were satisfied with their experience by
                  multitasking effectively
                </li>
              </ul>
            </p>
          </div>

          <div class="infoTitle addSpace2" id="Projects">
            Projects
          </div>

          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> U-Impactify </span>
                  <span id="white">
                    An E-Learning website for the social-purpose-sector{" "}
                  </span>
                </div>

                <div class="infoSocialMultiple">
                  <a
                    href="https://github.com/AryPat/U-Impactify"
                    target="__blank"
                  >
                    <img
                      src={github}
                      alt="logo"
                      width="40rem"
                      class="translateLogo"
                    />
                  </a>
                  <a href="https://uimpactify.herokuapp.com/" target="__blank">
                    <img
                      src={goto}
                      alt="logo"
                      width="35rem"
                      class="translateLogo"
                    />
                  </a>
                </div>
              </div>

              <ul class="infoBullet up">
                <li>
                  Users can use this platform to develop their company's
                  capacity, teach, and engage in various courses
                </li>
                <li>
                  Full-Stack Development using Agile Methodologies and Jira
                  Board to track development progress
                </li>
                <li>
                  Worked in a team of seven over the span of four sprints, each
                  two weeks long
                </li>
              </ul>

              <div class="tech">
                <div class="techBubble"> Angular </div>
                <div class="techBubble"> MongoDB </div>
                <div class="techBubble"> Node </div>
                <div class="techBubble"> Socket.io </div>
                <div class="techBubble"> Agile </div>
                <div class="techBubble"> Chart.js </div>
                <div class="techBubble"> GridFS </div>
                <div class="techBubble"> Clarity </div>
                <div class="techBubble"> Figma </div>
                <div class="techBubble"> Jira </div>
                <div class="techBubble"> ngx-file-drop </div>
              </div>
            </p>
          </div>

          <br></br>

          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> Splitify </span>
                  <span id="white">
                    Mobile Application for groups of friends to evenly split the
                    cost of an expense{" "}
                  </span>
                </div>

                <a
                  href="https://github.com/JavaScape/Splitify"
                  target="__blank"
                >
                  <img
                    src={github}
                    alt="logo"
                    width="40rem"
                    class="translateLogo"
                  />
                </a>
              </div>

              <ul class="infoBullet up">
                <li>Create, update, and edit profiles</li>
                <li>Create and customize friend groups</li>
                <li>Add transactions with members part of the group</li>
                <li>
                  Calculate how much each individual pays for each transaction
                </li>
              </ul>

              <div class="tech">
                <div class="techBubble"> React Native </div>
                <div class="techBubble"> Firebase Store </div>
                <div class="techBubble"> Firebase Auth </div>
              </div>
            </p>
          </div>

          <br></br>
          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> Spotify API Clone </span>
                  <span id="white">
                    {" "}
                    REST API that mimics Spotify using Microservices{" "}
                  </span>
                </div>

                <a
                  href="https://github.com/AryPat/Spotify-API-Clone"
                  target="__blank"
                >
                  <img
                    src={github}
                    alt="logo"
                    width="40rem"
                    class="translateLogo"
                  />
                </a>
              </div>

              <ul class="infoBullet up">
                <li>Create, Update, and Delete Profiles</li>
                <li>Follow and Unfollow profiles</li>
                <li>Like, and unlike songs to playlist</li>
                <li>Querying songs by properties</li>
                <li>Microservies used for future extensibility if required</li>
              </ul>

              <div class="tech">
                <div class="techBubble"> Java </div>
                <div class="techBubble"> Spring Boot </div>
                <div class="techBubble"> MongoDB </div>
                <div class="techBubble"> Neo4j </div>
                <div class="techBubble"> Postman [end-point calls] </div>
              </div>
            </p>
          </div>

          <br></br>
          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> Mock Linux Shell </span>
                  <span id="white">
                    {" "}
                    Java Application that mimics commands found in terminal{" "}
                  </span>
                </div>

                <a
                  href="https://github.com/AryPat/Mock-Linux-Command-Line-Interface"
                  target="__blank"
                >
                  <img
                    src={github}
                    alt="logo"
                    width="40rem"
                    class="translateLogo"
                  />
                </a>
              </div>

              <ul class="infoBullet up">
                <li>
                  Followed Agile Software Development Framework while working in
                  groups of 3
                </li>
                <li>
                  Encompassed SOLID, Single Responsibily, and OOP principles
                </li>
                <li>Create, save, and load File Systems</li>
              </ul>

              <div class="tech">
                <div class="techBubble"> Java </div>
                <div class="techBubble"> Agile </div>
                <div class="techBubble"> SOLID principles </div>
                <div class="techBubble"> Object Oriented Programming </div>
              </div>
            </p>
          </div>

          <br></br>
          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> Un-beatable Connect4 AI </span>
                  <span id="white">
                    Java Application with Graphical User Interface
                  </span>
                </div>

                <a href="https://github.com/AryPat/Connect4AI" target="__blank">
                  <img
                    src={github}
                    alt="logo"
                    width="40rem"
                    class="translateLogo"
                  />
                </a>
              </div>

              <ul class="infoBullet up">
                <li>Play with friends or against our customly designed AI</li>
                <li>Multiple AI difficulties (easy to very hard)</li>
                <li>AI made by Alpha Beta Pruning and MinMax</li>
              </ul>

              <div class="tech">
                <div class="techBubble"> Java </div>
                <div class="techBubble"> Window Builder </div>
                <div class="techBubble"> Object Oriented Programming</div>
                <div class="techBubble"> GUI</div>
              </div>
            </p>
          </div>

          <br></br>
          <div class="infoPara">
            <p class="inside">
              <div class="infoSocial">
                <div class="infoSocialRow">
                  <span class="infoSubTitle up"> Portfolio Website </span>
                  <span id="white">
                    Website built to showcase my work & experiences
                  </span>
                </div>

                <div class="infoSocialMultiple">
                  <a
                    href="https://github.com/AryPat/portfolio"
                    target="__blank"
                  >
                    <img
                      src={github}
                      alt="logo"
                      width="40rem"
                      class="translateLogo"
                    />
                  </a>
                  <a href="https://arypat.me/UselessWeb/">
                    <img
                      src={goto}
                      alt="logo"
                      width="35rem"
                      class="translateLogo"
                    />
                  </a>
                </div>
              </div>

              <ul class="infoBullet up">
                <li>Made with React, a front end development framework</li>
                <li>Spline and Particle Js used for 3D & Particle Effects</li>
                <li>
                  Deployed via{" "}
                  <span>
                    {" "}
                    <a
                      href="https://pages.github.com/"
                      style={{ color: "rgba(255, 255, 255, 0.671)" }}
                    >
                      Github Pages
                    </a>
                  </span>
                  , domain registered with{" "}
                  <span>
                    <a
                      href="https://www.namecheap.com/"
                      style={{ color: "rgba(255, 255, 255, 0.671)" }}
                    >
                      NameCheap
                    </a>
                  </span>
                </li>
              </ul>

              <div class="tech">
                <div class="techBubble"> HTML </div>
                <div class="techBubble"> CSS </div>
                <div class="techBubble"> Bootstrap</div>
                <div class="techBubble"> Spline</div>
                <div class="techBubble"> React</div>
                <div class="techBubble"> React-Particle-Js</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default nav;
