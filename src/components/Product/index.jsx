import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductDetails from "../ProductDetails";

import "./index.scss";

export default ({
  title,
  description,
  price,
  skuCode,
  productCategory,
  productMarks,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const closeDetails = () => setShowDetails(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          {`${price.toFixed(2)}KM`}
        </Card.Text>
        <Button variant="primary" onClick={() => setShowDetails(true)}>
          Detalji
        </Button>
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
