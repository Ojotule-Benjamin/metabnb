import React from "react";
import "./place.scss";
import NavBar from "../components/NavBar";
import sorting from "../assets/img/sorting.png";
import Inspiration from "../components/Inspiration";
// import DisplayItems from "../components/DisplayItems";
import Footer from "../components/Footer";

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
      {/* <DisplayItems /> */}
      <Inspiration />
      <Footer />
    </div>
  );
};

export default Place;
