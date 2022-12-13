import React from "react";
import products from "./products";
import articles from "./articles";

export const StateContext = React.createContext();

export default ({ children }) => (
  <StateContext.Provider value={{ products, articles }}>
    {children}
  </StateContext.Provider>
);
