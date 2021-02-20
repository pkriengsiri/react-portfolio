import React from "react";
import "./Header.css";

const Header = () => {
  const handleClick = () => {
    document.querySelector(".sidebar").style.width = "250px";
  };

  return (
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
          <a className="h1 font-weight-bold" href="./index.html">
            Pete Kriengsiri
          </a>
        </div>
      </div>

      <div className="col-1"></div>
    </nav>
  );
};

export default Header;
