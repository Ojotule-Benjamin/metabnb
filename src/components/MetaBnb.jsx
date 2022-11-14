import React from "react";
import "./metaBnb.scss";
import metaNfts from "../assets/img/metaNfts.png";
// import rentAplace1 from "../assets/img/rentAplace1.png";

const MetaBnb = () => {
  return (
    <div className="metabnbContainer">
      <div className="metabnbWrapper">
        <div className="left">
          <h4>Metabnb NFTs</h4>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>

        <div className="right">
          <img src={metaNfts} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default MetaBnb;
