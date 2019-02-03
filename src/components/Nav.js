import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <a className="block" href="#">
          H<p id="home-hidden">OME</p>
        </a>
        <a className="block" href="#">
          E
        </a>
        <a className="block" href="#">
          C
        </a>
      </div>
    </div>
  );
};

export default Nav;
