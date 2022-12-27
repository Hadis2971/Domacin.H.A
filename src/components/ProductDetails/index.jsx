import { useState, useCallback, Suspense } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import SuspenseImage from "../SuspenseImage";
import GridLoaderSuspense from "../GridLoaderSuspense";

import "./index.scss";

export default ({
  show,
  id,
  title,
  description,
  price,
  imgSrc,
  skuCode,
  productCategory,
  productMarks,
  addMultipleSameShoppingItems,
  close,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  const changeNumberOfProduct = useCallback((evt) => {
    if (evt.target.value - 0 <= 0) return;

    setNumberOfProduct(evt.target.value - 0);
  }, []);

  const addItems = useCallback(
    (evt) => {
      evt.stopPropagation();
      addMultipleSameShoppingItems(
        {
          id,
          title,
          description,
          price,
          imgSrc,
          skuCode,
          productCategory,
          productMarks,
        },
        numberOfProduct
      );
    },
    [numberOfProduct]
  );

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={close}
      id="product-details-container"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{`${title} ${price.toFixed(
          2
        )}KM`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={7} sm={12}>
              <GridLoaderSuspense>
                <SuspenseImage
                  src={imgSrc}
                  image={<Image fluid src={imgSrc} />}
                />
              </GridLoaderSuspense>
            </Col>
            <Col md={5} sm={12}>
              <Form>
                <InputGroup>
                  <Form.Control
                    type="number"
                    value={numberOfProduct}
                    onChange={changeNumberOfProduct}
                  />
                  <Button onClick={addItems}>Dodaj</Button>
                </InputGroup>
              </Form>
              <div className="mt-3">
                <div>{`SKU: ${skuCode}`}</div>
                <div>{`Kategorija: ${productCategory}`}</div>
                <div>{`Oznake: ${productMarks.map((pm, idx) => (
                  <span key={idx}>{`${pm}, `}</span>
                ))}`}</div>
              </div>
            </Col>
          </Row>

          <Row>
            {showDescription ? (
              <Col sm={12}>
                <p>{description}</p>
              </Col>
            ) : (
              <Col sm={12} className="mt-3">
                <h4>{`Budi prvi koji ce recenzirati ${title}`}</h4>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="recension-title">Naziv*</Form.Label>
                    <Form.Control
                      type="text"
                      id="recension-title"
                      placeholder=""
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="recension-email">Email*</Form.Label>
                    <Form.Control
                      type="text"
                      id="recension-email"
                      placeholder=""
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="recension-text">
                    <Form.Label>Recenzija*</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button type="submit">Posalji</Button>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
