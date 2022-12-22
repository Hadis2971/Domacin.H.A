import React from "react";
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

export default ({ articles }) => {
  return (
    <>
      <PageTitleDescription
        title="Clanci"
        bgColor="#a81d84"
        titleColor="#FFF"
      />

      <PageContentContainer>
        <Container>
          <Row className="pt-10">
            <Col md={7} sm={12}>
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
