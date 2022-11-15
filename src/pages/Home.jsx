import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Inspiration from "../components/Inspiration";
import "./home.scss";
import MetaBnb from "../components/MetaBnb";
import Footer from "../components/Footer";
import MenuHam from "../components/MenuHam";

const Home = () => {
  return (
    <header className="container">
      <NavBar />
      <Hero />
      <Inspiration />
      <MetaBnb />
      <Footer />
      <MenuHam />
    </header>
  );
};

export default Home;
