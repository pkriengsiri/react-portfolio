import React from "react";
import "./Header.css";
import { HashRouter, Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    document.querySelector(".sidebar").style.width = "250px";
  };

  return (
    <HashRouter>
      <nav className="navbar">
        <div className="col-1" id="open-menu">
          <i
            className="fas fa-bars fa-2x"
            id="hamburger-open"
            onClick={handleClick}
          ></i>
        </div>
        <div className="col-10">
          <div className="row justify-content-center">
            <Link to="/" className="h1 font-weight-bold">
              Pete Kriengsiri
            </Link>
          </div>
        </div>
        <div className="col-1"></div>
      </nav>
    </HashRouter>
  );
};

export default Header;
