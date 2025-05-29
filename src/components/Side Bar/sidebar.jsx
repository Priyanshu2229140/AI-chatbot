import React, { useState, useContext } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

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

        <div onClick={() => newChat()} className="new-chat">
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
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <span
                    className="colored-icon"
                    style={{
                      WebkitMaskImage: `url(${assets.message_icon})`,
                      maskImage: `url(${assets.message_icon})`,
                    }}
                  ></span>
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
