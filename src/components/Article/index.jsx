import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "./index.scss";

const ArticleBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  flex-direction: ${(props) => (props.column ? "column" : "initial")};
`;

function Article({ imgSrc, title, description, column }) {
  return (
    <div className="article-container">
      <ArticleBody column={column}>
        <div className="image-container">
          <Image src={imgSrc} fluidrounded className="image" />
        </div>
        <div className="mt-3">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </ArticleBody>
      <div className="article-footer">
        <Button>Saznaj Vise</Button>
      </div>
    </div>
  );
}

export default Article;
