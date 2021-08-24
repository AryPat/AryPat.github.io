import "./App.css";
  

import { useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Nav from "./Components/nav";
import Info from "./Components/Info";
import Particles from 'react-particles-js';
import { ThemeProvider } from "styled-components";

const LightTheme = {
  backgroundColor: "#d8d0d0",
  headingColor: "#15565d",
  titleColor: "#6FB3B8",
  subTitleColor: "#96B4BA",
  textBody: "#697184",
  boxColor: "#f2f1ef",
  techBoxColor: "white",
  techBoxTextL: "white",
  optionBoxColor: "#f2f1ef",
  optionTextColor: "#15565d",
  optionHoverColor: "#6FB3B8",
  header: ""

};

const DarkTheme = {
  backgroundColor: "#1a1b2e",
  headingColor: "#ffc175",
  titleColor: "#e94560",
  subTitleColor: "#c2ccec",
  textBody: "#b4b4bf",
  boxColor: "#262746",
  techBoxColor: "#010629",
  techBoxText: "#abadb8",
  optionBoxColor: "#2c2d42",
  optionTextColor: "#ccd6f6",
  optionHoverColor: "#e94560",
  header: "https://my.spline.design/edited-ce0cb7cb20f6113e3c6d017cba7a3481/"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const Background = styled(Particles)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${color => color.theme.backgroundColor};
  `;


function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider theme={themes[theme]} >
      <Background
        params={{
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 5,
              "random": true
            },
            "move": {
              "direction": "none",
              "out_mode": "out",
              "speed": 1.5,
            },
            "line_linked": {
              "enable": true
            }
          },
        }} />
      <Header theme={theme} setTheme={setTheme}></Header>
      <div class="whyThis">
        <Nav theme={theme}></Nav>
        <Info theme={theme} setTheme={setTheme}></Info>
      </div>
    </ThemeProvider>
  );
}

export default App;
