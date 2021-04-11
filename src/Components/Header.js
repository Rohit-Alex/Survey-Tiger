import React from "react";
import logo from "./logo.JPG";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const navigateTo = () => {
    history.push("/Choice");
  };

  return (
    <div className="container">
      <img className="logo_image" src={logo} alt="logo"></img>
      <div className="btn_container">
        <button id="btn_first" className="btn1" onClick={navigateTo}>
          Create Survey
        </button>
      </div>
      <div>
        <Link to="/description">
          <button className="btn2">Take Survey</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
