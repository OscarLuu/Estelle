import React, { Component } from "react";
import { FaLinkedinIn, FaAt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="home">
        <div className="text">
          <p className="name fade-in one">CONTACT ME</p>
        </div>
        <a href="https://www.linkedin.com/in/estelle-johnson/">
          <button className="contact-button first fade-in three">
            <FaLinkedinIn className="icon" />
          </button>
        </a>

        <a href="mailto:estellemarjohnson@gmail.com">
          <button className="contact-button fade-in four">
            <FaAt className="icon" />{" "}
          </button>
        </a>
      </div>
      <img src={require("../svg/estelle.jpg")} className="lulu fade-in three" />
    </div>
  );
};

export default Contact;
