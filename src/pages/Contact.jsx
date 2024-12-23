// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">

      <div className="contact">
        <h2>CONTACT ME</h2>
        <p>I’d love to hear from you! Feel free to reach out.</p>

        <div className="contact-address">
          <section className="email">
            <h3>Email</h3>
            <a href="mailto:tenthinten@gmail.com">tenthinten@gmail.com</a>
          </section>
          <section className="address">
            <h3>Address</h3>
            <p>Toronto, ON</p>
          </section>
        </div>

        <div className="contact-message">
          <h3>Get in Touch</h3>
          <form>
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Name" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
