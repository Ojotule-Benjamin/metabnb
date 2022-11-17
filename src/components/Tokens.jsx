import React from "react";
import "./tokens.scss";
import { MbTokenIcon, MetamaskIcon, OpenseaIcon } from "../assets/svg/Icon";

const Tokens = () => {
  return (
    <div className="tokenContainer">
      <div className="tokenWrapper">
        <div className="tokenItems" id="mbtoken">
          <div className="icon">
            <MbTokenIcon />
          </div>
          <h3>MBToken</h3>
        </div>

        <div className="tokenItems" id="metamask">
          <MetamaskIcon className="icon" />
          <h3>metamask</h3>
        </div>

        <div className="tokenItems" id="opensea">
          <OpenseaIcon />
          <h3>OpenSea</h3>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
