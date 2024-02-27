import * as React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Header = (props) => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = React.useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  //selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
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
                <Link className="nav-link" to="/excercise">
                  Excercises
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  contact
                </Link>
              </li>
              <li>
                <Button onClick={handleOpen} variant="gradient">
                  cart ({cartItems.length} items)
                </Button>
              </li>
              {/* <li>
                <a href="#" className="p-5">
                  Online status:{" "}
                  {onlineStatus ? <span>🟩</span> : <span>🔴</span>}
                </a>
              </li>
              <li>{loggedInUser}</li> */}
            </ul>
          </nav>
        </div>
      </header>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Cart</DialogHeader>
        <DialogBody>
          <ul>
            {cartItems.map((item, index) => {
              const { name } = item?.card?.info;
              return <li key={index}>{name}</li>;
            })}
          </ul>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Header;
