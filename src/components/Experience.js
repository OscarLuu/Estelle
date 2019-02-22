import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Clinicals = () => {
  return (
    <div className="education-div">
      <div className="text">
        <img
          src={require("../svg/stanford.png")}
          className="stanford fade-in three"
        />
        <div className="hospital">
          <p className="text-size-title school fade-in three margin-top">
            Stanford Health Care{" "}
          </p>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Medical-Surgical, Telemetry, 130 Hours, Graveyard Shift
            </p>
            <p className="text-size fade-in four sub-title margin-bot">
              August 2018 - December 2018
            </p>
            <p className="text-size fade-in four">
              • Provided care focused on skilled clinical need to a population
              of pregnant women, new mothers, newborn babies, including high
              risk infants and children up to age 18 within the home
              environment.
            </p>
            <p className="text-size fade-in four">
              • Assessed immunization statuses, administered
              vaccines/immunizations and performed annual immunization audits
              for communities in San Mateo County.
            </p>
            <p className="text-size fade-in four">
              • Conducted assessments involving homebound seniors receiving
              government funded services such as Meals on Wheels, shopping
              assistance, and transportation services
            </p>
          </div>
        </div>

        <div className="hospital2">
          <div className="title-div2">
            <img
              src={require("../svg/sanmateo.png")}
              className="sanmateo spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              San Mateo County Public Health Department
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Public Health, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              August 2018 - December 2018
            </p>
            <p className="text-size fade-in four">
              • Provided care focused on skilled clinical need to a population
              of pregnant women, new mothers, newborn babies, including high
              risk infants and children up to age 18 within the home
              environment.
            </p>
            <p className="text-size fade-in four">
              • Assessed immunization statuses, administered
              vaccines/immunizations and performed annual immunization audits
              for communities in San Mateo County.
            </p>
            <p className="text-size fade-in four">
              • Conducted assessments involving homebound seniors receiving
              government funded services such as Meals on Wheels, shopping
              assistance, and transportation services
            </p>
          </div>
        </div>

        <div className="hospital2">
          <div className="title-div2">
            <img
              src={require("../svg/stanford.png")}
              className="stanford2 spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              Lucile Packard Children's Hospital
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Transplant & Medical-Surgical, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              January 2018 - May 2018
            </p>
            <p className="text-size fade-in four">
              • Provide direct nursing care to all children from infants to
              adolescents and served a broad range of general nursing care in
              areas of vital signs, catheters, feeding, drawing blood for lab
              specimens, dressing, and intravenous access
            </p>
            <p className="text-size fade-in four">
              • Perform head to toe physical exam throughout the day to ensure
              the absence of skin breakdown and pressure sores
            </p>
            <p className="text-size fade-in four">
              • Educated patients and their families on disease processes,
              medical-surgical procedures and other aspects of therapeutic
              regimens, including medication and pain management techniques
            </p>
          </div>
        </div>

        <div className="hospital2">
          <div className="title-div2">
            <img
              src={require("../svg/kaiser.png")}
              className="kaiser spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              Kaiser Permanente Oakland
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Telemetry & Medical-Surgical, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              January 2018 - May 2018
            </p>
            <p className="text-size fade-in four">
              • Administered prescribed medications, started intravenous fluids,
              and documented patients' charts by recording food and fluid intake
              and output
            </p>
            <p className="text-size fade-in four">
              • Provided basic patient care and treatments, such as dressed
              wounds, treated bedsores, and performed catheterizations.
            </p>
            <p className="text-size fade-in four">
              • Maintained patient's physical and psychosocial health while
              ensuring their safety and effectiveness of their treatment/care
            </p>
          </div>
        </div>

        <div className="hospital2">
          <div className="title-div2">
            <img
              src={require("../svg/kaiser.png")}
              className="kaiser spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              Kaiser Permanente San Francisco
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Antepartum, Labor & Delivery, Postpartum, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              August 2017 - December 2017
            </p>
            <p className="text-size fade-in four">
              • Carefully observed changes in fetal heart rate and maternal
              heart rate and contractions using electronic monitoring
            </p>
            <p className="text-size fade-in four">
              • Provided care for babies immediately after birth
            </p>
            <p className="text-size fade-in four">
              • Prepped room and delivery table according to maternal progress
            </p>
          </div>
        </div>

        <div className="hospital2">
          <div className="title-div2">
            <img
              src={require("../svg/sutter.png")}
              className="sutter spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              Mills-Peninsula Hospital Sutter Health
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Behaviorial Health, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              August 2017 - December 2017
            </p>
            <p className="text-size fade-in four">
              • Documented observations of patient's behavior and status to the
              administered
            </p>
            <p className="text-size fade-in four">
              • Provided therapeutic interactions with patient to assist them in
              identifying sources of anxiety
            </p>
            <p className="text-size fade-in four">
              • Maintained the therapeutic milieu using acceptable standards
            </p>
          </div>
        </div>

        <div className="hospital2 space">
          <div className="title-div2">
            <img
              src={require("../svg/zuckerberg.png")}
              className="kaiser spacing fade-in three"
            />
            <p className="text-size-title school fade-in three">
              Zuckerberg San Francisco General Hospital
            </p>
          </div>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Student Nurse, 120 Hours
            </p>
            <p className="text-size fade-in three sub-title margin-bot">
              January 2017 - May 2017
            </p>
            <p className="text-size fade-in four">
              • Administer medication such as oral medication and subcutaneous
              injection
            </p>
            <p className="text-size fade-in four">
              • Experience with Pyxis Medstation System
            </p>
            <p className="text-size fade-in four">
              • Promote wound healing through cleaning and applying new dressing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="education-div">
      <div className="text">
        <img
          src={require("../svg/capitol.png")}
          className="capitol fade-in three"
        />
        <div className="hospital">
          <p className="text-size-title school fade-in three">
            Capitol Debate Summer Camp
          </p>
          <div className="description-school-div">
            <p className="text-size fade-in three sub-title">
              Camp Nurse / Wellness Person
            </p>
            <p className="text-size fade-in four sub-title margin-bot">
              May 2018 - July 2018
            </p>
            <p className="text-size fade-in four">
              • Responsible for collecting, monitoring and administering student
              medications as prescribed
            </p>
            <p className="text-size fade-in four">
              • Remained in constant communication with the Camp Director and
              Residential Life Director regarding any medical, injury, allergy,
              or other wellness related occurrences during camp.
            </p>
            <p className="text-size fade-in four">
              • Responsible for the successful planning and implementation of
              all nursing / wellness needs.
            </p>
          </div>
        </div>

        <div className="title-div2">
          <img
            src={require("../svg/weisman.png")}
            className="capitol fade-in three spacing"
          />
          <div className="hospital">
            <p className="text-size-title school fade-in three">
              Weisman Medical
            </p>
            <div className="description-school-div">
              <p className="text-size fade-in three sub-title">
                Medical Assistant
              </p>
              <p className="text-size fade-in four sub-title margin-bot">
                May 2017 - August 2017
              </p>
              <p className="text-size fade-in four">
                • Efficient handling of administrative duties (e.g., answering
                phones, scheduling appointments, maintaining medical records,
                processing patients, billing and bookkeeping) that allowed
                doctors and nursing staff to focus on the health concerns of
                their patients
              </p>
              <p className="text-size fade-in four">
                • Demonstrated proficiency in taking patient medical histories
                and vital signs, as well as in performing capsule endoscopies,
                injections and diagnostic procedures and body measurements
              </p>
              <p className="text-size fade-in four">
                • Prepared patient charts, admissions, and consent forms
                accurately and neatly for the health care facility while
                maintaining patient and physician confidentiality
              </p>
            </div>
          </div>
        </div>

        <div className="title-div2">
          <img
            src={require("../svg/starbucks.png")}
            className="sanmateo fade-in three spacing"
          />
          <div className="hospital">
            <p className="text-size-title school fade-in three">Starbucks</p>
            <div className="description-school-div">
              <p className="text-size fade-in three sub-title">Barista</p>
              <p className="text-size fade-in four sub-title margin-bot">
                January 2016 - August 2018
              </p>
            </div>
          </div>
        </div>

        <div className="title-div2">
          <img src={require("../svg/rok.jpeg")} className="rok fade-in three" />
          <div className="hospital">
            <p className="text-size-title school fade-in three">
              Rok Steakhouse
            </p>
            <div className="description-school-div">
              <p className="text-size fade-in three sub-title">Server </p>
              <p className="text-size fade-in four sub-title margin-bot">
                May 2017 - August 2017
              </p>
            </div>
          </div>
        </div>

        <div className="title-div2 space">
          <img
            src={require("../svg/rokko.png")}
            className="capitol fade-in spacing three"
          />
          <div className="hospital">
            <p className="text-size-title school fade-in three ">
              Rokko Fine Japanese Cuisine
            </p>
            <div className="description-school-div">
              <p className="text-size fade-in three sub-title">Server </p>
              <p className="text-size fade-in four sub-title margin-bot">
                May 2017 - August 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education-div">
      <div className="text">
        <img
          src={require("../svg/sfsu.png")}
          className="sfsu-picture fade-in three"
        />

        <p className="text-size-title school fade-in three">
          San Francisco State University
        </p>
        <div className="description-school-div">
          <p className="text-size fade-in four sub-title">
            Bachelor of Science in Nursing
          </p>
          <p className="text-size-title separate fade-in three">
            Awards & Honors
          </p>
          <p className="text-size fade-in four">• Summa Cum Laude, 3.95 GPA</p>
          <p className="text-size fade-in four">
            • Silicon Valley Community Foundation: Roshan Rahbari Scholarship
            Recipient 2016
          </p>
          <p className="text-size fade-in four">
            • Jack Adams Memorial Scholarship Receipient Fall 2018
          </p>
          <p className="text-size fade-in four" />
          <p className="text-size-title separate fade-in three">Activities</p>
          <p className="text-size fade-in four">
            • Nu Psi Chapter of Sigma Theta Tau International
          </p>
          <p className="text-size fade-in four">
            • SFSU NSA Director of Breakthrough to Nursing
          </p>
          <p className="text-size fade-in four">
            • Hepatitis B Community Ambassador
          </p>
          <p className="text-size fade-in four">
            • Rock N'Roll Marathon Series Medical Volunteer
          </p>
          <p className="text-size fade-in four">
            • CNSA Breakthrough to Nursing Committee member
          </p>
          <p className="text-size-title separate fade-in three">
            Certifications
          </p>
          <p className="text-size fade-in four">
            • Registered Nurse License #9518227 - <strong>Current</strong>
          </p>
          <p className="text-size fade-in four">
            • Public Health Nurse License #557390 - <strong>Current</strong>
          </p>
          <p className="text-size fade-in four">
            • Basic Life Support - <strong>Expires 01/2021</strong>
          </p>
          <p className="text-size fade-in four">
            • Pediatric Advanced Life Support - <strong>Expires 01/2021</strong>
          </p>
          <p className="text-size fade-in four">
            • Advanced Cardiac Life Support - <strong>Expires 01/2021</strong>
          </p>
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
          <p className="title fade-in one">EXPERIENCE</p>
          <div className="tab fade-in two">
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
              onClick={this.handleShowClinicals}
              className={
                this.state.tabBoldClinical
                  ? "bold tab-styling spacing"
                  : "regular tab-styling spacing"
              }
            >
              CLINICALS
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
            {this.state.showEducation ? <Education /> : null}
            {this.state.showClinical ? <Clinicals /> : null}
            {this.state.showWork ? <Work /> : null}
          </div>
        </div>
        <div className="heart-experience fade-in four">
          <img src={require("../svg/heart.png")} className="heart-image" />
        </div>
      </div>
    );
  }
}

export default Experience;
