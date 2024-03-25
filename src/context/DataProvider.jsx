//creatcontext => function to create context object
import { createContext, useState } from "react";
import React from "react";
//when some component tries to consume the value, but their is no provider for it in the tree
export const DataContext = createContext(null);

// This line declares a new React component named DataProvider
//this component will provider data to component wrapped by this
const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
