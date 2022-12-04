import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default ({ title, description, price }) => {
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
        <Button variant="primary">Detalji</Button>
      </Card.Body>
    </Card>
  );
};
