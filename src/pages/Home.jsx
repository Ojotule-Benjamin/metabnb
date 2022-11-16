import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Inspiration from "../components/Inspiration";
import "./home.scss";
import MetaBnb from "../components/MetaBnb";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <header className="container">
      {/* <Topbar /> */}
      <NavBar />
      <Hero />
      <Inspiration />
      <MetaBnb />
      <Footer />
    </header>
  );
};

export default Home;
