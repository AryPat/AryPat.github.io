import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/nav";
import Info from "./Components/Info";

function App() {
  return (
    <div>
      <Header></Header>
      <div class="whyThis">
        <Nav></Nav>
        <Info></Info>
      </div>
    </div>
  );
}

export default App;
