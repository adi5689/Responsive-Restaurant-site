/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> us
        </h1>
        <div className="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.8419046006763!2d84.74384090711266!3d19.203638751469857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d4334dac4473b%3A0xcec992aba56d02c3!2sK2%20CHAI!5e0!3m2!1sen!2sin!4v1694095350952!5m2!1sen!2sin"
            width="100%"
            // height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>Get in Touch</h3>
            <div className="inputBox">
                <span className="fas fa-user"></span>
                <input type="text" placeholder="Name" />
            </div>
            <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="email" placeholder="E-mail" />
            </div>
            <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" placeholder="Number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
