import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">aeesha</div>
      <div className="navbar-icons">
        <a href="">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/seeaisha/">
          <FaLinkedin />
        </a>
        <a href="">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}
