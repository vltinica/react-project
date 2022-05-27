import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmwrtn8",
        "template_6vc9rtu",
        form.current,
        "aMDhHQR-7QADjstKB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const f1 = () => {
    alert("You sent a message!");
  };

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
        <form ref={form} onSubmit={sendEmail}>
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
          <button type="submit" className="btn btn-primary" onClick={f1}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
