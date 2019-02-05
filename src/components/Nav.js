import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <img src={require("../svg/heart.png")} className="nav-heart" />

        <div className="nav-items">
          <NavLink exact activeClassName="active" className="block" to="/">
            H<p className="hidden">OME</p>
          </NavLink>
          <NavLink activeClassName="active" className="block" to="/experience">
            E<p className="hidden">XPERIENCE</p>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="block"
            to="/contact"
          >
            C<p className="hidden">ONTACT</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
