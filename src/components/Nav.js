import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <img src={require("../svg/heart.png")} className="nav-heart" />

        <div className="nav-items">
          <Link className="block" to="/">
            H<p className="hidden">OME</p>
          </Link>
          <Link className="block" to="/experience">
            E<p className="hidden">XPERIENCE</p>
          </Link>
          <Link className="block" to="/">
            C<p className="hidden">ONTACT</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
