import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
