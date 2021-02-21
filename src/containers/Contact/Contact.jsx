import React from "react";
import "./Contact.css";
import Main from "../../components/Main/Main";
import circleImage from "../../images/contact.jpg";

const Contact = () => {


  const title = "Contact Me";
  const circleImageAlt = "image of a notepad";
  const aboutContent = (
    <div className="row">
      <div className="col-8">
        <form className="ml-1" id="contact-form">
          <h3>Form:</h3>
          <div className="form-group">
            <label for="subject-input">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject-input"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label for="message-input">Message</label>
            <textarea
              className="form-control"
              id="message-input"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <p className="d-none ml-1" id="contact-warning">
          I need both fields filled out before you can send me an email!
        </p>
        <input
          className="btn btn-primary bg-info rounded border-info ml-1 mb-3"
          type="submit"
          value="Send Email"
          id="email-button"
        />
      </div>
      <div className="col-4 p-0">
        <h3>Links:</h3>
        <a href="https://github.com/pkriengsiri" target="_blank">
          <i className="fab fa-github-square mr-2"></i>GitHub
        </a>
        <br />
          <a href="https://www.linkedin.com/in/petekriengsiri/" target="_blank">
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </a>
          <br />
            <a href="mailto:pkriengsiri@gmail.com" target="_blank">
              <i className="far fa-envelope mr-2"></i>
            Email
          </a>
        </div>

    </div>

  );

  return (
    <Main
      circleImage={circleImage}
      circleImageAlt={circleImageAlt}
      content={aboutContent}
      title={title}
    />
  );
};

export default Contact;
