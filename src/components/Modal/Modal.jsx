import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="project-modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title"></h3>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <img className="w-100" id="project-image" />
            </div>
            <h4>Description</h4>
            <p className="project-description"></p>
            <h4>Technologies</h4>
            <p className="project-technologies"></p>
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
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
