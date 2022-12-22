import React from "react";
import products from "./products";
import articles from "./articles";
import shoppingItems, {
  addShoppingItems,
  addMultipleSameShoppingItems,
} from "./shoppingItems";

export const StateContext = React.createContext();
export const state = {
  products,
  articles,
  shoppingItems,
  addShoppingItems,
  addMultipleSameShoppingItems,
};
