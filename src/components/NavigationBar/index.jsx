import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { StateContext } from "../../state";

import "./index.scss";

export default ({ toggleDisplaySlideShoppingList }) => {
  const { shoppingItems } = useContext(StateContext);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            Domacin
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Pocetna
            </Link>

            <Link className="nav-link" to="/shop">
              Shop
            </Link>

            <Link className="nav-link" to="/articles">
              Clanci
            </Link>

            <Link className="nav-link" to="">
              Arhiva
            </Link>
          </Nav>

          <Nav className="shopping-cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              onClick={toggleDisplaySlideShoppingList}
            />
            {`( ${shoppingItems.length} )`}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
