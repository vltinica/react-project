import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/vltinica" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/vladimir-tinica/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://vltinica.club/#en" target="_blank">
        <FcAbout />
      </a>
    </div>
  );
};

export default HeaderSocials;
