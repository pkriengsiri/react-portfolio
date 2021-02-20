import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
  const handleClick = () => {
    document.querySelector(".sidebar").style.width = "0px";
  };

  return (
    <aside className="sidebar">
      <div id="close-menu">
        <i className="fas fa-window-close fa-2x" id="hamburger-close" onClick={handleClick}></i>
      </div>
      <div className="list-group list-group-flush sidebar-links h4">
        <a href="./index.html" class="list-group-item">
          About
        </a>
        <a href="./portfolio.html" class="list-group-item">
          Portfolio
        </a>
        <a
          href="./assets/files/dpk_resume.pdf"
          target="_blank"
          className="list-group-item"
        >
          Resume
        </a>
        <a href="./contact.html" class="list-group-item">
          Contact
        </a>
        <a
          href="https://github.com/pkriengsiri"
          target="_blank"
          className="list-group-item"
        >
          <i className="fab fa-github-square mr-2"></i>GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/petekriengsiri/"
          target="_blank"
          className="list-group-item"
        >
          <i className="fab fa-linkedin mr-2"></i>LinkedIn
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
