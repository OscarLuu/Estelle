import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEducation: true,
      showWork: false,
      showClinical: false
    };
  }
  render() {
    return <p>Hello</p>;
  }
}

export default Experience;
