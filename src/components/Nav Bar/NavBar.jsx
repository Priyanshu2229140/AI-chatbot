import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("2.5 Flash");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (model) => {
    setSelectedModel(model);
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="logo">AI Bot</span>
        <div className="model-selector" onClick={toggleDropdown}>
          <span>{selectedModel} ▼</span>
          {dropdownOpen && (
            <div className="dropdown">
              <div onClick={() => handleSelect("2.5 Flash")}>2.5 Flash</div>
              <div onClick={() => handleSelect("2.5 Pro (preview)")}>
                2.5 Pro (preview)
              </div>
              <div onClick={() => handleSelect("Personalization (preview)")}>
                Personalization (preview)
              </div>
              <div className="upgrade">
                Upgrade to AI Bot Pro <button>Upgrade</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <img src={assets.user_icon} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;
