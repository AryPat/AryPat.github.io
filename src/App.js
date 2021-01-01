import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/nav";
import Info from "./Components/Info";
import Particles from 'react-particles-js';

function App() {
  return (
    <div >
      <Particles className="workwork"
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
              "out_mode": "out"
            },
            "line_linked": {
              "enable": false
            }
          },
        }} />
      <Header></Header>
      <div class="whyThis">
        <Nav></Nav>
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
