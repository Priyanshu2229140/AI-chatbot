import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <span
          onClick={() => setIsOpen((prev) => !prev)}
          className="menu colored-icon"
          style={{
            WebkitMaskImage: `url(${assets.menu_icon})`,
            maskImage: `url(${assets.menu_icon})`,
          }}
        ></span>

        <div className="new-chat">
          <span
            className="colored-icon"
            style={{
              WebkitMaskImage: `url(${assets.plus_icon})`,
              maskImage: `url(${assets.plus_icon})`,
            }}
          ></span>
          {isOpen && <p>New Chat</p>}
        </div>

        {isOpen && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <span
                className="colored-icon"
                style={{
                  WebkitMaskImage: `url(${assets.message_icon})`,
                  maskImage: `url(${assets.message_icon})`,
                }}
              ></span>
              <p>What is react...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <span
            className="colored-icon"
            style={{
              WebkitMaskImage: `url(${assets.question_icon})`,
              maskImage: `url(${assets.question_icon})`,
            }}
          ></span>
          {isOpen && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <span
            className="colored-icon"
            style={{
              WebkitMaskImage: `url(${assets.history_icon})`,
              maskImage: `url(${assets.history_icon})`,
            }}
          ></span>
          {isOpen && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <span
            className="colored-icon"
            style={{
              WebkitMaskImage: `url(${assets.setting_icon})`,
              maskImage: `url(${assets.setting_icon})`,
            }}
          ></span>
          {isOpen && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
