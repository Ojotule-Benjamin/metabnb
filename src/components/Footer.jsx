import React from "react";
import "./footer.scss";
import { MetabnbIcon } from "../assets/svg/Icon";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import instagram from "../assets/img/instagram.png";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="left">
          <MetabnbIcon />
          <div className="socialIons">
            <img src={facebook} alt="social icons" />
            <img src={twitter} alt="social icons" />
            <img src={instagram} alt="social icons" />
          </div>
          <div className="copyright">
            <p>
              &copy;
              {year}
              <a href="/">Metabnb</a>
            </p>
          </div>
        </div>

        <div className="right">
          <div className="community">
            <h4>Community</h4>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>

          <div className="places">
            <h4>Places</h4>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>

          <div className="aboutUs">
            <h4>About us</h4>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
