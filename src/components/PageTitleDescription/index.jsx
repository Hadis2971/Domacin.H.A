import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => (props.homePage ? "70px 100px" : "150px 100px")};
  width: 100%;
  position: ${(props) => (props.homePage ? "relative" : "absolute")};
  text-align: center;
`;

const H1 = styled.h1`
  color: ${(props) => props.titleColor};
`;

const P = styled.p`
  color: ${(props) => props.descriptionColor};
`;

export default ({
  homePage,
  title,
  description,
  titleColor,
  descriptionColor,
  bgColor,
}) => (
  <Wrapper
    id="page-title-description-container"
    bgColor={bgColor}
    homePage={homePage}
  >
    <H1 titleColor={titleColor}>{title}</H1>
    {description && <P descriptionColor={descriptionColor}>{description}</P>}
  </Wrapper>
);
