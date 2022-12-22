import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import importedProducts from "./state/products";
import importedArticles from "./state/articles";

import { Home, Shop, Articles, NoMatch } from "./pages";
import { NavBar, SlideShoppingList } from "./components";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const StateContext = React.createContext({});

  const storedShoppingItems =
    JSON.parse(sessionStorage.getItem("shoppingItems")) || [];

  const [products, setProducts] = useState(importedProducts);
  const [articles, setArticles] = useState(importedArticles);
  const [shoppingItems, setShoppingItems] = useState(storedShoppingItems);

  const addShoppingItems = (item) => {
    setShoppingItems((shoppingItems) => shoppingItems.concat(item));
  };

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

  const [displaySlideShoppingList, setDisplaySlideShoppingList] =
    useState(false);

  const toggleDisplaySlideShoppingList = () =>
    setDisplaySlideShoppingList(
      (displaySlideShoppingList) => !displaySlideShoppingList
    );

  const state = {
    products,
    articles,
    shoppingItems,
    addShoppingItems,
    addMultipleSameShoppingItems,
    getShoppingItemsList,
  };

  return (
    <>
      <SlideShoppingList
        displaySlideShoppingList={displaySlideShoppingList}
        shoppingItems={state.shoppingItems}
        getShoppingItemsList={state.getShoppingItemsList}
      />

      <StateContext.Provider value={state}>
        <div id="app-container">
          <NavBar
            toggleDisplaySlideShoppingList={toggleDisplaySlideShoppingList}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <StateContext.Consumer>
                  {({
                    products,
                    articles,
                    addShoppingItems,
                    addMultipleSameShoppingItems,
                  }) => (
                    <Home
                      products={products}
                      articles={articles}
                      addShoppingItems={addShoppingItems}
                      addMultipleSameShoppingItems={
                        addMultipleSameShoppingItems
                      }
                    />
                  )}
                </StateContext.Consumer>
              }
            />
            <Route
              exact
              path="/shop"
              element={
                <StateContext.Consumer>
                  {({
                    products,
                    addShoppingItems,
                    addMultipleSameShoppingItems,
                  }) => (
                    <Shop
                      products={products}
                      addShoppingItems={addShoppingItems}
                      addMultipleSameShoppingItems={
                        addMultipleSameShoppingItems
                      }
                    />
                  )}
                </StateContext.Consumer>
              }
            />
            <Route
              exact
              path="/articles"
              element={
                <StateContext.Consumer>
                  {({ articles }) => <Articles articles={articles} />}
                </StateContext.Consumer>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </StateContext.Provider>
    </>
  );
}

export default App;
