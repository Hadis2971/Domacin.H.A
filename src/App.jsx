import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Shop, Articles, NoMatch } from "./pages";
import { NavBar, SlideShoppingList } from "./components";

import StateContextProvider from "./state";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [displaySlideShoppingList, setDisplaySlideShoppingList] =
    useState(false);

  const toggleDisplaySlideShoppingList = (evt) => {
    evt.stopPropagation();
    setDisplaySlideShoppingList(
      (displaySlideShoppingList) => !displaySlideShoppingList
    );
  };

  return (
    <StateContextProvider>
      <SlideShoppingList
        displaySlideShoppingList={displaySlideShoppingList}
        setDisplaySlideShoppingList={setDisplaySlideShoppingList}
      />

      <div id="app-container">
        <NavBar
          toggleDisplaySlideShoppingList={toggleDisplaySlideShoppingList}
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </StateContextProvider>
  );
}

export default App;
