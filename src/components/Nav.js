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
        <div className="nav-items">
          <NavLink exact activeClassName="active" className="block" to="/">
            <FontAwesomeIcon icon="home" />
            <span className="hidden">HOME</span>
          </NavLink>
          <NavLink activeClassName="active" className="block" to="/experience">
            <FontAwesomeIcon icon="star" />
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="block"
            to="/contact"
          >
            <FontAwesomeIcon icon="envelope" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
