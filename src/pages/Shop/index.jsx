import React, { useContext } from "react";

import { StateContext } from "../../state";

import {
  PageContentContainer,
  PageTitleDescription,
  Product,
} from "../../components";

import "./index.scss";

export default () => {
  const { products, addShoppingItems, addMultipleSameShoppingItems } =
    useContext(StateContext);

  return (
    <>
      <PageTitleDescription title="Shop" bgColor="#a81d84" titleColor="#FFF" />
      <PageContentContainer>
        <div id="shop-products-list">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <Product
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                skuCode={product.skuCode}
                productCategory={product.productCategory}
                productMarks={product.productMarks}
                imageSrc={product.imageSrc}
                addShoppingItems={addShoppingItems}
                addMultipleSameShoppingItems={addMultipleSameShoppingItems}
              />
            </React.Fragment>
          ))}
        </div>
      </PageContentContainer>
    </>
  );
};
