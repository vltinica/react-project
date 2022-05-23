import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import "./experience.css";

const Experience = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experiance__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* 1 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 2 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 3 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 4 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 5 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Beckend Development</h3>
          <div className="experience__content">
            {/* 1 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>Node JS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 2 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 3 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>PHP</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 4 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            {/* 5 */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
