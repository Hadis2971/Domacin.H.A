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

  const addMultipleSameShoppingItems = (item, multiplier) => {
    for (let i = 0; i < multiplier; i++) {
      addShoppingItems(item);
    }
  };

  const increaseByOneProduct = useCallback(
    (evt, item) => {
      evt.stopPropagation();
      addShoppingItems(item);
    },
    [setShoppingItems]
  );

  const decreaseByOneProduct = useCallback(
    (evt, id) => {
      evt.stopPropagation();
      const idx = shoppingItems.findIndex((item) => item.id === id);
      if (idx > -1) shoppingItems.splice(idx, 1);
      else return;

      setShoppingItems([...shoppingItems]);
    },
    [shoppingItems, setShoppingItems]
  );

  const deleteProduct = useCallback(
    (id) => {
      const filteredProducts = shoppingItems.filter((item) => item.id !== id);
      setShoppingItems(filteredProducts);
    },
    [setShoppingItems]
  );

  useEffect(() => {
    sessionStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
  }, [shoppingItems.length]);

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
      increaseByOneProduct,
      decreaseByOneProduct,
      deleteProduct,
      getShoppingItemsList,
    }),
    [
      products.length,
      articles.length,
      shoppingItems.length,
      addShoppingItems,
      addMultipleSameShoppingItems,
      increaseByOneProduct,
      decreaseByOneProduct,
      deleteProduct,
      getShoppingItemsList,
    ]
  );

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};
