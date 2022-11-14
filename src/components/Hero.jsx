import React from "react";
import "./hero.scss";
import rentAplace1 from "../assets/img/rentAplace1.png";
import rentAplace2 from "../assets/img/rentAplace2.png";
import rentAplace3 from "../assets/img/rentAplace3.png";
import rentAplace4 from "../assets/img/rentAplace4.png";
import Tokens from "./Tokens";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroWrapper">
        <div className="left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="searchWrapper">
            <input
              type="text"
              placeholder="Search for location"
              className="searchInput"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <div className="first">
            <img src={rentAplace1} alt="" />
            <img src={rentAplace2} alt="" />
          </div>

          <div className="second">
            <img src={rentAplace3} alt="" />
            <img src={rentAplace4} alt="" />
          </div>
        </div>
      </div>
      <Tokens />
    </div>
  );
};

export default Hero;
