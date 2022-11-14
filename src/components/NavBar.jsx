import React from "react";
import { MetabnbIcon } from "../assets/svg/Icon";
import "./navBar.scss";

const NavBar = () => {
  return (
    <header className="headerContainer">
      <div className="headerWrapper">
        <div className="headerIcon">
          <MetabnbIcon />
        </div>
        <div className="linksWrapper">
          <div className="navbarItems">
            <a href="/">Home</a>
            <a href="/placetostay">Place to stay</a>
            <a href="#home">NFTs</a>
            <a href="#home">Community</a>
          </div>

          <button>Connect Wallet</button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
