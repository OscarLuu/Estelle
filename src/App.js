import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
        </div>
      </Router>
    );
  }
}

export default App;
