import React from "react";
import "./place.scss";
import NavBar from "../components/NavBar";
import sorting from "../assets/img/sorting.png";

import Footer from "../components/Footer";
import Display from "../Display";
import { StarIcon } from "../assets/svg/Icon";

const Place = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="listWrapper">
        <a href="#list">Restaurant</a>
        <a href="#list">Cottage</a>
        <a href="#list">Castle</a>
        <a href="#list">beach</a>
        <a href="#list">Carbins</a>
        <a href="#list">Off-grid</a>
        <a href="#list">Farm</a>
        <button>
          Location
          <img src={sorting} alt="" />
        </button>
      </div>

      <div className="imagesWrapper">
        {Display.map((d, index) => (
          <div className="items" key={index}>
            <img src={d.image} alt="logo" />
            <div className="item1" index={index}>
              <p>{d.title1}</p>
              <h6>{d.title2}</h6>
            </div>

            <div className="item2" key={index}>
              <p>{d.title3}</p>
              <h6>{d.title4}</h6>
            </div>
            <StarIcon />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Place;
