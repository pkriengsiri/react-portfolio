import React, { useContext } from "react";
import "./Modal.css";
import ProjectContect from "../../contexts/ProjectContext";
import ProjectContext from "../../contexts/ProjectContext";

const Modal = () => {
  const { name } = useContext(ProjectContext);

  return (
    <div id="id01" className="w3-modal">
      <div className="w3-modal-content w3-animate-top p-1">
        <header className="container w3-teal modal-header">
          <h3>{name}</h3>
        </header>
        <div className="container">
          <h4>Description</h4>
          <p>Some text..</p>
          <h4>Technologies</h4>
          <p>Some text..</p>
          <div className="modal-buttons">
            <a
              className="btn btn-primary bg-info rounded border-info m-1"
              id="application-link"
              target="_blank"
            >
              View the deployed application
            </a>
            <a
              className="btn btn-primary bg-info rounded border-info m-1"
              id="repository-link"
              target="_blank"
            >
              View the repository
            </a>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("id01").style.display = "none";
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
