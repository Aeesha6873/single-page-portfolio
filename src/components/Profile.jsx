import React from "react";
import ContactButton from "./ContactButton";
import aishaImage from "../img/aisha.jpg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="left">
        <div className="profile-details">
          <h1>
            Nice to meet you!
            <br /> I'm <span>Aisha Abdullahi A.</span>
          </h1>
          <p>
            Based in the Nigeria, I'm a front-end developer passionate about
            building accessible web apps that users love.
          </p>
        </div>
        <ContactButton />
      </div>
      <div className="right">
        <img src={aishaImage} alt="aisha" className="profile-img" />
      </div>
    </section>
  );
}
