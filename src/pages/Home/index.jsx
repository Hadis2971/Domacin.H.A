import React, { useContext } from "react";

import { StateContext } from "../../state";

import {
  PageContentContainer,
  PageTitleDescription,
  Product,
  Article,
} from "../../components";

import "./index.scss";

export default () => {
  const { products, articles, addShoppingItems, addMultipleSameShoppingItems } =
    useContext(StateContext);

  return (
    <PageContentContainer homePage>
      <PageTitleDescription
        title="Proizvodi"
        description="U našoj ponudi možete pronaći samo 387 handmade proizvode. Podržimo male biznise kupovinom domaćeg. Kupujmo 387"
        bgColor=""
        titleColor="#3c4858"
        descriptionColor="#999999"
        homePage
      />

      <div id="products-list">
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

      <div id="home-page-articles-list">
        <PageTitleDescription
          title="Savjeti o zdravlju, domaćinstvu i recepti"
          description="Domaćinski savjeti o zdravlju, recepti, uradi sam projekti, poljoprivreda i sve za dom"
          bgColor=""
          titleColor="#3c4858"
          descriptionColor="#999999"
          homePage
        />

        <div id="home-page-articles-container">
          {articles.map((article) => (
            <React.Fragment key={article.id}>
              <Article
                imageSrc={article.imageSrc}
                title={article.title}
                description={article.description}
                column
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </PageContentContainer>
  );
};
