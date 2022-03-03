import React from "react";
import "./ContactMessage.styles.scss";
import { ReactComponent as Envelope } from "../../assets/envelope-solid.svg";

const ContactMessage = () => {
  return (
    <div className="contact-message-container">
      <h1 className="contact-message-title">
        Let's chat.
        <br />
        Tell me about yourself.
      </h1>
      <p className="contact-sub-message">Let's build a project together 🤟</p>
      <div className="contact-me-container">
        <Envelope className="contact-me-envelope" />
        <p className="contact-me">
          Mail me at <br />
          <a className="contact-me-link">example@crownclothing.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactMessage;
