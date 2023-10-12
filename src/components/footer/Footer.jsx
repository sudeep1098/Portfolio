import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sudeep
      </a>
      <ul className="personal__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_sudeep1098_">
          <BsInstagram />
        </a>
        <a href="https://github.com/sudeep1098">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/sudeep-das-52a00924b/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sudeep Das. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
