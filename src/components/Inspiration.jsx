import React from "react";
import "./inspiration.scss";
import Data from "../data";
import { StarIcon } from "../assets/svg/Icon";

const Inspiration = ({ className = "" }) => {
  return (
    <div className="inspirationContainer">
      <h4 className={`${className}`}>Inspiration for your next adventure</h4>
      <div className="inspirationWrapper">
        <div className="imagesWrapper">
          {Data.map(
            (item, key) =>
              key < 8 && (
                <div className="items" key={key}>
                  <img src={item.image} alt="logo" />

                  <div className="item1" key={key}>
                    <p>{item.title1}</p>
                    <h6>{item.title2}</h6>
                  </div>

                  <div className="item2" key={key}>
                    <p>{item.title3}</p>
                    <h6>{item.title4}</h6>
                  </div>
                  <StarIcon />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
