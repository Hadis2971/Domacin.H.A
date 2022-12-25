import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { StateContext } from "../../state";

import "./index.scss";
export default ({ displaySlideShoppingList }) => {
  const {
    shoppingItems,
    getShoppingItemsList,
    increaseByOneProduct,
    decreaseByOneProduct,
    deleteProduct,
  } = useContext(StateContext);
  const listToDisplay = getShoppingItemsList(shoppingItems);

  return (
    <div
      className="slide-shopping-list"
      style={displaySlideShoppingList ? { right: "0px" } : { right: "-3000px" }}
    >
      <div id="header">
        <h4>Domacin</h4>
        <h5>Lista Proizvoda</h5>
      </div>

      <div id="list" key="my-key-2">
        {Object.keys(listToDisplay)?.map((key) => (
          <div className="items" key={key}>
            <div className="title">{listToDisplay[key][0].title}</div>
            <div className="controls">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="arrow-icon"
                onClick={() => decreaseByOneProduct(Number(key))}
              />
              <div>Kolicina: {listToDisplay[key].length}</div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="arrow-icon"
                onClick={() =>
                  increaseByOneProduct({ ...listToDisplay[key][0] })
                }
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                className="delete-icon"
                onClick={() => deleteProduct(Number(key))}
              />
            </div>
          </div>
        )) || null}
      </div>
    </div>
  );
};
