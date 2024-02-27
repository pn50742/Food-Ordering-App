import React, { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Priyanka",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="App h-screen">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />
          <Wrapper>
            <Outlet />
          </Wrapper>
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
