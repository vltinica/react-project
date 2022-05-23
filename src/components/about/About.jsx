import React from "react";
import Me from "../../assets/me-about.jpg";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillFolderSymlinkFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwile</small>
            </article>

            <article className="about__card">
              <BsFillFolderSymlinkFill className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste
            aliquam distinctio reprehenderit commodi, voluptate delectus illo
            expedita alias hic nemo error asperiores magnam itaque consequuntur.
            Velit, repudiandae omnis! Quaerat?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
