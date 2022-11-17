import React, { useState } from "react";
import { MetabnbIcon } from "../assets/svg/Icon";
import "./navBar.scss";
import Modal from "react-modal";
import metamask from "../assets/img/metamask.png";
import walletconnect from "../assets/img/walletconnect.png";
import next from "../assets/img/next.png";
import { Menu } from "@mui/icons-material";
import SideBar from "./sideNav";

const customStyles = {
  content: {
    width: "50%",
    height: "326px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    borderRadius: "16px",
  },
  first: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //borderBottom: "1px solid #CFD8DC",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#333333",
    marginBottom: "32px",
  },
  second: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //border: "1px solid #CFD8DC",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#333333",
    marginBottom: "32px",
    background: " #F8F9FA",
  },
  third: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //borderBottom: "1px solid #CFD8DC",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#333333",
    background: " #F8F9FA",
  },
};
const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };

  return (
    <header className="headerContainer">
      <div className="headerWrapper">
        <div className="headerIcon">
          <MetabnbIcon />
        </div>

        <div className="linksWrapper">
          <div className="navbarItems ">
            <a href="/">Home</a>
            <a href="/placetostay">Place to stay</a>
            <a href="/">NFTs</a>
            <a href="/">Community</a>
            <button onClick={() => setModalIsOpen(true)}>Connect Wallet</button>

            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={() => setModalIsOpen(true)}
            >
              <div style={customStyles.first}>
                <h4>Connect Wallet</h4>
                <h5 onClick={() => setModalIsOpen(false)}>X</h5>
              </div>

              <p
                style={{
                  fontFamily: "Red Rose",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "1rem",
                  lineHeight: "20px",
                  color: "#333333",
                  marginBottom: "16px",
                }}
              >
                Choose your preferred wallet:
              </p>
              <hr />

              <div style={customStyles.second}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <img src={metamask} alt="metamask" />
                  <h5>Metamask</h5>
                </div>
                <img src={next} alt="metamask" />
              </div>

              <div style={customStyles.third}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={walletconnect} alt="walletconnect" />
                  <h5>WalletConnect</h5>
                </div>
                <img src={next} alt="next" />
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div className="menuHamburger">
        <Menu onClick={handleChange} style={{ fontSize: "50px" }} />
      </div>
      {isToggle ? <SideBar /> : null}
    </header>
  );
};

export default NavBar;
