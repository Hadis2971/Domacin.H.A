import { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductDetails from "../ProductDetails";

import { addShoppingItems } from "../../state/shoppingItems";

import "./index.scss";

const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
`;

export default ({
  title,
  description,
  price,
  skuCode,
  productCategory,
  productMarks,
  imageSrc,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const closeDetails = () => setShowDetails(false);

  const addItems = useCallback(
    () =>
      addShoppingItems({
        title,
        description,
        price,
        skuCode,
        productCategory,
        productMarks,
        imageSrc,
      }),
    []
  );

  return (
    <Card style={{ width: "18rem" }}>
      <div
        className="product-image-container"
        onClick={() => setShowDetails(true)}
      >
        <ProductImage imageSrc={imageSrc} />
      </div>
      <Card.Body>
        <Card.Title>
          {title} - {`${price.toFixed(2)}KM`}
        </Card.Title>
        <Card.Text>{description.slice(0, 100)}...</Card.Text>
        <div className="product-footer">
          <Button
            variant="primary"
            className="product-btn"
            onClick={() => setShowDetails(true)}
          >
            Detalji
          </Button>

          <FontAwesomeIcon icon={faShoppingCart} onClick={addItems} />
        </div>
      </Card.Body>

      <ProductDetails
        show={showDetails}
        close={closeDetails}
        title={title}
        description={description}
        price={price}
        skuCode={skuCode}
        productCategory={productCategory}
        productMarks={productMarks}
        imgSrc="https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179"
      />
    </Card>
  );
};
