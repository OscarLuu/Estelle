import React, { Component } from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <p className="name">ESTELLE T. JOHNSON</p>
        <p className="description">BSN, RN</p>
        <p className="quote">
          Improving the world, one <span className="red">patient</span> at a
          time.
        </p>
      </div>

      <div className="heart">
        <img src={require("../svg/heart.png")} className="heart-image" />
      </div>
    </div>
  );
};

export default Home;
