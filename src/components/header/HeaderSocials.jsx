import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sudeep-das-52a00924b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/_sudeep1098_/" target="_blank">
        <BsInstagram />{" "}
      </a>
      <a href="https://github.com/sudeep1098" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
