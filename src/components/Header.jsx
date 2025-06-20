import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">aeesha</div>
      <div className="navbar-icons">
        <a href="https://github.com/Aeesha6873">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/seeaisha/">
          <FaLinkedin />
        </a>
        <a href="https://x.com/aishaabdul70050?s=21">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}
