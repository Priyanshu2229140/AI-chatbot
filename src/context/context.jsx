import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      const response = await main(input);
      setResultData(response);
      setLoading(false);
      setInput("");
    } catch (error) {
      console.error("Error in main:", error);
    }
  };

  // useEffect(() => {
  //   onSent("");
  // }, []);

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    // newchat
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
