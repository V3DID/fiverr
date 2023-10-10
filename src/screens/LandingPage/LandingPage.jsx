import React, { useState } from "react";
import "./style.css";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  phantomWallet,
  lightTheme,
} from "@thirdweb-dev/react";

function hideClaimSection() {
  document.querySelector('.claim-section').style.display = 'none';
}

function handleKeyPress(event) {
  if (event.key === " ") {
    event.preventDefault();
  }
}
// Handle key down function
function handleKeyDown(event) {
  if (event.keyCode === 13) {
    // Perform the search
    performSearch();
    // Show the claim section
    document.querySelector('.claim-section').style.display = 'block';
  }
}

const performSearch = (searchQuery) => {
  // TODO: Implement this function to search for and return a list of results.
  const results = [];
  return results;
};

const handleActivateClick = () => {
  window.open('https://buy.stripe.com/test_4gw28W3Yigzx4s8fYY','_blank');
     };

export const LandingPage = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <ThirdwebProvider 
      activeChain="mumbai"
      clientId="0c6fe7d69c8bb102c58713bec397fb7b"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
        phantomWallet(),
      ]}
    >
    <div className="landing-page">
      <div className="v-landing-page">
        <div className="overlap">
          <div className="overlap-group">
            <div className="left-blob">
              <div className="div">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
            </div>
            <div className="top-right-blob">
              <div className="overlap-2">
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="ellipse-7" />
                <div className="ellipse-8" />
              </div>
            </div>
            <div className="claim-section">
              <div className="its-available-bar">
                <div className="text-wrapper">Its Available!</div>
              </div>
              <div className="example-plus">
              <div className="text-wrapper-2">{userInput ? `${userInput}.v3` : ""}</div>
                <p className="element-year">
                  <span className="span">$36</span>
                  <span className="text-wrapper-3">/year</span>
                  </p>
              </div>
              <div className="activate-button" onClick={handleActivateClick}>
                  <div className="text-wrapper-5">Activate</div>
                </div>
              <div className="all-features-options">
                <div className="text-wrapper-6">Web3 Domain Features</div>
              </div>
              <div className="feature-options">
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="component">
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="https://c.animaapp.com/yAPNnYbP/img/vector.svg" />
                      </div>
                    </div>
                    <div className="free-custom-domain">Custom Wallet Address</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="component">
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="https://c.animaapp.com/yAPNnYbP/img/vector-4.svg" />
                      </div>
                    </div>
                    <div className="free-custom-domain">Identity Theft Prevention</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="component">
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="https://c.animaapp.com/yAPNnYbP/img/vector-3.svg" />
                      </div>
                    </div>
                    <div className="free-custom-domain">Personal Branding</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="component">
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="https://c.animaapp.com/yAPNnYbP/img/vector-2.svg" />
                      </div>
                    </div>
                    <div className="free-custom-domain">KYC Verified</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="div-2">
                    <div className="component">
                      <div className="vector-wrapper">
                        <img className="vector" alt="Vector" src="https://c.animaapp.com/yAPNnYbP/img/vector-1.svg" />
                      </div>
                    </div>
                    <div className="free-custom-domain">Decentralized ID</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-7">V3</div>
            <div className="ellipse-9" />
            <div className="title-text">
              <div className="text-wrapper-8">Simple, Verified, Web3</div>
              <p className="p">
                Create your decentralized ID with a .v3 domain. This is your “blue checkmark of Web3”. Reducing identity
                theft by visually displaying .v3 on your custom KYC verified wallet address
              </p>
            </div>
            <div className="type-to-search">
                <div className="overlap-3">
                <input
                  type="text"
                  placeholder="TYPE TO SEARCH"
                  className="type-to-search-2"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                    hideClaimSection();
                  }}
                  onKeyPress={handleKeyPress}
                  onKeyDown={handleKeyDown}
                  maxlength="13"
                />
                </div>
              </div>
            <div className="text-wrapper-9">Claim Your Name!</div>
            <div className="hurry">HURRY!</div>
            <ConnectWallet
                  className="connect-wallet"
                  theme={lightTheme({
                    colors: { primaryButtonBg: "#26296b" },
                  })}
                  btnTitle={"Connect Wallet"}
                  modalSize={"compact"}
                  modalTitle={"Select wallet to KYC verify"}
                  modalTitleIconUrl={
                    "https://drive.google.com/file/d/1wniZtAOf2RdVWrq3hgc9t-TSjYJBEsG4/view?usp=sharing"}
                />
            <img
              className="fractal-logo"
              alt="Fractal logo"
              src="https://c.animaapp.com/yAPNnYbP/img/fractal-logo@2x.png"
            />
            <div className="logo-title">
              <img className="logo" alt="Logo" src="https://c.animaapp.com/yAPNnYbP/img/logo@2x.png" />
              <p className="lets-make-a-verified">LETS MAKE A VERIFIED WEB3</p>
            </div>
          </div>
          <div className="bottom-right-blob">
            <div className="overlap-2">
              <div className="ellipse-5" />
              <div className="ellipse-6" />
              <div className="ellipse-10" />
              <div className="ellipse-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThirdwebProvider>
  );
}
