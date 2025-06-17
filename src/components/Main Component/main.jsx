import { useContext } from "react";
import React from "react";
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

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini 2.0</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Welcome to Gemini 2.0</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest beautiful places to visit in the upcoming road trip
                </p>
              </div>
              <div className="card">
                <p>Summarize the content briefly</p>
              </div>
              <div className="card">
                <p>Brainstorm ideas for a new project</p>
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
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
              <img src={assets.gallery_icon} alt="" />
              <img
                onClick={startListening}
                className={listening ? "mic-active" : ""}
                src={assets.mic_icon}
                alt="mic"
              />

              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
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
