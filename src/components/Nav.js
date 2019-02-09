import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faStar, faEnvelope);

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <img src={require("../svg/heart.png")} className="nav-heart" />
        <div className="nav-items">
          <NavLink exact activeClassName="active" className="block" to="/">
            <FontAwesomeIcon icon="home" />
            <span className="hidden">HOME</span>
          </NavLink>
          <NavLink activeClassName="active" className="block" to="/experience">
            <FontAwesomeIcon icon="star" />
            <span className="hidden">RESUME</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="block"
            to="/contact"
          >
            <FontAwesomeIcon icon="envelope" />
            <span className="hidden">CONTACT</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
