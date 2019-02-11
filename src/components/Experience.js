import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Clinicals = () => {
  return (
    <div>
      <p>Clinicals</p>
    </div>
  );
};

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
        <div className="description-school-div">
          <p className="text-size">Bachelor of Science in Nursing</p>
          <p className="text-size-title separate">Awards & Honors</p>
          <p className="text-size">• Summa Cum Laude, 3.95 GPA</p>
          <p className="text-size" />
          <p className="text-size-title separate">Activities</p>
          <p className="text-size">
            • Nu Psi Chapter of Sigma Theta Tau International
          </p>
          <p className="text-size">
            • SFSU NSA Director of Breakthrough to Nursing
          </p>
          <p className="text-size">• Hepatitis B Community Ambassador</p>
        </div>
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
      showClinical: false,
      tabBoldClinical: false,
      tabBoldWork: false,
      tabBoldEducation: true
    };
    this.handleShowEducation = this.handleShowEducation.bind(this);
    this.handleShowWork = this.handleShowWork.bind(this);
    this.handleShowClinicals = this.handleShowClinicals.bind(this);
  }
  handleShowEducation() {
    this.setState({
      showEducation: true,
      showWork: false,
      showClinical: false,
      tabBoldEducation: true,
      tabBoldWork: false,
      tabBoldClinical: false
    });
  }

  handleShowWork() {
    this.setState({
      showEducation: false,
      showWork: true,
      showClinical: false,
      tabBoldEducation: false,
      tabBoldWork: true,
      tabBoldClinical: false
    });
  }

  handleShowClinicals() {
    this.setState({
      showEducation: false,
      showWork: false,
      showClinical: true,
      tabBoldEducation: false,
      tabBoldWork: false,
      tabBoldClinical: true
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
            <a
              onClick={this.handleShowClinicals}
              className={
                this.state.tabBoldClinical
                  ? "bold tab-styling spacing"
                  : "regular tab-styling spacing"
              }
            >
              CLINICALS
            </a>
          </div>
          <div className="border-text">
            {this.state.showEducation ? <Education /> : null}
            {this.state.showClinical ? <Clinicals /> : null}
            {this.state.showWork ? <Work /> : null}
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
