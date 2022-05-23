import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Sofie Tinica</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
          <HeaderSocials />
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>

          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
