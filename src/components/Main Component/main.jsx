import React, { useContext, useState } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    startListening,
    listening,
  } = useContext(Context);

  const [selectedModel, setSelectedModel] = useState("2.5 Flash");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const models = [
    { name: "2.5 Flash", description: "Fast all-round help", new: true },
    {
      name: "2.5 Pro (preview)",
      description: "Reasoning, maths and code",
      new: true,
    },
    {
      name: "Personalization (preview)",
      description: "Based on your Search history",
      new: true,
    },
  ];

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    setDropdownOpen(false);
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="nav-left">
          <p className="nav-title">Gemini</p>
          <div className="model-selector">
            <button
              className="model-button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedModel} <span className="arrow">▼</span>
            </button>

            {dropdownOpen && (
              <div className="model-dropdown">
                <p className="dropdown-header">Choose your model</p>
                {models.map((model) => (
                  <div
                    key={model.name}
                    className="model-option"
                    onClick={() => handleSelectModel(model.name)}
                  >
                    <div>
                      <div className="model-name">{model.name}</div>
                      <div className="model-desc">{model.description}</div>
                    </div>
                    {model.new && <span className="new-badge">New</span>}
                  </div>
                ))}
                <div className="model-upgrade">
                  <div>
                    <div className="model-name">Upgrade to Google AI Pro</div>
                    <div className="model-desc">
                      Get our most capable models and features
                    </div>
                  </div>
                  <button className="upgrade-btn">Upgrade</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <img src={assets.user_icon} alt="user" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Welcome to {selectedModel}</span>
            </p>
            <p>How can I help you today?</p>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="typing-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      typeof resultData === "string"
                        ? resultData.replace(/\n/g, "<br/>")
                        : "",
                  }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="searchbox">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter Prompt"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img
                onClick={startListening}
                className={listening ? "mic-active" : ""}
                src={assets.mic_icon}
                alt="mic"
              />
              {input && (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send"
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Support with love and humanism by Priyanshu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
