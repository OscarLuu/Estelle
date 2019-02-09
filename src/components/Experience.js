import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Work = () => {
  return <p>Work</p>;
};

const Education = () => {
  return (
    <div className="education-div">
      <div className="text">
        <p className="text-size-title">
          San Francisco State University
          <span>
            <img src={require("../svg/sfsu.png")} className="sfsu-picture" />
          </span>
        </p>
        <p className="margin-up text-size">Bachelor of Science in Nursing</p>
        <p className="text-size">GPA: 3.95</p>
      </div>
    </div>
  );
};

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEducation: true,
      showWork: false,
      tabBoldWork: false,
      tabBoldEducation: true
    };
    this.handleShowEducation = this.handleShowEducation.bind(this);
    this.handleShowWork = this.handleShowWork.bind(this);
  }
  handleShowEducation() {
    this.setState({
      showEducation: true,
      showWork: false,
      tabBoldEducation: true,
      tabBoldWork: false
    });
  }

  handleShowWork() {
    this.setState({
      showEducation: false,
      showWork: true,
      tabBoldEducation: false,
      tabBoldWork: true
    });
  }

  render() {
    return (
      <div className="home">
        <div className="experience">
          <p className="title">EXPERIENCE</p>
          <div className="tab">
            <a
              onClick={this.handleShowEducation}
              className={
                this.state.tabBoldEducation
                  ? "bold tab-styling"
                  : "regular tab-styling"
              }
            >
              EDUCATION
            </a>
            <a
              onClick={this.handleShowWork}
              className={
                this.state.tabBoldWork
                  ? "bold tab-styling spacing"
                  : "regular tab-styling spacing"
              }
            >
              WORK
            </a>
          </div>
          <div className="border-text">
            {this.state.showEducation ? <Education /> : <Work />}
          </div>
        </div>
        <div className="heart">
          <img src={require("../svg/heart.png")} className="heart-image" />
        </div>
      </div>
    );
  }
}

export default Experience;
