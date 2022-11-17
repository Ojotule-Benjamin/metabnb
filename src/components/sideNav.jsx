import React, { useState } from "react";
import "./sideNav.scss";
import Modal from "react-modal";
import metamask from "../assets/img/metamask.png";
import walletconnect from "../assets/img/walletconnect.png";
import next from "../assets/img/next.png";

const customStyles = {
  content: {
    width: "50%",
    backgroundColor: "red",
    background: " #F8F9FA",
    borderRadius: "10px",
    //width: "100%",

    height: "auto",
    margin: "25%",
    left: "-50%",

    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
  },
  first: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "30px",
    color: "#333333",
    marginBottom: "10px",
  },
  second: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    //border: "1px solid #CFD8DC",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "200",
    fontSize: "15px",
    lineHeight: "30px",
    color: "#333333",
    marginBottom: "32px",
    background: " #F8F9FA",
  },
  third: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    //borderBottom: "1px solid #CFD8DC",
    fontFamily: "Red Rose",
    fontStyle: "normal",
    fontWeight: "200",
    fontSize: "15px",
    lineHeight: "30px",
    color: "#333333",
    background: " #F8F9FA",
  },
};
const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header>
      <div>
        <div className="SideBarLinkWrapper">
          <a href="/">Home</a>
          <a href="/placetostay">Place to stay</a>
          <a href="/">NFTs</a>
          <a href="/">Community</a>
          <button onClick={() => setModalIsOpen(true)}>Connect Wallet</button>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            className="customStyles"
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
                //fontWeight: "400",
                fontSize: "12px",
                lineHeight: "20px",
                color: "#333333",
                //marginBottom: "16px",
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
                  //marginBottom: "16px",
                }}
              >
                <img
                  src={metamask}
                  alt="metamask"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <h5>Metamask</h5>
              </div>
              <img
                src={next}
                alt="metamask"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </div>

            <div style={customStyles.third}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={walletconnect}
                  alt="walletconnect"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <h5>WalletConnect</h5>
              </div>
              <img
                src={next}
                alt="next"
                style={{
                  width: "10px",
                  height: "10px",
                }}
              />
            </div>
          </Modal>
        </div>
      </div>
    </header>
  );
};
export default SideBar;
