import styled from "styled-components";
import Button from "react-bootstrap/Button";
import GridLoaderSuspense from "../GridLoaderSuspense";

import SuspenseImage from "../SuspenseImage";

import "./index.scss";

const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.column ? "400px" : "auto")};
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 20px;

  h5 {
    color: #3c4858;
  }

  p {
    color: #999999;
  }
`;

const ArticleBody = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  flex-direction: ${(props) => (props.column ? "column" : "initial")};

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const ArticleImageContainer = styled.div`
  width: ${(props) => (props.column ? "100%" : "60%")};
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

  @media (max-width: 1280px) {
    width: 100%;
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

const ArticleDescription = styled.div`
  width: ${(props) => (props.column ? "100%" : "33%")};
  margin-left: ${(props) => (props.column ? "0%" : "3%")};

  @media (max-width: 1280px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
  }
`;

const ArticleFooter = styled.div`
  position: ${(props) => (props.column ? "absolute" : "relative")};
  bottom: ${(props) => (props.column ? "5px" : "0px")};
  width: 100%;
  border-top: 1px solid #d9d9d9;
  padding: 10px;
`;

function Article({ imageSrc, title, description, column }) {
  return (
    <ArticleContainer column={column}>
      <ArticleBody column={column}>
        <ArticleImageContainer column={column}>
          <GridLoaderSuspense>
            <SuspenseImage
              src={imageSrc}
              image={<ArticleImage imageSrc={imageSrc} className="image" />}
            />
          </GridLoaderSuspense>
        </ArticleImageContainer>
        <ArticleDescription column={column}>
          <h3>{title}</h3>
          <p>{description.slice(0, 100)}...</p>
        </ArticleDescription>
      </ArticleBody>
      <ArticleFooter column={column}>
        <Button>Saznaj Vise</Button>
      </ArticleFooter>
    </ArticleContainer>
  );
}

export default Article;
