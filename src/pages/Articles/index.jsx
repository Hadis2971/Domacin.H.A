import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import {
  PageContentContainer,
  PageTitleDescription,
  Article,
} from "../../components";

import "./index.scss";

export default () => {
  return (
    <>
      <PageTitleDescription
        title="Clanci"
        bgColor="#a81d84"
        titleColor="#FFF"
      />

      <PageContentContainer topPosition="-100px">
        <Container>
          <Row className="pt-10">
            <Col md={7} sm={12}>
              <Article
                imgSrc="https://t4.ftcdn.net/jpg/03/00/85/23/360_F_300852364_qSrtNxY6pokaVR7er7knpb8AyYJSxtUd.jpg"
                title="Najnovije vijseti"
                description="Najbolji izbor nameštaja za Vas!  Pre nego što se odlučite za odgovarajuću vrstu nameštaja, važno je da sagledate prostor koji imate na raspolaganju i šta želite odabirom odgovarajućeg nameštaja da postignete.  Nameštaj je ogledalo doma i bitno je da se"
              />
            </Col>
            <Col md={5} sm={12} className="articles-side">
              <div>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Pretraga..."
                    aria-label="Pretraga..."
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    style={{ backgroundColor: "#e02c69", color: "#FFF" }}
                  >
                    Pretraga
                  </Button>
                </InputGroup>
              </div>

              <div>
                <h3>Recent Post</h3>
              </div>

              <div>
                <h3>Recent Comments</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </PageContentContainer>
    </>
  );
};
