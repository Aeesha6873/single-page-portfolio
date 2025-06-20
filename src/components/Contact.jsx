import React from "react";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-info">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how i can help. Please
          fill in the form, and i'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        {/* <button type="submit" className="contact-btn submit"> */}
        <button type="submit" className=" submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
