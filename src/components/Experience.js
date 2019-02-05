import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Work = () => {
  return <p>Work</p>;
};

const Education = () => {
  return (
    <div className="education-div">
      <p>Education</p>
    </div>
  );
};

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEducation: true,
      showWork: false
    };
    this.handleShowEducation = this.handleShowEducation.bind(this);
    this.handleShowWork = this.handleShowWork.bind(this);
  }
  handleShowEducation() {
    this.setState({ showEducation: true, showWork: false });
  }

  handleShowWork() {
    this.setState({ showEducation: false, showWork: true });
  }

  render() {
    return (
      <div className="home">
        <div className="experience">
          <p className="title">EXPERIENCE</p>
          <a onClick={this.handleShowEducation} className="button">
            Education
          </a>
          <a onClick={this.handleShowWork} className="button">
            Work
          </a>
          {this.state.showEducation ? <Education /> : <Work />}
        </div>
      </div>
    );
  }
}

export default Experience;
