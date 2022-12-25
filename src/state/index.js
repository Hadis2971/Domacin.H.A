import React, { useState, useEffect, useCallback, useMemo } from "react";
import importedProducts from "./products";
import importedArticles from "./articles";
import storedShoppingItems from "./shoppingItems";

export const StateContext = React.createContext();

export default ({ children }) => {
  const [products, setProducts] = useState(importedProducts);
  const [articles, setArticles] = useState(importedArticles);
  const [shoppingItems, setShoppingItems] = useState(storedShoppingItems);

  const addShoppingItems = useCallback(
    (item) => {
      setShoppingItems((shoppingItems) => shoppingItems.concat(item));
    },
    [setShoppingItems]
  );

  useEffect(() => {
    sessionStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
  }, [shoppingItems.length]);

  const addMultipleSameShoppingItems = (item, multiplier) => {
    for (let i = 0; i < multiplier; i++) {
      addShoppingItems(item);
    }
  };

  const getShoppingItemsList = (items) => {
    const list = {};

    items?.forEach((item) => {
      if (!list[item.id]) list[item.id] = [];

      list[item.id].push(item);
    });

    return list;
  };

  const state = useMemo(
    () => ({
      products,
      articles,
      shoppingItems,
      addShoppingItems,
      addMultipleSameShoppingItems,
      getShoppingItemsList,
    }),
    [
      products.length,
      articles.length,
      shoppingItems.length,
      addShoppingItems,
      addMultipleSameShoppingItems,
      getShoppingItemsList,
    ]
  );

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
