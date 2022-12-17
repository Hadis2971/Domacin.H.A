import { useContext } from "react";
import { StateContext } from "../../state";

import {
  PageContentContainer,
  PageTitleDescription,
  Product,
} from "../../components";

import "./index.scss";

export default () => {
  const { products } = useContext(StateContext);

  return (
    <>
      <PageTitleDescription title="Shop" bgColor="#a81d84" titleColor="#FFF" />
      <PageContentContainer>
        <div id="shop-products-list">
          {products.map((product) => (
            <Product
              title={product.title}
              description={product.description}
              price={product.price}
              skuCode={product.skuCode}
              productCategory={product.productCategory}
              productMarks={product.productMarks}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>
      </PageContentContainer>
    </>
  );
};
