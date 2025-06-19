import React, { useState, useContext, useRef, useEffect } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("below");

  const dropdownRef = useRef(null);
  const settingsRef = useRef(null); // ✅ Fix 1: define this

  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown((prev) => !prev);
  };

  // ✅ Fix 2: Auto adjust dropdown direction
  useEffect(() => {
    if (showSettingsDropdown && settingsRef.current && dropdownRef.current) {
      const settingsRect = settingsRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - settingsRect.bottom;
      const spaceAbove = settingsRect.top;

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownDirection("above");
      } else {
        setDropdownDirection("below");
      }
    }
  }, [showSettingsDropdown]);

  // ✅ Auto-close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !settingsRef.current.contains(event.target)
      ) {
        setShowSettingsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <p className="recent-title">Recents</p>
            {prevPrompt.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <span
                  className="colored-icon"
                  style={{
                    WebkitMaskImage: `url(${assets.message_icon})`,
                    maskImage: `url(${assets.message_icon})`,
                  }}
                ></span>
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
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

        <div
          className="bottom-item recent-entry settings-wrapper"
          ref={settingsRef}
        >
          <span
            className="colored-icon"
            onClick={toggleSettingsDropdown}
            style={{
              WebkitMaskImage: `url(${assets.setting_icon})`,
              maskImage: `url(${assets.setting_icon})`,
            }}
          ></span>
          {isOpen && <p onClick={toggleSettingsDropdown}>Settings</p>}

          {showSettingsDropdown && (
            <div
              className={`settings-dropdown aligned-left ${dropdownDirection}`}
              ref={dropdownRef}
            >
              <div className="dropdown-item">Activity</div>
              <div className="dropdown-item">Saved Info</div>
              <div className="dropdown-item">Apps</div>
              <div className="dropdown-item">Your public links</div>
              <div className="dropdown-item">Theme</div>
              <div className="dropdown-item">Send feedback</div>
              <div className="dropdown-item">Help</div>
              <div className="dropdown-location">West Bengal, India</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
