import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <FaUserCircle />
      </a>
      <a href="#experience">
        <BsFillBookFill />
      </a>
      <a href="#services">
        <RiServiceFill />
      </a>
      <a href="#contact">
        <MdMessage />
      </a>
    </nav>
  );
};

export default Nav;
