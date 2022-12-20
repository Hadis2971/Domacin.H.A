import React from "react";
import products from "./products";
import articles from "./articles";
import shoppingItems from "./shoppingItems";

export const StateContext = React.createContext();

export default ({ children }) => (
  <StateContext.Provider value={{ products, articles, shoppingItems }}>
    {children}
  </StateContext.Provider>
);
