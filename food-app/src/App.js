// import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App px-20 h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Wrapper>
        <Body />
      </Wrapper>
    </div>
  );
}

export default App;
