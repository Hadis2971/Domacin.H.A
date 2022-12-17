import styled from "styled-components";
import Button from "react-bootstrap/Button";

import "./index.scss";

const ArticleBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  flex-direction: ${(props) => (props.column ? "column" : "initial")};
`;

const ArticleImageContainer = styled.div`
  width: ${(props) => (props.column ? "100%" : "286px")};
  height: ${(props) => (props.column ? "200px" : "180px")};
  overflow: hidden;
  position: relative;
  display: inline-block;

  &:hover div {
    transform: scale(1.2);
  }

  &:focus div {
    transform: scale(1.2);
  }
`;

const ArticleImage = styled.div`
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

function Article({ imageSrc, title, description, column }) {
  return (
    <div className="article-container">
      <ArticleBody column={column}>
        <ArticleImageContainer column={column}>
          <ArticleImage imageSrc={imageSrc} className="image" />
        </ArticleImageContainer>
        <div className="mt-3">
          <h5>{title}</h5>
          <p>{description.slice(0, 100)}...</p>
        </div>
      </ArticleBody>
      <div className="article-footer">
        <Button>Saznaj Vise</Button>
      </div>
    </div>
  );
}

export default Article;
