import { createContext, useEffect } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    try {
      await main(prompt);
    } catch (error) {
      console.error("Error in main:", error);
    }
  };

  useEffect(() => {
    onSent("hello gemini");
  }, []);

  const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
