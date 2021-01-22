import { React } from "react";
import "./Header.css";
import Image1 from "../images/image-1.jpg";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Header() {
  return (
    <div className="header-container">
      <h1>COME LEARN WITH US</h1>
      <Link to="/sign-up" className=""></Link>
      {<Button buttonStyle="btn--outline">Get Started</Button>}
      <div className="txt-image-container">
        <img src={Image1} className="image1-1" alt="Error"></img>
      </div>
    </div>
  );
}

export default Header;
