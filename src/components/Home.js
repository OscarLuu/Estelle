import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <p className="name fade-in one">ESTELLE T. JOHNSON</p>
        <p className="description fade-in two">RN, BSN, PHN</p>
        <p className="quote fade-in three">
          Improving the world, one{" "}
          <span className="red fade-in four">patient</span> at a time.
        </p>
      </div>
      <div className="heart fade-in five">
        <img src={require("../svg/heart.png")} className="heart-image-home" />
      </div>
    </div>
  );
};

export default Home;
