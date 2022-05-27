import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vltinica@gmail.com</h5>
            <a href="mailto:vltinica@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>vladimir.tinica.22</h5>
            <a href="https://m.me/vladimir.tinica.22" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="7"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
