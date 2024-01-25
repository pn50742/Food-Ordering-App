import * as React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = (props) => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = React.useContext(UserContext);
  return (
    <>
      <header className="bg-white flex justify-between items-center w-full fixed top-0 z-10 h-[70px] drop-shadow-md">
        <div className="container flex justify-between items-center">
          <div className="logo-div">
            <a href="" className="font-bold text-2xl text-gray-600">
              FOOD APP
            </a>
          </div>
          <nav>
            <ul className="flex">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  contact
                </Link>
              </li>
              <li>
                <a href="#" className="p-5">
                  Online status:{" "}
                  {onlineStatus ? <span>🟩</span> : <span>🔴</span>}
                </a>
              </li>
              <li>{loggedInUser}</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
