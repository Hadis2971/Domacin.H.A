import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { StateContext } from "../../state";

import "./index.scss";
export default ({ displaySlideShoppingList, setDisplaySlideShoppingList }) => {
  const {
    shoppingItems,
    getShoppingItemsList,
    increaseByOneProduct,
    decreaseByOneProduct,
    deleteProduct,
  } = useContext(StateContext);
  const listToDisplay = getShoppingItemsList(shoppingItems);

  useEffect(() => {
    const closeOnDocumentClickEvent = new Event("close-on-document-click");

    document.addEventListener(
      "close-on-document-click",
      () => {
        setDisplaySlideShoppingList(false);
      },
      false
    );

    document.addEventListener("click", (evt) => {
      document.dispatchEvent(closeOnDocumentClickEvent);
    });
  }, []);

  return (
    <div
      id="slide-shopping-list-id"
      className="slide-shopping-list"
      style={displaySlideShoppingList ? { right: "0px" } : { right: "-3000px" }}
    >
      <div id="header">
        <h4>Domacin</h4>
        <h5>Lista Proizvoda</h5>
      </div>

      <div id="list" key="my-key-2">
        {Object.keys(listToDisplay)?.length ? (
          Object.keys(listToDisplay).map((key) => (
            <div className="items" key={key}>
              <div className="title">{listToDisplay[key][0].title}</div>
              <div className="controls">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="arrow-icon"
                  onClick={(evt) => decreaseByOneProduct(evt, Number(key))}
                />
                <div>Kolicina: {listToDisplay[key].length}</div>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="arrow-icon"
                  onClick={(evt) =>
                    increaseByOneProduct(evt, { ...listToDisplay[key][0] })
                  }
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="delete-icon"
                  onClick={() => deleteProduct(Number(key))}
                />
              </div>
            </div>
          ))
        ) : (
          <h2>Korpa je prazna</h2>
        )}
      </div>
    </div>
  );
};
