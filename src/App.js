import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
